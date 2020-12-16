const getElement = (element) => document.querySelector(element);
const getAllElement = (element) => document.querySelectorAll(element);

const isNotEmpty = (value) => (value || value <= 20 ? true : false);

const isPositiveValue = (number) => (Math.sign(number) === 1 ? true : false);

const addClassElement = (element, className) =>
  element.classList.add(className);

const removeClassElement = (element, className) =>
  element.classList.remove(className);

const inputValueValidate = (element) => {
  const input = getElement(element);
  return input.value ? true : false;
};

const getBmi = (weight, height) => {
  const mt = height / 100;
  const bmi = weight / (mt * mt);
  return bmi.toFixed(2);
};

const murkupP = (msg) => `<p>${msg}</p>`;

const btn = getElement(".btn");

const run = () => {
  let input = getAllElement("input[type='number']");
  const arr = Array.from(input);

  console.log(arr);
  for (let i in arr) {
    let n = parseInt(arr[i].value);

    if (!isNotEmpty(n)) throw new Error(`Preencha o campo ${arr[i].name}`);

    if (!isPositiveValue(n))
      throw new Error(`O ${arr[i].name} precisa ser positivo inteiro`);
  }
};

btn.addEventListener("click", (e) => {
  run();
});

// addClassElement(error, "erro-in");
//     error.innerHTML = `<p>Preencha o campo ${input.name}<p>`;
//     setTimeout(() => {
//       addClassElement(error, "erro-out");
//       removeClassElement(error, "erro-in");
//       setTimeout(() => {
//         removeClassElement(error, "erro-in");
//         removeClassElement(error, "erro-out");
//       }, 100);
//     }, 3000);
