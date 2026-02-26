/*
Jean Vitor tem 22 anos e pesa 80 kilos
tem 1.75 de altura e seu IMC é de 26.122448979591837
Jean nasceu em 2004
*/
const nome = 'Jean';
const sobrenome = 'Vitor';
const idade = 22;
const peso = 80;
const alturaemM = 1.75; // Corrigido para metros (ao invés de cm)
let IMC; // peso / (altura * altura)
let anoNascimento;

IMC = peso / (alturaemM * alturaemM);
anoNascimento = 2026 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos e pesa', peso, 'kilos')
console.log(`tem ${alturaemM} de altura e seu IMC é de ${IMC}`) // OUTRA MANEIRA DE FAZER
console.log(`${nome} nasceu em ${anoNascimento}`);