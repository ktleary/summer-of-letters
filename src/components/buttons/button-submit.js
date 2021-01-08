import React from "react";
import styled from "styled-components";

const Submit = styled.div`
  align-items: center;
  background: rgba(58, 58, 60, 1);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  display: flex;
  font-size: 18px;
  justify-content: center;
  margin: auto;
  height: 32px;
  width: 102px;
  &:hover {
    background-color: rgba(52, 199, 89, 0.89);
    color: rgba(255, 255, 255, 1);
  }
`;

const ButtonSubmit = ({ handleClick }) => (
  <Submit onClick={handleClick}>Submit</Submit>
);

export default ButtonSubmit;



