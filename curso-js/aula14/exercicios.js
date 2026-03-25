const numero = Number(prompt('digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `seu numero * 2 é ${numero * 2}</p>`;
texto.innerHTML += `raiz quadrada é ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `${numero} é inteiro?${Number.isInteger(numero)} </p>`;
texto.innerHTML += `${numero} é NaN?:${Number.isNaN(numero)} </p>`;
texto.innerHTML += `arredodando pra baixo ${Math.floor(numero)}</p>`;
texto.innerHTML += `arredodando pra cima ${Math.ceil(numero)}</p>`;
texto.innerHTML += `com duas casa decimais é: ${numero.toFixed(2)}`;

