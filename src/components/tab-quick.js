import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import ResultsRow from "./result-row";
import Row from "./row";
import { Cell } from "./cell";
import { Input, InputContainer } from "./input";
const labels = ["English", "Eng Rev", "Reduction", "Red Rev"];

const TabQuickWrapper = styled.div`
  padding-top: 24px;
`;
const id = nanoid();

const ResultsHeader = () => (
  <Row>
    {labels.map((label, i) => (
      <Cell
        style={{ color: "rgba(255, 255, 255, 0.89)" }}
        key={`label-${id}-${i}`}
      >
        {label}
      </Cell>
    ))}
  </Row>
);

const TabQuick = ({ handleChange, query, resultData }) => (
  <TabQuickWrapper>
    <InputContainer>
      <Input placeholder="Check one" onChange={handleChange} value={query} />
    </InputContainer>
    {resultData && (
      <>
        <ResultsHeader />
        <ResultsRow row={resultData} />
      </>
    )}
  </TabQuickWrapper>
);

export default TabQuick;
