import React from "react";
import { Input, InputContainer } from "./input";

const SearchBox = ({ handleChange }) => (
  <InputContainer>
    <Input
      onChange={handleChange}
      placeholder="Search"
      type="text"
      name="searchbox"
      id="searchbox"
    />
  </InputContainer>
);

export default SearchBox;
