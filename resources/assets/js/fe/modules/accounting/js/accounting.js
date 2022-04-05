

import VueRouter from 'vue-router';
import routes from './accounting-routes';

const router = new VueRouter({
    mode: 'history',
    routes
})

 
 
 const accounting = new Vue({
     el: '#accounting-module',
     router
 });
 