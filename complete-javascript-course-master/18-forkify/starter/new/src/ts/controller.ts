import * as model from './model';
import receipeView, { RecipeView } from './view/receipeView';
import searchView from './view/searchView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import resultsView from './view/resultsView';

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
    resultsView.renderSpinner()
    // query
    const  query = searchView.getQuery()
    if(!query) return
    await model.loadSearchResults(query)

    // render
    console.log(model.state.search.results);

    resultsView.render(model.state.search.results)

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
