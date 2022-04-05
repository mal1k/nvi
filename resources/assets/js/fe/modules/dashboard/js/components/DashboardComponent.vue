<template>
    <div>
        <div class="content-wrapper">
            <!-- <div class="content-header row">
                <div class="content-header-left col-md-6 col-12 mb-1">
                    <h3 class="content-header-title text-white">Dashboard</h3>
                </div>
                <div class="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-12">
                    <div class="breadcrumb-wrapper col-12">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/" style="color: #fff">Home</a></li>
                        </ol>
                    </div>
                </div>
            </div> -->
            <div class="content-body">
                <div class="row">
                     <div class="col-12">
                        <dashboard-box v-if="active_accounts.length > 0"></dashboard-box>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card card-dark">
                                    <!-- <div class="card-header">
                                        <div class="row">
                                            <div class="col-12 col-sm-6 col-md-8">
                                                <h4 class="card-title">Transactions History </h4>
                                            </div>
                                            <div class="col-12 col-sm-6 col-md-4">
                                                <b style="font-size: 12px;">Account number: </b>{{all_info_account.account_number}} -->
                                                <!-- <label style="font-size: 12px;">Select account number</label>
                                                <select @change="getTransactions" v-model="selected_account"
                                                    class="form-control-sm"
                                                    style="width: 100%; height: 30px; background-color: #404d66; color: #fff">
                                                    <option v-for="(account, index) in this.active_accounts"
                                                        :value="account.id" :key="index">{{account.account_number}}
                                                    </option>
                                                </select> -->
                                            <!-- </div>
                                        </div>
                                    </div> -->
                                    <div class="card-content collapse show">
                                        <div class="card-body card-dark">
                                            <div class="row">
                                                <div class="col-12 col-md-6">
                                                    <div v-if="transactions.length > 0">
                                                <div class="table-responsive">
                                                    <table id="recent-orders" style="color: #fff"
                                                        class="table mb-0 ps-container ps-theme-default">
                                                        <thead>
                                                            <tr>
                                                                <th class="text-center">
                                                                    <div style="background-color:#C8A252;padding:5px;border:3px solid #6D4B03;">
                                                                        Date
                                                                    </div>
                                                                </th>
                                                                <th class="text-center">
                                                                    <div style="background-color:#C8A252;padding:5px;border:3px solid #6D4B03;">
                                                                        Description
                                                                    </div>
                                                                </th>
                                                                <th class="text-center">
                                                                    <div style="background-color:#C8A252;padding:5px;border:3px solid #6D4B03;">
                                                                        Deposits
                                                                    </div>
                                                                </th>
                                                                <th class="text-center">
                                                                    <div style="background-color:#C8A252;padding:5px;border:3px solid #6D4B03;">
                                                                        Withdrawals
                                                                    </div>
                                                                </th>
                                                                <th class="text-center">
                                                                    <div style="background-color:#C8A252;padding:5px;border:3px solid #6D4B03;">
                                                                        Acct. Balance
                                                                    </div>
                                                                </th>
                                                                <!-- <th style="padding: 0.75rem 2rem;">Status</th> -->
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(transaction, index) in transactions"
                                                                :key="index">
                                                                <td class="text-truncate">
                                                                    {{moment(transaction.created_at).format('MM/DD/YYYY')}}
                                                                </td>
                                                                <td class="text-truncate">
                                                                    <!-- <span
                                                                        :class="{'badge badge-primary' : transaction.operation == 'deposit',
                                                                                'badge badge-danger' : transaction.operation == 'withdraw',
                                                                                'badge badge-warning' : transaction.operation == 'buy',
                                                                                'badge bg-blue bg-darken-2' : transaction.operation == 'mdf',
                                                                                'badge bg-purple bg-lighten-1' : transaction.operation == 'sale'}">
                                                                        {{transaction.operation | format}}
                                                                    </span> -->
                                                                    <span v-if="transaction.operation == 'deposit'">Deposit Funds</span>
                                                                    <span v-if="transaction.operation == 'withdraw'">Withdraw Funds</span>
                                                                    <span v-if="transaction.operation == 'buy'">Buy Securities</span>
                                                                    <span v-if="transaction.operation == 'sale'">Sale Securities</span>
                                                                    <span v-if="transaction.operation == 'mdf'">MDF payment</span>

                                                                </td>
                                                                <td class="text-truncate">
                                                                    ${{parseFloat(transaction.amount).toFixed(2)}}
                                                                </td>
                                                                <td class="text-truncate">
                                                                    ${{parseFloat(transaction.ending_withdrawable).toFixed(2)}}
                                                                </td>
                                                                <td class="text-truncate">
                                                                    ${{parseFloat(transaction.ending_balance).toFixed(2)}}
                                                                </td>
                                                                <!-- <td class="text-truncate"><span
                                                                        :class="{'badge bg-blue bg-darken-1' : transaction.status == 'settled',
                                                                                'badge badge-danger' : transaction.status == 'declined',
                                                                                'badge badge-warning' : transaction.status == 'pending',}">{{transaction.status | format}}</span>
                                                                </td> -->
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <transaction-paginator style="color:black;" v-if="paginator.last_page > 1" class="mt-2"
                                                    :pagination="paginator" @paginate="getTransactions"
                                                    :offset="offset">
                                                </transaction-paginator>
                                            </div>
                                            <div v-else>
                                                <div class="row mt-3">
                                                    <div class="col-md-12 text-center" style="color: #fff">
                                                        <h4>No registered transactions on this account.</h4>
                                                    </div>
                                                </div>
                                            </div>

                                                </div>
                                                <div class="col-12 col-md-6">
                                                     <div class="row">
                                                <div class="col-md-3  p-1">
                                                    <b>
                                                        Account type: </b>{{all_info_account.account_type | format}}
                                                </div>

                                                <div class="col-md-3  p-1">
                                                    <h5>
                                                        <b>
                                                            Balance: </b>${{parseFloat(all_info_account.balance).toFixed(2)}}

                                                    </h5>
                                                </div>
                                                <div class="col-md-3  p-1">
                                                    <h5>
                                                        <b>
                                                            Securities: </b>${{parseFloat(all_info_account.balance).toFixed(2)}}

                                                    </h5>
                                                </div>
                                                <div class="col-md-3  p-1">
                                                    <h5>
                                                        <b>
                                                            Total value: </b>${{parseFloat(all_info_account.balance).toFixed(2)}}

                                                    </h5>
                                                </div>
                                            </div>

                                                </div>

                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-xl-2 col-lg-3 col-12">
                        <div class="d-block "> -->

                            <!-- <div class="card mb-2">
                                <div class="card-content">
                                    <div class="media align-items-stretch">
                                        <div class="p-1 custom-widget bg-dark-card white media-body">
                                            <h5 class="text-center">Accounts</h5>
                                            <div class="row">
                                                <div class="col">
                                                    <p>Cash</p>
                                                </div>
                                                <div class="col text-center">
                                                    <p>$453.00</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <p>Securities</p>
                                                </div>
                                                <div class="col text-center">
                                                    <p>$453.00</p>
                                                </div>
                                            </div>
                                            <h5 class="text-center">Total Value</h5>

                                            <h5 class="text-bold-400 text-center mb-0">
                                                <i class="ft-plus"></i> $746.00
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-2">
                                <div class="card-content">
                                    <div class="media align-items-stretch">
                                        <div class="p-1 custom-widget bg-dark-card white media-body">
                                            <h5 class="text-center">E.O.M. return</h5>
                                            <div class="row">
                                                <div class="col">
                                                    <p>Securities Owned</p>
                                                </div>
                                                <div class="col text-center">
                                                    <p>84</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <p>Ownership/Rank</p>
                                                </div>
                                                <div class="col text-center">
                                                    <p>32/10</p>
                                                </div>
                                            </div>

                                            <h5 class="text-bold-400 text-center mb-0">
                                                <i class="ft-plus"></i> $88.00
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div> -->

                            <!-- <div class="form-group">
                                <a  href="/investor/available" id="buy"
                                    class="btn d-block w-100 btn-social mb-1 mr-1 custom-drk-btn"><span
                                        class="fa fa-adn font-medium-4"></span> <span class="text-right">Buy</span> </a>
                                <a href="/investor/holdings" id= "sell"
                                    class="btn d-block w-100 btn-social mb-1 mr-1 custom-drk-btn"><span
                                        class="fa fa-adn font-medium-4"></span> <span class="text-right">Sell</span>
                                </a>
                                <a href="/investor/accounts" id="deposit"
                                    class="btn d-block w-100 btn-social mb-1 mr-1 custom-drk-btn"><span
                                        class="fa fa-adn font-medium-4"></span> <span class="text-right">Deposit</span>
                                </a>
                                <a href="/investor/accounts" id="withdraw"
                                    class="btn d-block w-100 btn-social mb-1 mr-1 custom-drk-btn"><span
                                        class="fa fa-adn font-medium-4"></span> <span class="text-right">Withdraw</span>
                                </a>
                            </div> -->
                        <!-- </div>

                    </div> -->
                </div>
            </div>
        </div>
        <div class="sidenav-overlay"></div>
        <div class="drag-target"></div>
    </div>
