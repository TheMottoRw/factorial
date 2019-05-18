let fact = 1;

export const factorial = (number) => {
    if (number !== 0) {
        fact *= number;
        factorial(--number);
    }
    return fact;
  };
