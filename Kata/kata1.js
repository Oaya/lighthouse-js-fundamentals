//Kata 1//
const sumLargestNumbers = function (data) {
  var largest = data[0];
  var large = "";
  var sum = "";
  //when the data array is only 2 valuable//
  if (data.length == 2) {
    sum = data[0] + data[1];
    console.log(sum);
  } else {
    //find largest valuable from the data array//
    for (let i = 1; i < data.length; i++) {
      if (data[i] > largest) largest = data[i];
      console.log(largest);
    }
    //set the large for the next for loop//
    for (let j = 0; j < data.length; j++) {
      if (data[j] === largest) large = data[j];
      break;
    }
    //find second largest number//
    for (let j = 1; j < data.length; j++) {
      if (data[j] > large && data[j] < largest) large = data[j];
      console.log(large);
    }

    sum = largest + large;
    console.log(sum);
  }
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
