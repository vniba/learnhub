import { API_URL, RES_PER_PAGE } from './config';
import { getJSON } from './helpers';
export interface Recipe {
  [x: string]: any;
  id: number;
  title: string;
  publisher: string;
  sourceUrl: string;
  image: string;
  servings: number;
  cookingTime: number;
  ingredients: string[];
}
export interface Search{
  query: string;
  results: string[]
  page:number
  resultsPerPage: number;
}
export const state: { recipe: Recipe,search:Search } = {
  recipe: {} as Recipe,
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE
  },
};

export const loadRecipe = async (id: string) => {
  try {
    const data = await getJSON(`${API_URL + id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (error) {
    throw error

  }
};

export const loadSearchResults = async function (query:string) {
  try {
    state.search.query = query
    const data = await getJSON(`${API_URL}?search=${query}`)
   state.search.results= data.data.recipes.map((rec: { id: string; title: string; publisher: string; image_url: string; }) => {
      return {
        id: rec.id,
      title: rec.title,
      publisher: rec.publisher,
      image: rec.image_url,
     }

    })
    console.log(state.search.results);

  } catch (error) {
    throw error

  }
}

export const getSearchResultsPage = function (page: number=state.search.page): Recipe {
  state.search.page = page;
  const start = (page -  1) * state.search.resultsPerPage
  const end = page * state.search.resultsPerPage
  return state.search.results.slice(start, end)
}
