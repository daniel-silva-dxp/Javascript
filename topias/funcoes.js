// Declaração de função
function sum(a, b) {
  console.log(a + b);
}

sum(10, 15);

// Expressão de função
const multiply = function (a, b) {
  console.log(a * b);
};

multiply(5, 10);

// Arrow functions
const sub = (a, b) => console.log(a - b);

sub(10, 20);

// Funções com retorno
const div = (a = 1, b = 0) => a / b;

console.log(div(5, 10));

// Funções com parâmetros
const message = (msg = "Não recebi valor") => msg;

console.log(message(), message("Olá Mundo!"));
