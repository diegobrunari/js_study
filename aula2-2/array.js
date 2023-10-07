const arr = [
  "Frodo",
  "Sam",
  "Merrry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

//Adicionar elementos (push) final
let tamanho = arr.push("Teste");
console.log(arr);
console.log(tamanho);

//(unshift) começo
tamanho = arr.unshift("Boromir");
console.log(arr);
console.log(tamanho);

//Remover elementos final (pop)
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

//começo (shift)
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

//Pesquisar por um Elemento (includes) retorna true of false
const inclui = arr.includes("Gandalf");
console.log(inclui);

//Pesquisar por um Elemento e saber posição no indice do array
const indice = arr.indexOf("Gandalf");
console.log(indice);

//Cortar e Concatenar o array
//cortar (slice)
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

//concatenar (concat)
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// Substituição dos Elementos
//(splice)
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, O Cinzento");
console.log(elementosRemovidos);

// Iterar sobre os elementos do array
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + " se encontra na posição " + indice);
}
