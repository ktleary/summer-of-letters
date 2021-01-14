import React, { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import SearchBox from "./search-box";
import ResultRow from "./result-row";
import ResultsHeader from "./results-header";
import { parseResults } from "../util/parse";
import { filterResultRow } from "../util/filter";

const TabViewWrapper = styled.div`
  padding-top: 24px;
`;

const id = nanoid();

const Results = ({ results, query }) =>
  results
    .filter((result) => filterResultRow({ query, result }))
    .map((result, i) => <ResultRow row={result} key={`row-${id}-${i}`} />);

const OptimizedResults = React.memo(Results);

function TabView({ wordlist }) {
  const [query, setQuery] = useState("");
  const results = parseResults(wordlist);
  const handleQuery = (e) => {
    const val = e.target.value;
    setQuery(val);
  };

  return (
    <TabViewWrapper data-testid="tab-view">
      <SearchBox handleChange={handleQuery} />
      <ResultsHeader />
      <OptimizedResults results={results} query={query} />
    </TabViewWrapper>
  );
}

export default TabView;
