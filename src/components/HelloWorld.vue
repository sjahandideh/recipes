<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="ui button" @click="say({msg: 'Thank you!'})">Thank</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'HelloWorld',
  computed: mapGetters({
    msg: 'getMsg'
  }),
  methods: mapMutations([
    'say'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
