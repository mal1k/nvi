

import VueRouter from 'vue-router';
import routes from './plans-routes';

const router = new VueRouter({
    mode: 'history',
    routes
})

 
 
 const plans = new Vue({
     el: '#plans-module',
     router
 });
 