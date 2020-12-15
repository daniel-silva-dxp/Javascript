const getLength = function (arr) {
  return arr.length !== 0 ? true : false;
};

const isNumber = (val) => {
  return typeof val === "number" ? true : false;
};

const average = function () {
  if (!getLength(arguments)) throw new Error("Insert a value");

  let total = 0;
  let media = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (!isNumber(arguments[i]))
      throw new Error(`"${arguments[i]}": Not a number`);

    total += arguments[i];
  }
  media = total / arguments.length;
  return media;
};

try {
  console.log(average(2, 3, 4, 5));
} catch (e) {
  console.log(e.message);
}
