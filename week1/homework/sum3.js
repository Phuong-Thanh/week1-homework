const TYPE_NUMBER = "number";
export function sum3(a, b, c) {
  if (
    (a || a === 0) &&
    (b || b === 0) &&
    (c || c === 0) &&
    typeof a === TYPE_NUMBER &&
    typeof b === TYPE_NUMBER &&
    typeof b === TYPE_NUMBER
  ) {
    return a + b + c;
  }
  return false;
}
