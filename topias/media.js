function medial() {
  let total = 0;
  let i = 0;
  while (arguments[i]) {
    total += arguments[i];
    i++;
  }

  return total / arguments.length;
}

console.log(medial(2, 3, 4, 5));
