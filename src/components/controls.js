import React from "react";
import styled from "styled-components";
import ButtonSubmit from "./buttons/button-submit";
import ButtonSort from "./buttons/button-sort";

const ButtonRow = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
  padding: 8px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 0 16px;
`;

const Controls = ({ disabled, handleSort, sortWords, handleSubmit }) => (
  <ButtonRow>
    <ButtonContainer data-testid="button-sort">
      <ButtonSort disabled={disabled} handleClick={handleSort} />
    </ButtonContainer>
    <ButtonContainer>
      <ButtonSubmit disabled={disabled} handleClick={handleSubmit} />
    </ButtonContainer>
  </ButtonRow>
);

export default Controls;
