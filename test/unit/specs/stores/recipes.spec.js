import { getters, mutations } from '../../../../src/store/modules/recipes'

const { getRecipes } = getters
const { createRecipe, addIngredient } = mutations

const SAMPLE_DATA = {
  units: [
    { id: 1, title: 'clove' },
    { id: 2, title: 'number' },
    { id: 3, title: 'cup' },
    { id: 4, title: 'tbsp' },
    { id: 5, title: 'tsp' }
  ],
  ingredients: [
    { id: 1, title: 'garlic' },
    { id: 2, title: 'lemon' }
  ]
}

describe('recipes stores', () => {
  it('getRecipes', () => {
    const state = {
      recipes: [{ id: 1 }]
    }

    expect(getRecipes(state)).toEqual(state.recipes)
  })

  describe('create a new recipe', () => {
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

      createRecipe(state, recipe)

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

      createRecipe(state, recipe)

      expect(state.recipes.length).toEqual(2)
      expect(state.recipes[1].title).toEqual(recipe.title)
      expect(state.recipes[1].id).toEqual(3)
      expect(state.meta.recipes.lastIndex).toEqual(3)
    })
  })

  describe('add ingredients', () => {
    it('add the first ingredient', () => {
      const state = {
        units: SAMPLE_DATA.units,
        ingredients: SAMPLE_DATA.ingredients,
        recipes: [{ id: 1, title: 'hummus' }]
      }

      let ingredient = { id: 1, unitId: 1, unitNumber: 2 }
      addIngredient(state, state.recipes[0].id, ingredient)
      expect(state.recipes[0].ingredients).toHaveLength(1)
      expect(state.recipes[0].ingredients[0].id).toEqual(ingredient.id)
    })

    it('add the second ingredient', () => {
      const state = {
        units: SAMPLE_DATA.units,
        ingredients: SAMPLE_DATA.ingredients,
        recipes: [
          {
            id: 1,
            title: 'hummus',
            ingredients: [
              { id: 1, unitId: 1, unitNumber: 2 }
            ]
          }
        ]
      }

      let ingredient = { id: 2, unitId: 2, unitNumber: 1 }
      addIngredient(state, state.recipes[0].id, ingredient)
      expect(state.recipes[0].ingredients).toHaveLength(2)
      expect(state.recipes[0].ingredients[1].id).toEqual(ingredient.id)
    })
  })
})
