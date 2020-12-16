const getElement = (element) => document.querySelector(element);

const isNumber = (number) => (typeof number === "number" ? true : false);

const isPositiveValue = (number) => (Math.sign(number) === 1 ? true : false);

const addClassElement = (element, className) => {
  element.classList.add(className);
};

const removeClassElement = (element, className) => {
  element.classList.remove(className);
};

const inputValueValidate = (element) => {
  const input = getElement(element);
  const error = getElement(".error");
  if (!input.value) {
    addClassElement(error, "erro-in");
    error.innerHTML = `<p>Preencha o campo ${input.name}<p>`;
    setTimeout(() => {
      addClassElement(error, "erro-out");
      removeClassElement(error, "erro-in");
      setTimeout(() => {
        removeClassElement(error, "erro-in");
        removeClassElement(error, "erro-out");
      }, 100);
    }, 3000);
  }
};

const btn = getElement(".btn");

btn.addEventListener("click", (e) => {
  inputValueValidate("#peso");
});
