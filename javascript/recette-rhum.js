const sectionRecipes = document.querySelector(".section-recipes-rhum");

//Fonction take object recipe and display it in card.
const displayCardRhumRecipe = (recipe) => {
  const { title, img, ingredients, preparation, numberofLiter } = recipe;
  //Create div card and add in sectionRecipes
  const card = document.createElement("div");
  card.classList.add("card");
  sectionRecipes.appendChild(card);

  //Create div cardHeader and add in card
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-rhum-header");
  card.appendChild(cardHeader);

  //Create img cardImg and add in cardHeader
  const cardImg = document.createElement("img");
  cardImg.src = img;
  cardHeader.appendChild(cardImg);

  //Create div cardContent and add in card
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-padding");
  card.appendChild(cardContent);

  //Create h2 cardTitle and add in cardContent
  const cardTitle = document.createElement("h2");
  cardTitle.innerHTML = title;
  cardContent.appendChild(cardTitle);

  //Create div recipeDetail and add in cardContent
  const recipeDetail = document.createElement("div");
  cardContent.appendChild(recipeDetail);

  //Create div recipeIngredient and add in recipeDetail
  const recipeIngredient = document.createElement("div");
  recipeDetail.appendChild(recipeIngredient);

  //Create h3 recipeIngredientTitle and add in recipeIngredient
  const recipeIngredientTitle = document.createElement("h3");
  recipeIngredientTitle.innerHTML = "Ingrédients";
  recipeIngredient.appendChild(recipeIngredientTitle);

  //Create ul recipeIngredientList and add in recipeIngredient
  const recipeIngredientList = document.createElement("ul");
  recipeIngredient.appendChild(recipeIngredientList);

  //Loop for create li recipeIngredientItem and add in recipeIngredientList
  ingredients.forEach((ingredient) => {
    const recipeIngredientItem = document.createElement("li");
    recipeIngredientItem.innerHTML = ingredient;
    recipeIngredientList.appendChild(recipeIngredientItem);
  });

  //Create div recipePreparation and add in recipeDetail
  const recipePreparation = document.createElement("div");
  recipeDetail.appendChild(recipePreparation);

  //Create h3 recipePreparationTitle and add in recipePreparation
  const recipePreparationTitle = document.createElement("h3");
  recipePreparationTitle.innerHTML = "Préparation";
  recipePreparation.appendChild(recipePreparationTitle);

  //Create ul recipePreparationList and add in recipePreparation
  const recipePreparationList = document.createElement("ul");
  recipePreparation.appendChild(recipePreparationList);

  //Loop for create li recipePreparationItem and add in recipePreparationList
  preparation.forEach((step) => {
    const recipePreparationItem = document.createElement("li");
    recipePreparationItem.innerHTML = step;
    recipePreparationList.appendChild(recipePreparationItem);
  });
};

//Fonction take array recipes and loop it to display it in card.
const displayRecipes = (recipes) => {
  recipes.forEach((recipe) => {
    displayCardRhumRecipe(recipe);
  });
};

const recipesFetch = () => {
  fetch("../data/rhum-recipes.json")
    .then((response) => response.json())
    .then((data) => {
      displayRecipes(data);
    })
    .catch((error) => console.error(error));
};

recipesFetch();
