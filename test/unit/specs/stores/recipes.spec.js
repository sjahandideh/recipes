import { getters } from '../../../../src/store/modules/recipes'

const { getRecipes } = getters

describe('recipes stores', () => {
  it('getRecipes', () => {
    const state = {
      recipes: [{ id: 1 }]
    }

    expect(getRecipes(state)).toEqual(state.recipes)
  })
})
