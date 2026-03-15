console.log("Hello World!");

let favoriteFoods = ["Steak", "Sushi", "Fried Rice", "Burger", "Pizza", "Pasta"];

for (let i = 0; i < favoriteFoods.length; i++) {
    console.log("One of my favorite foods is " + favoriteFoods[i] + ".");
}

for (let i = 0; i < favoriteFoods.length; i++) {
    console.log("My #" + (i + 1) + " favorite food is " + favoriteFoods[i]);
}

// 4a. Create a function printFoodRecommendation(foodName)
function printFoodRecommendation(foodName) {
    console.log("Have you ever tried " + foodName + "?");
    console.log("I always recommend " + foodName + " to friends.");
    console.log("Trust me — " + foodName + " is delicious.");
}

// 4b. Call the function at least 3 times
printFoodRecommendation("Pizza");
printFoodRecommendation("Sushi");
printFoodRecommendation("Burger");