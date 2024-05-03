// array é uma estrutura para guardar uma ou mais palavras ou informacoes.

let frutas = ["banana", "maçã", "abacaxi", "uva", "melancia", ]
let tamanho = frutas.length
console.log(tamanho)

// // prinmeiro metodo que add no fim
// let push = frutas.push("melancia")
// console.log(frutas)

// // adiciona no inicio
// frutas.unshift("uva")
// console.log(frutas)

// //  remover final
// frutas.pop()
// console.log(frutas)

// // remover inicio
// frutas.shift()
// console.log(frutas)

// // pesquisar um elemento INCLUIDO
// let inclui = frutas.includes("banana")
// console.log(inclui)

// // encontrar indice
// let indice = frutas.indexOf("banana")
// console.log(indice)

// // slice - copia uma parte do array
// let copia = frutas.slice(0, 2)
// console.log(copia)

// // concat vai concatenar arrays

// let saladaFruta = copia.concat(frutas, "kiwi")
// console.log(saladaFruta )

// // splice - remover elementos em qualquer pos

// let remover = frutas.splice(3,3)
// console.log(remover)
// console.log(frutas)


for (let i = 0; i < frutas.length; i++){ 
    let elemento = frutas[i]
    console.log(elemento + "esta na posicao" + i)
}