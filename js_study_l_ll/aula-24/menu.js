let options = "5";

do {
  options = prompt(
    "Bem-vindo ao menu interativo.\n" +
      "Selecione a opção que deseja a seguir." +
      "\n1. Dia da semana" +
      "\n2. Mês" +
      "\n3. Ano" +
      "\n4. Estação" +
      "\n5. Encerrar o menu"
  );

  switch (options) {
    case "1":
      alert("Você escolheu os dias da semana");
      break;
    case "2":
      alert("Você escolheu os meses");
      break;
    case "3":
      alert("Você escolheu os anos");
      break;
    case "4":
      alert("Você escolheu as estações");
      break;
    case "5":
      alert("Você escolheu encerrar");
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida.");
  }
} while (options !== "5");
