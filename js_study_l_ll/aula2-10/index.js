let imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Quantidade de imóveis: " +
      imoveis.length +
      "\n1. Você quer salvar este imóvel?\n2. Mostrar os imóveis salvos\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const novoImovel = {}

      novoImovel.proprietario = prompt('Informe o nome do proprietário: ');
      novoImovel.quartos = prompt('Informe o número de quartos: ');
      novoImovel.banheiros = prompt('Informe o número de banheiros: ');
      novoImovel.garagem = prompt('O imóvel tem garagem? (Sim/Não)');


      const confirmacao = confirm(
        'Salvar este imóvel?\n'+
        '\nProprietário: ' + novoImovel.proprietario +
        '\nQuartos: ' + novoImovel.quartos +
        '\nBanheiros' + novoImovel.banheiros +
        '\nPossui garagem? ' + novoImovel.garagem 
      );

      if (confirmacao) {
        imoveis.push(novoImovel);
        alert('Imóvel salvo com sucesso!');
      } else{
        alert('Voltando ao menu.');
      }

      break;

    case "2":;
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          'Imóvel ' + (i + 1) +
          '\nProprietário: ' + imoveis[i].proprietario +
          '\nQuartos: ' + imoveis[i].quartos + 
          '\nBanheiros: ' + imoveis[i].banheiros +
          '\nPossui garagem? ' + imoveis[i].garagem
        )
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida.");
  }
} while (opcao !== "3");