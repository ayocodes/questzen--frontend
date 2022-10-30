import React from "react";
import NavBar from "../components/NavBar";
import QuestionBox from "../components/QuestionBox";
import styled from "styled-components";

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
  return (
    <SBox>
      <SSingleQuestionBox>
        <SImg>1</SImg>
        <SQuestionBox>
          <STitle>Question</STitle>
          <STextArea id="description" rows={4} />
          <STitle>Options</STitle>
          <SCorrectInput placeholder={"Correct Answer"} />
          <SDudTextArea placeholder={"Incorrect Answer"} />
        </SQuestionBox>
      </SSingleQuestionBox>

      <NavBar
        leftButtonText={"Add Question"}
        rightButtonText={"See Preview"}
        leftButtonFunc={undefined}
        rightButtonFunc={undefined}
        leftImgSource="add.svg"
        rightImgSource="preview.svg"
      />
    </SBox>
  );
};

export default setQuestions;
