import Vue from 'vue'
import Router from 'vue-router'
import RecipeList from '@/components/RecipeList'
import RecipeNew from '@/components/RecipeNew'

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
    }
  ]
})
