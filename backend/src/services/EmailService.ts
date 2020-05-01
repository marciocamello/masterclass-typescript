interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEMailService {
  sendMail(request: IMessageDTO): void;
}

class EmailService implements IEMailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
