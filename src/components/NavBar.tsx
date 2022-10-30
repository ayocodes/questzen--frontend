import React from "react";
import styled from "styled-components";
import Button from "./Button";

interface INavProps {
  leftButtonText: string;
  rightButtonText: string;
  leftButtonFunc: any;
  rightButtonFunc: any;
  leftImgSource?: string;
  rightImgSource?: string;
  // children: React.ReactNode;
}
const SNavBox = styled.div`
  width: 36em;
  height: 7em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;
  background: rgba(255, 255, 255, 0.7);
  border: 3px solid #ffffff;
  border-radius: 20px;
  position: fixed;
  bottom: 1em;
  left: 50%;
  transform: translate(-50%, 0);
`;

const NavBar: React.FC<INavProps> = ({
  leftButtonText,
  rightButtonText,
  leftButtonFunc,
  rightButtonFunc,
  leftImgSource,
  rightImgSource,
}) => {
  return (
    <SNavBox>
      <Button
        backgroundColor={"#eeeeee"}
        func={leftButtonFunc}
        color={"#424242"}
        img={leftImgSource}
      >
        {leftButtonText}
      </Button>
      <Button
        backgroundColor={"#3E9FFF"}
        func={rightButtonFunc}
        color={"#FFFFFF"}
        img={rightImgSource}
      >
        {rightButtonText}
      </Button>
    </SNavBox>
  );
};

export default NavBar;
