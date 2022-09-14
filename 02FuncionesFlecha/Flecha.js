function SumaFuncionNormal(n1, n2) {
  return n1 + n2;
}
console.log(`SumaFuncionNormal(3,4): ${SumaFuncionNormal(3, 4)}`);

const SumaFuncionFlecha = (n1, n2) => n1 + n2;

console.log(`SumaFuncionFlecha(4,5): ${SumaFuncionFlecha(4, 5)}`);

const SumaFuncionFlecha1 = (n1, n2) => {
  return n1 + n2;
};

console.log(`SumaFuncionFlecha1(5,6):${SumaFuncionFlecha1(5, 6)}`);

const SumaFuncionFlecha2 = (n1, n2) => ({
  resultado: n1 + n2,
});

console.log(`SumaFuncionFlecha2(6,7):${SumaFuncionFlecha2(6, 7)}`);

const cuadroFuncionFlecha = (n1) => n1 ** 2;

console.log(`cuadroFuncionFlecha(6,7):${cuadroFuncionFlecha(3)}`);
