export interface IUserQuestion {
  id: string;
  message: string;
  createdAt: Date;
  updatedAt: Date | null;
}

export interface IAIAnswers {
  id: string;
  message: string;
  createdAt: Date;
  updatedAt: Date | null;
}

export interface IChatData {
  userQuestions: IUserQuestion[];
  AIAnswers: IAIAnswers[];
}