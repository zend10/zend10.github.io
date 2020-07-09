<template>
  <div class="gallery-item">
    <img v-bind:src="data.imagePath" loading="lazy">
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
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .1s;
}

img:hover {
  cursor: pointer;
  transform: scale(1.01);
}
</style>
