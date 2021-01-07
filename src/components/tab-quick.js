import React, { useState } from "react";
import styled from "styled-components";
import ResultsRow from "./result-row";
import Row from "./row";
import Cell from "./cell";
import { Input, InputContainer } from "./input";
import letterSummerCore from "../lib/letter-summer-core.js";
const labels = ["English", "Eng Rev", "Reduction", "Red Rev"];

const TabQuickWrapper = styled.div``;

const ResultsHeader = () => (
  <Row>
    {labels.map((label, i) => (
      <Cell style={{ color: "#ffffff" }} key={`label${i}`}>
        {label}
      </Cell>
    ))}
  </Row>
);

const TabQuick = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => setQuery(e && e.target.value);
  const resultData = query.length && letterSummerCore(query);
  return (
    <TabQuickWrapper>
      <InputContainer>
        <Input placeholder="Check one" onChange={handleChange} />
      </InputContainer>
      {query && (
        <>
          <ResultsHeader />
          <ResultsRow row={resultData} />
        </>
      )}
    </TabQuickWrapper>
  );
};

export default TabQuick;
