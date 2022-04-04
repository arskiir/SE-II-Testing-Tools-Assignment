export const checkSorted = (arr: Array<number>): string => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return "incorrectly sorted";
    }
  }
  return "correctly sorted";
};
