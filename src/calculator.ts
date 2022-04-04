export const calcuator = (x: number, y: number, operator: string): string => {
  let result: number;

  switch (operator) {
    case "+":
      result = x + y;
      break;

    case "-":
      result = x - y;
      break;

    case "*":
      result = x * y;
      break;

    case "/":
      result = x / y;
      break;

    default:
      return `Operation ${operator} not supported.`;
  }

  return `${x} ${operator} ${y} = ${result}`;
};
