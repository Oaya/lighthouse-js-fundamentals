//Kata 8 //

// const repeatNumbers = function (data) {
//   return data.map(([num, repeat]) => num.toString().repeat(repeat));
// };
// console.log(repeatNumbers([[1, 10]]));
// console.log(
//   repeatNumbers([
//     [1, 2],
//     [2, 3],
//   ])
// );
// console.log(
//   repeatNumbers([
//     [10, 4],
//     [34, 6],
//     [92, 2],
//   ])
// );
const repeatNumbers = function (data) {
  let result;
  let count;
  let repeat;
  for (let i = 0; data.length > i; i++) {
    count = data[i][0].toString();
    repeat = data[i][1];
    count = count.repeat(repeat);
    result += ", " + count;
  }
  return result;
};
console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
