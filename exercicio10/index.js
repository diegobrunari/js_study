vagas = [];

function exibirMenu() {
  return prompt(
    "Postal de Vagas\n\n" +
    "1. Listar vagas disponíveis" +
    "\n2. Criar uma nova vaga" +
    "\n3. Visualizar uma vaga" + 
    "\n4. Inscrever um candidato em uma vaga" +
    "\n5. Excluir uma vaga" +
    "\n6. Sair"
  )
}

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ". "
    textoFinal += vaga.nome 
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal
  }, "")

  alert(vagasEmTexto)
}

function novaVaga() {
  const nome = prompt('Informe o nome da vaga: ');
  const descricao = prompt('Informe a descrição da vaga: ');
  const dataLimite = prompt('Informe a data limite para inscrição (dd/mm/aaaa): ');


  const confirmacao = confirm(
    'Salvar esta vaga?\n'+
    '\nNome da Vaga: ' + nome +
    '\nDescrição: ' + descricao +
    '\nData limite: ' + dataLimite 
  );

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: []}
    vagas.push(novaVaga);
    alert('A Vaga foi salva com sucesso!');
  }
}

function exibirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja exibir:");

  if(indice >= vagas.length || indice < 0) {
    alert("Indice inválido");
    return;
  }

  const vaga = vagas[indice];

  const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato) {
    return textoFinal + '\n -' + candidato
  }, "")

  alert(
    "Vaga nº " + indice +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData Limite: " + vaga.dataLimite +
    "\nQuantidade de candidatos: " + vaga.candidatos.length +
    "\nCandidatos incristos: " + candidatosEmTexto
  )
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do candidato(a): ")
  const indice = prompt('Informe o índice da vaga para qual o(a) candidato(a) quer se increver:')
  const vaga = vagas[indice];

  if(indice >= vagas.length || indice < 0) {
    alert("Indice inválido");
    return;
  }
  
  const confirmacao = confirm(
    "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" + "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
  )

  if (confirmacao){
    vaga.candidatos.push(candidato)
    alert("Inscrição realizada.")
  }
}

function excluirVaga(){
  const indice = prompt("Informa o índice da vaga que deseja excluir: ")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " + indice + "?\n" + 
    " Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + 
    "\nData limite: " + vaga.dataLimite
  )

  if (confirmacao) {
    vagas.splice(indice, 1)
    alert("Vaga excluída.")
  }
}

function executar() {
  let opcao = ""

  do {
  opcao = exibirMenu()
    switch (opcao) {
      case "1":
        listarVagas()
        break;
      case "2":
        novaVaga()
        break;
      case "3":
        exibirVaga()
        break;
      case "4":
        inscreverCandidato()
        break;
      case "5":
        excluirVaga()
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida.");
    }

  } while (opcao !== "6")
}

executar();