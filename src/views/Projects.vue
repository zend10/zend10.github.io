<template>
  <div id="projects">
    <Loading v-bind:isLoading="data.isLoading"/>
    <ProjectItem v-for="project in data.projects" v-bind:key="project.id" v-bind:data="project"/>
  </div>
</template>

<script>
import Loading from '@/layouts/Loading.vue'
import ProjectItem from '@/components/ProjectItem.vue'
import firebase from '@/firebase.js'

let data = {
  projects: [],
  isLoading: true
}

export default {
  name: 'Projects',
  components: {
    Loading,
    ProjectItem
  },
  data() {
    return {
      data
    }
  }
}

firebase.database().ref('projects').once('value').then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    data.projects.push(childSnapshot.val())
    data.isLoading = false
  })
})

</script>

<style scoped lang="scss">
#projects {
  margin-bottom: -10vh;
}
</style>
