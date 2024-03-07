const totalBalance = document.getElementById('total-balance');

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

// getInnerValue
const getInnerTextValue = (inputId) =>{
    const previousBalance = document.getElementById(inputId)
    const value = parseFloat(previousBalance.innerText);
    return value;
}
// getBalance
const getBalance = (amount,isAdd) =>{
    const balance = totalBalance.innerText;
    if( isAdd === true){
        totalBalance.innerText = parseFloat(balance) + parseFloat(amount)
    }else{
        totalBalance.innerText = parseFloat(balance) - parseFloat(amount)
    }
}

// deposit
document.getElementById('deposit-button').addEventListener('click', ()=>{
    const amount = getInputValue('current-deposit')
    if ( amount > 0){
    getInnerText('previous-deposit',amount)
    getBalance(amount,true)
    }else{
        alert('filled the input')
    }
})

// withdraw
document.getElementById('withdraw-button').addEventListener('click', ()=>{
    const amount = getInputValue('current-withdraw')
    const balance = getInnerTextValue('total-balance')
    if ( amount > 0 && amount <= balance){
    getInnerText('previous-withdraw',amount)
    getBalance(amount,false)
    }else{
        alert('insuffient balance')
    }
})