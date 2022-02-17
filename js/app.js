// Calculating expances and getting balance after expances 
function calculateTotal() {
    const foodExpances = document.getElementById('food-expenses').value;
    const rentExpances = document.getElementById('rent-expenses').value;
    const clothingExoances = document.getElementById('clothes-expenses').value;
    // Getting total expances ----------------
    const totalExpancesInSum = parseInt(foodExpances) + parseInt(rentExpances) + parseInt(clothingExoances);
    const totalExpance = document.getElementById('total-expances');
    totalExpance.innerText = totalExpancesInSum;
    const totalIncomeInput = document.getElementById('total-income');
    const totalIncomeInputValue = totalIncomeInput.value;
    // Condition for minus Value ---------
    if (totalExpancesInSum > totalIncomeInputValue) {
        document.getElementById('total-income').style.backgroundColor = 'red';
        document.getElementById('remaining-balance').style.backgroundColor = 'red';

    }
    const balanceInput = document.getElementById('remaining-balance');
    const balanceInputValue = balanceInput.innerText;
    const gettingBalance = parseInt(totalIncomeInputValue) - parseInt(totalExpancesInSum);
    balanceInput.innerText = gettingBalance;
    // reset inputfield ----------------
    // totalIncomeInput.value = '';
    document.getElementById('food-expenses').value = '';
    document.getElementById('rent-expenses').value = '';
    document.getElementById('clothes-expenses').value = '';
}

function getSavingMoney() {
    const totalIncomeInput = document.getElementById('total-income');
    const totalIncomeInputValue = parseInt(totalIncomeInput.value);
    const inputBox = document.getElementById('input-parcentage');
    const inputboxvalue = parseInt(inputBox.value);
    const savingAmountText = document.getElementById('saving-amount');
    const savingAmountInValue = savingAmountText.innerText;
    const theSaving = (totalIncomeInputValue * inputboxvalue) / 100;
    savingAmountText.innerText = theSaving;
    // gettingBalance -------------------------
    const previousBalance = document.getElementById('remaining-balance');
    const previousBalanceValue = parseInt(previousBalance.innerText);
    const balanceAfterSaving = document.getElementById('balance-after-saving');
    const balanceAterSavingValue = parseInt(balanceAfterSaving.innerText);
    // Getting remaining balance -----------------
    const theRemainingBalance = previousBalanceValue - theSaving;
    balanceAfterSaving.innerText = theRemainingBalance;
    // reset input field -----------------
    inputBox.value = '';
}



