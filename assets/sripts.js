const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValue = document.getElementById('real-value')
    const currencyValueText = document.getElementById('currency-value-text')

    realValue.innerHTML = Intl.NumberFormat("pt-BR", {
        style:'currency',
        currency:'BRl',

    }).format(inputReais)

    if(select.value === 'US$ Dolár americano') {
        currencyValueText.innerHTML = Intl.NumberFormat("en-US", {
            style:'currency',
            currency:'USD',
    
        }).format(inputReais / dolar)
    }

    if(select.value === '€ Euro') {
        currencyValueText.innerHTML = Intl.NumberFormat("de-DE", {
            style:'currency',
            currency:'EUR',
    
        }).format(inputReais / euro)
    }
    // currencyValueText.innerHTML = inputReais / dolar

    

    
  
}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name-id')
    const currencyImg = document.getElementById('currency-img')

    if(select.value === 'US$ Dolár americano') {
        currencyName.innerHTML = "Dolár americano"
        currencyImg.src = "img/estados-unidos (1) 1.svg"
     }

    if(select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "img/Design-sem-nome-1.png"
     }
    
     convertValues()
}

button.addEventListener('click',convertValues)
select.addEventListener('change',changeCurrency)
