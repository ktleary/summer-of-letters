export const filterResultRow = ({ query, wordSum }) =>
  !Number(query)
    ? wordSum.word.toLowerCase().indexOf(query.toLowerCase()) !== -1
    : Object.values(wordSum.sums).reduce(
        (bool, val) => (!bool ? (bool = 1 * val === 1 * query) : bool),
        false
      );
