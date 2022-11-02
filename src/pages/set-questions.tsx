import React, { ChangeEvent, useCallback, useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import QuestionBox from "../components/QuestionBox";
import styled from "styled-components";
import { QuizContext, quizActions } from "../state/addQuestion";
import { AnswerContext, answerActions } from "../state/answer";

const SBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.25rem 0 6rem;
`;

const SQuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 29rem;
  box-shadow: 0px 6px 20px 2px rgba(0, 0, 0, 0.15);
  border-radius: 1em;
`;

const STextArea = styled.textarea`
  border: 2px solid #606060;
  border-radius: 10px;
  font-size: 16px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: transparent;
  resize: none;
  outline: none;
  color: #5e5e5e;
  flex: 1;
`;

const STextInput = styled.input`
  border: 2px solid #606060;
  border-radius: 10px;
  font-size: 16px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: transparent;
  resize: none;
  outline: none;
  color: #5e5e5e;
  flex: 1;
`;

const SCorrectInput = styled(STextInput)`
  border: 2px solid #05ff00;
`;

const SDudTextArea = styled(STextInput)`
  border: 2px solid #fa2e2e;
`;

const SImg = styled.div`
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  margin: 1.8rem 3rem 0 0;
  background: #f5f5f5;
  color: #424242;
  border-radius: 50%;
`;

const STitle = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin-bottom: 8px;
  color: #5e5e5e;
`;

const SSingleQuestionBox = styled.div`
  display: flex;
  margin-bottom: 4rem;
`;

const setQuestions = () => {
  const { quizState, quizDispatch } = useContext(QuizContext) as {
    quizState: QuizState;
    quizDispatch: any;
  };

  const { answerState, answerDispatch } = useContext(AnswerContext) as {
    answerState: AnswerState;
    answerDispatch: any;
  };

  const handleAddAnswer = useCallback((answer: number) => {
    answerDispatch({
      type: answerActions,
      answerPayload: {
        value: answer,
      } as AnswerPayload,
    });
  }, []);

  const handleAddQuiz = useCallback(() => {
    quizDispatch({
      type: quizActions.ADD_FIELD,
    });
  }, []);

  const generateRandomNumber = () => {
    const answer = Math.floor(Math.random() * 4);
    alert(answer)
    handleAddAnswer(answer);
  };

  useEffect(() => {
    handleAddQuiz();
    generateRandomNumber();
    // alert(answerState)
  }, []);

  const handleQuestionInputChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>, i: number) => {
      quizDispatch({
        type: quizActions.CHANGE_QUESTION_INPUT,
        questionPayload: {
          index: i,
          name: e.target.name,
          value: e.target.value,
        } as QuestionPayload,
      });
    },
    []
  );

  const handleOptionInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, i: number, ii: number) => {
      quizDispatch({
        type: quizActions.CHANGE_OPTION_INPUT,
        optionPayload: {
          index: i,
          optionIndex: ii,
          value: e.target.value,
        } as OptionsPayload,
      });
    },
    []
  );

  const addQuestion = () => {
    handleAddQuiz();
    generateRandomNumber();
  };

  const answerDudState = ["a", "c", "d", "d"]

  return (
    <SBox>
      {quizState.map((quiz, i) => {
        return (
          <SSingleQuestionBox>
            <SImg>{i + 1}</SImg>

            <SQuestionBox>
              <STitle>Question</STitle>
              <STextArea
                id="description"
                rows={4}
                value={quiz.question}
                onChange={(e) => handleQuestionInputChange(e, i)}
                name="question"
              />
              <STitle>Options</STitle>
              {quiz.options.map((option, ii) => {
                let answerIndex;

                switch (answerDudState[i]) {
                  case "a":
                    answerIndex = 0;
                    break;

                  case "b":
                    answerIndex = 1;
                    break;

                  case "c":
                    answerIndex = 2;
                    break;

                  case "d":
                    answerIndex = 3;
                    break;

                  default:
                    answerIndex = 0;
                    break;
                }

                const isAnswerInput = ii == answerIndex;

                return isAnswerInput ? (
                  <SCorrectInput
                    placeholder={"Input Correct Answer"}
                    value={option}
                    onChange={(e) => handleOptionInputChange(e, i, ii)}
                  />
                ) : (
                  <SDudTextArea
                    placeholder={"Input Incorrect Answer"}
                    value={option}
                    onChange={(e) => handleOptionInputChange(e, i, ii)}
                  />
                );
              })}
            </SQuestionBox>
          </SSingleQuestionBox>
        );
      })}

      <NavBar
        leftButtonText={"Add Question"}
        rightButtonText={"See Preview"}
        leftButtonFunc={addQuestion}
        rightButtonFunc={undefined}
        leftImgSource="add.svg"
        rightImgSource="preview.svg"
      />
    </SBox>
  );
};

export default setQuestions;
