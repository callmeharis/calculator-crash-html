$(document).ready(function () {
    // Default values
    let selectedCurrency = '$';
    let hourlyWage = 0;
    let hoursPerWeek = '';
    let weeksPerYear = '';

    // Function to update currency buttons
    function updateCurrencyButtons() {
        $('#currency-buttons').empty();
        ['$', '€', '£', '₹', '¥'].forEach(currency => {
            $('#currency-buttons').append(`
                <button class="px-3 py-1 rounded-md mr-2 mb-2 ${selectedCurrency === currency ? 'bg-black text-white' : 'bg-gray-200'}">${currency}</button>
            `);
        });
    }

    // Update currency buttons
    updateCurrencyButtons();

    // Currency button click handler
    $(document).on('click', '#currency-buttons button', function () {
        selectedCurrency = $(this).text();
        $('#selected-currency').text(selectedCurrency);
    });

    // Hourly wage slider change handler
    $('#hourly-wage-slider').on('input', function () {
        hourlyWage = $(this).val();
        $('#hourly-wage').text(hourlyWage);
    });

    // Calculate button click handler
    $('#calculate-button').on('click', function () {
        // Retrieve values from inputs
        hoursPerWeek = $('#hours-per-week').val();
        weeksPerYear = $('#weeks-per-year').val();

        // Perform calculations
        if (!hourlyWage || !hoursPerWeek || !weeksPerYear) {
            alert('Please fill in all required fields.');
            return;
        }

        // Calculation logic
        const annualSalary = parseFloat(hourlyWage) * parseFloat(hoursPerWeek) * parseFloat(weeksPerYear);
        const monthlySalary = annualSalary / 12;
        const weeklyPay = annualSalary / 52;

        // Display calculated salary
        $('#calculated-salary').html(`
            <h2 class="text-xl font-semibold">Calculated Salary</h2>
            <p class="mt-2">Annual Salary: ${selectedCurrency}${annualSalary.toFixed(2)}</p>
            <p>Monthly Salary: ${selectedCurrency}${monthlySalary.toFixed(2)}</p>
            <p>Weekly Pay: ${selectedCurrency}${weeklyPay.toFixed(2)}</p>
        `);
    });
});
