import styled from "styled-components";

export const Cell = styled.div`
  align-items: center;
  color: rgba(255, 255, 255, 0.76);
  display: flex;
  flex: 2;
  font-size: 12px;
  justify-content: center;
  padding: 4px;

`;

export const CellLeft = styled(Cell)`
  text-align: left;
  padding-left: 16px;
  padding-right: -16px;
`;
