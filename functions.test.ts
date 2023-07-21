import { capitalize, multiply, Calculator, firstNumber } from "./functions";

test("should add two numbers correctly", () => {
  const calculator = new Calculator();
  const result = calculator.add(2,3);
  expect(result).toBe(5);
});

test("should subtract two numbers correctly", () => {
  const calculator = new Calculator();
  const result = calculator.substract(5,3);
  expect(result).toBe(2);
});

test("capitalize function capitalizes the first letter of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("multiply function multiplies two numbers correctly", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("return the first number in an array", () => {
  expect(firstNumber([1,2,3])).toBe(1);
});

test("return error for empty array", () => {
  expect(() => firstNumber([])).toThrow("Empty array");
});