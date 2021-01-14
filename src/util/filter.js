export const filterResultRow = ({ query, result }) =>
  !Number(query)
    ? result.word.toLowerCase().indexOf(query.toLowerCase()) !== -1
    : Object.values(result).reduce(
        (bool, val) => (!bool ? (bool = 1 * val === 1 * query) : bool),
        false
      );
