let cartas = [];
let opcao = "";

do {
  opcao = prompt(
    "Cartas no baralho: " +
      cartas.length +
      "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual é a carta?");
      cartas.push(novaCarta);
      break;
    case "2":
      const cartaPuxada = cartas.pop();
      if (!cartaPuxada) {
        alert("Não há nenhuma carta no baralho");
      } else {
        alert("A carta puxada foi: " + cartaPuxada);
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida.");
  }
} while (opcao !== "3");
