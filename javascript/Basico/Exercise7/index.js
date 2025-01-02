function somarArray(numeros) {
    let soma = 0; // Inicializa a variável soma com 0
    
    // Percorre o array e soma cada número
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]; // Adiciona o valor atual do array à variável soma
    }
    
    return soma; // Retorna o total da soma
}

// Testando a função
console.log(somarArray([1, 2, 3, 4])); // Deve retornar 10
console.log(somarArray([5, 10, 15])); // Deve retornar 30
console.log(somarArray([])); // Deve retornar 0
