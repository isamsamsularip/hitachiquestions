function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function countPalindromicSubstrings(input) {
  const n = input.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const substring = input.slice(i, j);
      if (isPalindrome(substring)) {
        count++;
      }
    }
  }

  return count;
}

// Contoh input
const inputString = "aaa";
const result = countPalindromicSubstrings(inputString);
console.log("Jumlah substring palindromik:", result);
