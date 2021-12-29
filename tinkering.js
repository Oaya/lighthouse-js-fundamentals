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

function calculateRectangleArea(length, width) {
  if (length <= 0 || width <= 0) {
    return undefined;
  }
  let result = length * width;

  return result;
}

function calculateTriangleArea(base, height) {
  if (base <= 0 || height <= 0) {
    return undefined;
  }
  let result = (base * height) / 2;

  return result;
}

function calculateCircleArea(radius) {
  if (radius <= 0) {
    return undefined;
  }
  let result = Math.PI * radius * radius;

  return result;
}

console.log(calculateRectangleArea(10, 5)); // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
