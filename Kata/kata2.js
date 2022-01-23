//Kata 2//
function conditionalSum(values, condition) {
  let sum = 0;
  if (condition === "even") {
    for (let i = 0; values.length < i; i++) {
      if (values[i] % 2 === 0) {
        sum = sum + values[i];
      }
    }
  } else if (condition === "odd") {
    for (let i = 0; values.length; i++) {
      if (values[i] % 2 === 1) {
        sum = sum + values[i];
        console.log(sum);
      }
    }
  }
  console.log(sum);
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
