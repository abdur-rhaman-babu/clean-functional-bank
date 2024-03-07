// const depositButton = document.getElementById('deposit-button')
// const depositInput = document.getElementById('current-deposit')
// const previousDepo = document.getElementById('previous-deposit')

// getInputValue
const getInputValue = (inputId) =>{
    const input = document.getElementById(inputId)
    const currentAmount = input.value;
    input.value = '';
    return currentAmount;
}

// getInnerText
const getInnerText = (inputText,amount) =>{
    const outputText = document.getElementById(inputText)
    const previousAmount = outputText.innerText;
    const totalAmount = parseFloat(previousAmount) + parseFloat(amount)
    outputText.innerText = totalAmount;
}

// deposit
document.getElementById('deposit-button').addEventListener('click', ()=>{
const amount = getInputValue('current-deposit')
getInnerText('previous-deposit',amount)
})

// withdraw
document.getElementById('withdraw-button').addEventListener('click', ()=>{
    const amount = getInputValue('current-withdraw')
    getInnerText('previous-withdraw',amount)
})