const nomePrimeiro = prompt("Digite o nome do primeiro veículo: ");
const velo1 = parseFloat(
  prompt("Digite a velocidade máxima do primeiro veículo: ")
);

const nomeSegundo = prompt("Digite o nome do segundo veículo: ");
const velo2 = parseFloat(
  prompt("Digite a velocidade máxima do segundo veículo: ")
);

if (velo1 > velo2) {
  alert("O primeiro veículo é mais rápido!");
} else if (velo1 === velo2) {
  alert("A velocidade dos veículos são iguais!");
} else {
  alert("O segundo veículo é mais rápido!");
}
