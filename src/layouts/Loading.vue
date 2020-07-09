<template>
  <span v-if="isLoading">Retrieving data...</span>
</template>

<script>
export default {
  name: 'Loading',
  props: ["isLoading"]
}
</script>

<style scoped lang="scss">
span {
  display: flex;
  justify-content: center;
}
</style>