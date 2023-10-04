let value = parseFloat(prompt("Informa a quantidade de dinheiro inicial:"));
let addValue = "";
let minValue = "";

do {
  options = prompt(
    "Bem-vindo(a)\n" +
      "Seu saldo disponível é de R$" +
      value +
      "\n" +
      "1. Adicionar saldo\n" +
      "2. Sacar dinheiro\n" +
      "3. Sair do aplicativo"
  );
  switch (options) {
    case "1":
      value += parseFloat(prompt("Quanto você deseja adicionar?"));
      break;
    case "2":
      value -= parseFloat(prompt("Quanto você deseja sacar?"));
      break;
    case "3":
      alert("Saindo do banco...");
      break;
    default:
      alert("Opção inválida.");
  }
} while (options !== "3");
