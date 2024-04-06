
$(document).ready(function () {
    // Set default currency to $
    var selectedCurrency = '$';

    // Currency button click handler
    $('#currency-buttons button').click(function () {
        selectedCurrency = $(this).data('currency');
        $('#currency-buttons button').removeClass('bg-black text-white').addClass('bg-gray-200');
        $(this).removeClass('bg-gray-200').addClass('bg-black text-white');
    });

    // Calculation button click handler
    $('#calculate-button').click(function () {
        // Fetch input values
        var salary = parseFloat($('#salary').val());
        var hoursPerWeek = parseFloat($('#hours-per-week').val());
        var weeksPerYear = parseFloat($('#weeks-per-year').val());

        // Perform calculation
        if (!isNaN(salary) && !isNaN(hoursPerWeek) && !isNaN(weeksPerYear) && hoursPerWeek !== 0 && weeksPerYear !== 0) {
            var annualSalary = salary;
            // Calculate annual salary based on pay period
            var period = $('#pay-period').val();
            switch (period) {
                case 'Monthly':
                    annualSalary *= 12;
                    break;
                case 'BiWeekly':
                    annualSalary *= 26;
                    break;
                case 'Weekly':
                    annualSalary *= 52;
                    break;
                case 'Daily':
                    annualSalary *= 365;
                    break;
            }

            var hourlyRate = annualSalary / (hoursPerWeek * weeksPerYear);
            var monthlyPay = annualSalary / 12;
            var weeklyPay = annualSalary / 52;

            // Display calculated values
            $('#calculated-values').html('<div class="p-2"><h2 class="mt-2 text-xs font-semibold">Hourly Rate:</h2><div class="flex mt-1"><p>' + hourlyRate.toFixed(2) + '</p></div></div><div class="p-2"><h2 class="mt-2 text-xs font-semibold">Monthly Pay:</h2><div class="flex mt-1"><p>' + monthlyPay.toFixed(2) + '</p></div></div><div class="p-2"><h2 class="mt-2 text-xs font-semibold">Weekly Pay:</h2><div class="flex mt-1"><p>' + weeklyPay.toFixed(2) + '</p></div></div>');
        } else {
            alert('Please enter valid values for salary, hours per week, and weeks per year.');
        }
    });
});