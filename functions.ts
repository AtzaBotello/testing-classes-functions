export class Calculator {
  add(a: number, b: number) {
    return a + b;
  }

  substract(a: number, b: number) {
    return a - b;
  }
}

export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function firstNumber(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error("Empty array");
  }

  return arr[0];
}