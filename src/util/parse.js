import letterSummerCore from '../lib/letter-summer-core';

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

export const parseResults = (wordlist) =>
  wordlist
    .split(",")
    .filter((word) => word.length)
    .map((word) => word.trim())
    .map((word) => Object.assign({ word }, letterSummerCore(word)));
