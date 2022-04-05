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

//Holdings List
import Simulation from "./components/Simulation.vue";
import SelectSecurityComponent from "../../ui/js/components/SelectSecurityComponent.vue";

Vue.component(    "simulation-list",    Simulation);
Vue.component(    "select-security",    SelectSecurityComponent);


const simulation = new Vue({
    el: "#simulation-module"
});
