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
const sum = function () {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};

console.log(sum(10, 15, 7, 22));
