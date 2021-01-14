import React, { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import SearchBox from "./search-box";
import ResultRow from "./result-row";
import CloseButton from "./buttons/CloseButton";
import ResultsHeader from "./results-header";
import { parseResults } from "../util/parse";
import { filterResultRow } from "../util/filter";

const ViewCloseButton = styled(CloseButton)`
  border-radius: 6px;
  border: 1px solid rgba(72, 72, 74, 1);
  color: rgba(235, 235, 245, 0.6);
  cursor: pointer;
  height: 24px;
  width: 24px;
  &:hover {
    color: rgba(235, 235, 245, 1);
  }
`;

const TabViewWrapper = styled.div`
  padding-top: 24px;
`;

const id = nanoid();

const Results = ({ handleClick, query, results }) =>
  results
    .filter((result) => filterResultRow({ query, result }))
    .map((result, i) => (
      <ResultRow
        handleClick={handleClick}
        row={result}
        key={`row-${id}-${i}`}
      />
    ));

const SearchWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ButtonHolder = styled.div`
  align-items: center;
  display: flex;
  height: 20px;
  margin-right: 16px;
  padding: 0 8px;
  justify-content: center;
`;

function TabView({ handleViewClear, handleSort, wordlist }) {
  const [query, setQuery] = useState("");
  const results = parseResults(wordlist);
  const handleQuery = (e) => {
    const { value } = e.target;
    setQuery(value);
  };
  const handleClick = (e) => {
    const name = e.currentTarget.getAttribute("name");
    setQuery(name);
  };


  return (
    <TabViewWrapper data-testid="tab-view">
      <SearchWrapper>
        <SearchBox query={query} handleChange={handleQuery} />
        <ButtonHolder onClick={() => setQuery("")}>
          <ViewCloseButton />
        </ButtonHolder>
      </SearchWrapper>
      <ResultsHeader handleClick={handleSort} />
      <Results handleClick={handleClick} results={results} query={query} />
    </TabViewWrapper>
  );
}

export default TabView;
