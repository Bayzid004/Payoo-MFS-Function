document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin');
    if(pinNumber === 123){
        const availableBalance = getTextFieldValueById('available-balance');
        const newAvailableBalance = availableBalance + addMoney;
        document.getElementById('available-balance').innerText = newAvailableBalance;
        // console.log(addMoney,pinNumber,availableBalance,newAvailableBalance)
    }else{
        alert('wrong')
    }
})