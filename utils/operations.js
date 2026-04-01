function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

function subtract(numbers) {
  return numbers.slice(1).reduce((res, num) => res - num, numbers[0]);
}

function multiply(numbers) {
  return numbers.reduce((res, num) => res * num, 1);
}

function divide(numbers) {
  return numbers.slice(1).reduce((res, num) => res / num, numbers[0]);
}

module.exports = { add, subtract, multiply, divide };