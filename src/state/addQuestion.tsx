import { createContext, useReducer } from "react";

const reducer = (state: QuizState, action: QuizAction) => {
  let newState: QuizState;
  let index: number;
  let name: string;
  let value: any;
  let optionIndex: number;

  switch (action.type) {
    case quizActions.ADD_FIELD:
      newState = [
        ...state,
        {
          question: "",
          options: ["", "", "", ""],
        },
      ];
      break;

    case quizActions.DELETE_FIELD:
      index = action.questionPayload.index!;
      state.splice(index, 1);

      newState = [...state];
      break;

    case quizActions.CHANGE_QUESTION_INPUT:
      index = action.questionPayload.index!;
      name = action.questionPayload.name!;
      value = action.questionPayload.value!;

      state[index] = {
        ...state[index],
        [name]: value,
      };

      newState = [...state];
      break;

    case quizActions.CHANGE_OPTION_INPUT:
      index = action.optionPayload.index!;
      optionIndex = action.optionPayload.optionIndex!;
      value = action.optionPayload.value!;

      state[index].options[optionIndex] = value;

      newState = [...state];
      break;

    default:
      newState = [...state];
      break;
  }
  return newState;
};

export const QuizContext = createContext<any>(undefined);

export const QuizProvider: React.FC<QuizProvider> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { quizState: state, quizDispatch: dispatch };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};

export const quizActions = {
  ADD_FIELD: "ADD_FIELD",
  DELETE_FIELD: "DELETE_FIELD",
  CHANGE_QUESTION_INPUT: "CHANGE_QUESTION_INPUT",
  CHANGE_OPTION_INPUT: "CHANGE_OPTION_INPUT",
};
