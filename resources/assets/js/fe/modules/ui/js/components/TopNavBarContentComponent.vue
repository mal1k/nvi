<template>
    <div class="navbar-container content">
        <div class="navbar-toggleable-sm" id="navbar-mobile">
            <ul class="nav navbar-nav mr-auto float-left">
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu"></i></a>
                </li>
            </ul>
            <ul class="nav navbar-nav float-right">
                <li class="dropdown dropdown-notification nav-item">
                    <!-- <a class="nav-link nav-link-label" href="#" data-toggle="dropdown" aria-expanded="false"><i
                            class="ficon ft-bell"></i><span class="badge badge-pill badge-danger badge-up">{{unread_notifications.length}}</span>
                    </a> -->
                    <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
                        <!--  <li class="dropdown-menu-header">
                            <h6 class="dropdown-header m-0"><span class="grey darken-2">Notifications</span><span
                                    class="notification-tag badge badge-danger float-right m-0">{{unread_notifications.length}}
                                    New</span></h6>
                        </li> -->
                        <li class="scrollable-container media-list ps">
                            <!--  <a href="javascript:void(0)">
                                <div class="media">
                                    <div class="media-left align-self-center"><i
                                            class="ft-plus-square icon-bg-circle bg-cyan"></i></div>
                                    <div class="media-body">
                                        <h6 class="media-heading">Title</h6>
                                        <p class="notification-text font-small-3 text-muted">
                                            Description</p><small>
                                            <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">30
                                                minutes ago</time></small>
                                    </div>
                                </div>
                            </a> -->
                            <!-- <a href="javascript:void(0)">
                                <div class="media">
                                    <div class="media-left align-self-center"><i
                                            class="ft-download-cloud icon-bg-circle bg-red bg-darken-1"></i>
                                    </div>
                                    <div class="media-body">
                                        <h6 class="media-heading red darken-1">99% Server load</h6>
                                        <p class="notification-text font-small-3 text-muted">Aliquam tincidunt
                                            mauris eu risus.</p><small>
                                            <time class="media-meta text-muted"
                                                datetime="2015-06-11T18:29:20+08:00">Five hour ago</time></small>
                                    </div>
                                </div>
                            </a>
                            <a href="javascript:void(0)">
                                <div class="media">
                                    <div class="media-left align-self-center"><i
                                            class="ft-alert-triangle icon-bg-circle bg-yellow bg-darken-3"></i>
                                    </div>
                                    <div class="media-body">
                                        <h6 class="media-heading yellow darken-3">Warning notifixation</h6>
                                        <p class="notification-text font-small-3 text-muted">Vestibulum auctor
                                            dapibus neque.</p><small>
                                            <time class="media-meta text-muted"
                                                datetime="2015-06-11T18:29:20+08:00">Today</time></small>
                                    </div>
                                </div>
                            </a>
                            <a href="javascript:void(0)">
                                <div class="media">
                                    <div class="media-left align-self-center"><i
                                            class="ft-check-circle icon-bg-circle bg-cyan"></i></div>
                                    <div class="media-body">
                                        <h6 class="media-heading">Complete the task</h6><small>
                                            <time class="media-meta text-muted"
                                                datetime="2015-06-11T18:29:20+08:00">Last week</time></small>
                                    </div>
                                </div>
                            </a>
                            <a href="javascript:void(0)">
                                <div class="media">
                                    <div class="media-left align-self-center"><i
                                            class="ft-file icon-bg-circle bg-teal"></i></div>
                                    <div class="media-body">
                                        <h6 class="media-heading">Generate monthly report</h6><small>
                                            <time class="media-meta text-muted"
                                                datetime="2015-06-11T18:29:20+08:00">Last month</time></small>
                                    </div>
                                </div>
                            </a> -->
                            <!-- <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                                <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                            </div>
                            <div class="ps__rail-y" style="top: 0px; right: 0px;">
                                <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div>
                            </div> -->
                        </li>
                        <!-- <li class="dropdown-menu-footer"><a class="dropdown-item text-muted text-center"
                                href="javascript:void(0)">Read all notifications</a></li> -->
                    </ul>
                </li>
                <!-- <li class="dropdown dropdown-notification nav-item"><a class="nav-link nav-link-label" href="#"
                        data-toggle="dropdown"><i class="ficon ft-mail"></i><span
                            class="badge badge-pill badge-warning badge-up">3</span></a>
                    <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
                        <li class="dropdown-menu-header">
                            <h6 class="dropdown-header m-0"><span class="grey darken-2">Messages</span><span
                                    class="notification-tag badge badge-warning float-right m-0">4 New</span></h6>
                        </li>
                        <li class="scrollable-container media-list ps"><a href="javascript:void(0)">
                                <div class="media">
                                    <div class="media-left">
                                        <div class="avatar avatar-online avatar-sm rounded-circle"><img src="/be/app-assets/images/portrait/small/avatar-s-1.png"
                                                alt="avatar"><i></i></div>
                                    </div>
                                    <div class="media-body">
                                        <h6 class="media-heading">{{user.firstname}}
                                            {{user.lastname}}</h6>
                                        <p class="notification-text font-small-3 text-muted">I like your portfolio,
                                            let's start.</p><small>
                                            <time class="media-meta text-muted"
                                                datetime="2015-06-11T18:29:20+08:00">Today</time></small>
                                    </div>
                                </div>
                            </a><a href="javascript:void(0)">
                                <div class="media">
                                    <div class="media-left"><span
                                            class="avatar avatar-sm avatar-busy rounded-circle"><img src="/be/app-assets/images/portrait/small/avatar-s-1.png"
                                                alt="avatar"><i></i></span>
                                    </div>
                                    <div class="media-body">
                                        <h6 class="media-heading">Bret Lezama</h6>
                                        <p class="notification-text font-small-3 text-muted">I have seen your work,
                                            there is</p><small>
                                            <time class="media-meta text-muted"
                                                datetime="2015-06-11T18:29:20+08:00">Tuesday</time></small>
                                    </div>
                                </div>
                            </a><a href="javascript:void(0)">
                                <div class="media">
                                    <div class="media-left">
                                        <div class="avatar avatar-online avatar-sm rounded-circle"><img src="/be/app-assets/images/portrait/small/avatar-s-1.png"
                                                alt="avatar"><i></i></div>
                                    </div>
                                    <div class="media-body">
                                        <h6 class="media-heading">Carie Berra</h6>
                                        <p class="notification-text font-small-3 text-muted">Can we have call in
                                            this week ?</p><small>
                                            <time class="media-meta text-muted"
                                                datetime="2015-06-11T18:29:20+08:00">Friday</time></small>
                                    </div>
                                </div>
                            </a><a href="javascript:void(0)">
                                <div class="media">
                                    <div class="media-left"><span
                                            class="avatar avatar-sm avatar-away rounded-circle"><img src="/be/app-assets/images/portrait/small/avatar-s-1.png"
                                                alt="avatar"><i></i></span>
                                    </div>
                                    <div class="media-body">
                                        <h6 class="media-heading">Eric Alsobrook</h6>
                                        <p class="notification-text font-small-3 text-muted">We have project party
                                            this saturday.</p><small>
                                            <time class="media-meta text-muted"
                                                datetime="2015-06-11T18:29:20+08:00">last
                                                month</time></small>
                                    </div>
                                </div>
                            </a>
                            <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                                <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                            </div>
                            <div class="ps__rail-y" style="top: 0px; right: 0px;">
                                <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div>
                            </div>
                        </li>
                        <li class="dropdown-menu-footer"><a class="dropdown-item text-muted text-center"
                                href="javascript:void(0)">Read
                                all messages</a></li>
                    </ul>
                </li> -->
                <li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link"
                        href="#" data-toggle="dropdown">
                        <div class="avatar avatar-online"><img :src="user.avatar ? '/storage/'+user.avatar : '/be/app-assets/images/portrait/small/avatar-s-1.png'"
                                alt="avatar"><i></i>
                        </div><span class="user-name">{{user.firstname}} {{user.lastname}}</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <!-- <a class="dropdown-item" href=""><i class="ft-user"></i> Edit Profile</a>
                        <a class="dropdown-item" href=""><i class="ft-mail"></i> My Inbox</a>
                        <a class="dropdown-item" href=""><i class="ft-check-square"></i> Task</a>
                        <a class="dropdown-item" href=""><i class="ft-message-square"></i> Chats</a>
                        <div class="dropdown-divider"></div> -->
                        <a class="dropdown-item" href="/investor/profile">
                            <i class="ft-user"></i>Profile
                        </a>
                        <a class="dropdown-item" href="/logout">
                            <i class="ft-power"></i>Logout
                        </a>
                        <!-- <button id="notifications">Info</button> -->
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import storage from '../../../../../misc/storage';
    import UIServices from '../services/UIServices.js';
    import broadcast from '../broadcast';
    export default {
        mixins: [UIServices, broadcast],
        props: ['user', 'unread_notifications'],
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
