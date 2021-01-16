import React from "react";
import styled from "styled-components";
import { LABELS } from "../../constants";
const Sort = styled.button`
  align-items: center;
  background: rgba(58, 58, 60, 1);
  border: 1px solid rgba(60, 60, 67, 0.3);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  display: flex;
  font-size: 18px;
  justify-content: center;
  height: 32px;
  margin: auto;
  outline: 0;
  width: 102px;
  &:hover {
    background-color: rgba(10, 132, 255, 1);
    color: rgba(255, 255, 255, 1);
  }
  &:disabled {
    background-color: rgba(58, 58, 60, 0.6);
    color: rgba(255, 255, 255, 0.33);
    cursor: auto;
  }
`;

const ButtonSort = ({ disabled, handleClick }) => (
  <Sort name={LABELS.WORD} disabled={disabled} onClick={handleClick}>
    SORT
  </Sort>
);

export default ButtonSort;
