<template>
  <div id="app">
    <h1>ZEN BASEMENT</h1>
    <nav>
      <div v-for="menu in menus" v-bind:key="menu.title">
        <router-link v-bind:to="menu.route">
          <span>{{ menu.title }}</span>
        </router-link>
      </div>
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      menus: [
        {
          title: 'PROFILE',
          route: '/profile'
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

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  color: $text-color;
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  background: $primary-color;
}

h1 {
  font-family: Ubuntu, Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
  font-size: 5rem;
  text-align: center;
}

#app {
  padding: 0;
  margin: 0;
  padding-top: 5vh;
  padding-bottom: 20vh;
}

a {
  text-decoration: none;
  color: $text-color;
}

nav {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 5vh;
}

nav a {
  margin: 2vw;

  &.router-link-exact-active {
    color: $secondary-color;
  }
}

nav a:hover {
  color: $secondary-color;
}

main {
  background: white;
  width: 80%;
  padding: 5vh 5vw;
  margin: 0 auto;
}

@media (max-width: 1023px) {
  h1 {
    font-size: 2.5rem;
  }
}
</style>
