//Kata 6//

const whereCanIPark = function (spots, vehicle) {
  //go through y row//
  for (let y = 0; y < spots.length; y++) {
    // console.log(spots[y]);
    //go through  x columns //
    for (let x = 0; x < spots[y].length; x++) {
      // console.log(spots[y][x]);
      if (vehicle === "regular" && spots[y][x] === "R") {
        return [x, y];
      } else if (
        vehicle === "small" &&
        (spots[y][x] === "R" || spots[y][x] === "S")
      ) {
        return [x, y];
      } else if (
        vehicle === "motorcycles" &&
        (spots[y][x] === "R" || spots[y][x] === "S" || spots[y][x] === "M")
      ) {
        return [x, y];
      }
    }
    return false;
  }
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);
