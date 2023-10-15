// Define a function to render the recipes
function renderRecipes(recipes) {
  const recipeList = document.getElementById("recipe-list");
  recipeList.innerHTML = ""; // Clear any previous content

  recipes.forEach((recipe) => {
    const recipeItem = document.createElement("div");
    recipeItem.classList.add("recipe-item"); // Apply CSS styles as needed

    // Create elements for the name, ingredients, instructions, and picture
    const nameElement = document.createElement("h3");
    nameElement.textContent = recipe.name;

    const ingredientsElement = document.createElement("p");
    ingredientsElement.textContent = `Ingredients: ${recipe.ingredients}`;

    const instructionsElement = document.createElement("p");
    instructionsElement.textContent = `Instructions: ${recipe.instructions}`;

    const pictureElement = document.createElement("img");
    pictureElement.src = recipe.picture;

    // Append elements to the recipe item
    recipeItem.appendChild(nameElement);
    recipeItem.appendChild(ingredientsElement);
    recipeItem.appendChild(instructionsElement);
    recipeItem.appendChild(pictureElement);

    // Append the recipe item to the list
    recipeList.appendChild(recipeItem);
  });
}

function handleMealCategoryClick(mealClassification) {
  return async () => {
    try {
      const recipes = await getRecipes(mealClassification);
      renderRecipes(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
}

document
  .getElementById("dinner-section")
  .addEventListener("click", handleMealCategoryClick("Dinner"));
document
  .getElementById("lunch-section")
  .addEventListener("click", handleMealCategoryClick("Lunch"));
document
  .getElementById("breakfast-section")
  .addEventListener("click", handleMealCategoryClick("Breakfast"));
document
  .getElementById("dessert-section")
  .addEventListener("click", handleMealCategoryClick("Dessert"));
