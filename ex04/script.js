function tabuada() {
    let num = document.querySelector('#inum')
    let tab = document.querySelector('#itabuada')
    
    if (num.value.length == '') {
        alert(`[ERRO ]Digite um número! [ERRO]`)
    } else {
        let numN= Number(num.value)
        let cont = 1
        tab.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${numN} x ${cont} = ${numN*cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
            cont++
        }
    }

}