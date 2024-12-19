document.getElementById('btn-cash-out')
    .addEventListener('click',function(event){
        event.preventDefault()
        const cashOut = getInputFieldValueById('input-cash-out');
        const pinNumber = getInputFieldValueById('input-pin-cash-out');
        if(pinNumber === 123){
            const availableBalance = getTextFieldValueById('available-balance');
            const newAvailableBalance = availableBalance - cashOut;
            document.getElementById('available-balance').innerText = newAvailableBalance;
        }else{
            alert('Invalid')
        }
    })