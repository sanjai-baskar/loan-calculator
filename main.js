function cal() {
  loanAmountValue = document.getElementById("loan").value;

  interestRateValue = document.getElementById("i").value;

  MonthsToPayValue = document.getElementById("m").value;

  interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue;

  monthlyPayment = (loanAmountValue / MonthsToPayValue + interest).toFixed(2);

  document.getElementById(
    "pay"
  ).innerHTML = `Monthly Payment: ${monthlyPayment}`;
}
