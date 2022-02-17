function theErrorForExpances(inputFieldName) {
    if (isNaN(inputFieldName)) {
        return alert('You can input only valid number!!!')
    }
}

// Calculating expances and getting balance after expances 
function calculateTotal() {
    const foodExpances = document.getElementById('food-expenses').value;
    const rentExpances = document.getElementById('rent-expenses').value;
    const clothingExpances = document.getElementById('clothes-expenses').value;
    //    Error messages ---------------------
    theErrorForExpances(foodExpances);
    theErrorForExpances(rentExpances);
    theErrorForExpances(clothingExpances);

    // Getting total expances ----------------
    const sumOfTotalExpances = parseInt(foodExpances) + parseInt(rentExpances) + parseInt(clothingExpances);
    const totalExpance = document.getElementById('total-expances');
    totalExpance.innerText = sumOfTotalExpances;
    const totalIncomeInput = document.getElementById('total-income');
    const totalIncomeInputValue = totalIncomeInput.value;
    if (totalIncomeInputValue < 0) {
        return alert("You shouldn't enter a negetive value as an income input!!!")
    }
    // Condition for, if expnace Value more than your income ---------
    if (sumOfTotalExpances > totalIncomeInputValue) {
        return alert("You shouldn't spand more than you earn!!!!")
    }
    const balanceInput = document.getElementById('remaining-balance');
    const balanceInputValue = balanceInput.innerText;
    const gettingBalance = parseInt(totalIncomeInputValue) - parseInt(sumOfTotalExpances);
    balanceInput.innerText = gettingBalance;
    // reset inputfield ----------------
    document.getElementById('food-expenses').value = '';
    document.getElementById('rent-expenses').value = '';
    document.getElementById('clothes-expenses').value = '';
}

function getSavingMoney() {
    const totalIncomeInput = document.getElementById('total-income');
    const totalIncomeInputValue = parseInt(totalIncomeInput.value);
    const parcentageInputBox = document.getElementById('input-parcentage');
    const parcentageInputboxvalue = parseInt(parcentageInputBox.value);
    if (isNaN(parcentageInputboxvalue)) {
        return alert('Please enter a valid number!!!')
    }
    const savingAmountText = document.getElementById('saving-amount');
    const savingAmountInValue = savingAmountText.innerText;
    const theSaving = (totalIncomeInputValue * parcentageInputboxvalue) / 100;
    savingAmountText.innerText = theSaving;
    // gettingBalance -------------------------
    const balanceAfterExpanceInText = document.getElementById('remaining-balance');
    const balanceAfterExpanceInValue = parseInt(balanceAfterExpanceInText.innerText);
    const balanceAfterSaving = document.getElementById('balance-after-saving');
    const balanceAfterSavingValue = parseInt(balanceAfterSaving.innerText);
    if (balanceAfterExpanceInValue < theSaving) {
        return alert("Your saving shouldn't more than your balance!!!")
    }
    // Getting remaining balance -----------------
    const theRemainingBalance = balanceAfterExpanceInValue - theSaving;
    balanceAfterSaving.innerText = theRemainingBalance;
    // reset input field -----------------
    parcentageInputBox.value = '';
}



