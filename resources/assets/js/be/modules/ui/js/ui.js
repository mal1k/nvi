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

 //UI
 import TopNavBarComponent from '../../ui/js/components/TopNavBarComponent.vue';

 Vue.component('top-navbar-be', TopNavBarComponent);
 
 const navbar = new Vue({
     el: '#top-navbar'
 });
 