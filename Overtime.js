$(document).ready(function () {
    // Function to calculate overtime pay
    function calculateOvertimePay() {
        var standardRate = parseFloat($('#standardRate').val());
        var hoursWorkedAtOvertime = parseFloat($('#hoursWorkedAtOvertime').val());
        var overtimeMultiplier = parseFloat($('#overtimeMultiplier').val());

        if (isNaN(standardRate) || isNaN(hoursWorkedAtOvertime)) {
            alert('Please fill in all required fields with valid numeric values.');
            return;
        }

        var totalOvertimePay = standardRate * overtimeMultiplier * hoursWorkedAtOvertime;

        $('#totalOvertimePay').text(totalOvertimePay.toFixed(2));
    }

    // Event handler for the Calculate button
    $('#calculateBtn').click(function () {
        calculateOvertimePay();
    });
});
