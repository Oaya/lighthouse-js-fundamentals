// Kata 4//
const instructorWithLongestName = function (instructors) {
  let person = instructors[0];

  for (let i = 1; instructors.length > i; i++) {
    if (instructors[i].name.length > person.name.length) {
      person = instructors[i];
    }
  }
  return person;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
