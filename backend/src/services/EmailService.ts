interface IMailto {
    name: string;
    email: String;
}
interface IMailMessage {
    subject: string;
    body: String;
    attachement?: String[];
}
interface MessageDTO{
    to: IMailto;
    message: IMailMessage;
}

class EmailService {
    sendMail({ to, message}: MessageDTO) {
        console.log(`Email enviado ${to.name} : ${message.subject}`);
    }
}

export default EmailService;