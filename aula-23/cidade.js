const turist = prompt("Digite o seu nome: ");
let question = parseFloat(
  prompt("Você já visitou alguma cidade? \n1. Sim\n2. Não")
);

let cities = "";
let count = 0;

while (question === 1) {
  let visitedCity = prompt("Qual a cidade que você visitou?");
  cities += " - " + visitedCity + "\n";
  count++;
  question = parseFloat(prompt("Você deseja continuar? \n1. Sim\n2. Não"));
}

alert(
  "Turista: " +
    turist +
    "\nQuantidade de cidades visitadas: " +
    count +
    "\nCidades visitadas:\n" +
    cities
);
