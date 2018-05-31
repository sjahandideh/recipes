// initial state
// msg: 'welcome'
let hummus = {
  id: 1,
  title: 'Creamy Artisian Hummus',
  tags: ['Vegan', 'Gluten-free', 'Sugar-free', 'Nut-free'],
  image: 'hummus.jpg',
  method: '1. Place all ingredients except for the chickpeas in a food processor and blen on high until well combined. Then add the chickpeas and blend on high again, stopping occasionally to scrape the sides. Continue until the chickpeas are well blended and a smooth consistency is achieved.\rn 2. If you\'d like the consistency to be creamier, add 1-2 Tbsp more tahini. If you\'d like more zest, add more lemon juice.\rn 3. Plate, sprinkle on garnish, and serve.',
  notes: '',
  storage: 'Store in an air-tight container in the fridge for up to one week.',
  ingredients: [
    { id: 1, unitId: 1, unitNumber: 2 },
    { id: 2, unitId: 2, unitNumber: 1 },
    { id: 3, unitId: 3, unitNumber: 0.25 },
    { id: 4, unitId: 4, unitNumber: 1 },
    { id: 5, unitId: 4, unitNumber: 1 },
    { id: 6, unitId: 5, unitNumber: 1 },
    { id: 7, unitId: 5, unitNumber: 1 },
    { id: 8, unitId: 5, unitNumber: 1 },
    { id: 9, unitId: 5, unitNumber: 0.5 },
    { id: 10, unitId: 5, unitNumber: 0.5 },
    { id: 11, unitId: 3, unitNumber: 2 },
    { id: 12, unitId: 3, unitNumber: 0.25 }
  ]
}
let chorizo = {
  id: 2,
  title: 'Tofu Chorizo Mix',
  tags: ['Vegan', 'Gluten-free', 'Sugar-free', 'Nut-free'],
  image: 'vegan-chorizo.jpg',
  method: '1. Place all ingredients except for the chickpeas in a food processor and blen on high until well combined. Then add the chickpeas and blend on high again, stopping occasionally to scrape the sides. Continue until the chickpeas are well blended and a smooth consistency is achieved.\rn 2. If you\'d like the consistency to be creamier, add 1-2 Tbsp more tahini. If you\'d like more zest, add more lemon juice.\rn 3. Plate, sprinkle on garnish, and serve.',
  notes: '',
  storage: 'Store in an air-tight container in the fridge for up to one week.',
  ingredients: [
    { id: 1, unitId: 1, unitNumber: 2 },
    { id: 2, unitId: 2, unitNumber: 1 },
    { id: 3, unitId: 3, unitNumber: 0.25 },
    { id: 4, unitId: 4, unitNumber: 1 },
    { id: 5, unitId: 4, unitNumber: 1 },
    { id: 6, unitId: 5, unitNumber: 1 },
    { id: 7, unitId: 5, unitNumber: 1 },
    { id: 8, unitId: 5, unitNumber: 1 },
    { id: 9, unitId: 5, unitNumber: 0.5 },
    { id: 10, unitId: 5, unitNumber: 0.5 },
    { id: 11, unitId: 3, unitNumber: 2 },
    { id: 12, unitId: 3, unitNumber: 0.25 }
  ]
}

const state = {
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
  syncRecipes (context) {
    context.recipes = JSON.parse(sessionStorage.getItem('recipes'))
  }
}

export const mutations = {
  saveRecipe (state, recipe) {
    let recipes = state.recipes
    recipes.push(recipe)
    state.recipes = recipes
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
