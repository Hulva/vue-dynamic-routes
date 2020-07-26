<template>
  <div class="flex mb-4">
    <div class="menu w-2/5 bg-grey-light rounded-l">
      <router-link :to="{name: 'section1'}" class="block rounded-tl py-2 px-4 no-underline font-semibold">
        Nest me
      </router-link>

      <router-link :to="{name: 'section2'}" class="block py-2 px-4 no-underline font-semibold">
        About
      </router-link>
    </div>
    <div class="w-3/5 h-64">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import VueRouter from 'vue-router';
import NestedAbout from './NestedAbout.vue';
import { getParentRouterPath, routeNameAlreadyRegistered } from '../libs/router.helper';

import Tabs from './Tabs.vue';

export default {
  created() {
    if (routeNameAlreadyRegistered(this.$router, 'section1')) {
      return;
    }
    this.$router.addRoutes([{
      name: 'section1',
      path: `${getParentRouterPath(this)}/section1`,
      alias: `${getParentRouterPath(this)}/section1/*`,
      meta: { basePath: `${getParentRouterPath(this)}/section1` },
      component: Tabs,
    },
    {
      name: 'section2',
      path: `${getParentRouterPath(this)}/section2`,
      alias: `${getParentRouterPath(this)}/section2/*`,
      meta: { basePath: `${getParentRouterPath(this)}/section2` },
      component: NestedAbout,
    }, {
      path: '/home/nested',
      redirect: `${getParentRouterPath(this)}/section1`,
    }]);
  },
  router: new VueRouter({
    mode: 'history',
    linkActiveClass: 'bg-blue-dark text-white',
  }),
  data() {
    return {

    };
  },
};
</script>
