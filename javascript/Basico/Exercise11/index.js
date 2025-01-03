function criarContador() {
    let contador = 0; 
    return function() {
        contador++ ;
        return contador;
    }
}

const contador1 = criarContador();
console.log(contador1());
console.log(contador1());