type AnswerState = number[];

interface AnswerAction {
  type: any;
  payload: AnswerPayload;
}

interface AnswerPayload {
  value?: number;
}

interface AnswerProvider {
  children: React.ReactNode;
  initialState: AnswerState;
}
