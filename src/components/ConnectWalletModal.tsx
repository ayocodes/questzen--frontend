import React from "react";
import styled from "styled-components";
import Button from "./Button";

const SModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  place-items: center;
  z-index: 2000;
`;

const SConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  background: white;
  border-radius: 1rem;
  height: 20rem;
`;

const Sp = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const ConnectWalletModal = () => {
  return (
    <SModal>
      <SConnect>
        <Sp>Connect your wallet to continue</Sp>
        <Button backgroundColor={"#3E9FFF"} color={"#FFFFFF"} func={undefined}>
          Connect
        </Button>
      </SConnect>
    </SModal>
  );
};

export default ConnectWalletModal;
