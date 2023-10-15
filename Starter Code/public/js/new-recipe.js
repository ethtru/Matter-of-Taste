// document.querySelector("#new-recipe-form").onsubmit = async (e) => {
//   e.preventDefault();

//   const response = await fetch(`/api/recipes`, {
//     method: "POST",
//     credentials: "include",
//     body: JSON.stringify({
//       instructions: document.querySelector("[name='instructions']").value,
//     }),
//   });

//   if (!response.ok) {
//     const data = await response.json();
//     console.log(data);
//     return;
//   }

//   console.log("Recipe created!");
// };

document.querySelector(".new-recipe-form").onsubmit = async (e) => {
  console.log("form submitted");
  e.preventDefault();
  // Get values from form inputs
  const user_name = document.querySelector("#user_name").value;
  const name = document.querySelector("#dish_name").value;
  const ingredients = document.querySelector("#ingredients").value;
  const instructions = document.querySelector("#instructions").value;
  const picture = document.querySelector("#picture").value;
  const meal_classification = document.querySelector(
    "#meal-classification"
  ).value;
  const newRecipe = {
    name,
    ingredients,
    instructions,
    picture,
    meal_classification,
  };
  const response = await fetch("/api/recipe", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRecipe),
  });
  if (!response.ok) {
    const data = await response.json();
    console.log(data);
    return;
  }
  console.log("TASTY! Thanks for adding your recipe. You Matter!");
};
