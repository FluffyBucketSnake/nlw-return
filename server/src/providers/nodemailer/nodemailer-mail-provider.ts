import nodemailer from "nodemailer";
import { IMailProvider, SendMailRequest } from "../mail-provider";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "087b66e1fa83c0",
    pass: "ac26cd5c99430a",
  },
});

export class NodemailerMailProvider implements IMailProvider {
  async sendMail(request: SendMailRequest): Promise<void> {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Bruno Henrique Glowaski Morais <bruno.glowaski@outlook.com>",
      subject: request.subject,
      html: request.body,
    });
  }
}
