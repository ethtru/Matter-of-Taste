document.querySelector("#new-recipe-form").onsubmit = async (e) => {
  e.preventDefault();

  const response = await fetch(`/api/recipes`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      instructions: document.querySelector("[name='instructions']").value,
    }),
  });

  if (!response.ok) {
    const data = await response.json();
    console.log(data);
    return;
  }

  console.log("Recipe created!");
};
