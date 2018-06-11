// initial state
const state = {
  meta: {
    recipes: {
      lastIndex: 0
    }
  },
  units: [
    { id: 1, title: 'clove' },
    { id: 2, title: 'number' },
    { id: 3, title: 'cup' },
    { id: 4, title: 'tbsp' },
    { id: 5, title: 'tsp' }
  ],
  ingredients: [
    { id: 1, title: 'garlic' },
    { id: 2, title: 'lemon' },
    { id: 3, title: 'tahini' },
    { id: 4, title: 'water' },
    { id: 5, title: 'olive oil' },
    { id: 6, title: 'balsamic vinegar' },
    { id: 7, title: 'soy sauce' },
    { id: 8, title: 'hot sauce' },
    { id: 9, title: 'cumin' },
    { id: 10, title: 'paprika' },
    { id: 11, title: 'chickpeas' },
    { id: 12, title: 'sunflower seeds' }
  ],
  recipes: []
}

export const getters = {
  getRecipes: state => state.recipes
}

export const actions = {
  saveRecipe (context, recipe) {
    context.commit('saveRecipe', recipe)
    sessionStorage.setItem('recipes', JSON.stringify(context.state.recipes))
  },
  saveAndReturnRecipe (context, recipe) {
    return new Promise((resolve, reject) => {
      context.dispatch('saveRecipe', recipe)
      resolve(recipe)
    })
  },
  syncRecipes (context) {
    context.recipes = JSON.parse(sessionStorage.getItem('recipes'))
  }
}

export const mutations = {
  saveRecipe (state, recipe) {
    let meta = state.meta
    let recipes = state.recipes

    recipe.id = meta.recipes.lastIndex + 1
    recipes.push(recipe)
    meta.recipes.lastIndex = recipe.id

    state.recipes = recipes
    state.meta = meta
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
