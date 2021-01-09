import letterSummerCore from "../lib/letter-summer-core";

test("french fries english ordinal is 111", () => {
  const result = letterSummerCore("french fries");
  expect(result.english).toEqual(111);
});

test("it only works on letters", () => {
  const result = letterSummerCore("100 french fries");
  expect(result.english).toEqual(111);
});

test("garbage input returns 0", () => {
  const result = letterSummerCore(";;;;;;^^^   &&&__  ___&&");
  expect(result.english).toEqual(0);
  expect(result.englishReversed).toEqual(0);
  expect(result.reduction).toEqual(0);
  expect(result.reductionReversed).toEqual(0);
});

test("empty returns 0", () => {
  const result = letterSummerCore("");
  expect(result.english).toEqual(0);
  expect(result.englishReversed).toEqual(0);
  expect(result.reduction).toEqual(0);
  expect(result.reductionReversed).toEqual(0);
});

test("Hourglass is 123 in reverse ordinal", () => {
  const result = letterSummerCore("Hourglass");
  expect(result.englishReversed).toEqual(123);
});

test("volCano is 28 in reduced", () => {
  const result = letterSummerCore("volCano");
  expect(result.reduction).toEqual(28);
});

test("Indian Ocean is 64 in reverse reduced", () => {
  const result = letterSummerCore("Indian Ocean");
  expect(result.reductionReversed).toEqual(64);
});
