function formatCurrency(amount) {
  if (amount >= 0) {
    currencyNumber = "$" + amount.toFixed(2);
  } else {
    amount = Math.abs(amount);
    currencyNumber = "-$" + amount.toFixed(2);
  }
  return currencyNumber;
}

//NEED TO FIX
function getCoins(cents) {
  let coins = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };
  let quarters = Math.floor(cents / 25);
  coins.quarters = quarters;
  let remainder = cents % 25;
  let dimes = Math.floor(remainder / 10);
  coins.dimes = dimes;
  remainder = remainder % 10;
  let nickels = Math.floor(remainder / 5);
  coins.nickels = nickels;
  remainder = remainder % 5;
  coins.pennies = remainder;
  return coins;
}

exports.formatCurrency = formatCurrency;
exports.getCoins = getCoins;
