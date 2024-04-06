$(document).ready(function () {
    // Function to handle currency change
    $('.currency-selector button').click(function () {
        $('.currency-selector button').removeClass('selected');
        $(this).addClass('selected');
    });

    // Function to handle pay rate choice
    $('.pay-rate-choice button').click(function () {
        $('.pay-rate-choice button').removeClass('selected');
        $(this).addClass('selected');
    });

    // Function to handle standard hourly pay rate change
    $('.hourly-rate-slider').on('input', function () {
        $('.hourly-rate-container span:last-child').text($(this).val());
        calculateRates(); // Recalculate and update the results
    });

    // Function to handle hours worked change
    $('.hours-worked-container input[type="number"]').on('input', function () {
        calculateRates(); // Recalculate and update the results
    });

    function calculateRates() {
        var standardRate = parseFloat($('.hourly-rate-slider').val());
        var hoursWorked = parseFloat($('.hours-worked-container input[type="number"]').val());
        var selectedCurrency = $('.currency-selector button.selected').text();
        var payRateChoice = $('.pay-rate-choice button.selected').text();

        if (!standardRate || isNaN(standardRate) || !hoursWorked || isNaN(hoursWorked)) {
            // If either standard rate or hours worked is not a valid number, do not calculate
            return;
        }

        // Perform calculations based on pay rate choice
        var standardPay = 0;
        var timeAndHalfPay = 0;

        switch (payRateChoice) {
            case 'Hourly':
                standardPay = standardRate * hoursWorked;
                timeAndHalfPay = standardRate * 1.5 * hoursWorked;
                break;
            case 'Daily':
                standardPay = standardRate * 8;
                timeAndHalfPay = standardRate * 1.5 * 8;
                break;
            case 'Weekly':
                standardPay = standardRate * 40;
                timeAndHalfPay = standardRate * 1.5 * 40;
                break;
            case 'Monthly':
                standardPay = standardRate * 160; // 40 hours per week for 4 weeks
                timeAndHalfPay = standardRate * 1.5 * 160;
                break;
            case 'Annual':
                standardPay = standardRate * 2080; // 40 hours per week for 52 weeks
                timeAndHalfPay = standardRate * 1.5 * 2080;
                break;
            default:
                alert('Invalid pay rate choice');
                return;
        }

        // Display the results
        $('.results-section').show(); // Show the results section
        $('.results-section p:eq(0)').text('Time and a half rate: ' + selectedCurrency + ' ' + (standardRate * 1.5).toFixed(2));
        $('.results-section p:eq(1)').text('Standard hourly rate: ' + selectedCurrency + ' ' + standardRate.toFixed(2));
        $('.results-section p:eq(2)').text('Time and a half pay: ' + selectedCurrency + ' ' + timeAndHalfPay.toFixed(2));
        $('.results-section p:eq(3)').text('Standard pay: ' + selectedCurrency + ' ' + standardPay.toFixed(2));
        $('.results-section p:eq(4)').text('Total money earned: ' + selectedCurrency + ' ' + (standardPay + timeAndHalfPay).toFixed(2));
    }

    // Initial calculation on page load
    calculateRates();
});
