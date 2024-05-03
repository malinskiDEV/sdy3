const palavra = prompt("Informe a palavra")

let palavraInvretida=""

for (let i = palavra.length-1; i >= 0; i--) {
    
    palavraInvretida += palavra[i]
}
if (palavra == palavraInvretida) {
    alert(`${palavra} é um palíndromo!`);
} else {
    alert(`${palavra} não um Palíndromo! --> ${palavraInvretida}`)
}