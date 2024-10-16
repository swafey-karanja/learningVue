<template>
  <h1>Vue Practice</h1>
  <button v-on:click="toggleValue = !toggleValue">
    Toggle Component: {{ toggleValue ? 'Food' : 'Ball' }}
  </button>
  <div id="wrapper">
    <component
      :is="activeComponent"
      v-bind="componentProps"
      @toggle-fave="toggleFavorite"
      @remove-item="removeFoodItem"
    />
  </div>
  <br />

  <AddForm @add-item="addNewItem" />

  <!-- <component :is="compDisplay"></component> -->
</template>

<script>
import AddForm from './components/AddForm.vue'

export default {
  components: {
    AddForm
  },

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
      stadiums: [
        {
          name: 'Camp Nou',
          location: 'Barcelona, Spain',
          capacity: 99354,
          imageUrl: '/campNou.jpg'
        },
        {
          name: 'Wembley Stadium',
          location: 'London, England',
          capacity: 90000,
          imageUrl: '/wembley.jpg'
        },
        {
          name: 'Allianz Arena',
          location: 'Munich, Germany',
          capacity: 75000,
          imageUrl: '/allianzArena.jpg'
        },
        {
          name: 'Old Trafford',
          location: 'Manchester, England',
          capacity: 74310,
          imageUrl: '/oldTrafford.jpg'
        },
        {
          name: 'Santiago Bernabéu',
          location: 'Madrid, Spain',
          capacity: 81044,
          imageUrl: '/santiagoBernabeu.jpg'
        }
      ],
      toggleValue: true
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

    addNewItem(newItem) {
      this.foods.push(newItem)
      console.log('new item added')
    }
  },

  computed: {
    activeComponent() {
      return this.toggleValue ? 'FoodStuffs' : 'BallStuff'
    },

    componentProps() {
      if (this.toggleValue) {
        return {
          foods: this.foods
        }
      } else {
        return {
          stadiums: this.stadiums
        }
      }
    }
  }
}
</script>

<style scoped>
#wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
#wrapper > div {
  background-color: lightgreen;
}
footer > div {
  background-color: lightpink;
}
#wrapper img {
  display: block;
  margin: 20% auto 0;
  width: 60%;
}
h3,
h4 {
  text-align: flex-start;
}

#form {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  flex-basis: 150px;
  border-radius: 10px;
  border: solid black 2px;
  margin: 10px;
  padding: 10px;
}

#ball {
  display: flex;
  flex-wrap: wrap;
  width: auto;
  justify-content: space-around;
}
#ball img {
  display: block;
  margin: auto;
  width: 80%;
  width: 100px;
  height: 100px;
}
</style>
