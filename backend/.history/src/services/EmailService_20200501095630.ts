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
  sendMail(to: IMailTo, message: IMailMessage) {
    console.log(`Email enviado ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
