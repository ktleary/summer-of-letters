import React from "react";
import styled from "styled-components";
import ButtonSubmit from "./buttons/button-submit";
import ButtonSort from "./buttons/button-sort";

const placeholder = "Enter a comma-separated list of words.";

const ButtonRow = styled.div`
  align-content: stretch;
  display: flex;
  justify-content: flex-start;
  margin: 16px auto;
  max-width: 300px;
  width: 100%;
`;

const TextAreaContainer = styled.div`
  border-radius: 32px;
  justify-content: center;
  margin: 24px auto;
  text-align: center;
  width: 100%;
`;

const EnterTextArea = styled.textarea`
  background: rgba(17, 17, 18, 1);
  border: 1px solid rgba(28, 28, 29, 1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.66);
  font-family: monospace;
  font-size: 16px;
  padding: 12px 8px;
  width: 80%;
  &:hover {
    border: 1px solid rgba(44, 44, 46, 1);
  }
  &:focus {
    border: 1px solid rgba(44, 44, 46, 1);
    outline: 0;
  }

  &:active {
    border: 1px solid rgba(44, 44, 46, 1);
    outline: 0;
  }
`;

const TabEnter = ({ handleSubmit, onchange, sortWords, words }) => (
  <TextAreaContainer>
    <EnterTextArea
      id="word-entry"
      name="word-entry"
      value={words}
      placeholder={placeholder}
      onChange={onchange}
      rows="12"
    />
    <ButtonRow>
      <ButtonSort handleClick={sortWords} />
      <ButtonSubmit handleClick={handleSubmit} />
    </ButtonRow>
  </TextAreaContainer>
);

export default TabEnter;
