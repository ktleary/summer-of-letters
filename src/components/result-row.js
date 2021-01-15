import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

import Row from "./row";
import { Cell } from "./cell";

const multi = (row) => Object.keys(row).length > 4;

const ResultCell = styled(Cell)`
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const ResultCellLeft = styled(Cell)`
  cursor: pointer;
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

const ResultRowWrapper = styled(Row)`
  &:hover {
    background: rgb(30, 30, 32, 1);
  }
`;

const id = nanoid();

const ResultRow = ({ handleClick, isMulti, row }) => {
  return (
    <ResultRowWrapper>
      {isMulti && (
        <ResultCellLeft name={row.word} onClick={handleClick}>
          {row.word}
        </ResultCellLeft>
      )}
      {Object.values(row.sums).map((typeValue, i) => (
        <ResultCell
          name={typeValue}
          onClick={handleClick}
          key={`result-cell-${id}-${i}`}
        >
          {typeValue}
        </ResultCell>
      ))}
    </ResultRowWrapper>
  );
};

export default ResultRow;
