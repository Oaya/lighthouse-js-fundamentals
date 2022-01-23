//Kata 10//

//square mutiple means have row and columns of max value//
const multiplicationTable = function (maxValue) {
  let result = "";
  //go through  row line //
  for (let i = 1; i <= maxValue; i++) {
    //go through column line
    for (let j = 1; j <= maxValue; j++) {
      //adding space with multiple result//
      result += i * j + " ";
    }
    //change the line for the next row //
    result += "\n";
  }
  return result;
};
