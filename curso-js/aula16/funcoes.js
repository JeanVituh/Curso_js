function multiplicacao(x, y) {
    const resultado = x * y;
    return resultado;

}
console.log(multiplicacao(3, 6));
console.log(multiplicacao(4, 8));
console.log(multiplicacao(2, 5));

// 1. A LÓGICA (A máquina de calcular)
const calculaRaiz = (n) => {
    return Math.sqrt(n);
};

// 2. A INTERAÇÃO (O operário que fala com o HTML)
function eventoClickBotao() {
    const input = document.getElementById('numeroUsuario');
    const valorDigitado = Number(input.value); 
    
    const resultado = calculaRaiz(valorDigitado); 
    
    alert("A raiz é: " + resultado); // Mostra para o usuário
}