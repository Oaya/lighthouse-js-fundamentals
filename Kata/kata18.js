const squareCode = function (message) {
  //take the space out from the message and getting the length//
  let string = message.split(" ").join("");
  let squaredMessage = "";
  //calcurate the number of charactors of each line//
  let rowLength = Math.ceil(Math.sqrt(string.length));
  console.log(rowLength);
  //create square //
  for (let i = 0; rowLength > i; i++) {
    for (let j = 0; string.length > j; j += rowLength) {
      squaredMessage += string[j];
    }
    squaredMessage += "";
  }
  return squaredMessage;
};

console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
