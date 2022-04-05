<template>
    <div class="card">
        <div class="card-content">
            <div class="card-body">
                <div class="col-md-12">
                    <h4 style="margin-bottom:10px;"><strong>Accounts</strong></h4>
                </div>
                <div>
                    <div class="card-content">
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-12 col-md-6 " style="padding-left:21px; padding-right:21px;">
                                        <label>Search</label>
                                        <input type="text" v-model="query" class="form-control" id="query"
                                            placeholder="Type account number...">
                                    </div>
                                    <div class="col-12 col-md-3 " style="padding-left:21px; padding-right:21px;">
                                        <div class="form-group" style="width: 100%;">
                                            <label>Account type</label>
                                            <select v-model="account_type" class="form-control" style="width: 100%">
                                                <option value="all">All</option>
                                                <option value="personal">Personal</option>
                                                <option value="business">Business</option>
                                                <option value="professional">Professional</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-3 " style="padding-left:21px; padding-right:21px;">
                                        <div class="form-group" style="width: 100%;">
                                            <label>Status</label>
                                            <select v-model="status" class="form-control" style="width: 100%">
                                                <option value="all">All</option>
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                                <option value="closed">Closed</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
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
                                            <th class="text-center"> Created at</th>
                                            <th class="text-center"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(account, index) in accounts" :key="index">
                                            <td>
                                                <div class="avatar avatar-md mr-1" style="width:100%;">
                                                    <img class="rounded-circle"
                                                        :src="account.user.avatar ? '/storage/' + account.user.avatar : '/be/images/avatar-placeholder.png'" style="width:30%">
                                                    <span style="margin-left: 10px;">{{account.user.firstname}}
                                                        {{account.user.lastname}}</span>
                                                </div>
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
                                                <div :class="{'badge badge-primary' : account.status == 'active', 'badge badge-danger' : account.status == 'inactive',
                                                     'badge badge-secondary' : account.status == 'closed'}">
                                                    {{account.status | format}}
                                                </div>
                                            </td>
                                            <td class="separated">
                                                {{moment(account.created_at).format('LL')}}
                                            </td>
                                            <td style="text-align:center;"><a style="margin-top:10px;"
                                                    :href="'/admin/accounts/edit/' + account.id"
                                                    class="btn mr-1 mb-1 btn-outline-secondary btn-sm"><i
                                                        class="fa fa-pencil"></i></a></td>

                                            <!-- <td v-show='account.name=="NVIC"' style="text-align:center;"><button class="btn" @click="addFunds()" ><i class="fa fa-plus"></i></button></td> -->
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
</template>

<script>
    import AccountServices from '../services/AccountServices.js';
    import Paginator from '../../../../../components/Paginator.vue';
    import broadcast from '../../broadcast.js';
    export default {
        mixins: [AccountServices, broadcast],
        components: {
            'accounts-paginator': Paginator
        },
        props: ['roles'],
        data() {
            return {
                accounts: [],
                no_found_msg: 'No accounts found',
                query: '',
                paginator: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                offset: 5,
                moment: moment,
                account_type: '',
                status: '',
                limit: 10
            }
        },
        watch: {
            query: _.debounce(function () {
                this.searchAccounts(1);
            }, 300),
            account_type(val) {
                this.searchAccounts(1);
            },
            status(val) {
                this.searchAccounts(1);
            }
        },
        methods: {
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
            },
            searchAccounts(page) {
                $.LoadingOverlay("show");
                var params = {
                    page: (typeof page == 'undefined') ? this.paginator.current_page : page,
                    limit: this.limit,
                    fields: ['id', 'name', 'account_number', 'account_type', 'balance', 'status', 'created_at'],
                    with: ['user', 'creator']
                };

                params['where'] = [];

                if (this.query != '') {
                    let query = this.query;
                    params['query'] = {
                        value: "+*" + query.replace(/\s+/g, "* +*") + "*", // search term
                        fields: ['name', 'account_number', 'account_type']
                    }
                }

                if (this.account_type != '' && this.account_type != 'all') {
                    params['where'].push(['account_type', this.account_type]);

                }
                if (this.status != '' && this.status != 'all') {
                    params['where'].push(['status', this.status]);
                }

                this.searchAccountsCall(params, this.searchAccountsCallback);
            }
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
            $.LoadingOverlay("show");
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
        }
    }
</script>
<style>
    .icon-store {
        width: 30px;
        height: auto;
    }

    .icon-amazon {
        width: 50px;
        height: auto;
    }

    .input-error-select {
        color: #d61212 !important;
        border: 1px solid #b60707 !important;
        border-radius: 5px
    }

    .message-error {
        color: #d61212;
        float: right;
        padding-top: 10px;
        font-size: 12px;
    }

    .icons-custom {
        width: 20px;
        height: 20px;
    }

    .separated {
        padding-top: 20px !important;
    }
</style>

<style scoped>
    td {
        width: 15%;
    }
</style>
