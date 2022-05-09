import { IMailProvider } from "../providers/mail-provider";
import { IFeedbacksRepository } from "../repositories/feedbacks-repository";

export type SubmitRequestRequest = {
  type: string;
  comment: string;
  screenshot?: string;
};

export class SubmitFeedbackService {
  constructor(
    private feedbacksRepository: IFeedbacksRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(request: SubmitRequestRequest) {
    const { type, comment, screenshot } = request;

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new TypeError("Invalid image format");
    }

    await this.feedbacksRepository.create({ type, comment, screenshot });

    await this.mailProvider.sendMail({
      subject: "Novo feedback",
      body: [
        `<div styles="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo de feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src=${screenshot} />` : null,
        `</div>`,
      ].join("\n"),
    });
  }
}
