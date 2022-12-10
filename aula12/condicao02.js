let agora = new Date()
let hora = agora.getHours()
let dia = agora.getDate()
let mes = agora.getMonth()
let ano = agora.getFullYear()
console.log(`Agora são exatamente ${hora} horas, do dia ${dia}/${mes}/${ano}.`)
if (hora < 5) {
    console.log(`Boa madrugada!`)
} else if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora < 18) {
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}