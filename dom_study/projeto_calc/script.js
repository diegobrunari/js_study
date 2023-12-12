const input = document.getElementById('input');
const root = document.querySelector(':root');
const main = document.querySelector('main');
const resultInput = document.getElementById('result');
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];


document.querySelectorAll('.charKey').forEach((charKeyBtn) => {
  charKeyBtn.addEventListener('click', () => {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  })
})

document.getElementById('clear').addEventListener('click', () => {
  input.value = '';
  resultInput.value = '';
  resultInput.classList.remove('error');
  document.getElementById('copyToClipboard');
  copyToClipboard.classList.remove("success");
  copyToClipboard.innerText = 'Copy';
  input.focus();
})

input.addEventListener('keydown', (ev) => {
  ev.preventDefault();

  if(allowedKeys.includes(ev.key)){
    input.value += ev.key;
    return;
  }

  if(ev.key === 'Backspace'){
    input.value = input.value.slice(0, -1);
  }

  if(ev.key === 'Enter'){
    calculate();
  }
})

function calculate() {
  resultInput.value = 'ERROR';
  resultInput.classList.add('error');
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove('error');
}

document.getElementById('equal').addEventListener('click', calculate);

document.getElementById('copyToClipboard').addEventListener('click', (ev) => {
  const button = ev.currentTarget;
  if (button.innerText === 'Copy'){
    button.innerText = 'Copied!';
    button.classList.add('success');
    navigator.clipboard.writeText(resultInput.value);
  } else {
    button.innerText = 'Copy';
    button.classList.remove('success');
  }
})

document.getElementById('themeSwitcher').addEventListener('click', () => {
  if(main.dataset.theme === 'dark') {
    root.style.setProperty("--bg-color", "#e7e1cf");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#fa8585");
    main.dataset.theme = 'light';
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
})