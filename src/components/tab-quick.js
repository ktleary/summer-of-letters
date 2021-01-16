import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import ResultsRow from "./result-row";
import Row from "./row";
import { Cell } from "./cell";
import SearchBox from "./search-box";

const labels = ["Eng", "ER", "Red", "RR"];
const id = nanoid();

const TabQuickWrapper = styled.div`
  padding-top: 0;
`;
const ResultsHeaderRow = styled(Row)`
  font-size: 16px;
  margin-top: 16px;
`;

const QuickResultsRow = styled(ResultsRow)`
  border-bottom: 0;
  font-size: 16px;
  margin-top: 16px;
`;

const ResultsCell = styled(Cell)`
  color: rgba(255, 255, 255, 0.89);
  font-size: 16px;
`;

const ResultsHeader = () => (
  <ResultsHeaderRow>
    {labels.map((label, i) => (
      <ResultsCell key={`label-${id}-${i}`}>{label}</ResultsCell>
    ))}
  </ResultsHeaderRow>
);

const TabQuick = ({ setQuickQuery, query, resultData }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setQuickQuery(value);
  };
  const handleClose = (e) => {
    setQuickQuery("");
  };

  return (
    <TabQuickWrapper data-testid="tab-quick">
      <SearchBox
        handleChange={handleChange}
        handleClose={handleClose}
        query={query}
      />
      <ResultsHeader />
      {resultData && <QuickResultsRow row={resultData} />}
    </TabQuickWrapper>
  );
};

export default TabQuick;


