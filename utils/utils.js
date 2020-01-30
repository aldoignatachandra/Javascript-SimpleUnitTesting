//Add Function
module.exports.add = (a, b) => a + b;

//Square Function
module.exports.square = x => Math.pow(x, 2);

//Async Add Function
module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

//Async Add Function
module.exports.asyncSquare = (a, b, callback) => {
  setTimeout(() => {
    callback(a * b);
  }, 1000);
};
