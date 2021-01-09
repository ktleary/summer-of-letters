export const filterResultRow = ({ query, result }) => {
  const queryIsNumb = !!Number(query);
  for (const val of Object.values(result)) {
    if (queryIsNumb && Number(val) === Number(query)) return true;
    if (
      !queryIsNumb &&
      val.toString().toUpperCase().indexOf(query.toUpperCase()) !== -1
    )
      return true;
  }
  return false;
};
