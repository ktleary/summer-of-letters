import React from "react";
import { Input, InputContainer } from "./input";

const SearchBox = ({ handleChange, query }) => (
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
);

export default SearchBox;
