<template>
  <div>
    <ul class="list-reset flex px-2 py-1">
      <li class="-mb-px mr-1 py-2 pl-4 ">
         <router-link :to="{name: 'tab1'}" class="bg-white no-underline inline-block text-blue-dark font-semibold">
          First Tab
         </router-link>
      </li>
      <li class="mr-1 py-2 pl-4 ">
         <router-link :to="{name: 'tab2'}" class="bg-white no-underline inline-block text-blue-dark font-semibold">
          Second Tab
         </router-link>
      </li>
    </ul>
    <div class="p-6">
      <router-view>test</router-view>
    </div>

  </div>
</template>

<script>
import VueRouter from 'vue-router';
import Tab1 from './Tab1.vue';
import Tab2 from './Tab2.vue';
import { getParentRouterPath, routeNameAlreadyRegistered } from '../libs/router.helper';

export default {
  created() {
    if (routeNameAlreadyRegistered(this.$router, 'tab1')) {
      return;
    }

    this.$router.addRoutes([{
      name: 'tab1',
      path: `${getParentRouterPath(this)}/tab1`,
      alias: `${getParentRouterPath(this)}/tab1/*`,
      meta: { basePath: `${getParentRouterPath(this)}/tab1` },
      component: Tab1,
    },
    {
      name: 'tab2',
      path: `${getParentRouterPath(this)}/tab2`,
      alias: `${getParentRouterPath(this)}/tab2/*`,
      meta: { basePath: `${getParentRouterPath(this)}/tab1` },
      component: Tab2,
    },
    {
      path: `${getParentRouterPath(this)}`,
      redirect: `${getParentRouterPath(this)}/tab1`,
    }]);
  },
  router: new VueRouter({
    mode: 'history',
    linkActiveClass: 'border-b border-blue-light',
  }),
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>
