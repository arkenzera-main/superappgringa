
function converterDolar() {
    const valorDolar = document.getElementById('usd').value
    const cotacaoDolar = 5.30
    const valorEmReal = valorDolar * cotacaoDolar
    document.getElementById('valorReal').innerText = valorEmReal.toFixed(2)
}

function converterRealParaDolar() {
    const valorReal = document.getElementById('real').value
    const cotacaoDolar = 5.30
    const valorEmDolar = valorReal / cotacaoDolar
    document.getElementById('valorDolar').innerText = valorEmDolar.toFixed(2)
}


function converterCelsius() {
    const valorCelsius = document.getElementById('celsius').value
    const valorFahrenheit = (valorCelsius * 9/5) + 32
    document.getElementById('valorFahrenheit').innerText = valorFahrenheit.toFixed(2)
}

function converterFahrenheitParaCelsius() {
    const valorFahrenheit = document.getElementById('fahrenheit').value
    const valorCelsius = (valorFahrenheit - 32) * 5/9
    document.getElementById('valorCelsiusInvertido').innerText = valorCelsius.toFixed(2)
}


function converterMilhas() {
    const valorMilhas = document.getElementById('milhas').value
    const valorKm = valorMilhas * 1.60934
    document.getElementById('valorKm').innerText = valorKm.toFixed(2)
}

function converterKmParaMilhas() {
    const valorKm = document.getElementById('km').value
    const valorMilhas = valorKm / 1.60934
    document.getElementById('valorMilhasInvertido').innerText = valorMilhas.toFixed(2)
}

function converterPes() {
    const valorPes = document.getElementById('pes').value
    const valorMetros = valorPes * 0.3048
    document.getElementById('valorMetros').innerText = valorMetros.toFixed(2)
}

function converterMetrosParaPes() {
    const valorMetros = document.getElementById('metros').value
    const valorPes = valorMetros / 0.3048
    document.getElementById('valorPesInvertido').innerText = valorPes.toFixed(2)
}


function converterGalao() {
    const valorGalao = document.getElementById('galao').value
    const valorLitros = valorGalao * 3.78541
    document.getElementById('valorLitros').innerText = valorLitros.toFixed(2)
}

function converterLitrosParaGalao() {
    const valorLitros = document.getElementById('litros').value
    const valorGalao = valorLitros / 3.78541
    document.getElementById('valorGalaoInvertido').innerText = valorGalao.toFixed(2)
}


function converterPolegadas() {
    const valorPolegadas = document.getElementById('polegadas').value
    const valorCentimetros = valorPolegadas * 2.54
    document.getElementById('valorPolegadas').innerText = valorCentimetros.toFixed(2)
}

function converterCentimetrosParaPolegadas() {
    const valorCentimetros = document.getElementById('centimetros').value
    const valorPolegadas = valorCentimetros / 2.54
    document.getElementById('valorPolegadasInvertido').innerText = valorPolegadas.toFixed(2)
}
