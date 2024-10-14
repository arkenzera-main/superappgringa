// Função para converter Dólar para Real usando API de cotação
function converterDolar() {
    const valorDolar = document.getElementById('usd').value;

    // Chama a API para obter a cotação atual do dólar
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => response.json())
        .then(data => {
            const cotacaoDolar = data.rates.BRL; // Obtém a cotação do dólar para o real
            const valorEmReal = valorDolar * cotacaoDolar;
            document.getElementById('valorReal').innerText = valorEmReal.toFixed(2);
        })
        .catch(error => console.error('Erro ao buscar cotação:', error));
}

// Funções para outras conversões
function converterCelsius() {
    const valorCelsius = document.getElementById('celsius').value;
    const valorFahrenheit = (valorCelsius * 9/5) + 32;
    document.getElementById('valorFahrenheit').innerText = valorFahrenheit.toFixed(2);
}

function converterMilhas() {
    const valorMilhas = document.getElementById('milhas').value;
    const valorKm = valorMilhas * 1.60934;
    document.getElementById('valorKm').innerText = valorKm.toFixed(2);
}

function converterPes() {
    const valorPes = document.getElementById('pes').value;
    const valorMetros = valorPes * 0.3048;
    document.getElementById('valorMetros').innerText = valorMetros.toFixed(2);
}

function converterGalao() {
    const valorGalao = document.getElementById('galao').value;
    const valorLitros = valorGalao * 3.78541;
    document.getElementById('valorLitros').innerText = valorLitros.toFixed(2);
}

function converterPolegadas() {
    const valorPolegadas = document.getElementById('polegadas').value;
    const valorCentimetros = valorPolegadas * 2.54;
    document.getElementById('valorPolegadas').innerText = valorCentimetros.toFixed(2);
}

// Função para limpar os campos de entrada
function limparCampos(idCampo) {
    document.getElementById(idCampo).value = '';
}
