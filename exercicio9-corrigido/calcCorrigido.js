function areaTriangulo(b, a) {
  b = parseFloat(prompt('Digite a base do triangulo:'))
  a = parseFloat(prompt('Digite a altura do triangulo:'))
  return b * a / 2
}

function areaRetangulo(base, altura) {
  base = parseFloat(prompt('Digite a base do triangulo:'))
  altura = parseFloat(prompt('Digite a altura do triangulo:'))
  return base * altura
}

function areaQuadrado(lado) {
  lado = parseFloat(prompt('Digite o tamanho da lateral do quadrado:'))
  return lado * lado
}

function areaTrapezio(bMaior, bMenor, a) {
  bMaior = parseFloat(prompt('Digite a base maior:'))
  bMenor = parseFloat(prompt('Digite a base menor:'))
  altura = parseFloat(prompt('Digite a altura do trapezio:'))  
  return (bMaior + bMenor) * altura / 2
}

function areaCirculo(raio) {
  raio = parseFloat(prompt('Digite o tamanho do raio circular:'))
  return (3.14 * raio * raio)
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n\n1. Calcular area do triangulo\n2. Calcular area do retangulo\n3. Calcular area do quadrado\n4. Calcular area do trapezio\n5. Calcular area do circulo\n6. Sair"
  )
}

function executar() {
  let opcao = ""

  do {
  opcao = exibirMenu()
  let resultado
    switch (opcao) {
      case "1":
      resultado = areaTriangulo()
      break;
      case "2":
        resultado = areaRetangulo()
        break;
      case "3":
        resultado = areaQuadrado()
        break;
      case "4":
        resultado = areaTrapezio()
        break;
      case "5":
      resultado = areaCirculo()
      break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida.");
    }

    if (resultado) {
      alert('Resultado: ' + resultado);
    }
    
  } while (opcao !== "6")
}

executar()