</template>

<script>
    import DashboardServices from '../services/DashboardServices.js';
    import Paginator from '../../../../../components/Paginator.vue';
    import DashboardBoxComponent from '../../../dashboard_cards/js/components/DashboradBoxComponents.vue';

    export default {
        mixins: [DashboardServices],
        props: ['active_accounts', 'total_holdings', 'available_securities', 'total_mdf'],
        components: {
            'transaction-paginator': Paginator,
            'dashboard-box': DashboardBoxComponent
        },
        data() {
            return {
                transactions: [],
                securities:'',
                transactions_total:'',
                holdings:'',
                sims_owned:'',
                interest:'',
                selected_account: '',
                paginator: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                offset: 5,
                moment: moment,
                all_info_account:[]
            }
        },
        watch: {

        },
        methods: {
            // cardsDashboardCallBack(response) {
            //     console.log(response)
            //     if(response.data.status == 1){
            //         this.securities = response.data.data.securities;
            //         this.holdings = response.data.data.holdings
            //         this.sims_owned = response.data.data.sims_owned;
            //         this.interest = response.data.data.interest;

            //     }else{
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
            //     $.LoadingOverlay("hide");
            // },

            getTransactions() {
                this.getTransactionsCall(this.active_accounts[0].id, this.paginator.current_page, this.getTransactionsCallback)
            },
            getTransactionsCallback(response) {
                if (response.data.status == 1) {
                    this.transactions = response.data.data.data;
                    this.transactions_total = response.data.data.total;
                    this.paginator = response.data.data
                } else {
                    if (Helpers.isAssoc(response.data.errors)) {
                        let errors = [];
                        for (var i in response.data.errors) {
                            var string
                            errors.push('<span>' + response.data.errors[i] + '</span></br>')
                        }
                        toastr.error(errors, 'Some error(s) has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    } else {
                        toastr.error(response.data.errors[0], 'An error has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    }
                }
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
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        watch: {
            // "selected_account"(val){
            //     for (let i = 0; i < this.active_accounts.length; i++) {
            //         if(this.active_accounts[i].id == val){
            //             this.all_info_account = this.active_accounts[i]
            //         }
            //     }
            //     var params = {
            //         "account_id":val
            //     }
            //     // this.cardsDashboardCall(params, this.cardsDashboardCallBack);
            // }

        },
        created() {
            if (this.active_accounts.length > 0) {
                this.selected_account = this.active_accounts[0].id;
                this.all_info_account = this.active_accounts[0];
                this.getTransactions()
            }else{
                toastr.error('You do not have an active account. Please contact with your administrator', 'An error has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
            }
            var params = {
                "account_id":this.selected_account
            }
        },
        mounted() {
            var self = this;
            this.$nextTick(function () {
                window.addEventListener('storage', function (e) {
                    if (self.selected_account != e.newValue) {
                        storage.set_plain('selected_account', e.oldValue);
                    }
                    if (!e.newValue) {
                        self.selected_account = '';
                    }
                });
            });
        }
    }
</script>
<style>
    .page-item.active .page-link {
        background-color: #411c5e !important;
        border-color: #411c5e !important;
    }
</style>

<style scoped>
    .card-dark {
        background: #404e67;
        color: #fff;
    }

    .badge {
        color: #000;
    }
</style>
