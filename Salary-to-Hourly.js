// Function to calculate hourly rate
function calculateHourlyRate(salary, hoursPerWeek, weeksPerYear) {
    return (salary / (hoursPerWeek * weeksPerYear)).toFixed(2);
}

// Function to calculate hourly rate from monthly salary
function calculateHourlyRateFromMonthlySalary(monthlySalary, hoursPerWeek, weeksPerYear) {
    return ((monthlySalary * 12) / (hoursPerWeek * weeksPerYear)).toFixed(2);
}

$(document).ready(function () {
    // Event listener for Calculate button
    $('.calculate-button').click(function () {
        // Get input values
        var currency = $('.currency-button.active').text();
        var salary = parseFloat($('#salary').val());
        var hoursPerWeek = parseFloat($('#hoursPerWeek').val());
        var weeksPerYear = parseFloat($('#weeksPerYear').val());
        var payPeriod = $('.pay-choice.active').text();

        // Perform calculation based on pay period
        var hourlyRate;
        if (payPeriod === 'Annual') {
            hourlyRate = calculateHourlyRate(salary, hoursPerWeek, weeksPerYear);
        } else if (payPeriod === 'Monthly') {
            var monthlySalary = salary;
            hourlyRate = calculateHourlyRateFromMonthlySalary(monthlySalary, hoursPerWeek, weeksPerYear);
        } else if (payPeriod === 'Hourly') {
            // Handle Hourly pay period
            hourlyRate = salary;
        } else if (payPeriod === 'Daily') {
            // Handle Daily pay period
            hourlyRate = (salary / hoursPerWeek / 5).toFixed(2); // Assuming 5 working days in a week
        } else if (payPeriod === 'Weekly') {
            // Handle Weekly pay period
            hourlyRate = (salary / hoursPerWeek).toFixed(2);
        }

        // Display results
        $('.results .content').html(`
            <p>Hourly Rate: ${currency}${hourlyRate}</p>
            <p>Monthly Pay: ${currency}${(hourlyRate * hoursPerWeek * 4).toFixed(2)}</p>
            <p>Weekly Pay: ${currency}${(hourlyRate * hoursPerWeek).toFixed(2)}</p>
        `);
        $('.results').show();
    });

    // Function to handle currency change
    function handleCurrencyChange(currency) {
        // Update currency display
        $('.currency-selector .selected').removeClass('selected');
        $('.currency-selector button:contains("' + currency + '")').addClass('selected');
    }
});
