interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

class EmailService {
  sendMail(to: IMailTo, message) {
    console.log("Email enviado");
  }
}

export default EmailService;
