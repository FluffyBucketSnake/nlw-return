import cors from "cors";
import express from "express";
import { NodemailerMailProvider } from "./providers/nodemailer/nodemailer-mail-provider";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackService } from "./services/submit-feedback-service";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedbacksRepository = new PrismaFeedbacksRepository();
  const mailProvider = new NodemailerMailProvider();
  const submitFeedbackService = new SubmitFeedbackService(
    feedbacksRepository,
    mailProvider
  );

  await submitFeedbackService.execute({ type, comment, screenshot });

  return res.status(201).json({});
});

app.listen(3333, () => {
  console.log("HTTP server running!");
});
