const arr = [
  ["Array bidimensional", 42, true], 
  ["Número 1", 42, false], 
  [2]
];

console.log(arr[1][2]);
console.table(arr);

arr.push(["Nova linha"]);
arr[1].push("Nova coluna");

console.table(arr);

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    const elemento = arr[i][j];
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento);
  }
  console.log(arr[i]);
}
