let ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let arrayLength = ingredients.length;
let i = 0;

while (i < arrayLength) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < arrayLength; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
ingredients = ingredients;
for (let i = arrayLength - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
