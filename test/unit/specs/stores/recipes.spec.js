import { getters, mutations } from '../../../../src/store/modules/recipes'

const { getRecipes } = getters
const { saveRecipe } = mutations

describe('recipes stores', () => {
  it('getRecipes', () => {
    const state = {
      recipes: [{ id: 1 }]
    }

    expect(getRecipes(state)).toEqual(state.recipes)
  })

  it('save a new recipe', () => {
    const state = {
      recipes: []
    }

    let recipe = { title: 'my new Recipe' }

    saveRecipe(state, recipe)

    expect(state.recipes.length).toEqual(1)
    expect(state.recipes[0].title).toEqual(recipe.title)
  })
})
