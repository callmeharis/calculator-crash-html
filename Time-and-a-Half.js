// Function to handle currency change
function handleCurrencyChange(currency) {
    // Update selected currency display
    document.getElementById("selected-currency").textContent = currency;

    // Calculate the rates with the new currency
    calculateRates();
}

// Event listener for the "Calculate" button
document.querySelector(".calculate-button").addEventListener("click", calculateRates);

// Event listener for the "Close" button in the popup
document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});