import Email from "../services/utility/email";

import { EVENT_TYPES, eventEmitter } from "../helpers/events";

eventEmitter.on(EVENT_TYPES.USER_SIGNUP, (data) => {
  Email.send(data.email!, "signup");
});

eventEmitter.on(EVENT_TYPES.USER_FORGOT_PASSWORD, (data) => {
  Email.send(data.email!, "forgot-password");
});

eventEmitter.on(EVENT_TYPES.USER_OTP_VERIFICATION, (data) => {
  Email.send(data.email!, "otp-verification");
});
