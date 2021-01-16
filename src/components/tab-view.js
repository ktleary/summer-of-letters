import React, { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import SearchBox from "./search-box";
import ResultRow from "./result-row";
import ResultsHeader from "./results-header";
import { filterResultRow } from "../util/filter";
import { parseResults } from "../util/parse";

const TabViewWrapper = styled.div`
  padding-top: 0;
`;

const id = nanoid();

const Results = ({ handleClick, query, wordSums }) =>
  wordSums.map((result, i) => (
    <ResultRow
      handleClick={handleClick}
      row={result}
      isMulti={true}
      key={`row-${id}-${i}`}
    />
  ));

function TabView({ handleViewClear, handleSort, wordlist }) {
  const [query, setQuery] = useState("");
  const parsedFiltered = parseResults(wordlist).filter((wordSum) =>
    filterResultRow({ query, wordSum })
  );
  const handleQuery = (e) => {
    const { value } = e.target;
    setQuery(value);
  };
  const handleClick = (e) => {
    const name = e.currentTarget.getAttribute("name");
    setQuery(name);
  };
  const handleClose = (e) => {
    setQuery("");
  };

  return (
    <TabViewWrapper data-testid="tab-view">
      <SearchBox
        handleChange={handleQuery}
        handleClose={handleClose}
        query={query}
      />
      <ResultsHeader isMulti={false} handleClick={handleSort} />
      <Results
        handleClick={handleClick}
        wordSums={parsedFiltered}
        query={query}
      />
    </TabViewWrapper>
  );
}

export default TabView;
