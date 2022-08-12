// Armazenando uma função em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(2, 3)

// Retorno Implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2,3))
