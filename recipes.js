const displayRecipes = (recipes) => {
  console.log(recipes);
};

const recipesFetch = () => {
  fetch("./data/recipes.json")
    .then((response) => response.json())
    .then((data) => {
      displayRecipes(data);
    })
    .catch((error) => console.error(error));
};

recipesFetch();
