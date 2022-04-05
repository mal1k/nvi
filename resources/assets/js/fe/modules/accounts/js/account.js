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

 //Accounts List
 import AccountsListComponent from './components/AccountsListComponent.vue';
 import SelectAccountComponent from './components/AccountsListComponent.vue';

 Vue.component('accounts-list', AccountsListComponent);
 Vue.component('select-account', SelectAccountComponent);
 
 
 
 const accounts = new Vue({
     el: '#accounts-module'
 });
 