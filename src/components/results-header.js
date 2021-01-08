import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { Cell } from "./cell";
import Row from "./row";

const HeaderCell = styled(Cell)`
  color: rgba(255, 255, 255, 0.87);
  justify-content: ${({ left }) => (left ? "flex-start" : null)};
  padding-left: ${({ left }) => (left ? "16px" : null)};
  padding-right: ${({ left }) => (left ? "-16px" : null)};
`;

const HeaderRow = styled(Row)`
  margin-top: 16px;
`;

const ResultsHeader = () => {
  const labels = ["Word", "English", "Eng Rev", "Reduction", "Red Rev"];
  const id = nanoid();
  return (
    <HeaderRow>
      {labels.map((label, i) => (
        <HeaderCell left={i === 0} key={`label-${id}-${i}`}>
          {label}
        </HeaderCell>
      ))}
    </HeaderRow>
  );
};

export default ResultsHeader;
