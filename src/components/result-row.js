import Row from "./row";
import Cell from "./cell";

const multi = (row) => Object.keys(row).length > 4;

const ResultRow = ({ row }) => {
  const isMulti = multi(row);

  return (
    <Row>
      {Object.values(row).map((typeValue, i) => (
        <Cell
          key={`result-cell${i}`}
          style={{
            textAlign: i === 0 && isMulti ? "left" : null,
            marginLeft: i === 0 && isMulti ? 8 : null,
            marginRight: i === 0 && isMulti ? -8 : null,
          }}
        >
          {typeValue}
        </Cell>
      ))}
    </Row>
  );
};

export default ResultRow;
