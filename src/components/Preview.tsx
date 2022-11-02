import React, { useContext } from "react";
import QuestionBox2 from "./QuestionBox2";
import { QuizContext, quizActions } from "../state/addQuestion";
import { AnswerContext, answerActions } from "../state/answer";
import NavBar from "./NavBar";
import styled from "styled-components";
import Router from "next/router";

interface IPreviewProps {
  setHidePreview: React.Dispatch<React.SetStateAction<boolean>>;
  state: boolean;
}

const SBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.25rem 0 6rem;
`;

const Preview: React.FC<IPreviewProps> = ({ setHidePreview, state }) => {
  const { quizState, quizDispatch } = useContext(QuizContext) as {
    quizState: QuizState;
    quizDispatch: any;
  };

  const { answerState, answerDispatch } = useContext(AnswerContext) as {
    answerState: AnswerState;
    answerDispatch: any;
  };

  const backButton = () => {
    setHidePreview(true);
  };

  const verify = () => {
    Router.push("./verify");
  };

  return (
    <SBox>
      <>
        {quizState.map((quiz, i) => {
          return (
            <QuestionBox2
              question={quiz.question}
              options={quiz.options}
              answer={answerState[i]}
            ></QuestionBox2>
          );
        })}
      </>

      <NavBar
        leftButtonText={"Back"}
        rightButtonText={"Next"}
        leftButtonFunc={backButton}
        rightButtonFunc={verify}
      />
    </SBox>
  );
};

export default Preview;
