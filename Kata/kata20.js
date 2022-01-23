const blocksAway = function (directions) {
  console.log(directions.length);
  let result = {};
  let direction;
  let blocks;
  const position = [0, 0];
  const directionArray = [];
  for (let i = 0; directions.length > i; i = i + 2) {
    direction = directions[i];
    blocks = directions[i + 1];
    directionArray.push([direction, blocks]);
  }
  console.log(directionArray);
};
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
//direction  =
//blocks =
