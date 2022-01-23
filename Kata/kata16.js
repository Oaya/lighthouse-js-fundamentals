const makeCase = function (input, caseStyle) {
  //separate the words//
  let words = input.split("");

  //function to change to upper case//
  const upperCasing = (i) => {
    words[i] = words[i].toUpperCase();
  };

  //function to change to lower case//
  const lowerCasing = (i) => {
    words[i] = words[i].toLowerCase();
  };

  //function to omit blanc space//
  const splicing = (a, b) => {
    words.splice(a, b);
  };

  //function to change the space someting//
  const changeSpace = (a, b, c) => {
    words.splice(a, b, c);
  };

  //change the style depends on the case style//
  const changeStyle = (caseStyle) => {
    for (let i = 0; words.length > i; i++) {
      if (words[i] === " ") {
        switch (caseStyle) {
          case "camel":
            splicing(i, 1);
            upperCasing(i);
            break;

          case "pascal":
            splicing(i, 1);
            upperCasing(i);
            upperCasing(0);
            break;

          case "snake":
            changeSpace(i, 1, "_");
            break;

          case "kebab":
            changeSpace(i, 1, "-");
            break;

          case "title":
            upperCasing(i + 1);
            upperCasing(0);
            break;
        }
      } else if (
        caseStyle === "vowel" &&
        (words[i] === "a" ||
          words[i] === "i" ||
          words[i] === "u" ||
          words[i] === "e" ||
          words[i] === "o")
      ) {
        upperCasing(i);
      } else if (
        caseStyle === "consonant" &&
        words[i] !== "a" &&
        words[i] !== "i" &&
        words[i] !== "u" &&
        words[i] !== "e" &&
        words[i] !== "o"
      ) {
        upperCasing(i);
      } else if (caseStyle === "upper") {
        upperCasing(i);
      } else if (caseStyle === "lower") {
        lowerCasing(i);
      }
      {
        words[i] = words[i];
      }
    }
  };
  // //check caseStyle is more than one //
  if (Array.isArray(caseStyle)) {
    for (let j = 0; caseStyle.length > j; j++) {
      changeStyle(caseStyle[j]);
    }
    return words.join("");
  }
  changeStyle(caseStyle);

  return words.join("");
};
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
