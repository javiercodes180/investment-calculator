function calculate() {

  // Step 1 — Read what the user typed
  const monthly = parseFloat(document.getElementById('monthly').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const years = parseFloat(document.getElementById('years').value);

  // Step 2 — Check that all fields are filled in
  if (isNaN(monthly) || isNaN(rate) || isNaN(years)) {
    alert('Please fill in all 3 fields!');
    return;
  }

  // Step 3 — Do the math
  const monthlyRate = rate / 100 / 12;
  const months = years * 12;
  const finalValue = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  const totalInvested = monthly * months;
  const totalInterest = finalValue - totalInvested;

  // Step 4 — Display the results
  document.getElementById('totalInvested').textContent = formatMoney(totalInvested);
  document.getElementById('totalInterest').textContent = formatMoney(totalInterest);
  document.getElementById('finalValue').textContent = formatMoney(finalValue);

}

// This formats numbers as money e.g. 10000 becomes $10,000.00
function formatMoney(amount) {
  return '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}