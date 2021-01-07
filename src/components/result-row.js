import Row from "./row";
import Cell from "./cell";

const ResultRow = ({ row }) => (
  <Row>
    {Object.values(row).map((typeValue, i) => (
      <Cell key={`result-row${i}`}>{typeValue}</Cell>
    ))}
  </Row>
);

export default ResultRow;
