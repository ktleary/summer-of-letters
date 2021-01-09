import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import ResultsRow from "./result-row";
import Row from "./row";
import { Cell } from "./cell";
import { Input, InputContainer } from "./input";

const labels = ["English", "Eng Rev", "Reduction", "Red Rev"];
const id = nanoid();

const TabQuickWrapper = styled.div`
  padding-top: 24px;
`;
const ResultsHeaderRow = styled(Row)`
  margin-top: 16px;
`;

const ResultsCell = styled(Cell)`
  color: rgba(255, 255, 255, 0.89);
`;

const ResultsHeader = () => (
  <ResultsHeaderRow>
    {labels.map((label, i) => (
      <ResultsCell key={`label-${id}-${i}`}>{label}</ResultsCell>
    ))}
  </ResultsHeaderRow>
);

const TabQuick = ({ handleChange, query, resultData }) => (
  <TabQuickWrapper data-testid="tab-quick">
    <InputContainer>
      <Input placeholder="Check one" onChange={handleChange} value={query} data-testid="quick-input" />
    </InputContainer>
    <ResultsHeader />
    <ResultsRow row={resultData} />
  </TabQuickWrapper>
);

export default TabQuick;
