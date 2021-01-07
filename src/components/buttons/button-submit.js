import React from "react";
import styled from "styled-components";

const Submit = styled.div`
  background: #343434;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  margin: auto;
  height: 32px;
  line-height: 32px;
  vertical-align: middle;
  width: 102px;
  &:hover {
    background-color: #303f9f;
    color: white;
  }
`;

const ButtonSubmit = ({ handleClick }) => (
  <Submit onClick={handleClick}>Submit</Submit>
);

export default ButtonSubmit;
