// Pedir ao usuário um número
let numero = prompt("Digite um número:");

// Converter o valor para número inteiro
numero = parseInt(numero);

// Verificar se é par ou ímpar
if (numero % 2 === 0) {
  console.log(numero + " é um número PAR.");
} else {
  console.log(numero + " é um número ÍMPAR.");
}
