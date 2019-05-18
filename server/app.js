import express from 'express';
import factorial from './controllers/factorial';
const app = express();
const route = express.Router();

app.use(route)
app.listen(3000, () => console.log('Server started listening to port 1000'))

route.get('/', function (req, res) {
  res.send("To get factorial of a number use route factorial/3 [change to any number you want]")
})

route.get('/factorial/:number', function (req, res) {
  res.send(`Factorial of ${req.params.number} is ${factorial(req.params.number)}`);
})
