const getElement = (element) => document.querySelector(element);
const getAllElement = (element) => document.querySelectorAll(element);

const isNotEmpty = () => {
  let element = getAllElement("input");
  element = Array.from(element);

  return element.map((el) => {
    return el.value
      ? { name: el.name, value: el.value, isEmpty: true }
      : { name: el.name, value: el.value, isEmpty: false };
  });
};

const isPositiveValue = (num) => (Math.sign(num) === 1 ? true : false);

const getWeightAndHeight = (arr) => {
  return arr.filter((el) => {
    if (el.name === "peso" || el.name === "altura") {
      el.value = parseFloat(el.value);
      return el;
    }
  });
};

const murkup = (msg) => `<p>${msg}</p>`;

const renderError = (value) => {
  let err = getAllElement(`[data-for='${value}']`);
  err = Array.from(err);

  err[0].classList.remove("display-none");
  err[0].classList.add("error");
};

const removeError = (value) => {
  let err = getAllElement(`[data-for='${value}']`);
  err = Array.from(err);

  err[0].classList.add("display-none");
  err[0].classList.remove("error");
};

const getBmi = (weight, height) => {
  const mt = height / 100;
  const bmi = weight / (mt * mt);
  return parseFloat(bmi.toFixed(2));
};

const run = () => {
  const inputs = isNotEmpty();
  inputs.map((input) => {
    if (!input.isEmpty) {
      renderError(input.name);
    } else {
      removeError(input.name);
    }
  });

  const [weight, height] = getWeightAndHeight(inputs);
  const { value: peso } = weight;
  const { value: altura } = height;

  console.log(getBmi(peso, altura));
};

const btn = getElement(".btn");

btn.addEventListener("click", (e) => {
  try {
    run();
  } catch (e) {
    console.log(e.message);
  }
});
