interface IMailTo {}

interface IMailMessage {}

class EmailService {
  sendMail(to, message) {
    console.log("Email enviado");
  }
}

export default EmailService;
