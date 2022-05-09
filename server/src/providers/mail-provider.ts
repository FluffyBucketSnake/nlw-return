export type SendMailRequest = {
  subject: string;
  body: string;
};

export interface IMailProvider {
  sendMail(request: SendMailRequest): Promise<void>;
}
