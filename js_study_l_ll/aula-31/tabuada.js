let n = 0;
let tab = "";
n = prompt("Digite o número para ser multiplicado: ");

for (let i = 1; i <= 20; i++) {
  tab += "-> " + n + " * " + i + " = " + n * i + "\n";
}
alert("Tabuada do número " + n + ":\n\n" + tab);
