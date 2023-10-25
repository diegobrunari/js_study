opcao = ''

function areaTriangulo(b, a) {
  const triangulo = (b * a) / 2
  return triangulo
}

function areaRetangulo(b, a) {
  const retangulo = (b * a)
  return retangulo
}

function areaQuadrado(lado) {
  const quadrado = (lado * lado)
  return quadrado
}

function areaTrapezio(bMaior, bMenor, a) {
  const trapezio = (bMaior + bMenor) * a / 2
  return trapezio
}

function areaCirculo(raio) {
  pi = 3.14;
  const circulo = pi * (raio * raio)
  return circulo
}

do {
  opcao = prompt(
      "\n1. Calcular area do triangulo\n2. Calcular area do retangulo\n3. Calcular area do quadrado\n4. Calcular area do trapezio\n5. Calcular area do circulo\n6. Sair"
  )
  switch (opcao) {
    case "1":
    b = parseFloat(prompt('Digite a base do triangulo:'))
    a = parseFloat(prompt('Digite a altura do triangulo:'))
    alert('O resultado é: ' + areaTriangulo(b, a))
    break;
    case "2":
      b = parseFloat(prompt('Digite a base do triangulo:'))
      a = parseFloat(prompt('Digite a altura do triangulo:'))
      alert('O resultado é: ' + areaRetangulo(b, a))
      break;
    case "3":
      lado = parseFloat(prompt('Digite o tamanho da lateral do quadrado:'))
      alert('O resultado é: ' + areaQuadrado(lado))
      break;
    case "4":
      bMaior = parseFloat(prompt('Digite a base maior:'))
      bMenor = parseFloat(prompt('Digite a base menor:'))
      a = parseFloat(prompt('Digite a altura do trapezio:'))
      alert('O resultado é: ' + areaTrapezio(bMaior, bMenor, a))
      break;
    case "5":
      raio = parseFloat(prompt('Digite o tamanho do raio circular:'))
      alert('O resultado é: ' + areaCirculo(raio))
      break;
    case "6":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida.");

  }
} while (opcao !== "6")