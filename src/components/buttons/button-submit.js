import React from "react";
import styled from "styled-components";

const Submit = styled.button`
  align-items: center;
  background: rgba(58, 58, 60, 1);
  border: 1px solid rgba(60, 60, 67, 0.3);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  display: flex;
  font-size: 18px;
  height: 32px;
  justify-content: center;
  margin: auto;
  outline: 0;
  width: 102px;
  &:hover {
    background-color: rgba(48.0, 209.0, 88.0, 0.6);
    color: rgba(255, 255, 255, 1);
  }
  &:active {
    background-color: rgba(48.0, 209.0, 88.0, 1);
    color: rgba(255, 255, 255, 1);
  }
  &:disabled {
    background-color: rgba(58, 58, 60, 0.6);
    color: rgba(255, 255, 255, 0.33);
    cursor: auto;

  }
`;

const ButtonSubmit = ({ disabled, handleClick }) => (
  <Submit onClick={handleClick} disabled={disabled}>
    VIEW
  </Submit>
);

export default ButtonSubmit;
