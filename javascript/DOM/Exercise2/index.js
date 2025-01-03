document.querySelector('#botao').addEventListener('click', () => {
    const lista = document.querySelector('#lista');
    const novoItem = document.createElement('li');
    novoItem.innerText = "Novo Item";
    lista.appendChild(novoItem);
});
