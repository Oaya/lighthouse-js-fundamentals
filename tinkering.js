// for (let i = 100; i < 200; i++) {
//   if (i % 3 === 0 && i % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else if (i % 3 === 0) {
//     console.log("Loopy");
//   } else if (i % 4 === 0) {
//     console.log("Lighthouse");
//   } else {
//     console.log(i);
//   }
// }

// const stations = [
//   ["Big Bear Donair", 10, "restaurant"],
//   ["Bright Lights Elementary", 50, "school"],
//   ["Moose Mountain Community Centre", 45, "community centre"],
// ];

// function chooseStations(stations) {
//   let goodStations = [];
//   for (let station of stations) {
//     const capacity = station[1];
//     const venue = station[2];

//     if (
//       capacity >= 20 &&
//       (venue === "school" || venue === "community centre")
//     ) {
//       goodStations.push(station[0]);
//     }
//   }
//   return goodStations;
// }

// console.log(chooseStations(stations));
// const moves = ["north", "north", "west", "west", "north", "east", "north"];
// const finalPosition = function (moves) {
//   let x = 0;
//   let y = 0;
//   let position = [];
//   console.log(position[0]);
//   for (let move of moves) {
//     if (move === "north") {
//       y++;
//     } else if (move === "south") {
//       y--;
//     } else if (move === "east") {
//       x++;
//     } else if (move === "west") {
//       x--;
//     }
//   }
//   position.push(x, y);
//   console.log(position);
// };

// finalPosition(moves);

// function ageCalculator(name, yearOfBirth, currentYear) {
//   let age = currentYear - yearOfBirth;
//   let result = name + " is " + age + " years old.";
//   return result;
// }
// console.log(ageCalculator("Miranda", 1983, 2015));

// function howManyHundreds(num) {
//   let result = Math.floor(num / 100);
//   return result;
// }

// function calculateRectangleArea(length, width) {
//   if (length <= 0 || width <= 0) {
//     return undefined;
//   }
//   let result = length * width;

//   return result;
// }

// function calculateTriangleArea(base, height) {
//   if (base <= 0 || height <= 0) {
//     return undefined;
//   }
//   let result = (base * height) / 2;

//   return result;
// }

// function calculateCircleArea(radius) {
//   if (radius <= 0) {
//     return undefined;
//   }
//   let result = Math.PI * radius * radius;

//   return result;
// }

// function range(start, end, step) {
//   let array = [];
//   if (
//     start === undefined ||
//     end === undefined ||
//     step === undefined ||
//     start > end ||
//     step <= 0
//   ) {
//     return array;
//   } else {
//     for (let i = start; i <= end; i = i + step) {
//       array.push(i);
//       console.log(array);
//     }
//     return array;
//   }
// }
// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));

// function lastIndexOf(array, index) {
//   const result = array.lastIndexOf(index);
//   return result;
// }

// function concat(arr1, arr2) {
//   const arr3 = arr1.concat(arr2);
//   return arr3;
// }

// function smartGarbage(trash, bins) {
//   if (trash === "waste") {
//     bins.waste = bins.waste + 1;
//   } else if (trash === "recycling") {
//     bins.recycling = bins.recycling + 1;
//   } else if (trash === "compost") {
//     bins.compost = bins.compost;
//   }
//   console.log(bins);
//   return bins;
// }
// smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 });

// function carPassing(cars, speed) {
//   let car = { time: Date.now(), speed: speed };
//   cars.push(car);
//   return cars;
// }

// const cars = [
//   {
//     time: 1568329654807,
//     speed: 40,
//   },
//   {
//     time: 1568329821632,
//     speed: 42,
//   },
//   {
//     time: 1568331115463,
//     speed: 35,
//   },
// ];
// const speed = 38;

// carPassing(cars, speed);

// const vegetables = [
//   {
//     submitter: "Old Man Franklin",
//     redness: 10,
//     plumpness: 5,
//   },
//   {
//     submitter: "Sally Tomato-Grower",
//     redness: 20,
//     plumpness: 8,
//   },
//   {
//     submitter: "Hamid Hamidson",
//     redness: 111,
//     plumpness: 3,
//   },
// ];

// const metric = "redness";

// function judgeVegetable(array, charactor) {
//   var check = array[0][charactor];
//   var wonSubmitter = array[0].submitter;

//   //for loop the vegetable array to check the charactor//
//   for (let i = 1; i < array.length; i++) {
//     if (array[i][charactor] > check)
//       //change the submitter//
//       wonSubmitter = array[i].submitter;
//   }

//   console.log(wonSubmitter);
//   return wonSubmitter;
// }

// judgeVegetable(vegetables, metric);
// Loopy lighthouse//
// function loopyLighthouse(range, multiples, words) {
//   for (let i = range[0]; i <= range[1]; i++) {
//     if ([i] % (multiples[0] * multiples[1]) === 0) {
//       console.log(words[0] + words[1]);
//     } else if ([i] % multiples[0] === 0) {
//       console.log(words[0]);
//     } else if ([i] % multiples[1] === 0) {
//       console.log(words[1]);
//     } else {
//       console.log(i);
//     }
//   }
// }
// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

// //Merge Arrays//
// function merge(arr1, arr2) {
//   let arr3 = arr1.concat(arr2);
//   arr3.sort();
//   return arr3;
// }
// console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
