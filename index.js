function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const numPeople = parseInt(document.getElementById('numPeople').value);

    if (isNaN(billAmount) || billAmount <= 0 || isNaN(tipPercentage) || tipPercentage < 0 || isNaN(numPeople) || numPeople <= 0) {
        alert('Please enter valid inputs');
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;
    const amountPerPerson = totalAmount / numPeople;

    document.getElementById('tipAmount').innerText = tipAmount.toFixed(2);
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
    document.getElementById('amountPerPerson').innerText = amountPerPerson.toFixed(2);
}




