const http = require('http');
let fact = 1;
const factorial = (number) => {
    if (number !== 0) {
        fact *= number;
        factorial(--number);
    }
    return fact;
} 
http.createServer( (req, res) =>{
    console.log(factorial(5));
}).listen(1000);
console.log('Server started listening to port 1000');