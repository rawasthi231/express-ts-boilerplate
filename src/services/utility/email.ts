type EmailTemplate = "signup" | "forgot-password" | "otp-verification";

export default class Email {
  static send(email: string | string[], template: EmailTemplate) {
    console.log("Sending email to", email);
  }
}
