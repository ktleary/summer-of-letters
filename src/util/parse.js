import letterSummerCore from "../lib/letter-summer-core";
import { SUMMERTYPES } from "../constants";
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

// create word sums for wordlist
export const parseResults = (wordlist = "") =>
  [
    ...new Set(
      wordlist
        .split(",")
        .map((word) => word.toUpperCase().trim())
        .filter((word) => word.length)
    ),
  ].map((word) => letterSummerCore(word));

export const sortWords = (wordlist = "", prop = "") =>
  parseResults(wordlist)
    .sort((a, b) => {
      if (a["sums"][prop] === b["sums"][prop]) {
        if (a[SUMMERTYPES.WORD] < b[SUMMERTYPES.WORD]) return -1;
        if (a[SUMMERTYPES.WORD] > b[SUMMERTYPES.WORD]) return 1;
        return 0;
      }
      if (a["sums"][prop] < b["sums"][prop]) return -1;
      if (a["sums"][prop] > b["sums"][prop]) return 1;
      return 0;
    })
    .map((item) => item.word.toUpperCase())
    .join(", ");
