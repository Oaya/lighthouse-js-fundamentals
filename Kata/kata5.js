//Kata 5 //
const urlEncode = function (text) {
  //sepatrate to each charactors//
  const words = text.split("");
  //go thrhough the  second charactor through to -1 last charactor//
  for (let i = 1; i < words.length - 1; i++) {
    if (words[i] === " ") {
      words[i] = "%20";
    }
  }
  //connect the each charactors//

  return words.join("");
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
