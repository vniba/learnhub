import * as model from './model';
import receipeView, { RecipeView } from './view/receipeView';
import searchView from './view/searchView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import resultsView from './view/resultsView';
import paginationView from './view/paginationView';
import bookmarkView from './view/bookmarkView';

// https://forkify-api.herokuapp.com/v2

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    receipeView.renderSpinner();

    // update results
    resultsView.update(model.getSearchResultsPage())
    bookmarkView.update(model.state.bookmark)
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

    resultsView.render(model.getSearchResultsPage())
    // render initial pagination
    paginationView.render(model.state.search)
  } catch (error) {
    receipeView.renderError(`${error}`)
  }
}

const controlPagination = function (gotoPage:number):void  {
   resultsView.render(model.getSearchResultsPage(gotoPage))
    paginationView.render(model.state.search)

}

const controlServings = function (newServings:number) {
  // update the recipe servings in state
model.updateServings(newServings)
// receipeView.render(model.state.recipe)
receipeView.update(model.state.recipe)

  // update the view
}

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) { model.addBookmark(model.state.recipe) }
  else
  {
    model.deleteBookmark(model.state.recipe.id)
;}
  receipeView.update(model.state.recipe)

  bookmarkView.render(model.state.bookmark)
}

controlSearchResults()
const init = function () {
  receipeView.addHandlerRender(controlRecipe)
  receipeView.addHandlerUpdateServings(controlServings)
  receipeView.addHandlerBookmark(controlAddBookmark)
  searchView.addHandlerSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagination)

}
init()

///////////////////////////////////////
