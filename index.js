const text = document.querySelector('#textbox');
const letra = document.querySelector('#letra');
const btn = document.querySelector('#btn');
const letraf = document.querySelector('#letraf');

var letras = [
  'T',
  'R',
  'W',
  'A',
  'G',
  'M',
  'Y',
  'F',
  'P',
  'D',
  'X',
  'B',
  'N',
  'J',
  'Z',
  'S',
  'Q',
  'V',
  'H',
  'L',
  'C',
  'K',
  'E',
  'T',
];

btn.addEventListener('click', () => {
  if (text.value <= 99999999 && text.value >= 0 && text.value !== '') {
    if (text.value % 1 === 0) {
      letraDni = letras[text.value % 23];
      document.getElementById('letra').style.display = 'block';
      letra.innerHTML = `LA LETRA DE TU DNI ES LA`;
      letraf.innerHTML = `${letraDni}`;
    } else {
      alert('No se admiten números decimales en este campo');
    }
  } else {
    alert('Tienes que introducir un valor comprendido entre 0 y 99999999');
  }
});

text.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    btn.click();
  }
});
