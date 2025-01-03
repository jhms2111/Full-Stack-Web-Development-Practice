const botao = document.querySelector('#botao')
const lista = document.querySelector('#lista')
const itemInput = document.querySelector('#itemInput')

botao.addEventListener('click', () => {
    const textItem = itemInput.value.trim();
    if (textItem !== "") {
        const novoItem = document.createElement('li');
        novoItem.innerText = textItem;
        lista.appendChild(novoItem)
        itemInput.value =  ""
    } else {
        alert("Por favor insira dados validos!")
    }
})

