// Seleciona os elementos
const formulario = document.querySelector('#meuFormulario');
const campoNome = document.querySelector('#nome');
const mensagem = document.querySelector('#mensagem');

// Adiciona o evento de submissão ao formulário
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Previne o comportamento padrão de recarregar a página

    // Valida o campo de entrada
    if (campoNome.value.trim() === "") {
        mensagem.textContent = "Por favor, insira seu nome.";
        mensagem.className = "mensagem erro"; // Define a classe de erro
    } else {
        mensagem.textContent = "Formulário enviado com sucesso!";
        mensagem.className = "mensagem sucesso"; // Define a classe de sucesso
    }
});
