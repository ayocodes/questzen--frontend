import React, { useCallback, useEffect, useState } from "react";
import { Web3Storage } from "web3.storage";
import NavBar from "./NavBar";
import QuestionBox from "./QuestionBox";
import styled from "styled-components";
import Button from "./Button";

interface IProgressBar {
  width: any;
}

interface IQuizDetails {
  quizDuration: string;
}

const SProgressBar = styled.div`
  display: flex;
  align-items: center;
  height: 1.25rem;
  width: 15.3rem;
  background: #e9e9e9;
  border-radius: 20px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
`;

const SProgress = styled.span<IProgressBar>`
  height: 100%;
  width: ${({ width }) => `${width}%`};
  border-radius: 20px;
  background: linear-gradient(114.96deg, #fca3a3 -7.62%, #dfa3fc 92.87%);
  transition: width 250ms;
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

const SBox2 = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SBig = styled.p`
  font-weight: 600;
  font-size: 2rem;
  line-height: 2rem;
  padding-bottom: 2rem;
`;

const quiz = [
  {
    question: "What is the second largest river in the world?",
    options: ["nile3", "niger3", "senegal3", "limpopo3"],
  },
  {
    question: "What is the second largest mountain in the world?",
    options: ["nile4", "niger4", "senegal4", "limpopo4"],
  },
  {
    question: "What is the second largest mountain in the world?",
    options: ["nile4", "niger4", "senegal4", "limpopo4"],
  },
  {
    question: "What is the second largest mountain in the world?",
    options: ["nile4", "niger4", "senegal4", "limpopo4"],
  },
];

const Quiz: React.FC<IQuizDetails> = ({ quizDuration }) => {
  
  async function retrieve(cid: string) {
    const res = await fetch(`https://${cid}.ipfs.w3s.link/`).then((response) =>
      response.json()
    );
    console.log(res);
  }

  retrieve("bafkreiav6ng7lrjytgw6dqobmag3oepelrtdxqbwv2kmtpbangn5gwnhcm");

  const [count, setCount] = useState(0);
  const [quizData, setQuizData] =
    useState<{ question: string; options: string[] }[]>();
  const [answer, setAnswer] = useState<string[]>();
  const [showQuizDetails, setShowQuizDetails] = useState(true);

  const length = quizData?.length;

  useEffect(() => {
    setQuizData(quiz);
  }, []);

  useEffect(() => {
    if (quizData?.length) {
      const temp = [];
      for (const item in quizData) {
        temp.push("0");
      }
      setAnswer(temp);
    }
  }, [quizData]);

  const setAnswerIndex = useCallback(
    (x: string) => {
      let changed = [...answer!];
      changed[count] = x;
      setAnswer(changed);
    },
    [count, answer]
  );

  const prevButton = () => {
    if (count == 0) return;
    setCount(count - 1);
  };

  const nextButton = () => {
    if (count + 1 == length) {
      confirm(
        "You are about to submit, you can only perform this action once.\nSubmit?"
      );
      return;
    }
    setCount(count + 1);
  };

  const progressBarWidth = (count + 1) * (100 / length!);

  if (!answer?.length) {
    return <SBox>Loading...</SBox>;
  }

  if (showQuizDetails) {
    return (
      <SBox2>
        <SBig>This Quiz ends in {quizDuration} minutes</SBig>
        <Button
          backgroundColor={"#3E9FFF"}
          func={() => setShowQuizDetails(false)}
          color={"white"}
        >
          Connect
        </Button>
      </SBox2>
    );
  } else {
    return (
      <SBox>
        <SProgressBarBox>
          <SProgressBar>
            <SProgress width={progressBarWidth} />
          </SProgressBar>
          <SProgressNumber>
            {count + 1}/{length}
          </SProgressNumber>
        </SProgressBarBox>
        <QuestionBox
          question={quizData![count].question}
          options={quizData![count].options}
          answer={answer![count]}
          setAnswerIndex={setAnswerIndex}
        />

        <NavBar
          leftButtonText={"Prev Question"}
          rightButtonText={count + 1 == length ? "Submit" : "Next Question"}
          leftButtonFunc={prevButton}
          rightButtonFunc={nextButton}
          leftImgSource="/prev.svg"
          rightImgSource="/next.svg"
        />
      </SBox>
    );
  }
};

export default Quiz;
