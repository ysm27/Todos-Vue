import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Layout from './components/Layout';
import store from './store/index'

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/all'
  },{
    path: '/:filter',
    name: 'Filter',
    component: App
  }]
});

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(Layout),
}).$mount('#app')
