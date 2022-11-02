type QuizState = QuizObject[];


interface QuizObject {
  question: string;
  options: string[];
}

interface QuizAction {
  type: any;
  questionPayload?: QuestionPayload;
  optionPayload?: OptionsPayload;
}

interface QuestionPayload {
  index?: number;
  name?: string;
  value?: string;
}

interface OptionsPayload {
  index: number;
  optionIndex: number;
  value: string;
}

interface QuizProvider {
  children: React.ReactNode;
  initialState: QuizState;
}
