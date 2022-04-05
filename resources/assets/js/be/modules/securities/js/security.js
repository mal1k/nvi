/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Users List
import SecuritiesListComponent from './components/SecuritiesListComponent.vue';
import CreateSecurityComponent from './components/CreateSecurityComponent.vue';
import PaySecurityComponent from './components/PaySecurityComponent.vue';


Vue.component('securities-list', SecuritiesListComponent);
Vue.component('create-security', CreateSecurityComponent);
Vue.component('pay-security', PaySecurityComponent);



const securities = new Vue({
    el: '#securities-module'
});
