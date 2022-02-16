
function calculateTotal() {
    // console.log('clicked');
    const foodExpances = document.getElementById('food-expenses').value;
    const rentExoances = document.getElementById('rent-expenses').value;
    const clothingExoances = document.getElementById('clothes-expenses').value;
    const totalExpancesInSum = parseInt(foodExpances) + parseInt(rentExoances) + parseInt(clothingExoances);
    console.log(totalExpancesInSum);
    const totalExpance = document.getElementById('total-expances');
    const totalExpanceValue = totalExpance.innerText;
    totalExpance.innerText = totalExpancesInSum;
    // return totalExpance.innerText;
}

// const totalIncome = document.getElementById('total-income');
// const totalIncomeValue = totalIncome.value;
// const remainingBalanceInput = document.getElementById('the-balance');
// const remainingBalanceInputValue = remainingBalanceInput.innerText;
// const remainingBalanceValue = totalIncomeValue - calculateTotal();
// remainingBalanceInput.innerText = remainingBalanceValue;

