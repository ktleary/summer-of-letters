import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { Cell } from "./cell";
import Row from "./row";

const HeaderCell = styled(Cell)`
  align-items: center;
  color: rgba(255, 255, 255, 0.87);
  display: flex;
  flex: 1;
  justify-content: center;
`;

const HeaderCellLeft = styled(Cell)`
  flex: 2;
  justify-content: flex-start;
  padding-left: 8px;
  padding-right: -8px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;

const HeaderRow = styled(Row)`
  margin-top: 16px;
`;

const ResultsHeader = () => {
  const labels = ["Word", "Eng", "E.R.", "Red", "R.R."];
  const id = nanoid();
  return (
    <HeaderRow>
      {labels.map((label, i) => {
        return i === 0 ? (
          <HeaderCellLeft key={`label-${id}-${i}`}>{label}</HeaderCellLeft>
        ) : (
          <HeaderCell key={`label-${id}-${i}`}>{label}</HeaderCell>
        );
      })}
    </HeaderRow>
  );
};

export default ResultsHeader;
