
import { mainconfig } from './global';
import { setAuth } from './PegaAuthOtp';

const axios = require('axios').default;

const settings = mainconfig.settings;

const baseUrl = settings.baseUrl;

const getUserSettings = async function getUserSettings(userid, pass) {
  const auth = setAuth(userid, pass);
  const headers = {
    Authorization: `Basic ${auth}`,
  };
  const url = `${baseUrl}/prweb/PRRestService/api/v1/data/D_DataWSSInfo?username=${userid}&password=${pass}`;
  const result = {
    IsSuccess: false,
    results: {},
  };
  let status = false;
  await axios({
    method: 'get',
    url,
    headers,
  })
    .then((response) => {
      if (response.status === 200) {
        console.log('Loaded user settings.');
        console.log(`Response: ${JSON.stringify(response.data)}`);
        status = true;
        result.IsSuccess = status;
        result.results = response.data;
        result.results.customerID = response.data.CustomerID;
      } else {
        console.log(`Failed to load user settings. ${JSON.stringify(response.data)}`);
        status = false;
        result.IsSuccess = status;
      }
      console.log(`User settings status: ${result.IsSuccess}`);
      return result;
    })
    .catch((error) => {
      console.log(`Failed to load user settings. ${error}`);
      status = false;
      result.IsSuccess = status;
      console.log(`User validation status: ${result.IsSuccess}`);
      return result;
    });
  return result;
};

export default getUserSettings;
