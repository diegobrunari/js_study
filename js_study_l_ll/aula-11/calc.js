const x = prompt("Informe o primeiro número");
const y = prompt("Informe o segundo número");

const n1 = parseFloat(x);
const n2 = parseFloat(y);

const soma = n1 + n2;
const subtracao = n1 - n2;
const multiplicacao = n1 * n2;
const divisao = n1 / n2;

alert(
  "Resultados: \n" +
    "\n Soma: " +
    soma +
    "\nSubtração: " +
    subtracao +
    "\nMultiplicação: " +
    multiplicacao +
    "\nDivisão: " +
    divisao
);
