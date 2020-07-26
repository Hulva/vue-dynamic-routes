import Vue from 'vue';
import VueRouter from 'vue-router';
// import ViewUI from 'view-design';
import App from './App.vue';
import store from './store';

import './assets/css/app.css';

// 按需引入
// Vue.component('Button', Button);
// Vue.component('Layout', Layout);
// Vue.component('Header', Header);
// Vue.component('Footer', Footer);
// Vue.component('Content', Content);
// Vue.component('Sider', Sider);

Vue.config.productionTip = false;
Vue.use(VueRouter);
// Vue.use(ViewUI);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
