<template>
  <h1>Food</h1>
  <FoodStuffs
    food-name="chapati"
    v-bind:isFavorite="false"
    food-desc="Apples are a type of fruit that grow on trees."
  />
  <FoodStuffs
    food-name="rice"
    v-bind:isFavorite="true"
    food-desc="Pizza has a bread base with tomato sauce."
  />
  <FoodStuffs food-name="you" v-bind:isFavorite="false" />
</template>

<script>
export default {
  data() {
    return {
      message: 'HIM'
    }
  }
}
</script>

<style scoped>
#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
#app > div:hover {
  cursor: pointer;
}
</style>
