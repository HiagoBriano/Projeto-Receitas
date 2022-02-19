// Busca as categorias das bebidas
export const drinksCategory = async () => {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
  );

  const responseResults = await response.json();

  return responseResults.drinks;
};

// Busca as bebidas
export const drinksList = async () => {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  );

  const responseResults = await response.json();

  const dados = responseResults.drinks.map(
    ({ idDrink, strDrink, strCategory, strDrinkThumb }) => ({
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
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

// Busca a bebida sozinha
export const drinkAlone = async (id) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  const responseResults = await response.json();

  const list = listIngredients(responseResults.drinks[0]);

  const {
    idDrink,
    strDrink,
    strCategory,
    strDrinkThumb,
    strInstructions,
    strVideo,
  } = responseResults.drinks[0];

  const dados = {
    id: idDrink,
    name: strDrink,
    image: strDrinkThumb,
    category: strCategory,
    Instructions: strInstructions,
    video: strVideo,
    ingredients: list,
  };

  return dados;
};

// Buscar bebidas por categoria
export const drinkCategoryFilter = async (category) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
  );

  const responseResults = await response.json();

  const dados = responseResults.drinks.map(
    ({ strDrink, strDrinkThumb, idDrink }) => ({
      name: strDrink,
      image: strDrinkThumb,
      id: idDrink,
    })
  );

  return dados;
};

// Buscar bebidas por nome
export const drinkNameFilter = async (name) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );

  const responseResults = await response.json();

  const dados = responseResults.drinks.map(
    ({ strDrink, strDrinkThumb, idDrink }) => ({
      name: strDrink,
      image: strDrinkThumb,
      id: idDrink,
    })
  );

  return dados;
};

// Buscar bebidas por igredientes
export const drinkIngredientFilter = async (ingredient) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const responseResults = await response.json();

  const dados = responseResults.drinks.map(
    ({ strDrink, strDrinkThumb, idDrink }) => ({
      name: strDrink,
      image: strDrinkThumb,
      id: idDrink,
    })
  );

  return dados;
};
