export const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

export const parseCsv = (csv) =>
  csv
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item.length);

export const summerSort = (wordlist) =>
  [...new Set(parseCsv(wordlist))]
    .map((word) => word.toUpperCase())
    .sort()
    .join(", ");
