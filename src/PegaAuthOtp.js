
import { mainconfig } from './global';

const axios = require('axios').default;

const settings = mainconfig.settings;

const baseUrl = settings.pega_auth_2fa.url;

const setAuth = function setAuth(username, password) {
  let auth = '';
  if (username && password) {
    auth = btoa(`${username}:${password}`);
  } else {
    throw new Error('Set authentication failed.');
  }
  // console.log(`Pega Auth: ${auth}`);
  return auth;
};

const callOtpStatus = async function callOtpStatus(referenceid, otp, auth) {
  const headers = {
    Authorization: `Basic ${auth}`,
  };
  const url = `${baseUrl}/prweb/PRRestService/api/v1/authenticate/OTP/verify?OTPValue=${otp}&ReferenceID=${referenceid}`;
  let status = false;
  const result = {};
  await axios({
    method: 'get',
    url,
    headers,
  })
    .then((response) => {
      if (response.status === 200 && response.data.Status !== 'FAIL') {
        console.log('OTP Authentication Successful.');
        console.log(`Response: ${JSON.stringify(response.data)}`);
        status = true;
        result.status = status;
      } else {
        console.log(`OTP validation failed. ${JSON.stringify(response.data)}`);
        status = false;
        result.status = status;
      }
      console.log(`OTP validation status: ${result.status}`);
      return result.status;
    })
    .catch((error) => {
      console.log(`OTP validation failed. ${error}`);
      status = false;
      result.status = status;
      console.log(`OTP validation status: ${result.status}`);
      return result.status;
    });
  // console.log(`OTP validation status: ${result.status}`);
  return result.status;
};

const validateOTP = async function validateOTP(referenceid, otp, auth) {
  let isOtpSuccess = false;
  if (otp === 'skip') {
    console.log('Skipping OTP Auth.');
    isOtpSuccess = true;
  } else if (referenceid !== '') {
    isOtpSuccess = await callOtpStatus(referenceid, otp, auth);
  } else {
    throw new Error('Unable to process request. Empty referenced id.');
  }
  return isOtpSuccess;
};

const requestOTP = async function requestOTP(auth, sendTo = '') {
  const result = {
    ReferenceID: '',
    isSuccess: false,
  };
  const context = Math.floor(Date.now() / 100);
  const headers = {
    Authorization: `Basic ${auth}`,
  };
  const sendMode = settings.pega_auth_2fa.send_mode;
  const url = `${baseUrl}/prweb/PRRestService/api/v1/authenticate/OTP/${sendMode}`;
  const data = {
    Context: `UplusWSSOtp-${context}`,
    EmailSettings: {
      CorrespondenceName: 'pyDefaultOTPCorr',
      EmailAccount: 'Default',
      Subject: 'New OTP Request',
      ToAddress: sendTo,
      ValidateMaxAge: 'false',
    },
  };
  if (sendMode === 'email') {
    data.EmailSettings = settings.pega_auth_2fa.email_settings;
  } else if (sendMode === 'sms') {
    data.SMSSettings = settings.pega_auth_2fa.sms_settings;
  }
  if (sendTo !== '' && sendMode === 'email') {
    data.EmailSettings.ToAddress = sendTo;
  } else if (sendTo !== '' && sendMode === 'sms') {
    data.SMSSettings.ToPhoneNumber = sendTo;
  }
  await axios({
    method: 'post',
    url,
    headers,
    data,
  })
    .then((response) => {
      if (response.status === 200) {
        console.log('OTP request sent. ');
        result.ReferenceID = response.data.ReferenceID;
        result.isSuccess = true;
      }
      console.log(`OTP Results: ${JSON.stringify(result)}`);
      return result;
    })
    .catch((error) => {
      console.log(`Error occured when sending OTP request. ${error}`);
    });
  return result;
};

export {
  setAuth,
  validateOTP,
  requestOTP,
};
