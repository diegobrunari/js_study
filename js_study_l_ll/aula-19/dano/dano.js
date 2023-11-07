const atacante = prompt("Digite o nick do atacante: ");
const atkPower = parseFloat(prompt("Digite o seu poder de ataque: "));
const defensor = prompt("Digite o nome do defensor");
let life = parseFloat(prompt("Digite a sua quantidade de vida do defensor: "));
const defensePower = parseFloat(
  prompt("Digite o poder de defesa do seu oponente: ")
);
const choiceShield = prompt("Ele tem escudo? (Sim/Não)");

let damage = 0;

if (atkPower > defensePower && choiceShield === "Não") {
  damage = atkPower - defensePower;
} else if (atkPower > defensePower && choiceShield === "Sim") {
  damage = atkPower - defensePower / 2;
}

life -= damage;

alert(atacante + " causou " + damage + " pontos de dano em " + defensor);
alert(
  atacante +
    "\nPoder de ataque: " +
    damage +
    "\n\n" +
    defensor +
    "\nPontos de vida: " +
    life +
    "\nPoder de defesa: " +
    defensePower +
    "\nPossui escudo: " +
    choiceShield
);
