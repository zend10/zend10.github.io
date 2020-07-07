<template>
  <div class="project-item">
    <h2>{{ data.name }}</h2>
    <span>{{ data.description }}</span>
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

</style>
