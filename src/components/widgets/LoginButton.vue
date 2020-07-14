<template>
  <div class="login">
    <button v-on:click="showLoginOverlay" class="launch-login">{{ $t('message.login')}}</button>
    <div
      v-clickoutside="{ handler: 'onClickOutLoginOverlay'}"
      class="overlay flex flex-col"
      :class="[isActive ? 'show' : 'hidden']"
    >
      <div class="field flex flex-col username">
        <input id="username" type="username" v-model="username" />
        <label for="username">{{$t('message.username')}}</label>
      </div>
      <div class="field flex flex-col password">
        <input id="password" type="password" v-model="password" />
        <label for="password">{{$t('message.password')}}</label>
      </div>
      <div class="field flex flex-col otp" :class="[isOTP ? 'show' : 'hidden']">
        <label for="otp">{{$t('message.otp')}}</label>
        <input id="otp" type="text" name="otp" v-model="otp">
        <input id="otpRefId" type="hidden" name="otpReferenceId" v-model="otpRefId">
      </div>
      <div class="field error flex flex-col invalid" v-if="isOTPInvalid">
        <span class="error">{{$t('message.invalidOTP')}}</span>
      </div>
      <div class="field error flex flex-col generic" v-if="OTPRequestFailed">
        <span class="error">{{$t('message.requestOTPFailed')}}</span>
      </div>
      <button v-if="otp_enabled" v-on:click="signInOtp" class="sign-in">{{$t('message.signin')}}</button>
      <button v-else v-on:click="signIn" class="sign-in">{{$t('message.signin')}}</button>
      <span class="error" v-if="hasErrorMsg">{{$t('message.invalidLogin')}}</span>
    </div>
  </div>
</template>

<script>
import { mainconfig, updatePegaChat } from '../../global';
import getUserSettings from '../../UserSettings';
import {
  setAuth, validateOTP, requestOTP,
} from '../../PegaAuthOtp';

export default {
  data() {
    return Object.assign({}, mainconfig, {
      isActive: false,
      hasErrorMsg: false,
      otp_enabled: mainconfig.settings.pega_auth_2fa.otp_auth_enabled,
      isOTPInvalid: false,
      OTPRequestFailed: false,
      isOTP: false,
      otp: '',
      otpRefId: '',
      username: '',
      password: '',
      sendTo: '',
    });
  },
  methods: {
    showLoginOverlay() {
      this.isActive = !this.isActive;
      /* Find if a default user is defined */
      for (const i in this.settings.users) {
        if (this.settings.users[i].load_by_default) {
          this.username = this.settings.users[i].username;
          this.password = this.settings.users[i].password;
          break;
        }
      }
    },
    onClickOutLoginOverlay(event) {
      if (
        !event.target.classList.contains('launch-login') &&
        !event.target.classList.contains('launch-login-overlay')
      ) {
        this.isActive = false;
      }
    },
    signIn() {
      /* Validate the password */
      let isLoginSuccess = false;
      mainconfig.userId = -1;
      for (const i in this.settings.users) {
        if (
          this.settings.users[i].username === this.username &&
          this.settings.users[i].password === this.password
        ) {
          isLoginSuccess = true;
          mainconfig.userId = i;
          updatePegaChat(this.settings.users[i]);
          break;
        }
      }
      mainconfig.isAuthenticated = isLoginSuccess;
      if (window.history) {
        if (mainconfig.isMobilePhone) {
          window.history.pushState(
            { userId: mainconfig.userId },
            '',
            mainconfig.phonePageName === ''
              ? 'index.html'
              : mainconfig.phonePageName,
          );
        } else {
          window.history.pushState(
            { userId: mainconfig.userId },
            '',
            'account',
          );
        }
      }
      if (!isLoginSuccess) {
        this.hasErrorMsg = true;
      } else {
        this.isActive = false;
      }
    },
    async signInOtp() {
      /* Populate user settings */
      const UserSettings = await getUserSettings(this.username, this.password);

      /* Validate the password and OTP */
      const auth = setAuth(this.username, this.password);
      const AuthStatus = {
        isLoginSuccess: false,
        isOtpAuthSuccess: false,
      };
      mainconfig.userId = -1;
      console.log(`2FA Auth enabled: ${this.otp_enabled}`);
      if (this.otp === '') {
        if (UserSettings.results.username === this.username) {
          this.sendTo = UserSettings.results.otp_send_to;
        }
        await requestOTP(auth, this.sendTo).then((result) => {
          if (result.isSuccess) {
            this.isOTP = true;
            this.otpRefId = result.ReferenceID;
            this.OTPRequestFailed = false;
          } else {
            this.OTPRequestFailed = true;
          }
        });
      } else {
        const otpReferenceId = document.getElementsByName('otpReferenceId')[0].value;
        if (otpReferenceId !== this.otpRefId) {
          throw new Error('Unable to process request. Incorrect or malformed referenced id.');
        } else {
          console.log(`Validating OTP: ${this.otp} with reference id: ${this.otpRefId}`);
          await validateOTP(this.otpRefId, this.otp, auth).then((result) => {
            console.log(`OTP Auth validation status: ${result}`);
            AuthStatus.isOtpAuthSuccess = result;
            if (
              UserSettings.results.username === this.username &&
              UserSettings.results.password === this.password &&
              AuthStatus.isOtpAuthSuccess === true
            ) {
              AuthStatus.isLoginSuccess = true;
              mainconfig.userId = 0;
              mainconfig.settings.users[0] = UserSettings.results;
              updatePegaChat(UserSettings.results);
            }
            return AuthStatus;
          });
        }
        console.log(`Is Login Success: ${AuthStatus.isLoginSuccess}`);
        mainconfig.isAuthenticated = AuthStatus.isLoginSuccess;
        if (window.history) {
          if (mainconfig.isMobilePhone) {
            window.history.pushState(
              { userId: mainconfig.userId },
              '',
              mainconfig.phonePageName === ''
                ? 'index.html'
                : mainconfig.phonePageName,
            );
          } else {
            window.history.pushState(
              { userId: mainconfig.userId },
              '',
              'account',
            );
          }
        }
        if (!AuthStatus.isOtpAuthSuccess) {
          this.isOTPInvalid = true;
        } else if (!AuthStatus.isLoginSuccess) {
          this.hasErrorMsg = true;
        } else {
          this.isActive = false;
        }
      }
    },
  },
};
</script>
