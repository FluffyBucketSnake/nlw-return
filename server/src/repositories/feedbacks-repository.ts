export type CreateFeedbackRequest = {
  type: string;
  comment: string;
  screenshot?: string;
};

export interface IFeedbacksRepository {
  create(request: CreateFeedbackRequest): Promise<void>;
}
