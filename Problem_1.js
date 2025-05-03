class Calculator {
  calculate(a, b, operation) {
      switch(operation.toLowerCase()) {
          case 'add': return a + b;
          case 'subtract': return a - b;
          case 'multiply': return a * b;
          case 'divide': return b !== 0 ? a / b : 'Cannot divide by zero';
          default: return 'Invalid operation';
      }
  }
}

// Example
const calc = new Calculator();
console.log(calc.calculate(1, 5, 'add'));      // 6
console.log(calc.calculate(5, 5, 'subtract')); // 0
console.log(calc.calculate(10, 5, 'multiply')); // 50
console.log(calc.calculate(5, 0, 'divide'));   // Cannot divide by zero
