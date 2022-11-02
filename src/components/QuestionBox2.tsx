import React, { useState } from "react";
import styled from "styled-components";

interface IQuestionProps {
  question: String;
  options: string[];
  answer: string;
}

interface ISelected {
  selectA?: boolean;
  selectB?: boolean;
  selectC?: boolean;
  selectD?: boolean;
}

const SBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  background: linear-gradient(#fff, #fff),
    linear-gradient(141.29deg, #fca3a3 -6.98%, #dfa3fc 111.45%);
  background-origin: padding-box, border-box;
  background-repeat: no-repeat;
  border: 2px solid transparent;
  border-radius: 0.5em;
  margin-bottom: 1.5rem;
`;

const SQuestion = styled.p`
  margin: 1rem 0 3rem;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: #424242;
`;

const SAnswerBox = styled.div<ISelected>`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  width: 22rem;
  height: 3.5rem;
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-bottom: 1rem;
  ${({ selectA, selectB, selectC, selectD }) =>
    (selectA || selectB || selectC || selectD) &&
    `background-color: #81C0FF;
 border-radius: 10px;`};
`;
const SQuestionBox = styled.div`
  width: 20rem;
  display: flex;
  align-items: center;
`;

const SAnswer = styled.p<ISelected>`
  font-size: 1.25rem;
  line-height: 1.25rem;
  color: #424242;
  ${({ selectA, selectB, selectC, selectD }) =>
    (selectA || selectB || selectC || selectD) && `color: #ffffff;`};
`;

const SImg = styled.div<ISelected>`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  margin-right: 10px;
  background: #c1cfed;
  color: #447fde;
  font-weight: 700;
  border-radius: 50%;
  ${({ selectA, selectB, selectC, selectD }) =>
    (selectA || selectB || selectC || selectD) && `color: #ffffff;`};
`;

const QuestionBox: React.FC<IQuestionProps> = ({
  question,
  options,
  answer,
}) => {
  const [answer1, answer2, answer3, answer4] = options;

  return (
    <SBox>
      <SQuestionBox>
        <SQuestion>{question}</SQuestion>
      </SQuestionBox>

      <SAnswerBox selectA={"a" == answer}>
        <SImg selectA={"a" == answer}>A</SImg>
        <SAnswer selectA={"a" == answer}> {answer1} </SAnswer>
      </SAnswerBox>

      <SAnswerBox selectB={"b" == answer}>
        <SImg selectB={"b" == answer}>B</SImg>
        <SAnswer selectB={"b" == answer}> {answer2} </SAnswer>
      </SAnswerBox>

      <SAnswerBox selectC={"c" == answer}>
        <SImg selectC={"c" == answer}>C</SImg>
        <SAnswer selectC={"c" == answer}> {answer3} </SAnswer>
      </SAnswerBox>

      <SAnswerBox selectD={"d" == answer}>
        <SImg selectD={"d" == answer}>D</SImg>
        <SAnswer selectD={"d" == answer}> {answer4} </SAnswer>
      </SAnswerBox>
    </SBox>
  );
};

export default QuestionBox;
