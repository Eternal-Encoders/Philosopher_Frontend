export interface IUserQuestion {
  id: string | number;
  message: string;
  createdAt: Date;
  updatedAt: Date | null;
  type: 'user';
}

export interface IAIAnswers {
  id: string | number;
  message: string;
  createdAt: Date;
  updatedAt: Date | null;
  type: 'ai';
}

export interface IChatData {
  userQuestions: IUserQuestion[];
  AIAnswers: IAIAnswers[];
}