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
 import UsersListComponent from './components/UsersListComponent.vue';
 import CreateUserComponent from './components/CreateUserComponent.vue';
 import MyProfileComponent from './components/MyProfileComponent.vue';

 Vue.component('users-list', UsersListComponent);
 Vue.component('create-user', CreateUserComponent);
 Vue.component('my-profile', MyProfileComponent);
 
 
 
 const users = new Vue({
     el: '#users-module'
 });
 