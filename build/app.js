'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _factorial = require('controllers/factorial');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var route = _express2.default.Router();

route.get('/', function (req, res) {
  res.send('Factorial of 5 is ' + (0, _factorial.factorial)(5));
  fact = 1;
});
app.use(route);
app.listen(1000, function () {
  return console.log('Server started listening to port 1000');
});
//# sourceMappingURL=app.js.map