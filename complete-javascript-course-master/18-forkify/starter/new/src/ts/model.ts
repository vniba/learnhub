import { API_URL } from './config';
import { getJSON } from './helpers';
export interface Recipe {
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
  results:string[]
}
export const state: { recipe: Recipe,search:Search } = {
  recipe: {} as Recipe,
  search: {
    query: '',
    results:[]
  }
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
