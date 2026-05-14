function celsius() {
    let temperatura = Number(document.querySelector('#temperatura').value)
    let card = document.querySelector('.card-conversor')
    let pExistente = card.querySelector('p')
    if (pExistente) pExistente.remove()
    let p = document.createElement('p')
    if (!document.querySelector('#temperatura').value || isNaN(temperatura)) {
        p.innerHTML = 'Digite um valor válido.'
        card.appendChild(p)
        return
    }
    let resultado = (temperatura - 32) / 1.8
    p.innerHTML = `${temperatura}°F equivalem a ${resultado.toFixed(2)}°C`
    card.appendChild(p)
}

function fahrenheit() {
    let temperatura = Number(document.querySelector('#temperatura').value)
    let card = document.querySelector('.card-conversor')
    let pExistente = card.querySelector('p')
    if (pExistente) pExistente.remove()
    let p = document.createElement('p')
    if (!document.querySelector('#temperatura').value || isNaN(temperatura)) {
        p.innerHTML = 'Digite um valor válido.'
        card.appendChild(p)
        return
    }
    let resultado = (temperatura * 1.8) + 32
    p.innerHTML = `${temperatura}°C equivalem a ${resultado.toFixed(1)}°F`
    card.appendChild(p)
}
