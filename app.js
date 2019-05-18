import http from 'http';
export const factorial = (number) => {
    let fact = 1;
    if (number !==0) {
        fact += number;
        factorial(--number);
    }
    return fact;
} 
http.createServer(3000, () =>{
    
})