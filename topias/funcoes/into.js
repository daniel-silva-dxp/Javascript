// Hoisting
teste();

function teste() {
  console.log("TESTE");
}

// Funções auto-invocáveis
(function (msg) {
  console.log(msg);
})("IIFE");
