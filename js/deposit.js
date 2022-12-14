// // add event listener to the deposit button
// document
//   .getElementById("deposit-button")
//   .addEventListener("click", function () {
//     ///   step 2 : get the deposit amount

//     const depositField = document.getElementById("deposit-amount");
//     const newDepositAmount = parseFloat(depositField.value);
//     // console.log(depositAmount);

//     // step 3 : get the current deposit amount
//     const depositTotalElement = document.getElementById("deposit-total");
//     const previousDepositTotal = parseFloat(depositTotalElement.innerText);
//     // step 4 : add numbers to set the total deposit
//     const currentDepositTotal = previousDepositTotal + newDepositAmount;
//     depositTotalElement.innerText = currentDepositTotal;

//     // step 5 : update the balance section

//     const previouseBalanceElement = document.getElementById("previous-balance");
//     const previouseBalanceTotalString = previouseBalanceElement.innerText;
//     const previousBalance = parseFloat(previouseBalanceTotalString);

//     // step 6
//     const currentBalance = previousBalance + newDepositAmount;
//     previouseBalanceElement.innerText = currentBalance;
//     // step 7 : clear the input field
//     depositField.value = "";
//   });

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const enteredDeposit = document.getElementById("deposit-amount");
    const enteredDepositAmount = parseFloat(enteredDeposit.value);

    const previousDeposit = document.getElementById("deposit-total");
    const previousDepositBalance = parseFloat(previousDeposit.innerText);
    // console.log(typeof previousDepositBalance);

    const newDepositBalance = previousDepositBalance + enteredDepositAmount;
    previousDeposit.innerText = newDepositBalance;

    const previouseBalanceElement = document.getElementById("previous-balance");
    const previousBalance = parseFloat(previouseBalanceElement.innerText);

    const latestBalance = previousBalance + enteredDepositAmount;
    previouseBalanceElement.innerText = latestBalance;

    enteredDeposit.value = "";
  });
