function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseInt(inputValue);
    return inputNumber;
}
function getTextFieldValueById(id){
    const textValue = document.getElementById('available-balance').innerText;
    const textNumber = parseInt(textValue);
    return textNumber;
}

function showSectionById(id){
    document.getElementById('add-money-form-section').classList.add('hidden');
    document.getElementById('cash-out-form-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}