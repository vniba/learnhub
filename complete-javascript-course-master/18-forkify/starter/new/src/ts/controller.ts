import * as model from './model';
import receipeView from './view/receipeView';

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
    console.error(error);
  }
};

['hashchange', 'load'].forEach(e => window.addEventListener(e, controlRecipe));

///////////////////////////////////////
