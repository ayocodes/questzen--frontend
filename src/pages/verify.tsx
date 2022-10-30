import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const SBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.25rem 0;
`;

const SItemBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 29rem;
  background: linear-gradient(#fff, #fff),
    linear-gradient(0deg, #fca3a3 -6.98%, #dfa3fc 111.45%);
  background-origin: padding-box, border-box;
  background-repeat: no-repeat;
  border-left: 3px solid transparent;
  margin-bottom: 3rem;
  padding: 1rem 0 1.5rem 1.5rem;
`;

const STextArea = styled.textarea`
  border: 2px solid #e5e5e5;
  border-radius: 10px;
  font-size: 16px;
  padding: 1rem;
  background-color: transparent;
  resize: none;
  outline: none;
  color: #5e5e5e;
  flex: 1;
`;

const STitle = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin-bottom: 10px;
  color: #5e5e5e;
`;

const SSelect = styled.select`
  height: 3rem;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  color: #5e5e5e;
  margin-bottom: 1rem;
`;

const verify = () => {
  return (
    <SBox>
      <SItemBox>
        <STitle>Title</STitle>
        <STextArea rows={1}></STextArea>
      </SItemBox>

      <SItemBox>
        <STitle>Quiz end</STitle>
        <SSelect>
          <option>30 min</option>
          <option>1 hr</option>
          <option>3 hrs</option>
          <option>1 day</option>
        </SSelect>
        <p>
          The quiz end specifies the duration the quiz would hold for, pick
          whichever time suite you best from the dropdown menu
        </p>
      </SItemBox>

      <SItemBox>
        <STitle>Reveal deadline</STitle>
        <SSelect>
          <option>30 min</option>
          <option>1 hr</option>
          <option>3 hrs</option>
          <option>1 day</option>
        </SSelect>
        <p>
          The quiz end specifies the duration the quiz would hold for, pick
          whichever time suite you best from the dropdown menu
        </p>
      </SItemBox>

      <Button backgroundColor={"#3E9FFF"} func={undefined} color={"#fff"}>
        Deploy
      </Button>
    </SBox>
  );
};

export default verify;
