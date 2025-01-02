function cumprimentar(nome) {
    // Verifica se o nome é válido
    if (nome && nome.trim() !== '') {
        console.log(`Olá, ${nome}!`); // Saudação se o nome for válido
    } else {
        console.log('Por favor, forneça um nome válido.'); // Mensagem de erro se o nome for inválido
    }
}

// Exemplos de uso
cumprimentar('João'); // Exibe: Olá, João!
cumprimentar('');     // Exibe: Por favor, forneça um nome válido.
cumprimentar(null);   // Exibe: Por favor, forneça um nome válido.
