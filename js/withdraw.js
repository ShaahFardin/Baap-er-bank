document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = document.getElementById("withdraw-amount");
    const currentWithdrawAmount = parseFloat(withdrawAmount.value);
    // console.log(typeof currentWithdrawAmount);

    const previousWithdraw = document.getElementById("previous-withdraw");
    const previousWithdrawTotal = parseFloat(previousWithdraw.innerText);
    const newWithdrawTotal = currentWithdrawAmount + previousWithdrawTotal;
    previousWithdraw.innerText = newWithdrawTotal;

    const previouseBalanceElement = document.getElementById("previous-balance");
    const previouseBalanceTotalString = previouseBalanceElement.innerText;
    const previousBalance = parseFloat(previouseBalanceTotalString);

    const currentBalance = previousBalance - newWithdrawTotal;
    previouseBalanceElement.innerText = currentBalance;

    withdrawAmount.value = "";
  });
