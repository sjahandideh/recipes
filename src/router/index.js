import Vue from 'vue'
import Router from 'vue-router'
import RecipeList from '@/components/RecipeList'
import RecipeNew from '@/components/RecipeNew'
import IngredientList from '@/components/IngredientList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RecipeList',
      component: RecipeList
    },
    {
      path: '/recipes/new',
      name: 'RecipeNew',
      component: RecipeNew
    },
    {
      path: '/recipes/:recipeId/ingredients',
      name: 'IngredientList',
      component: IngredientList
    }
  ]
})
