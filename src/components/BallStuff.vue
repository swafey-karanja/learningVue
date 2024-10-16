<template>
  <div id="ball-wrapper">
    <div v-for="stad in stadiums" :key="stad.name">
      <img :src="stad.imageUrl" />
      <h4>{{ stad.name }}</h4>
      <span> Capacity: {{ stad.capacity }}</span>
      <p>Location: {{ stad.location }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stadiums: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
#ball-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

#ball-wrapper > div {
  background-color: lightgreen;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  flex-basis: 150px;
  border-radius: 10px;
  border: solid black 2px;
  margin: 10px;
  padding: 20px 10px 0 10px;
}

#ball-wrapper > div:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

#ball-wrapper img {
  display: block;
  margin: auto;
  width: 350px;
  height: 200px;
}
</style>
