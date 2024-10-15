<template>
  <div v-on:click="countClicks">
    <h1>
      {{ foodName }}
    </h1>
    <div v-show="isFavorite">Fave</div>
    <p>{{ foodDesc }}</p>
    <!-- <span>{{ clicks }}</span> -->
    <button v-on:click="toggleFave">Favorite</button><br />
    <button @click="removeItem">Remove</button>
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
  props: ['foodName', 'isFavorite', 'foodDesc'],
  emits: ['toggle-fave', 'remove-item'],
  methods: {
    countClicks() {
      this.clicks += 1
    },

    toggleFave() {
      this.$emit('toggle-fave', this.foodName)
    },

    removeItem() {
      this.$emit('remove-item', this.foodName)
    }
  }
}
</script>
