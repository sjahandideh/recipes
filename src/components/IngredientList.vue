<template>
  <div class='recipe-new-ingredients ui container'>
    <!-- header -->
    <div class="ui clearing segment olive">
      <h1 class='ui header floated left'>New Recipe</h1>
      <a href='#/' class="ui image label huge olive floated right">
        <i class="clipboard outline link icon"></i>
        All Recipes
      </a>
    </div>

    <!-- main content -->
    <div class='ui secondary segment left aligned'>
      <div class='ingredients-list ui'>
        <IngredientListItem
           v-for='ingredient in recipe.ingredients'
           :key='ingredient.id'
           :ingredient='ingredient'
        />
      </div>
      <IngredientNew :recipe='recipe'/>
    </div>
  </div>
</template>

<script>
import { IngredientNew } from './IngredientNew'
import { IngredientListItem } from './IngredientListItem'

export default {
  name: 'IngredientNew',
  components: {
    IngredientNew,
    IngredientListItem
  }
}
</script>

<style scoped>
</style>
