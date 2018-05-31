<template>
  <div class='recipe-list ui container'>
    <div class="ui clearing segment olive">
      <h1 class='ui header floated left'>My Recipes</h1>
      <a href='#/recipes/new' class="ui image label huge olive floated right">
        <i class="clipboard outline link icon"></i>
        New Recipe
      </a>
    </div>
    <div class="ui link centered four stackable cards">
      <RecipeListItem
        v-for='recipe in recipes'
        :key='recipe.id'
        :recipe='recipe'
      />
    </div>
  </div>
</template>

<script>
import RecipeListItem from './RecipeListItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'RecipeList',
  computed: mapGetters({
    recipes: 'getRecipes'
  }),
  components: {
    RecipeListItem
  }
}
</script>

<style scoped>
</style>
