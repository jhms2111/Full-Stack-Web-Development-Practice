function somarArray(numeros) {
    return numeros.reduce((soma, numero) => soma + numero, 0);
}

// Testando a função
console.log(somarArray([1, 2, 3, 4])); // Deve retornar 10
console.log(somarArray([5, 10, 15])); // Deve retornar 30
console.log(somarArray([])); // Deve retornar 0
