const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("O valor informado não é um número");
  }
  return a + b;
};

try {
  const val = sum("5", 10);
  console.log(val);
} catch (e) {
  console.log(`Erro: ${e.message}`);
}
