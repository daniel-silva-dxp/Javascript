const getLength = function (weight, height) {
  return weight && height ? true : false;
};

const isNumber = (val) => {
  return typeof val === "number" ? true : false;
};

const toCm = (height) => height / 100;

const imc = (weight, height) => {
  if (!getLength(weight, height)) throw new Error("Insert weight and height");

  if (!isNumber(weight) || !isNumber(height))
    throw new Error("Insert a number");

  let imc = weight / (toCm(height) * toCm(height));
  return `IMC: ${imc.toFixed(2)}`;
};

try {
  console.log(imc(94, 180));
} catch (e) {
  console.log(e.message);
}
