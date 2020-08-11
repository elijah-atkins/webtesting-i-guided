module.exports = {
  add,
};

// function add() {
//   let sum = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// function add(...values) {
// 	return values.reduce((a, b) => a + b, 0)
// }

function add(args) {
  const values = Array.isArray(args) ? args : Array.from(arguments);

  return values.reduce((acc, el) => { return acc + el }, 0)
}

function staticString() {
  return "this is a static"
}