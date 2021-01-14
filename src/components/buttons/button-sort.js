import React from "react";
import styled from "styled-components";
import { LABELS } from "../../constants";
const Sort = styled.div`
  align-items: center;
  background: rgba(58, 58, 60, 1);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.89);
  cursor: pointer;
  display: flex;
  font-size: 18px;
  justify-content: center;
  height: 32px;
  margin: auto;
  width: 102px;
  &:hover {
    background-color: rgba(18, 132, 255, 0.89);
    color: rgba(255, 255, 255, 1);
  }
`;

const ButtonSort = ({ handleClick }) => (
  <Sort name={LABELS.WORD} onClick={handleClick}>
    Sort
  </Sort>
);

export default ButtonSort;
