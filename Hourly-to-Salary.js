// Function to handle currency change
function handleCurrencyChange(currency) {
    // Update selected currency display
    document.getElementById("selected-currency").textContent = currency;

    // Calculate the rates with the new currency
    calculateRates();
}

// Function to calculate the annual salary
function calculateRates() {
    // Get the input values
    var hourlyWage = parseFloat(document.getElementById("hourly-wage").textContent);
    var hoursPerWeek = parseInt(document.getElementById("hours-per-week").value);
    var weeksPerYear = parseInt(document.getElementById("weeks-per-year").value);

    // Check if any of the input values are not valid numbers or are empty
    if (isNaN(hourlyWage) || isNaN(hoursPerWeek) || isNaN(weeksPerYear) || !hourlyWage || !hoursPerWeek || !weeksPerYear) {
        // Display an error message
        document.getElementById("error-message").innerText = "Please fill in all required fields with valid numeric values.";
        document.getElementById("popup").style.display = "block";
        return; // Exit the function
    }

    // Define exchange rates manually
    const exchangeRates = {
        '$': 1,  // USD is the base currency
        '€': 0.85, // Euro to USD exchange rate
        '£': 0.75, // British Pound to USD exchange rate
        '₹': 74.21, // Indian Rupee to USD exchange rate
        '¥': 114.41 // Japanese Yen to USD exchange rate
    };

    // Get the selected currency
    var selectedCurrency = document.getElementById("selected-currency").textContent;

    // Get the exchange rate for the selected currency
    var exchangeRate = exchangeRates[selectedCurrency];

    // Calculate the annual salary in USD
    var annualSalaryUSD = hourlyWage * hoursPerWeek * weeksPerYear;

    // Convert the annual salary to the selected currency
    var annualSalary = annualSalaryUSD * exchangeRate;

    // Calculate monthly pay and weekly pay
    var monthlyPay = annualSalary / 12;
    var weeklyPay = annualSalary / 52;

    // Display the calculated results
    document.getElementById("calculated-salary").innerHTML = "Annual Salary: " + selectedCurrency + " " + annualSalary.toFixed(2) + "<br> Monthly Pay: " + selectedCurrency + " " + monthlyPay.toFixed(2) + "<br> Weekly Pay: " + selectedCurrency + " " + weeklyPay.toFixed(2);
}

// Event listener for the "Calculate" button
document.querySelector(".calculate-button").addEventListener("click", calculateRates);

// Event listener for the "Close" button in the popup
document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});

// Update hourly wage value when the slider is changed
document.getElementById("hourly-wage-slider").addEventListener("input", function () {
    var sliderValue = parseFloat(this.value);
    document.getElementById("hourly-wage").textContent = sliderValue;
});
