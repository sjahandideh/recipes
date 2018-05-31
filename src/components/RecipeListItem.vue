<template>
  <div class="card">
    <div class="image">
      <img :src='require(`@/assets/${recipe.image}`)'>
    </div>
    <div class="content">
      <div class="header">{{ recipe.title }}</div>
      <div class="meta">
        <a>{{ displayTags(recipe.tags) }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeListItem',
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  methods: {
    displayTags: (tags) => {
      return tags.toString()
    }
  }
}
</script>

<style scoped>
</style>
