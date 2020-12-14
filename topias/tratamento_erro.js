const sum = (a = 0, b = 0) => {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("O valor informado não é um número");
  }
  return a + b;
};

try {
  sum("a", 10);
} catch (e) {
  console.log(`Erro: ${e.message}`);
}
