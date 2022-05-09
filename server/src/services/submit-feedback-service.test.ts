import { SubmitFeedbackService } from "./submit-feedback-service";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe("Submit feedback", () => {
  it("should store the feedback", async () => {
    const submitFeedbackService = new SubmitFeedbackService(
      { create: createFeedbackSpy },
      { sendMail: sendMailSpy }
    );

    await expect(
      submitFeedbackService.execute({
        type: "BUG",
        comment: "Burg",
        screenshot: "data:image/png;base64",
      })
    ).resolves.not.toThrow();
    expect(createFeedbackSpy).toBeCalled();
    expect(sendMailSpy).toBeCalled();
  });

  it("should store the feedback", async () => {
    const submitFeedbackService = new SubmitFeedbackService(
      { create: createFeedbackSpy },
      { sendMail: sendMailSpy }
    );

    await expect(
      submitFeedbackService.execute({
        type: "BUG",
        comment: "Burg",
        screenshot: "<some data>",
      })
    ).rejects.toThrow();
  });
});
