// Array
const arr = new Array("Daniel", 33, true);
arr[3] = {
  endereco: {
    rua: "Renato Alpino Dela Lata",
    numero: 100,
    cidade: "Suzano",
    estado: "São Paulo",
    cep: 08690015,
  },
};

console.log(arr);

// Array Literal
const arr2 = [
  "Flávia",
  26,
  true,
  {
    endereco: {
      rua: "Renato Alpino Dela Lata",
      numero: 100,
      cidade: "Suzano",
      estado: "São Paulo",
      cep: 08690015,
    },
  },
];

console.log(arr2);

// Calculando média de um array

const n = [2, 3, 4, 10];

function avg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(avg(n));
