import * as model from './model';
import receipeView, { RecipeView } from './view/receipeView';
import searchView from '../js/view/searchView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    receipeView.renderSpinner();
    // loading recipe
    await model.loadRecipe(id);
    // rendering recipe

    receipeView.render(model.state.recipe);
  } catch (error) {
    receipeView.renderError(`${error} 🙀`)
  }
};

const controlSearchResults = async function () {
  try {
    // query
    const  query = searchView.getQuery()
    if(!query) return
   await model.loadSearchResults(query)

    searchView.clearInput()
  } catch (error) {
    receipeView.renderError(`${error}`)
  }
}

controlSearchResults()
const init = function () {
  receipeView.addHandlerRender(controlRecipe)
  searchView.addHandlerSearch(controlSearchResults)
}
init()

///////////////////////////////////////
