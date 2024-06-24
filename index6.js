function calculateInterest() {
    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value);
    let years = parseInt(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years) || principal <= 0 || rate <= 0 || years <= 0) {
        alert('Please enter valid positive numbers for all fields.');
        return;
    }

    let interest = (principal * rate * years) / 100;
    let totalAmount = principal + interest;

    document.getElementById('interest').textContent = `Calculated Interest: £${interest.toFixed(2)}`;
    document.getElementById('totalAmount').textContent = `Total Amount: £${totalAmount.toFixed(2)}`;
    document.getElementById('results').style.display = 'block';
}
