<template>
  <div id="home">
    
  </div>
</template>

<script>
// import HomeMenu from '@/components/HomeMenu.vue'

export default {
  name: 'Home',
  components: {
    // HomeMenu
  },
  data() {
    return {
      menus: [
        {
          title: 'PROFILE',
          route: '/'
        },
        {
          title: 'PROJECTS',
          route: '/projects',
        },
        {
          title: 'GALLERY',
          route: '/gallery'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
