import { prisma } from "../../prisma";
import {
  CreateFeedbackRequest,
  IFeedbacksRepository,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  async create({ type, comment, screenshot }: CreateFeedbackRequest) {
    await prisma.feedback.create({ data: { type, comment, screenshot } });
  }
}
