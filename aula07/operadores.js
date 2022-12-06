/**
 * ARITMÉTICOS
 * + - Somar, concatenar
 * - - subtrair
 * * - multiplicar
 * / -  dividir
 * % - resto da divisão inteira
 * ** - potenciação
 */
const soma = 5 + 2
const sub = 5 - 2
const mult = 5 * 2
const div = 5 / 2
const restDiv = 5 % 2
const poten = 5 + 2
console.log(`O resultado da soma de 5 + 2 é: ${soma}`)
console.log(`O resultado da subtração de 5 - 2 é: ${sub}`)
console.log(`O resultado da multiplicação de 5 x 2 é: ${mult}`)
console.log(`O resultado da divisão de 5 / 2 é: ${div}`)
console.log(`O resultado do resto da divisão de 5 % 2 é: ${restDiv}`)
console.log(`O resultado da potênciação de 5**2 é: ${poten}`)

// CUIDADO COM A PRECEDÊNCIA DOS OPERADORES
/**
 * PRECEDÊNCIA
 * ()
 * **
 * * / %
 * + -
 */

// OPERADORES DE ATRIBUIÇÃO
let n = 3
n += 4
n -= 5
n *= 4
n /= 2
n **= 2
n %= 5
console.log(n)

// OPERADORES DE INCREMENTAÇÃO
let x = 5
x ++
x --
console.log(x)

// OPERADORES DE PRÉ-INCREMENTAÇÃO
let y = 10
++ y
-- y
console.log(y)