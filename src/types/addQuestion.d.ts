type AddQuestionState = AddQuestionObject[];

interface AddQuestionObject {
  question: string;
  options: string[];
}

interface AddQuestionAction {
  type: any;
  payload: AddQuestionPayload;
}

interface AddQuestionPayload {
  index?: number;
  name?: "question" | "option";
  value?: string;
}

interface AddQuestionProvider {
  children: React.ReactNode;
  initialState: AddQuestionState;
}
