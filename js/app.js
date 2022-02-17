function calculateTotal() {
    const foodExpances = document.getElementById('food-expenses').value;

    const rentExpances = document.getElementById('rent-expenses').value;

    const clothingExoances = document.getElementById('clothes-expenses').value;

    const totalExpancesInSum = parseInt(foodExpances) + parseInt(rentExpances) + parseInt(clothingExoances);
    console.log(totalExpancesInSum);
    const totalExpance = document.getElementById('total-expances');

    totalExpance.innerText = totalExpancesInSum;


    const totalIncomeInput = document.getElementById('total-income');
    const totalIncomeInputValue = totalIncomeInput.value;
    const balanceInput = document.getElementById('remaining-balance');
    const balanceInputValue = balanceInput.innerText;
    const gettingBalance = parseInt(totalIncomeInputValue) - parseInt(totalExpancesInSum);
    balanceInput.innerText = gettingBalance;
}

function getSaving() {
    const totalIncomeInput = document.getElementById('total-income');
    const totalIncomeInputValue = parseInt(totalIncomeInput.value);
    const inputBox = document.getElementById('input-parcentage');
    const inputboxvalue = parseInt(inputBox.value);
    // console.log(inputboxvalue);
    const savingAmountText = document.getElementById('saving-amount');
    const savingAmountInValue = savingAmountText.innerText;
    const theSaving = (totalIncomeInputValue * inputboxvalue) / 100;
    savingAmountText.innerText = theSaving;
    // gettingBalance -------------------------
    const previousBalance = document.getElementById('remaining-balance');
    const previousBalanceValue = parseInt(previousBalance.innerText);
    const balanceAfterSaving = document.getElementById('balance-after-saving');
    const balanceAterSavingValue = parseInt(balanceAfterSaving.innerText);
    const theRemainingBalance = previousBalanceValue - theSaving;
    balanceAfterSaving.innerText = theRemainingBalance;


}



