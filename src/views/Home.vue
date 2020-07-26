<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">
      <div class="bg-white shadow-md rounded px-6 py-3">
        <router-link :to="{ name: 'nested' }" class="mr-3 no-underline">Nested Routes</router-link>
        <router-link :to="{ name: 'single' }" class="mr-3 no-underline">Single Route</router-link>
        <div class="bg-white shadow-md rounded mt-4">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueRouter from 'vue-router';
import VerticalMenu from './VerticalMenu.vue';
import SinglePage from './Single.vue';
import { getParentRouterPath, routeNameAlreadyRegistered } from '../libs/router.helper';

export default {
  name: 'Home',
  created() {
    if (routeNameAlreadyRegistered(this.$router, 'nested')) {
      return;
    }
    this.$router.addRoutes([
      {
        name: 'nested',
        path: `${getParentRouterPath(this)}/nested`,
        alias: `${getParentRouterPath(this)}/nested/*`,
        meta: { basePath: `${getParentRouterPath(this)}/nested` },
        component: VerticalMenu,
      },
      {
        name: 'single',
        path: `${getParentRouterPath(this)}/single`,
        alias: `${getParentRouterPath(this)}/single/*`,
        meta: { basePath: `${getParentRouterPath(this)}/single` },
        component: SinglePage,
      },
      {
        path: '/home',
        redirect: `${getParentRouterPath(this)}/nested`,
      },
    ]);
  },
  router: new VueRouter({
    mode: 'history',
    linkActiveClass: 'bg-blue-dark text-white font-bold',
  }),
};
</script>
