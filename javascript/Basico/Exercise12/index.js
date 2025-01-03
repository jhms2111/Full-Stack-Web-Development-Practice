let mensagem = "Eu sou global";

function modificarMensagem() {
    let mensagem = "Eu sou local";
    console.log(mensagem); // O que será exibido aqui?
}

modificarMensagem();
console.log(mensagem); // E aqui?
