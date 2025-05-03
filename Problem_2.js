function generateOddSeries(a) {
  let result = [];
  for (let i = 0; i < a; i++) {
      result.push(2 * i + 1);
  }
  console.log(result.join(', '));
}

// Example
generateOddSeries(4); // Output: 1, 3, 5, 7
