function minSumOfPairs(arr) {
  arr.sort((a, b) => a - b);  // Urutkan array dari yang terkecil ke terbesar
  let totalSum = 0;
  
  for (let i = 0; i < arr.length; i += 2) {
    totalSum += arr[i];
  }
  
  return totalSum;
}

// Contoh input
const inputArray = [1, 4, 3, 2];
const result = minSumOfPairs(inputArray);
console.log("Jumlah minimum dari pasangan-pasangan adalah:", result);
