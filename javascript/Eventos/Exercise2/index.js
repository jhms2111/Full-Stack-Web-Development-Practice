// Seleciona os elementos
const botaoAdicionar = document.querySelector('#adicionarTarefa');
const inputTarefa = document.querySelector('#tarefaInput');
const listaTarefas = document.querySelector('#listaTarefas');

// Adiciona o evento de clique para adicionar tarefas
botaoAdicionar.addEventListener('click', () => {
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa !== "") {
        // Cria um item de lista
        const novaTarefa = document.createElement('li');
        novaTarefa.innerText = textoTarefa;

        // Botão "Concluir"
        const botaoConcluir = document.createElement('button');
        botaoConcluir.innerText = "Concluir";
        botaoConcluir.addEventListener('click', () => {
            novaTarefa.classList.add('concluida'); // Marca como concluída
            listaTarefas.appendChild(novaTarefa); // Move para o final
        });

        // Botão "Excluir"
        const botaoExcluir = document.createElement('button');
        botaoExcluir.innerText = "Excluir";
        botaoExcluir.addEventListener('click', () => {
            novaTarefa.remove(); // Remove a tarefa
        });

        // Adiciona os botões à tarefa
        novaTarefa.appendChild(botaoConcluir);
        novaTarefa.appendChild(botaoExcluir);

        // Adiciona a tarefa à lista
        listaTarefas.appendChild(novaTarefa);

        // Limpa o campo de entrada
        inputTarefa.value = "";
    } else {
        alert("Por favor, insira uma tarefa válida.");
    }
});
