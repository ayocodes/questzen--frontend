import { createContext, useReducer } from "react";

const reducer = (state: AnswerState, action: AnswerAction) => {
  let newState: AnswerState;
  let value: string;

  switch (action.type) {
    case answerActions.ADD_ANSWER:
      value = action.payload;

      state.push(value);
      newState = [...state];
      break;

    default:
      newState = [...state];
      break;
  }
  return newState;
};

export const AnswerContext = createContext<any>(undefined);

export const AnswerProvider: React.FC<AnswerProvider> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { answerState: state, answerDispatch: dispatch };

  return (
    <AnswerContext.Provider value={value}>{children}</AnswerContext.Provider>
  );
};

export const answerActions = {
  ADD_ANSWER: "ADD_ANSWER",
};
