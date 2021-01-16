import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

import Row from "./row";
import { Cell } from "./cell";

const ResultCell = styled(Cell)`
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  display: flex;
  flex: ${({ left }) => (left ? 2 : 1)};
  justify-content: ${({ left }) => (left ? "flex-start" : "center")};
  margin-left: ${({ left }) => (left ? "16px" : null)};
  margin-right: ${({ left }) => (left ? "-16px" : null)};
  overflow-wrap: break-word;
  padding: auto;
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

const ResultRow = ({ handleClick, isSingle = false, row }) => (
  <ResultRowWrapper>
    {!isSingle && (
      <ResultCell left={true} name={row.word} onClick={handleClick}>
        {row.word}
      </ResultCell>
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

export default ResultRow;
