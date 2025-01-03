
const botao = document.querySelector('#botao')
const lista = document.querySelector('#lista')
const itemInput = document.querySelector('#itemInput')


botao.addEventListener('click', () => {
    const textItem = itemInput.value.trim();
    if (textItem !== "") {
        const novoItem = document.createElement('li');
        novoItem.innerText = textItem;
        lista.appendChild(novoItem);
        

const botaoRemover = document.createElement('button')
botaoRemover.innerText = "Remover"



botaoRemover.addEventListener('click', () => {
    novoItem.remove()
});

novoItem.appendChild(botaoRemover)


lista.appendChild(novoItem)


itemInput.value = "";  

} else {
        alert("Digite um nome valido")
    }
})
