<template>
  <div class='recipe-new ui container'>
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
      <form class='ui form'>
        <h3 class='ui dividing header'>Recipe</h3>

        <div class='five wide field required'>
          <label>Title</label>
          <input v-model='recipe.title' type='text' name='title' placeholder='Creamy Hummus'>
        </div>
        <div class='field required'>
          <label>Method</label>
          <textarea v-model='recipe.method' placeholder='Place all ingredients in a food processor...'></textarea>
        </div>
        <div class='field'>
          <label>Storage Method</label>
          <textarea v-model='recipe.storage' rows='2' placeholder='Store in an air-tight container in the fridge for up to one week'></textarea>
        </div>
        <div class='field'>
          <label>Extra Notes</label>
          <textarea v-model='recipe.notes' rows='3'></textarea>
        </div>
        <div class='five wide field required'>
          <label>Tags</label>
          <input v-model='recipe.tags' type='text' name='tags' placeholder='Vegan, Sugar-free'>
        </div>

        <!-- ingredients section
        <h3 class='ui dividing header'>Ingredients</h3>

        <div class='fields'>
          <div class="five wide field">
            <label>Ingredients</label>
            <select class="ui search dropdown">
              <option value="d">Garlic clove</option>
              <option value="d">Garlic clove</option>
              <option value="d">Garlic clove</option>
            </select>
          </div>
          <div class='two wide field required'>
            <label>Measurement</label>
            <input class='small' type='text' name='measurement' placeholder='2'>
          </div>
        </div>
        -->

        <button @click.prevent='handleSubmitRecipe' class='ui button'>Continue</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeNew',
  data () {
    return {
      recipe: {
        title: '',
        method: '',
        storage: '',
        notes: '',
        tags: []
      }
    }
  },
  methods: {
    handleSubmitRecipe: function (e) {
      this.$store.dispatch('saveAndReturnRecipe', this.recipe)
        .then((recipe) => {
          this.$router.push({
            name: 'IngredientList',
            params: { recipeId: recipe.id }
          })
        })
    }
  }
}
</script>

<style scoped>
</style>
