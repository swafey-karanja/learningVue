<template>
  <div v-on:click="countClicks">
    <h1>
      {{ foodName }}
    </h1>
    <p>{{ foodDesc }}</p>
    <!-- <span>{{ clicks }}</span> -->
    <button v-on:click="toggleFave">{{ foodIsFavorite }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicks: 0,
      foodIsFavorite: this.isFavorite
    }
  },
  //   props: ['foodName', 'isFavorite'],
  props: {
    foodName: {
      String,
      required: true
    },
    foodDesc: {
      String,
      required: false,
      default: 'Good food always and forever good food',
      validator: function (value) {
        if (20 < value.length && value.length > 80) {
          return true
        } else {
          return false
        }
      }
    },
    isFavorite: {
      Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    countClicks() {
      this.clicks += 1
    },

    toggleFave() {
      this.foodIsFavorite = !this.foodIsFavorite
    }
  }
}
</script>
