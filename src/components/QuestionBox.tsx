import React from "react";
import styled from "styled-components";

interface IQuestionProps {
  question: String;
  answer1: String;
  answer2?: String;
  answer3?: String;
  answer4?: String;
  selected: boolean;
}

interface ISelected {
  selected: boolean;
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
  border-radius: 1em;
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
  ${({ selected }) =>
    selected &&
    `background-color: #81C0FF;
 border-radius: 10px;`};
`;
const SQuestionBox = styled.div`
  width: 22rem;
  display: flex;
  align-items: center;
`;

const SAnswer = styled.p<ISelected>`
  font-size: 1.25rem;
  line-height: 1.25rem;
  color: #424242;
  ${({ selected }) => selected && `color: #ffffff;`};
`;

const SImg = styled.div<ISelected>`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  margin-right: 10px;
  background: #C1CFED;
  color: #447fde;
  font-weight: 700;
  border-radius: 50%;
  ${({ selected }) => selected && `color: #ffffff;`};
`;

const QuestionBox: React.FC<IQuestionProps> = ({
  question,
  answer1,
  answer2,
  answer3,
  answer4,
  selected,
}) => {
  return (
    <SBox>
      <SQuestionBox>
        <SQuestion>{question}</SQuestion>
      </SQuestionBox>

      <SAnswerBox selected={true}>
        <SImg selected={true}>A</SImg>
        <SAnswer selected={true}> {answer1} </SAnswer>
      </SAnswerBox>

      <SAnswerBox selected={selected}>
      <SImg selected={selected}>B</SImg>
        <SAnswer selected={selected}> {answer2} </SAnswer>
      </SAnswerBox>

      <SAnswerBox selected={selected}>
      <SImg selected={selected}>C</SImg>
        <SAnswer selected={selected}> {answer3} </SAnswer>
      </SAnswerBox>

      <SAnswerBox selected={selected}>
      <SImg selected={selected}>D</SImg>
        <SAnswer selected={selected}> {answer4} </SAnswer>
      </SAnswerBox>
    </SBox>
  );
};

export default QuestionBox;
