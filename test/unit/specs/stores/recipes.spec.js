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

  describe('save a new recipe', () => {
    it('save recipe to an empty list and assign id 1', () => {
      const state = {
        meta: {
          recipes: {
            lastIndex: 0
          }
        },
        recipes: []
      }

      let recipe = { title: 'my new Recipe' }

      saveRecipe(state, recipe)

      expect(state.recipes.length).toEqual(1)
      expect(state.recipes[0].title).toEqual(recipe.title)
      expect(state.recipes[0].id).toEqual(1)
      expect(state.meta.recipes.lastIndex).toEqual(1)
    })

    it('save recipe to a non-empty list and assign id properly', () => {
      const state = {
        meta: {
          recipes: {
            lastIndex: 2
          }
        },
        recipes: [{ id: 2, title: 'old recipe' }]
      }

      let recipe = { title: 'my new Recipe' }

      saveRecipe(state, recipe)

      expect(state.recipes.length).toEqual(2)
      expect(state.recipes[1].title).toEqual(recipe.title)
      expect(state.recipes[1].id).toEqual(3)
      expect(state.meta.recipes.lastIndex).toEqual(3)
    })
  })
})
