//Kata 7//

const checkAir = function (samples, threshold) {
  let dirtyNum = 0;
  let result = "";

  for (let i = 0; samples.length > i; i++) {
    if (samples[i] === "dirty") {
      dirtyNum++;

      if (dirtyNum / samples.length > threshold) {
        result = "Polluted";
      } else {
        result = "Clean";
      }
    }
  }
  return result;
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));
console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
