<template>
    <div class="content-wrapper">
        <div class="content-header row"></div>
        <div class="content-body">
            <div class="row grouped-multiple-statistics-card">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-6 col-xl-2 offset-xl-1 col-sm-6 col-12">
                                    <a href="/admin/users">
                                        <div
                                            class="d-flex align-items-start mb-sm-1 mb-xl-0 border-right-blue-grey border-right-lighten-5">
                                            <span class="card-icon primary d-flex justify-content-center mr-3"><i
                                                    class="icon p-1 ft-users customize-icon font-large-2 p-1"></i></span>
                                            <div class="stats-amount mr-3">
                                                <h3 class="heading-text text-bold-600">{{users_prop}}</h3>
                                                <p class="sub-heading">Users</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-6 col-xl-2 col-sm-6 col-12">
                                    <a href="/admin/accounts">
                                        <div
                                            class="d-flex align-items-start mb-sm-1 mb-xl-0 border-right-blue-grey border-right-lighten-5">
                                            <span class="card-icon danger d-flex justify-content-center mr-3"><i
                                                    class="icon p-1 ft-pocket customize-icon font-large-2 p-1"></i></span>
                                            <div class="stats-amount mr-3">
                                                <h3 class="heading-text text-bold-600">{{active_accounts_prop}}</h3>
                                                <p class="sub-heading">Accounts</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-6 col-xl-2 col-sm-6 col-12">
                                    <a href="/admin/securities">
                                        <div
                                            class="d-flex align-items-start border-right-blue-grey border-right-lighten-5">
                                            <span class="card-icon success d-flex justify-content-center mr-3"><i
                                                    class="icon ft-activity customize-icon font-large-2 p-1"></i></span>
                                            <div class="stats-amount mr-3">
                                                <h3 class="heading-text text-bold-600">{{securities_prop}}</h3>
                                                <p class="sub-heading">Securities</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-6 col-xl-2 col-sm-6 col-12">
                                    <div class="d-flex align-items-start"><span
                                            class="card-icon warning d-flex justify-content-center mr-3"><i
                                                class="icon ft-layers customize-icon font-large-2 p-1"></i></span>
                                        <div class="stats-amount mr-3">
                                            <h3 class="heading-text text-bold-600">{{holdings_prop}}</h3>
                                            <p class="sub-heading">Holdings</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-xl-2 col-sm-6 col-12">
                                    <div class="d-flex align-items-start"><span
                                            class="card-icon purple d-flex justify-content-center mr-3"><i
                                                class="icon ft-shuffle customize-icon font-large-2 p-1"></i></span>
                                        <div class="stats-amount mr-3">
                                            <h3 class="heading-text text-bold-600">{{transactions_prop}}</h3>
                                            <p class="sub-heading">Transactions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row match-height">
                <div class="col-12">
                    <div class="card active-users">
                        <div class="card-header border-0">
                            <h4 class="card-title">Active accounts</h4> <a class="heading-elements-toggle"><i
                                    class="fa fa-ellipsis-v font-medium-3"></i></a>
                            <div class="heading-elements">
                                <ul class="list-inline mb-0">
                                    <li><a data-action="reload"><i class="feather icon-rotate-cw"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-content">
                            <div id="audience-list-scroll" class="table-responsive position-relative">
                                <div v-if="accounts.length > 0" class="table-responsive">
                                    <table id="recent-customers"
                                        class="table table-hover mb-0 ps-container ps-theme-default">
                                        <thead>
                                            <tr>
                                                <th>Owner</th>
                                                <th class="text-center">Account number</th>
                                                <th class="text-center">Type</th>
                                                <th class="text-center">Balance</th>
                                                <th class="text-center">Status</th>
                                                <th class="text-center">Created at</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(account, index) in accounts" :key="index">
                                                <td>
                                                    <a :href="'/admin/accounts/edit/' + account.id">
                                                        <div class="avatar avatar-md mr-1" style="width:100%;">
                                                            <img class="rounded-circle"
                                                                :src="account.user.avatar ? '/storage/' + account.user.avatar : '/be/images/avatar-placeholder.png'" style="width:30%;">
                                                            <span style="margin-left: 10px;">{{account.user.firstname}}
                                                                {{account.user.lastname}}</span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td class="separated text-center">{{account.account_number}}</td>
                                                <td class="separated text-center"><span
                                                        :class="{
                                                        'badge bg-warning bg-darken-2' : account.account_type == 'personal',
                                                        'badge badge-secondary' : account.account_type == 'business',
                                                        'badge bg-blue bg-darken-2' : account.account_type == 'professional',
                                                        'badge bg-red bg-darken-2' : account.account_type == 'nvic' || account.account_type == 'sf' || account.account_type == 'mdf',
                                                    }">
                                                     {{account.account_type | format}}</span>
                                                </td>
                                                <td class="separated text-center">
                                                    <b>${{parseFloat(account.balance).toFixed(2)}}</b></td>
                                                <td class="separated text-center">
                                                    <div
                                                        :class="{'badge badge-primary' : account.status == 'active', 'badge badge-danger' : account.status == 'inactive',
                                                                 'badge badge-secondary' : account.status == 'closed'}">
                                                        {{account.status | format}}
                                                    </div>
                                                </td>
                                                <td class="separated text-center">
                                                    {{moment(account.created_at).format('LL')}}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <accounts-paginator v-if="paginator.last_page > 1" :pagination="paginator"
                                        @paginate="searchAccounts()" :offset="offset"></accounts-paginator>
                                </div>
                                <div v-else class="text-center">
                                    <div style="padding: 20px">
                                        <h4>{{no_found_msg}}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DashboardServices from '../services/DashboardServices.js';
    import Paginator from '../../../../../components/Paginator.vue';
    import broadcast from '../../broadcast.js';

    export default {
        mixins: [DashboardServices, broadcast],
        components: {
            'accounts-paginator': Paginator
        },
        props: ['active_accounts', 'securities', 'holdings', 'users', 'transactions'],
        data() {
            return {
                accounts: [],
                no_found_msg: 'No accounts found',
                paginator: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                offset: 5,
                limit: 10,
                moment: moment,
                users_prop:'',
                active_accounts_prop:'',
                securities_prop:'',
                holdings_prop:'',
                transactions_prop:''
            }
        },
        watch: {

        },
        methods: {
            // searchAccounts(page) {
            //     $.LoadingOverlay("show");
            //     var params = {
            //         page: (typeof page == 'undefined') ? this.paginator.current_page : page,
            //         limit: this.limit,
            //         fields: ['id', 'name', 'account_number', 'account_type', 'balance', 'status', 'created_at'],
            //         with: ['user', 'creator']
            //     };
            //     params['where'] = [];
            //     this.searchAccountsCall(params, this.searchAccountsCallback);
            // },
            searchAccountsCallback(code, response, errors) {
                if (code == '200') {
                    if (response.data.length > 0) {
                        this.paginator = response.pagination;
                    } else {
                        this.paginator = {
                            total: 0,
                            per_page: 2,
                            from: 1,
                            to: 0,
                            current_page: 1
                        };
                    }
                    this.accounts = response.data;
                } else {
                    swal("Error!", errors[0], "error");
                }
                $.LoadingOverlay("hide");
            }

            // getTransactions() {
            //     this.getTransactionsCall(this.selected_account, this.paginator.current_page, this.getTransactionsCallback)
            // },
            // getTransactionsCallback(response) {
            //     if (response.data.status == 1) {
            //         this.transactions = response.data.data.data;
            //         this.transactions_total = response.data.data.total;
            //         this.paginator = response.data.data
            //     } else {
            //         if (Helpers.isAssoc(response.data.errors)) {
            //             let errors = [];
            //             for (var i in response.data.errors) {
            //                 var string
            //                 errors.push('<span>' + response.data.errors[i] + '</span></br>')
            //             }
            //             toastr.error(errors, 'Some error(s) has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
            //         } else {
            //             toastr.error(response.data.errors[0], 'An error has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
            //         }
            //     }
            // }
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
                 if(value == 'nvic' || value == 'sf' || value == 'mdf'){
                    return value.toUpperCase();
                }else{
                    return value.charAt(0).toUpperCase() + value.slice(1);
                }
            }
        },
        created() {
            this.users_prop=this.users;
            this.active_accounts_prop = this.active_accounts;
            this.securities_prop=this.securities;
            this.holdings_prop=this.holdings;
            this.transactions_prop=this.transactions;
            this.searchAccountsCall({
                page: this.paginator.current_page,
                limit: this.limit,
                fields: ['id', 'name', 'account_number', 'account_type', 'balance', 'status', 'created_at'],
                with: ['user', 'creator']
            }, this.searchAccountsCallback);
        },
        mounted() {
            var _this = this;
            this.$nextTick(function () {

            })
        },

    }
</script>
<style>
    .separated {
        padding-top: 20px !important;
    }
</style>

<style scoped>
    td {
        width: 15%;
    }
</style>
