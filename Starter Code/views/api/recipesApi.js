export async function getRecipes(mealClassification = "") {
  const response = await fetch(`/api/recipes/${mealClassification}`, {
    method: "GET",
  });

  if (!response.ok) {
    const { message } = await response.json();
    throw new Error(message);
  }

  return await response.json();
}

// export async function getAllBreakfasts() {
//     const response = await fetch(`/api/recipes/breakfast`, {
//       method: "GET",
//     });

//     if (!response.ok) {
//       const { message } = await response.json();
//       throw new Error(message);
//     }

//     return await response.json();
//   }

export async function updateRecipe(recipe) {
  const response = await fetch(`/api/recipes/${recipe.id}`, {
    method: "PUT",
    body: JSON.stringify(recipe),
  });

  if (!response.ok) {
    const { message } = await response.json();
    throw new Error(message);
  }

  return await response.json();
}
