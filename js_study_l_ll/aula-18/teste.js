const n1 = prompt("Digite sua idade: ");

const idade = parseFloat(n1);

/* if (n1 >= 18) {
  alert("Você é maior de idade");
} else {
  if (n1 < 18) {
    alert("Você é menor de idade");
  }
} */

if (n1 >= 18) {
  alert("Você é maior de idade");
} else if (n1 >= 12) {
  alert("Você é menor de idade");
} else if (n1 > 4) {
  alert("Você é uma criança");
}

// maneira mais fácil de fazer estruturas condicionais..
const resultado = 6 === 6 ? "Verdadeiro" : "Falso";

console.log(resultado);
