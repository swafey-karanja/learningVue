<template>
  <div id="food-wrapper">
    <div v-for="food in foods" :key="food.name" v-on:click="countClicks(food)">
      <h1>{{ food.name }}</h1>
      <span v-show="food.favorite">Fave</span>
      <p>{{ food.desc }}</p>
      <button v-on:click.stop="toggleFave(food)">Favorite</button><br />
      <button @click.stop="removeItem(food)">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    foods: {
      type: Array,
      required: true
    }
  },
  emits: ['toggle-fave', 'remove-item'],
  methods: {
    countClicks(food) {
      // You might want to implement this method if you still need click counting
      console.log(`Clicked on ${food.name}`)
    },
    toggleFave(food) {
      this.$emit('toggle-fave', food.name)
    },
    removeItem(food) {
      this.$emit('remove-item', food.name)
    }
  }
}
</script>

<style scoped>
#food-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

#food-wrapper > div {
  background-color: lightgreen;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  flex-basis: 150px;
  border-radius: 10px;
  border: solid black 2px;
  margin: 10px;
  padding: 0 10px 0;
}

#food-wrapper > div:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
