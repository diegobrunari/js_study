const nome = prompt("Digite o seu primeiro nome");

const sobrenome = prompt("Digite o seu sobrenome");

const estudo = prompt("Digite o seu campo de estudo");

const nascimento = prompt("Digite o seu ano de nascimento");

alert(
  "Recruta cadastrado com sucesso! \n" +
    "\nNome completo: " +
    nome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    estudo +
    "\nIdade: " +
    (2023 - nascimento)
);
