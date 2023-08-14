const phoneDigitsToLetters = {
  "0": " ",
  "1": "",
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};

function letterCombinationsRecursive(digits, currentIndex, currentCombination, result) {
  if (currentIndex === digits.length) {
    if (currentCombination !== "") {
      result.push(currentCombination);
    }
    return;
  }

  const currentDigit = digits[currentIndex];
  const letters = phoneDigitsToLetters[currentDigit];

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    letterCombinationsRecursive(digits, currentIndex + 1, currentCombination + letter, result);
  }
}

function letterCombinations(input) {
  const result = [];
  if (input.length === 0) {
    return result;
  }

  letterCombinationsRecursive(input, 0, "", result);
  return result;
}

// Contoh input
const inputDigits = "23";
const output = letterCombinations(inputDigits);
console.log("Hasil kombinasi huruf/angka:", output);
