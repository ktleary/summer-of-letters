import React from "react";
import styled from "styled-components";
import { Input, InputContainer } from "./input";
import CloseButton from "./buttons/CloseButton";
import ButtonHolder from "./button-holder";

const ViewCloseButton = styled(CloseButton)`
  border-radius: 6px;
  color: rgba(235, 235, 245, 0.6);
  cursor: pointer;
  height: 20px;
  width: 20px;
  &:hover {
    color: rgba(235, 235, 245, 1);
  }
`;

const SearchWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SearchBox = ({ handleChange, handleClose, query}) => (
  <SearchWrapper>
    <InputContainer>
      <Input
        onChange={handleChange}
        placeholder="Search"
        type="text"
        name="searchbox"
        id="searchbox"
        value={query}
        autoFocus
      />
    </InputContainer>
    <ButtonHolder onClick={handleClose}>
      <ViewCloseButton />
    </ButtonHolder>
  </SearchWrapper>
);

export default SearchBox;
