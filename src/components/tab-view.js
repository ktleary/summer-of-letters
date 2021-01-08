import React, { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import SearchBox from "./search-box";
import ResultRow from "./result-row";
import ResultsHeader from "./results-header";
import { parseResults } from "../util/parse";

const TabViewWrapper = styled.div`
  padding-top: 24px;
`;

function TabView({ wordlist }) {
  const [query, setQuery] = useState("");
  const id = nanoid();
  const results = parseResults(wordlist);

  const filterResultRow = (result) => {
    const qisNumb = !!Number(query);
    for (const val of Object.values(result)) {
      if (qisNumb && Number(val) === Number(query)) return true;
      if (
        !qisNumb &&
        val.toString().toUpperCase().indexOf(query.toUpperCase()) !== -1
      )
        return true;
    }
    return false;
  };

  return (
    <TabViewWrapper>
      <SearchBox setQuery={setQuery} />
      <ResultsHeader />
      {results &&
        results
          .filter((result) => filterResultRow(result))
          .map((result, i) => (
            <ResultRow row={result} key={`row-${id}-${i}`} />
          ))}
    </TabViewWrapper>
  );
}

export default TabView;
