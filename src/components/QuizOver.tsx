import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

interface IQuizState {
  quizState: string;
}

const SBox = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45vw;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;


const SBold = styled.span`
  font-weight: 600;
`;

const SLink = styled(Link)`
  font-weight: 600;
  text-decoration: none;
`;

const STitle = styled.p`
  padding-bottom: 12px;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
`;

const SText = styled.p`
  padding-bottom: 5px;
  text-align: center;
`;

const QuizOver:React.FC<IQuizState> = ({quizState}) => {

  const getPane = () => {
    switch (quizState) {
      case "waiting":
        return (
          <>
            <STitle>Hi there, this quiz is over</STitle>
            <SText>
              Make sure to check back in <SBold>a day</SBold> time to find out
              the winner of this quiz.
            </SText>
            <p>Not checking in could risk not being qualified to win.</p>
          </>
        );
        break;
      case "no winner":
        return (
          <>
            <STitle>Hi there, there is no winner in this quiz</STitle>
            <p>
              Check out more quiz at our <SLink href={"/"}>home page</SLink>
            </p>
          </>
        );
        break;
      case "winner":
        return (
          <>
            <STitle>We've got a lucky winner!</STitle>
            <SText>The winner to this quiz is user</SText>
            <SText>
              Check out more quiz at our <SLink href={"/"}>home page</SLink> for
              more quizes!
            </SText>
          </>
        );
        break;

      default:
        break;
    }
  };

  return (
    <SBox>
      <SModal>{getPane()}</SModal>
    </SBox>
  );
};

export default QuizOver;
