function milhas() {
    let distancia = Number(document.querySelector('#distancia').value)
    let card = document.querySelector('.card-conversor')
    let pExistente = card.querySelector('p')
    if (pExistente) pExistente.remove()
    let p = document.createElement('p')
    if (!document.querySelector('#distancia').value || isNaN(distancia) || distancia <= 0) {
        p.innerHTML = 'Digite um valor válido.'
        card.appendChild(p)
        return
    }
    let convertido = distancia / 1.60934
    p.innerHTML = `${distancia} km equivalem a ${convertido.toFixed(2)} milhas`
    card.appendChild(p)
}

function quilometros() {
    let distancia = Number(document.querySelector('#distancia').value)
    let card = document.querySelector('.card-conversor')
    let pExistente = card.querySelector('p')
    if (pExistente) pExistente.remove()
    let p = document.createElement('p')
    if (!document.querySelector('#distancia').value || isNaN(distancia) || distancia <= 0) {
        p.innerHTML = 'Digite um valor válido.'
        card.appendChild(p)
        return
    }
    let convertido = distancia * 1.60934
    p.innerHTML = `${distancia} milhas equivalem a ${convertido.toFixed(2)} km`
    card.appendChild(p)
}
