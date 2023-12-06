const input = document.getElementById('input');

document.getElementById('valueBtn').addEventListener('click', function () {
  input.value = input.value === '' ? 'Olá mundo!' : '';

})

document.getElementById('typeBtn').addEventListener('click', function() {
  input.type = input.type !== 'radio' ? 'radio' : 'text'
})

document.getElementById('placeBtn').addEventListener('click', function() {
  input.placeholder = 'Digite algo...'
})

document.getElementById('disableBtn').addEventListener('click', function() {
 input.setAttribute('disabled', !input.disabled);
})

document.getElementById('dataBtn').addEventListener('click', function() {
  console.log(input.dataset.something);
  input.dataset.something = 'Algum outro valor..';
  console.log(input.dataset.something)
})


