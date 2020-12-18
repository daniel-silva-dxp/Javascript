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

const getBmi = (weight, height) => {
  const mt = height / 100;
  const bmi = weight / mt ** 2;
  return parseFloat(bmi.toFixed(2));
};

function getNivelBmi(value) {
  const nivel = [
    { txt: "Abaixo do peso", class: "baixo" },
    { txt: "Peso normal", class: "normal" },
    { txt: "Sobrepeso", class: "sobrepeso" },
    { txt: "Obesidade grau I", class: "obesidade-um" },
    { txt: "Obesidade grau II", class: "obesidade-dois" },
    { txt: "Obesidade grau III", class: "morbida" },
  ];

  if (value >= 39.9) return nivel[5];
  if (value >= 34.9) return nivel[4];
  if (value >= 29.9) return nivel[3];
  if (value >= 24.9) return nivel[2];
  if (value >= 18.5) return nivel[1];
  if (value < 18.5) return nivel[0];
}

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

const renderBim = (name, bmi) => {
  const el = getElement(".wrap-imc");
  el.innerHTML = murkup(`${name}, seu IMC é: ${bmi} - ${getNivelBmi(bmi).txt}`);
  el.classList.add("fade-in");
  el.classList.add(getNivelBmi(bmi).class);

  setTimeout(() => {
    removeClass(el, "fade-in");
    removeClass(el, getNivelBmi(bmi).class);
  }, 5000);
};

const removeClass = (element, className) => element.classList.remove(className);

const form = getElement(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
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

    renderBim(inputs[0].value, getBmi(peso, altura));
  } catch (e) {
    console.log(e.message);
  }
});
