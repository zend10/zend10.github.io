<template>
  <div class="home-menu">
    <h1>{{ data.title }}</h1>
    <span>{{ data.caption }}</span>
  </div>
</template>

<script>
export default {
  name: 'HomeMenu',
  props: ["data"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-menu {
  box-shadow: 0.1rem 0.1rem 0.1rem gray;
  padding: 1rem;
  margin-top: 5vh;
  background: linear-gradient(to bottom right, $primary-color, $secondary-color);
}

.home-menu:hover {
  cursor: pointer;
}

h1 {
  padding: 0;
  margin: 0;
  margin-bottom: 2vh;
}
</style>
