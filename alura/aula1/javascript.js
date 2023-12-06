let anosLuz = '';
let metros = 9460536207068016;
let nome = '';

nome = prompt('Digite o seu nome :)')
anosLuz = prompt('Digite o valor em ANOS LUZ, que deseja converter para metros: ');

let valorConvertido = anosLuz * metros;

alert('Olá, ' + nome + ' o valor convertido é de ' + valorConvertido.toFixed(2) + ' metros.');

