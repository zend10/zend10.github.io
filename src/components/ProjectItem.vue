<template>
  <div class="project-item">
    <div class="project-logo">
      <a v-bind:href="data.otherLink ? data.otherLink : data.githubLink"><img v-bind:src="data.logo" loading="lazy"></a>
    </div>
    <div class="project-info">
      <div>
        <h2><a v-bind:href="data.otherLink ? data.otherLink : data.githubLink">{{ data.name }}</a></h2>
      </div>
      <span>{{ data.description }}</span>
      <div class="project-github" v-if="data.githubLink">
        <a v-bind:href="data.githubLink">Source Code</a>
      </div>
    </div>
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
.project-item {
  display: flex;
  margin-bottom: 10vh;
}

.project-logo {
  width: 15vw;
  height: 15vw;
  margin-right: 5vw;
}

.project-logo img {
  width: 100%;
  height: auto;
}

.project-info {
  width: 75%;
}

h2 {
  padding: 0;
  margin: 0;
  margin-bottom: 2vh;
  word-wrap: break-word;
}

a {
  color: $secondary-color;
}

.project-github {
  margin-top: 4vh;
}
</style>
