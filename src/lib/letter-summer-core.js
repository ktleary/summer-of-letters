const english = "abcdefghijklmnopqrstuvwxyz";
const englishReversed = english.split("").reverse().join("");

const calculateOrdinal = ({ word, key }) =>
  word
    .split("")
    .reduce((ag, char) => (ag += key.indexOf(char.toLowerCase()) + 1 || 0), 0);

const parseTwo = (twodigits, place) =>
  Number(twodigits.toString().charAt(place));

const calculateReduction = ({ word, key }) =>
  word.split("").reduce((ag, char) => {
    const count = key.indexOf(char.toLowerCase()) + 1 || 0;
    let result = count > 9 ? parseTwo(count, 0) + parseTwo(count, 1) : count;
    return (ag +=
      result > 9 ? parseTwo(result, 0) + parseTwo(result, 1) : result);
  }, 0);

const letterSummerCore = (word) => ({
  word: word,
  sums: {
    english: calculateOrdinal({ word, key: english }),
    englishReversed: calculateOrdinal({ word, key: englishReversed }),
    reduction: calculateReduction({ word, key: english }),
    reductionReversed: calculateReduction({ word, key: englishReversed }),
  },
});

export default letterSummerCore;
