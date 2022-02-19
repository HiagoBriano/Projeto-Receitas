// Busca as categorias da comida
export const mealsCategory = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
  );

  const responseResults = await response.json();

  return responseResults.meals;
};

// Busca as comidas
export const mealsList = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s='
  );

  const responseResults = await response.json();

  const dados = responseResults.meals.map(
    ({ idMeal, strMeal, strCategory, strMealThumb }) => ({
      id: idMeal,
      name: strMeal,
      image: strMealThumb,
      category: strCategory,
    })
  );

  return dados;
};

// Separa os igredientes
export const listIngredients = (revenue) => {
  const igredientes = Object.keys(revenue).filter((atual) =>
    atual.includes('strIngredient')
  );

  let ingredient = [];

  for (let i = 0; i < igredientes.length; i += 1) {
    const atual = `strIngredient${i + 1}`;
    const medidas = `strMeasure${i + 1}`;
    const juntos = `${revenue[atual]} ${revenue[medidas]}`;

    if (revenue[atual] && revenue[medidas]) {
      ingredient = [...ingredient, juntos];
    } else if (revenue[atual]) {
      ingredient = [...ingredient, revenue[atual]];
    } else if (revenue[medidas]) {
      ingredient = [...ingredient, revenue[medidas]];
    }
  }

  const filtrado = ingredient.filter((atual) => atual !== ' ');

  return filtrado;
};

// Busca a comida sozinha
export const mealsAlone = async (id) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  const responseResults = await response.json();

  const list = listIngredients(responseResults.meals[0]);

  const {
    idMeal,
    strMeal,
    strCategory,
    strMealThumb,
    strInstructions,
    strYoutube,
  } = responseResults.meals[0];

  const dados = {
    id: idMeal,
    name: strMeal,
    image: strMealThumb,
    category: strCategory,
    Instructions: strInstructions,
    video: strYoutube,
    ingredients: list,
  };

  return dados;
};

// Buscar comidas por categoria
export const mealCategoryFilter = async (category) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );

  const responseResults = await response.json();

  const dados = responseResults.meals.map(
    ({ strMeal, strMealThumb, idMeal }) => ({
      name: strMeal,
      image: strMealThumb,
      id: idMeal,
    })
  );

  return dados;
};

// Buscar comidas por nome
export const mealNameFilter = async (name) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  );

  const responseResults = await response.json();

  const dados = responseResults.meals.map(
    ({ strMeal, strMealThumb, idMeal }) => ({
      name: strMeal,
      image: strMealThumb,
      id: idMeal,
    })
  );

  return dados;
};

// Buscar comidas por igredientes
export const mealIngredientFilter = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const responseResults = await response.json();

  const dados = responseResults.meals.map(
    ({ strMeal, strMealThumb, idMeal }) => ({
      name: strMeal,
      image: strMealThumb,
      id: idMeal,
    })
  );

  return dados;
};
