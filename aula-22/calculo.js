const metro = parseFloat(
  prompt("Digite quantos metros você deseja converter: ")
);

const medida = parseFloat(
  prompt(
    "Digite qual medida você quer converter: \n1) mm\n2) cm\n3) dm\n4) dam\n5) hm\n6) km "
  )
);

switch (medida) {
  case 1:
    alert("Em milímetros o resultado é: " + metro * 1000);
    break;
  case 2:
    alert("Em centímetro o resultado é: " + metro * 100);
    break;
  case 3:
    alert("Em decímetro o resultado é: " + metro * 10);
    break;
  case 4:
    alert("Em decâmetro o resultado é: " + metro / 10);
    break;
  case 5:
    alert("Em hectômetro o resultado é: " + metro / 100);
    break;
  case 6:
    alert("Em quilômetro o resultado é: " + metro / 1000);
    break;
  default:
    alert("Opção inválida...");
}
