const botao = document.querySelector('#botao');
const lista = document.querySelector('#lista');
const itemInput = document.querySelector('#itemInput');

botao.addEventListener('click', () => {
    const textItem = itemInput.value.trim();

    if (textItem !== "") {
        // Cria um novo item da lista
        const novoItem = document.createElement('li');
        novoItem.innerText = textItem;

        // Cria o botão de remover
        const botaoRemover = document.createElement('button');
        botaoRemover.innerText = "Remover";
        botaoRemover.style.marginLeft = "10px";

        // Adiciona funcionalidade ao botão de remover
        botaoRemover.addEventListener('click', () => {
            novoItem.remove(); // Remove o item
        });

        // Cria o botão de editar
        const botaoEditar = document.createElement('button');
        botaoEditar.innerText = "Editar";
        botaoEditar.style.marginLeft = "10px";

        // Adiciona funcionalidade ao botão de editar
        botaoEditar.addEventListener('click', () => {
            const novoTexto = prompt("Edite o texto:", novoItem.firstChild.textContent);
            if (novoTexto && novoTexto.trim() !== "") {
                novoItem.firstChild.textContent = novoTexto.trim(); // Atualiza o texto
            } else {
                alert("Texto inválido. Edição cancelada.");
            }
        });

        // Adiciona os botões ao item
        novoItem.appendChild(botaoRemover);
        novoItem.appendChild(botaoEditar);

        // Adiciona o item à lista
        lista.appendChild(novoItem);

        // Limpa o campo de entrada
        itemInput.value = "";
    } else {
        alert("Digite um texto válido!");
    }
});
