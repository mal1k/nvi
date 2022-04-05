
import VueRouter from 'vue-router';
import routes from './auth-routes';

import Notifications from 'vue-notification'
import Storage from '../../../../misc/storage'

const router = new VueRouter({
    mode: 'history',
    routes
})

window.Storage = Storage;

Vue.use(Notifications);

const auth = new Vue({
    el: '#auth-module',
    router
});
