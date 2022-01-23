const urlDecode = function (text) {
  let result = {};
  //deviding text by the & //
  let words = text.split("&");
  let keyValue;
  //deviding words by the = //
  for (let i = 0; words.length > i; i++) {
    keyValue = words[i].split("=");
    //replacing %20 to space //
    for (let j = 0; keyValue.length > j; j++) {
      keyValue[j] = keyValue[j].split("%20").join(" ");
    }
  }

  result[keyValue[0]] = keyValue[1];
  return result;
};
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
