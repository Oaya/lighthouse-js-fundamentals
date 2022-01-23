const organizeInstructors = function (instructors) {
  let result = {};

  //go through the instrctors array//
  for (let i = 0; instructors.length > i; i++) {
    //if there is no the course in the result //

    if (!result[instructors[i].course]) {
      result[instructors[i].course] = [];
      result[instructors[i].course].push(instructors[i].name);
      //if the course already in the result , add the name in the array
    } else {
      result[instructors[i].course].push(instructors[i].name);
    }
  }
  return result;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "iOS" },
    { name: "Karim", course: "web" },
    { name: "Donald", course: "web" },
  ])
);

// // console.log(
// //   organizeInstructors([
// //     { name: "Brendan", course: "Blockchain" },
// //     { name: "David", course: "Web" },
// //     { name: "Martha", course: "iOS" },
// //     { name: "Carlos", course: "Web" },
// //   ])
// // );
