import React, { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import SearchBox from "./search-box";
import ResultRow from "./result-row";
import Row from "./row";
import Cell from "./cell";
import countGematriaCore from "../lib/letter-summer-core.js";

const TabViewWrapper = styled.div``;

const ResultsHeader = () => {
  const labels = ["Word", "English", "Eng Rev", "Reduction", "Red Rev"];
  const id = nanoid();
  return (
    <Row>
      {labels.map((label, i) => (
        <Cell
          style={{ color: "rgba(255, 255, 255, 1)" }}
          key={`label-${id}-${i}`}
        >
          {label}
        </Cell>
      ))}
    </Row>
  );
};

function TabView(props) {
  const [query, setQuery] = useState("");
  const { wordlist } = props;
  const splat = wordlist.split(",").map((word) => word.trim());

  const results = splat.map((word) => {
    const name = { word };
    const result = Object.assign(name, countGematriaCore(word));

    return result;
  });

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
      {results
        .filter((result) => filterResultRow(result))
        .map((result, i) => (
          <ResultRow row={result} key={`row-${id}-${i}`} />
        ))}
    </TabViewWrapper>
  );
}

export default TabView;
