//Kata 14//

const calculateChange = function (total, cash) {
  let result = {};
  let returnValue = cash - total;
  let coinType = [
    "twentyDoller",
    "tenDoller",
    "fiveDoller",
    "twoDoller",
    "oneDoller",
    "quarter",
    "dime",
    "nickel",
    "penny",
  ];
  let moneyValue = [2000, 1000, 500, 100, 25, 10, 5, 1];
  let amount;
  //check the return Value able to devide by moneyValue//
  for (let i = 0; moneyValue.length > i; i++) {
    amount = Math.floor(returnValue / moneyValue[i]);

    if (amount > 0) {
      result[coinType[i]] = amount;
      returnValue = returnValue % moneyValue[i];
    }
  }
  return result;
};
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
