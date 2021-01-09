import React from "react";
import { Input, InputContainer } from "./input";

function SearchBox(props) {
  const { setQuery } = props;
  const handleOnChange = (e) => {
    const val = e.target.value;
    setQuery(val);
  };
  return (
    <InputContainer data-testid="search-box">
      <Input
        onChange={handleOnChange}
        placeholder="Search."
        type="text"
        name="searchbox"
        id="searchbox"
      />
    </InputContainer>
  );
}

export default SearchBox;
