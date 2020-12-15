// Hoisting
teste();

function teste() {
  console.log("TESTE");
}

// Funções auto-invocáveis
(function (msg) {
  console.log(msg);
})("IIFE");

// Arguments
const sum = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let media = total / arr.length;
  return media.toFixed(2);
};

console.log(sum([10, 15, 7, 22]));

// Callback
function foo(callback) {
  let arr = [];
  let i = 0;
  while (i <= 10) {
    arr.push(parseInt(Math.random() * 10));
    i++;
  }
  typeof callback === "function"
    ? console.log(callback(arr))
    : console.log("Not a Function");
}

foo(sum);

function bar(x) {
  return function (y) {
    return x * y;
  };
}

const n = bar(10);
console.log(n(100));
