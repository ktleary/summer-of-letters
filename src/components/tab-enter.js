import React from "react";
import styled from "styled-components";
const placeholder = "Enter a comma-separated list of words";

const TextAreaContainer = styled.div`
  border-radius: 32px;
  justify-content: center;
  margin: 24px auto;
  text-align: center;
  width: 100%;
`;

const EnterTextArea = styled.textarea`
  background: rgba(17, 17, 18, 1);
   border: 1px solid rgba(72, 72, 74, 0.6);
  border-radius: 4px;
  color: rgba(242, 242, 247, 0.6);
  font-family: sans-serif;
  font-size: 1em;
  outline: 0;
  padding: 12px 8px;
  width: 87%;
  &:hover {
    border: 1px solid rgba(72, 72, 74, 1);
  }
  &:focus {
    border: 1px solid rgba(10, 132, 255, 0.3);
    outline: 0;
  }
  &:active {
    border: 1px solid rgba(10, 132, 255, 0.3);
    outline: 0;
  }
`;

const TabEnter = ({ setWordList, words }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setWordList(value);
  };
  return (
    <TextAreaContainer>
      <EnterTextArea
        id="word-entry"
        name="word-entry"
        value={words}
        placeholder={placeholder}
        onChange={handleChange}
        rows="12"
        data-testid="enter-textarea"
        autoFocus
      />
    </TextAreaContainer>
  );
};

export default TabEnter;
