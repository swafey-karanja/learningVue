<template>
  <h1>Food</h1>
  <div id="wrapper">
    <FoodStuffs
      v-for="x in foods"
      :key="x.name"
      :food-name="x.name"
      :food-desc="x.desc"
      :is-favorite="x.favorite"
      @toggle-fave="toggleFavorite"
      @remove-item="removeFoodItem"
    />
  </div>
  <br />
  <h3>add items to the list</h3>
  <input type="text" placeholder="name of the item" v-model="newName" required /><br />
  <input type="text" placeholder="description of the item" v-model="newDesc" required /><br />
  <input type="checkbox" name="Favorite" id="isFavorite" v-model="newFave" required /><br />
  <label for="isFavorite">Favorite</label>
  <button @click="addItem">Add Item</button>
</template>

<script>
export default {
  data() {
    return {
      foods: [
        { name: 'Apples', desc: 'Apples are a type of fruit that grow on trees.', favorite: true },
        {
          name: 'Pizza',
          desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.',
          favorite: false
        },
        { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', favorite: false },
        { name: 'Fish', desc: 'Fish is an animal that lives in water.', favorite: true },
        { name: 'Cake', desc: 'Cake is something sweet that tastes good.', favorite: false }
      ],
      newName: '',
      newDesc: '',
      newFave: false
    }
  },
  methods: {
    removeFoodItem(foodName) {
      const index = this.foods.findIndex((food) => food.name === foodName)
      if (index !== -1) {
        this.foods.splice(index, 1)
      }
    },

    toggleFavorite(foodName) {
      const foodToToggle = this.foods.find((food) => food.name === foodName)
      if (foodToToggle) {
        foodToToggle.favorite = !foodToToggle.favorite
      }
    },

    addItem() {
      const newItem = {
        name: this.newName,
        desc: this.newDesc,
        favorite: this.newFave
      }

      this.foods.push(newItem), (this.newName = ''), (this.newDesc = ''), (this.newFave = false)
    }
  }
}
</script>

<style scoped>
#wrapper {
  display: flex;
  flex-wrap: wrap;
}
#wrapper > div {
  border: dashed black 1px;
  flex-basis: 120px;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
</style>
