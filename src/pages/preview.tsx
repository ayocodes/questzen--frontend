import React from "react";
import QuestionBox from "../components/QuestionBox";
import NavBar from "../components/NavBar";
import styled from "styled-components";

const SBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.25rem 0 6rem;
`;

const preview = () => {
  return (
    <SBox>
      <QuestionBox
        question={"What is the second largest river in africa?"}
        answer1={"Nile"}
        answer2={"Nile"}
        answer3={"Nile"}
        answer4={"Nile"}
        selected={false}
      />

      <QuestionBox
        question={"What is the fifth planet from the sun?"}
        answer1={"Mecury"}
        answer2={"Venus"}
        answer3={"Earth"}
        answer4={"Mars"}
        selected={false}
      />

      <NavBar
        leftButtonText={"Back"}
        rightButtonText={"Next"}
        leftButtonFunc={undefined}
        rightButtonFunc={undefined}
      />
    </SBox>
  );
};

export default preview;
