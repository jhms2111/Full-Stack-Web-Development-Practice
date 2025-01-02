        // Seleciona os elementos
        const botao = document.getElementById('botao');
        const titulo = document.getElementById('titulo');
        const inputTexto = document.getElementById('inputTexto');

        // Adiciona um evento de clique ao botão
        botao.addEventListener('click', function () {
            const novoTexto = inputTexto.value; // Pega o valor digitado no input
            if (novoTexto.trim() !== '') { // Verifica se o input não está vazio
                titulo.innerText = novoTexto; // Altera o texto do título
                inputTexto.value = ''; // Limpa o campo de entrada
            } else {
                alert('Por favor, insira um texto para alterar o título!');
            }
        });