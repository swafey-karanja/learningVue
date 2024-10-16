<template>
  <div id="form">
    <h3>add items to the list</h3>
    <input type="text" placeholder="name of the item" v-model="newItem.name" required /><br />
    <input
      type="text"
      placeholder="description of the item"
      v-model="newItem.desc"
      required
    /><br />
    <input
      type="checkbox"
      name="Favorite"
      id="isFavorite"
      v-model="newItem.favorite"
      required
    /><br />
    <label for="isFavorite">Favorite</label>
    <button @click="addItem">Add Item</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: {
        name: '',
        desc: '',
        favorite: false
      }
    }
  },
  methods: {
    addItem() {
      this.$emit('add-item', { ...this.newItem })
      // Reset the form after emitting
      this.newItem = {
        name: '',
        desc: '',
        favorite: false
      }

      console.log('event emmited')
    }
  }
}
</script>

<style>
#form {
  width: 300px;
  padding: 20px;
  margin: 0 auto;
  border: 2px solid #333;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
}

#form h3 {
  text-align: center;
  color: #333;
}

#form input[type='text'] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

#form input[type='checkbox'] {
  margin-right: 10px;
}

#form label {
  font-size: 14px;
  color: #555;
}

#form button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

#form button:hover {
  background-color: #45a049;
}

#form input:focus {
  border-color: #4caf50;
  outline: none;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}
</style>
