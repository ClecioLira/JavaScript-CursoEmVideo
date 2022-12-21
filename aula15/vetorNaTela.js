let num = [2, 8, 6, 4, 5]
num.sort() //deixar os valores ordenados

for (let pos = 0; pos < num.length; pos++) { //mostrar o vetor na tela
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}

for (let pos in num) { //modo simplificado, só funciona com arrays e objetos
    console.log(num[pos])
}

let pos = num.indexOf(12)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 12 está no indice ${pos}.`) //procurar em qual indice está o valor
}
// caso dê valor '-1' é porque o js não encontrou o valor solicitado