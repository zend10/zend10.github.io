<template>
  <div id="projects">
    <ProjectItem v-for="project in projects" v-bind:key="project.id" v-bind:data="project"/>
  </div>
</template>

<script>
import projects from '@/assets/projects.json'
import ProjectItem from '@/components/ProjectItem.vue'

export default {
  name: 'Projects',
  components: {
    ProjectItem
  },
  data() {
    return {
      projects: projects
    }
  }
}
</script>

<style scoped lang="scss">

</style>
