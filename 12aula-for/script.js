// FOR - repeticao (loop)
// for ([inicializacao]; )

let numero = parseInt(prompt("Digite um número para gerar a tabuada"))

let tabuada = ""

for (let i = 1; i <= 10; i++) {
    tabuada = numero * i
    alert(`${numero} X ${i} = ${tabuada}`)
}