<template>
    <div class="navbar-wrapper">
        <div class="navbar-header">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item mobile-menu d-md-none mr-auto"><a
                        class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i
                            class="ft-menu font-large-1"></i></a></li>
                <li class="nav-item mr-auto">
                    <a class="navbar-brand" href="/admin/dashboard">
                        <img class="brand-logo" alt="logo" src="/be/images/logo.png" style="width: 30px; height: auto">
                        <span class="brand-text">Admin</span>
                    </a>
                </li>
                <li class="nav-item d-none d-md-block float-right"><a class="nav-link modern-nav-toggle pr-0"
                        data-toggle="collapse"><i class="toggle-icon ft-toggle-right font-medium-3 white"
                            data-ticon="ft-toggle-right"></i></a></li>
                <li class="nav-item d-md-none"><a class="nav-link open-navbar-container" data-toggle="collapse"
                        data-target="#navbar-mobile"><i class="fa fa-ellipsis-v"></i></a></li>
            </ul>
        </div>
        <div class="navbar-container content">
            <div id="navbar-mobile" class="navbar-collapse collapse">
                <ul class="nav navbar-nav mr-auto float-left">
                    <li class="nav-item d-none d-md-block"><a href="#"
                            class="nav-link nav-menu-main menu-toggle hidden-xs"><i class="ft-menu"></i></a></li>
                    <li class="nav-item d-none d-md-block"><a href="#" class="nav-link nav-link-expand"><i
                                class="ficon ft-maximize"></i></a></li>
                    <li class="nav-item nav-search"><a href="#" class="nav-link nav-link-search"><i
                                class="ficon ft-search"></i></a>
                        <div class="search-input">
                            <input type="text" placeholder="Search..." class="input">
                        </div>
                    </li>
                </ul>
                <ul class="nav navbar-nav float-right">
                    <li class="dropdown dropdown-notification nav-item">
                        <a href="#" data-toggle="dropdown" class="nav-link nav-link-label"><i class="ficon ft-bell"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
                            <li class="dropdown-menu-header text-center">
                                <h6 class="dropdown-header m-0">
                                    <span class="grey darken-2">There are not notifications</span>
                                </h6>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown dropdown-notification nav-item">
                        <a href="#" data-toggle="dropdown" class="nav-link nav-link-label"><i class="ficon ft-mail"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
                            <li class="dropdown-menu-header text-center">
                                <h6 class="dropdown-header m-0">
                                    <span class="grey darken-2">There are not messages</span>
                                </h6>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown dropdown-user nav-item">
                        <a href="#" data-toggle="dropdown" class="dropdown-toggle nav-link dropdown-user-link"
                            aria-expanded="false">
                            <span class="avatar avatar-online">
                                <img :src="user.avatar ? '/storage/'+user.avatar : '/be/app-assets/images/portrait/small/avatar-s-1.png'"
                                    alt="avatar"><i></i></span>
                            <span class="user-name" style="margin-top: 9px">{{user.firstname}}
                                {{user.lastname}}</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="/admin/my-profile">
                                <i class="ft-user"></i> My Profile
                            </a>
                            <a class="dropdown-item" href="/logout">
                                <i class="ft-power"></i>Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import storage from '../../../../../misc/storage';
    import UIServices from '../services/UIServices.js';
    export default {
        mixins: [UIServices],
        props: ['user'],
        data() {
            return {

            }
        },
        watch: {
            selected_account(val) {

            }
        },
        methods: {
           
        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            },
            format: function (value) {
                if (!value) return ''
                value = value.replace('_', ' ').toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        created() {

        },
        mounted() {
            var self = this;
            this.$nextTick(function () {

            });
        }
    }
</script>

<style>

</style>

<style scoped>

</style>