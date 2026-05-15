export function findMax(arr) {
  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }

  return Math.max(...arr);
}

// What to test
// positive numbers
// negatives
// single value
// duplicates
// empty array
