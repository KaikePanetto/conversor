function dolar() {
    let valor = Number(document.querySelector('#valor').value)
    let card = document.querySelector('.card-conversor')
    let pExistente = card.querySelector('p')
    if (pExistente) pExistente.remove()
    let p = document.createElement('p')
    if (!document.querySelector('#valor').value || isNaN(valor) || valor <= 0) {
        p.innerHTML = 'Digite um valor válido.'
        card.appendChild(p)
        return
    }
    let resultado = valor / 5.77
    p.innerHTML = `R$${valor.toFixed(2)} equivalem a $${resultado.toFixed(2)} dólares`
    card.appendChild(p)
}

function euro() {
    let valor = Number(document.querySelector('#valor').value)
    let card = document.querySelector('.card-conversor')
    let pExistente = card.querySelector('p')
    if (pExistente) pExistente.remove()
    let p = document.createElement('p')
    if (!document.querySelector('#valor').value || isNaN(valor) || valor <= 0) {
        p.innerHTML = 'Digite um valor válido.'
        card.appendChild(p)
        return
    }
    let resultado = valor / 6.10
    p.innerHTML = `R$${valor.toFixed(2)} equivalem a €${resultado.toFixed(2)} euros`
    card.appendChild(p)
}
