/**
 * OPERADORES RELACIONAIS
 * > - Maior que
 * < - Menor que
 * >= - Maior ou igual a
 * <= - Menor ou igual a
 * == - Igual
 * != - Diferente
 */
console.log(5 > 2)
console.log(5 < 2)
console.log(5 >= 2)
console.log(5 <= 2)
console.log(5 == 2)
console.log(5 != 2)

/**
 * OPERADOR DE IDENTIDADE
 * === - Identico
 * !== - Desigual restrito
 */
console.log(5 == "5")
console.log(5 === "5")
console.log(5 != "5")
console.log(5 !== "5")

/**
 * OPERADORES LÓGICOS
 * ! - Negação
 * && - Conjunção / e
 * || - Disjunção / ou
 */
// ! NEGAÇÃO
console.log(!true)
console.log(!false)
// && CONJUNÇÃO
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
// || DISJUNÇÃO
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

/**
 * PRECEDÊNCIA DE TODOS OPERADORES
 * () ** / % * + - - ARITMÉTICOS
 * > < >= <= == != - RELACIONAIS
 * ! - NEGAÇÃO
 * && - CONJUNÇÃO
 * || - DISJUNÇÃO
 */

/**
 * OPERADOR TERNÁRIO
 * teste ? true : false
 */
let media = 6.9
console.log(media >= 7 ? `Aprovado` : `Reprovado`)
let idade = 23
console.log(idade >= 18 ? `Maior` : `Menor`)