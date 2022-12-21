function contar() {
    let inicio = document.querySelector('#iinicio')
    let fim = document.querySelector('#ifim')
    let passo = document.querySelector('#ipasso')
    let res = document.querySelector('#res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert(`[ERRO] Faltam dados! [ERRO]`)
    } else {
        res.innerHTML = 'Contando: '
        let inicioN = Number(inicio.value)
        let fimN = Number(fim.value)
        let passoN = Number(passo.value)

        if (passoN <= 0) {
            alert(`Passo inválido! Considerando PASSO = 1!`)
            passoN = 1
        }
        if (inicioN < fimN) { //CONTAGEM CRESCENTE
            for (let cont = inicioN; cont <= fimN; cont += passoN) {
                res.innerHTML += `${cont} `
            }
        } else { //CONTAGEM REGRESSIVA
            for (let cont = inicioN; cont >= fimN; cont -= passoN) {
                res.innerHTML += `${cont} `
            }
        }
        res.innerHTML += `\u{1F3C1}.`
    }
}