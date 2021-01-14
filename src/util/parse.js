import letterSummerCore from "../lib/letter-summer-core";
export const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

export const parseCsv = (csv, upper) =>
  csv
    .split(",")
    .map((item) => (upper ? item.trim().toUpperCase() : item.trim()))
    .filter((item) => item.length);

export const summerSort = (wordlist) =>
  [...new Set(parseCsv(wordlist, true))]
    .map((word) => word.toUpperCase())
    .sort()
    .join(", ");

export const parseResults = (wordlist = "") =>
  wordlist
    .split(",")
    .filter((word) => word.length)
    .map((word) => word.trim())
    .map((word) => Object.assign({ word }, letterSummerCore(word)));

export const sortWords = (wordlist = "", prop = "") =>
  parseResults(wordlist)
    .sort((a, b) => {
      if (a[prop] < b[prop]) return -1;
      if (a[prop] > b[prop]) return 1;
      return 0;
    })
    .map((item) => item.word.toUpperCase())
    .join(", ");
