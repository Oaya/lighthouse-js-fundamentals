// Kata 12//
function ingredientCheck(bakery, recipes) {
  //go through bakery array//
  for (let i = 0; bakery.length > i; i++) {
    //go through recipes array//
    for (let j = 0; recipes.length > j; j++) {
      //go through ingredient array in the recipes array//
      for (let k = 0; recipes[j].ingredients.length > k; k++) {
        if (bakery[i] === recipes[j].ingredients[k]) {
        }
      }
      console.log(recipes[j]);
      return recipes[j];
    }
  }
}

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  for (let i = 0; bakeryA.length > i; i++) {
    //go through bakery array//
    for (let j = 0; recipes.length > j; j++) {
      //go through recipes array//
      for (let k = 0; recipes[j].ingredients.length > k; k++) {
        //go through ingredient array in the recipes array//
        if (bakeryA[i] === recipes[j].ingredients[k]) {
          result.push(recipes[j]);

          for (let l = 0; bakeryB.length > l; l++) {
            //go through bakery array//
            for (let m = 0; result.length > m; m++) {
              //go through recipes array//
              for (let n = 0; result[m].ingredients.length > n; n++) {
                //go through ingredient array in the recipes array//
                if (bakeryB[l] === result[m].ingredients[n]) {
                  return result[m].name;
                }
              }
            }
          }
        }
      }
    }
  }
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut sponge Cake",
    ingredients: ["coconut", "cakebase"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];
console.log(chooseRecipe(bakeryA, bakeryB, recipes));
bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
