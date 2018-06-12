<template>
  <div class="ingredient-new">
    New Ingredient
  </div>
</template>

<script>
export default {
  name: 'IngredientNew',
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
