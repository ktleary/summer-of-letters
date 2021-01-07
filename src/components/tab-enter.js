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
  justify-content: center;
  margin: 24px auto;
  text-align: center;
  width: 100%;
`;

const TabEnter = ({ handleSubmit, onchange, sortWords, words }) => (
  <TextAreaContainer>
    <textarea
      id="word-entry"
      name="word-entry"
      value={words}
      placeholder={placeholder}
      onChange={onchange}
      rows="20"
      cols="50"
      style={{
        background: "#1b1b1b",
        color: "#fafafa",
        border: "1px solid #343434",
      }}
    />
    <ButtonRow>
      <ButtonSort handleClick={sortWords} />
      <ButtonSubmit handleClick={handleSubmit} />
    </ButtonRow>
  </TextAreaContainer>
);

export default TabEnter;
