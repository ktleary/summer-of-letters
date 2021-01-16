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
  flex: 1;
  font-size: 16px;
  justify-content: center;
  padding-top: 8px;
  padding-bottom: 8px;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const HeaderCellLeft = styled(Cell)`
  flex: 2;
  cursor: pointer;
  justify-content: flex-start;
  font-size: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: -8px;
  @media (min-width: 444px) {
    padding-left: 16px;
    padding-right: -16px;
  }
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const HeaderRow = styled(Row)`
  margin-top: 16px;
`;

const id = nanoid();

const ResultsHeader = ({ handleClick }) => (
  <HeaderRow>
    {Object.values(LABELS).map((label, i) => {
      return i === 0 ? (
        <HeaderCellLeft
          name={label}
          onClick={handleClick}
          key={`label-${id}-${i}`}
        >
          {label}
        </HeaderCellLeft>
      ) : (
        <HeaderCell name={label} onClick={handleClick} key={`label-${id}-${i}`}>
          {label}
        </HeaderCell>
      );
    })}
  </HeaderRow>
);

export default ResultsHeader;
