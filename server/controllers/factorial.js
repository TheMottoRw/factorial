
const factorialCalculation = (number) => {
    let fact = 1;
    for (let i = number; i > 0; i--){
        fact*=i;
    }
    return fact;
  };
export default factorialCalculation;
