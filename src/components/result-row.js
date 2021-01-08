import React from "react";
import styled from "styled-components";

import Row from "./row";
import { Cell } from "./cell";

const multi = (row) => Object.keys(row).length > 4;

const ResultCell = styled(Cell)`
  justify-content: ${({ left }) => (left ? "flex-start" : null)};
  padding-left: ${({ left }) => (left ? "16px" : null)};
  padding-right: ${({ left }) => (left ? "-16px" : null)};
`;

const ResultRow = ({ row }) => {
  const isMulti = multi(row);
  return (
    <Row>
      {Object.values(row).map((typeValue, i) => (
        <ResultCell left={i === 0 && isMulti} key={`result-cell${i}`}>
          {typeValue}
        </ResultCell>
      ))}
    </Row>
  );
};

export default ResultRow;
