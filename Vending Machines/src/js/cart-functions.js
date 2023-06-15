function calculateChange(total, payment) {
  let answer = payment - total;
  if (answer % 1 !== 0) {
    answer = answer.toFixed(2);
  }
  return Number(answer);
}

function isSufficientPayment(total, payment) {
  if (total <= payment) {
    return true;
  } else if (payment < total) {
    return false;
  }
}

function calculateTotal(itemsArray) {
  if (!itemsArray) {
    return 0;
  }
  let totalCost = 0;
  for (let i = 0; i < itemsArray.length; i++) {
    totalCost += itemsArray[i].price;
  }
  return Number(totalCost.toFixed(2));
}

function addItem(itemsArray, name, price) {
  let newObject = {
    name: name,
    price: price,
  };
  itemsArray.push(newObject);
}

function removeItem(itemsArray, index) {
  itemsArray.splice(index, 1);
}

exports.calculateChange = calculateChange;
exports.isSufficientPayment = isSufficientPayment;
exports.calculateTotal = calculateTotal;
exports.addItem = addItem;
exports.removeItem = removeItem;
