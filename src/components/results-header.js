import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { Cell } from "./cell";
import Row from "./row";
import { LABELS } from "../constants";

const HeaderCell = styled(Cell)`
  align-items: center;
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  display: flex;
  flex: ${({ left }) => (left ? 2 : 1)};
  font-size: 16px;
  justify-content: ${({ left }) => (left ? "flex-start" : "center")};
  margin-left: ${({ left }) => (left ? "16px" : null)};
  margin-right: ${({ left }) => (left ? "-16px" : null)};
  padding-top: 8px;
  padding-bottom: 8px;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const HeaderRow = styled(Row)`
  margin-top: 16px;
`;

const id = nanoid();

const ResultsHeader = ({ handleClick, isSingle = false }) => (
  <HeaderRow>
    {Object.values(LABELS).map((label, i) =>
      i === 0 && isSingle ? null : (
        <HeaderCell
          left={i === 0}
          name={label}
          onClick={handleClick}
          key={`label-${id}-${i}`}
        >
          {label}
        </HeaderCell>
      )
    )}
  </HeaderRow>
);

export default ResultsHeader;
