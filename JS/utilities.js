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