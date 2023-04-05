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
export const state: { recipe: Recipe,search:Search,bookmark:Recipe[] } = {
  recipe: {} as Recipe,
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE
  },
  bookmark:[]
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

    if (state.bookmark.some(b => b.id === id)) {
      state.recipe.bookmarked = true
    } else {
      state.recipe.bookmarked = false
    }
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
    state.search.page =1

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

export const updateServings = function (newServings: number) {
  state.recipe.ingredients.forEach(element => {
    element.quantity = (element.quantity * newServings) /state.recipe.servings
  });

  state.recipe.servings = newServings;
}


export const addBookmark = function (recipe:Recipe) {
  state.bookmark.push(recipe)

  //mark current recipe as bookmark
  if(recipe.id === state.recipe.id)state.recipe.bookmarked = true
}

export const deleteBookmark = function (id:number) {
  const index = state.bookmark.findIndex(el=> el.id === id)
  state.bookmark.splice(index, 1,)

  if(state.recipe.id === id) state.recipe.bookmarked = false

}
