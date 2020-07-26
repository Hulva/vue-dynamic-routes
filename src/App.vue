<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import VueRouter from 'vue-router';
import Home from './views/Home.vue';

export default {
  router: new VueRouter({
    mode: 'history',
    linkActiveClass: 'text-blue font-bold',
    routes: [
      {
        path: '/home',
        alias: '/home/*',
        name: 'home',
        meta: {
          basePath: '/home',
        },
        component: Home,
      },
      {
        path: '/about',
        name: 'About',
        meta: {
          basePath: '/about',
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      },
    ],
  }),
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
