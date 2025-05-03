function generateOddOnlyIfInputOdd(a) {
  let n = a % 2 === 0 ? a - 1 : a;
  let result = [];
  for (let i = 0; i < n; i++) {
      result.push(2 * i + 1);
  }
  console.log(result.join(', '));
}

// Example
generateOddOnlyIfInputOdd(4); // Output: 1, 3, 5
generateOddOnlyIfInputOdd(5); // Output: 1, 3, 5, 7, 9
