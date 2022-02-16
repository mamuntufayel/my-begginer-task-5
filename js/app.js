
function calculateTotal() {
    const foodExpances = document.getElementById('food-expenses').value;
    const rentExoances = document.getElementById('rent-expenses').value;
    const clothingExoances = document.getElementById('clothes-expenses').value;
    const totalExpancesInSum = parseInt(foodExpances) + parseInt(rentExoances) + parseInt(clothingExoances);
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



