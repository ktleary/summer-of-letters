import React from "react";
import styled from "styled-components";
import ButtonSubmit from "./buttons/button-submit";
import ButtonSort from "./buttons/button-sort";

const ButtonRow = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
  padding: 16px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 0 16px;
`;

const Controls = ({ sortWords, handleSubmit }) => (
  <ButtonRow>
    <ButtonContainer>
      <ButtonSort handleClick={sortWords} />
    </ButtonContainer>
    <ButtonContainer>
      <ButtonSubmit handleClick={handleSubmit} />
    </ButtonContainer>
  </ButtonRow>
);

export default Controls;