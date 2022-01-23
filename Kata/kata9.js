//Kata 9//

const camelCase = function (input) {
  //separate to each charactors//
  let words = input.split("");
  for (let i = 0; i < words.length; i++) {
    //when find the " " in the array//
    if (words[i] === " ") {
      //take the space out//
      words.splice(i, 1);
      //and then change the next charactor to uppercase//
      words[i] = words[i].toUpperCase();
    }
  }
  //connect back the array to one string//
  console.log(words.join(""));
  return words.join("");
};
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
