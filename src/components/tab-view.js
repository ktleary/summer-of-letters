import React, { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import SearchBox from "./search-box";
import ResultRow from "./result-row";
import CloseButton from "./buttons/CloseButton";
import ResultsHeader from "./results-header";
import { filterResultRow } from "../util/filter";
import { parseResults } from "../util/parse";

const ViewCloseButton = styled(CloseButton)`
  border-radius: 6px;
  border: 1px solid rgba(50, 50, 52, 0.76);
  color: rgba(235, 235, 245, 0.6);
  cursor: pointer;
  height: 28px;
  width: 28px;
  &:hover {
    color: rgba(235, 235, 245, 1);
  }
`;

const TabViewWrapper = styled.div`
  padding-top: 24px;
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

  return (
    <TabViewWrapper data-testid="tab-view">
      <SearchWrapper>
        <SearchBox query={query} handleChange={handleQuery} />
        <ButtonHolder onClick={() => setQuery("")}>
          <ViewCloseButton />
        </ButtonHolder>
      </SearchWrapper>
      <ResultsHeader handleClick={handleSort} />
      <Results handleClick={handleClick} wordSums={parsedFiltered} query={query} />
    </TabViewWrapper>
  );
}

export default TabView;
