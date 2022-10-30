import { createContext, useReducer } from "react";

const reducer = (state: AddQuestionState, action: AddQuestionAction) => {
  let newState: AddQuestionState;
  let index: number;
  let name: string;
  let value: any;

  switch (action.type) {
    case addQuestionActions.ADD_FIELD:
      newState = [
        ...state,
        {
          question: "",
          options: ["", "", "", ""],
        },
      ];
      break;

    case addQuestionActions.DELETE_FIELD:
      index = action.payload.index!;
      state.splice(index, 1);

      newState = [...state];
      break;

    case addQuestionActions.CHANGE_INPUT:
      index = action.payload.index!;
      name = action.payload.name!;
      value = action.payload.value!;

      state[index] = {
        ...state[index],
        [name]: value,
      };

      newState = [...state];
      break;

    default:
      newState = [...state];
      break;
  }
  return newState;
};

export const AddQuestionContext = createContext<any>(undefined);

export const AddQuestionProvider: React.FC<AddQuestionProvider> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { addQuestionState: state, addQuestionDispatch: dispatch };

  return (
    <AddQuestionContext.Provider value={value}>{children}</AddQuestionContext.Provider>
  );
};

export const addQuestionActions = {
  ADD_FIELD: "ADD_FIELD",
  DELETE_FIELD: "DELETE_FIELD",
  CHANGE_INPUT: "CHANGE_INPUT",
};
