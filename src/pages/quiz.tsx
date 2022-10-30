import React from "react";
import NavBar from "../components/NavBar";
import QuestionBox from "../components/QuestionBox";
import styled from "styled-components";

const SProgressBar = styled.div`
  display: flex;
  align-items: center;
  height: 1.25rem;
  width: 15.3rem;
  background: #e9e9e9;
  border-radius: 20px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
`;

const SProgress = styled.span`
  height: 100%;
  width: 10%;
  border-radius: 20px;
  background: linear-gradient(114.96deg, #fca3a3 -7.62%, #dfa3fc 92.87%);
`;

const SProgressBarBox = styled.div`
  position: sticky;
  width: 19.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  margin: 2.8rem 0 2.3rem 0;
  padding: 0 13px;
  top: 1rem;
  box-shadow: 0px 6px 28px 13px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
`;

const SBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 9rem;
`;

const SProgressNumber = styled.p`
  font-weight: 600;
`;

const quiz = () => {
  return (
    <SBox>
      <SProgressBarBox>
        <SProgressBar>
          <SProgress />
        </SProgressBar>
        <SProgressNumber> 1/10 </SProgressNumber>
      </SProgressBarBox>
      <QuestionBox
        question={"What is the second largest river in africa?"}
        answer1={"Nile"}
        answer2={"Nile"}
        answer3={"Nile"}
        answer4={"Nile"}
        selected={false}
      />
      <NavBar
        leftButtonText={"Prev Question"}
        rightButtonText={"Next Question"}
        leftButtonFunc={undefined}
        rightButtonFunc={undefined}
        leftImgSource="prev.svg"
        rightImgSource="next.svg"
      />
    </SBox>
  );
};

export default quiz;
