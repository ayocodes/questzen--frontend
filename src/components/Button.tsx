import React from "react";
import styled from "styled-components";
import Link from "next/link";

interface IButtonProps {
  children: React.ReactNode;
  backgroundColor: string;
  func: any;
  color: any;
  img?: string;
  className?: any;
}

interface ButtonStyleProps {
  backgroundColor: string;
  className?: any;
}

interface ButtonTextProps {
  color: any;
}

const SButton = styled.div<ButtonStyleProps>`
  width: 14rem;
  height: 3.2rem;
  display: grid;
  place-items: center;
  /* padding: 5px; */
  border-radius: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
`;

const SButtonText = styled.p<ButtonTextProps>`
  color: ${({ color }) => color};
  font-size: 1.25rem;
  align-items: center;
  font-weight: 500;
`;

const SImgText = styled.div`
  /* width: 11rem; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button: React.FC<IButtonProps> = ({
  children,
  color,
  backgroundColor,
  func,
  img,
  className,
}) => {
  return (
    <SButton
      backgroundColor={backgroundColor}
      onClick={func}
      className={className}
    >
      <SImgText>
        <SButtonText color={color}>{children}</SButtonText>
        <img src={img} alt="" style={{ paddingLeft: "10px" }} />
      </SImgText>
    </SButton>
  );
};

export default Button;
