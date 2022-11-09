import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import Quiz from "../../components/Quiz";
import { useRouter } from "next/router";
import QuizOver from "../../components/QuizOver";

const SBox = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Slink = styled(Link)`
  font-weight: 600;
`;

const index = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [quizOver, setQuizOver] = useState(false);
  const router = useRouter();
  const { pid } = router.query;

  if (loading) {
    return <SBox>Loading...</SBox>;
  }

  if (error) {
    return (
      <SBox>
        <p>Hey there, the quiz you entered does not exist</p>
        <p>
          Check out other quiz <Slink href={"/"}>here</Slink>
        </p>
      </SBox>
    );
  }

  if (quizOver) {
    return <QuizOver quizState={"waiting"} />;
  } else {
    return <Quiz quizDuration={"30"} />;
  }
};

export default index;
