import Link from "next/link";
import React, { useEffect, useState } from "react";
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
  const [quizData, setQuizData] =
    useState<{ question: string; options: string[] }[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quizOver, setQuizOver] = useState(false);
  const router = useRouter();
  const { pid } = router.query;

  const cid = "bafkreiav6ng7lrjytgw6dqobmag3oepelrtdxqbwv2kmtpbangn5gwnhcm";

  useEffect(() => {
    try {
      fetch(`https://${cid}.ipfs.w3s.link/`)
        .then((results) => results.json())
        .then((data) => {
          setQuizData(data);
        });
      setLoading(false);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  }, []);

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
    return (
      <Quiz quizDuration={"30"} quizData={quizData} setQuizOver={setQuizOver} />
    );
  }
};

export default index;
