import React, { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import SearchBox from "./search-box";
import ResultRow from "./result-row";
import ResultsHeader from "./results-header";
import letterSummerCore from "../lib/letter-summer-core.js";

const TabViewWrapper = styled.div``;

function TabView(props) {
  const [query, setQuery] = useState("");
  const { wordlist } = props;

  const results = wordlist
    .split(",")
    .filter((word) => word.length)
    .map((word) => word.trim())
    .map((word) => Object.assign({ word }, letterSummerCore(word)));

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
  const id = nanoid();
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
