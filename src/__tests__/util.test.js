import { parseCsv, summerSort, parseResults } from "../util/parse";
import { filterResultRow } from "../util/filter";

describe("test filterResultRow", () => {
  it("should find the query", () => {
    const query = "change";
    const results = parseResults("TRY, HOPE, CHANGE");
    const passed = results.filter((result) =>
      filterResultRow({ query, result })
    );
    expect(passed.length).toBe(1);
  });
  it("should not find the query", () => {
    const query = "retry";
    const results = parseResults("TRY, HOPE, CHANGE");
    const passed = results.filter((result) =>
      filterResultRow({ query, result })
    );
    expect(passed.length).toBe(0);
  });
  it("should find the number", () => {
    const query = 44;
    const results = parseResults("TRY, HOPE, CHANGE");
    const passed = results.filter((result) =>
      filterResultRow({ query, result })
    );
    expect(passed.length).toBe(1);
  });
  it("should not find the number", () => {
    const query = 23;
    const results = parseResults("TRY, HOPE, CHANGE");
    const passed = results.filter((result) =>
      filterResultRow({ query, result })
    );
    expect(passed.length).toBe(0);
  });
});

describe("test parseCsv", () => {
  it("should return a clean array in the same case", () => {
    const csv = " danger, Success , wArn   , bob, MARY, Joe";
    const parsed = parseCsv(csv);
    expect(parsed[1]).toEqual("Success");
    expect(parsed[2]).toEqual("wArn");
  });

  it("should return a clean array in UpperCase when true flag is passed", () => {
    const csv = " danger, Success , wArn   , bob, MARY, Joe";
    const parsed = parseCsv(csv, true);
    expect(parsed[1]).toEqual("SUCCESS");
    expect(parsed[2]).toEqual("WARN");
  });
});

describe("test summerSort", () => {
  it("should remove duplicates from the word list", () => {
    const wordlist = "HOPE, HOPE, EAT, CHANGE, CHANGE";
    const summerSorted = summerSort(wordlist);
    const findHope = summerSorted
      .split(",")
      .map((word) => word.trim())
      .filter((word) => word === "HOPE");
    expect(findHope.length).toEqual(1);
  });
  it("should capitalize and sort the wordlist", () => {
    const wordlist = "hope, HOPE, EaT, changE, CHaNGE";
    const summerSorted = summerSort(wordlist).split(", ");
    expect(summerSorted[0]).toEqual("CHANGE");
    expect(summerSorted[1]).toEqual("EAT");
  });
});

describe("test parseResults", () => {
  it("should add the word to the results object", () => {
    const wordlist = "HOPE, EAT, CHANGE";
    const results = parseResults(wordlist);
    const filtered = results.filter((result) => result.word === "CHANGE");
    expect(filtered.length).toEqual(1);
  });
});
