type AnswerState = string[];

interface AnswerAction {
  type: any;
  payload: string;
}

interface AnswerProvider {
  children: React.ReactNode;
  initialState: AnswerState;
}
