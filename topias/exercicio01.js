const tabuada = (val) => {
  let i = 0;
  while (i <= 10) {
    let mult = val * i;
    console.log(`${val} X ${i} = ${mult}`);
    i++;
  }
};

tabuada(10);
tabuada(2);
