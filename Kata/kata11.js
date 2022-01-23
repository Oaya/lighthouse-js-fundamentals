//Kata 11//

// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  const V = (4 / 3) * PI * (radius * radius * radius);
  return V;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  const V = (1 / 3) * PI * (radius * radius) * height;
  return V;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  const V = height * width * depth;
  return V;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!
  let total = 0;
  for (let i = 0; solids.length > i; i++) {
    if (solids[i].type === "sphere") {
      total += sphereVolume(solids[i].radius);
    } else if (solids[i].type === "cone") {
      total += coneVolume(solids[i].radius, solids[i].height);
    } else if (solids[i].type === "prism") {
      total += prismVolume(solids[i].height, solids[i].width, solids[i].width);
    }
  }
  console.log(total);
  return total;
};
const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
