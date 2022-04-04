export const sumPrimes = (x: number, y: number) => {
  let sum = 0;
  let secret = 0;
  let isPrime = true;

  if (x % 2 == 0 && y % 2 == 0) {
    secret = 1;
  } else if (x % 2 != 0 && y % 2 == 0) {
    secret = 2;
  } else if (x % 2 == 0 && y % 2 != 0) {
    secret = 3;
  } else {
    secret = 4;
  }

  for (let num = x > 1 ? x : 2; num <= y; num++) {
    isPrime = true;

    for (let k = 2; k < num; k++) {
      if (num % k == 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      sum += num;
    }
  }

  return sum * secret;
};
