<template>

    <div class="row">
        <div class="col-xl-3 col-lg-6 col-12">
            <div class="card">
                <div class="card-content">
                    <a href="/investor/accounts">
                        <div class="media align-items-stretch" style="min-height: 184px;">
                            <div class="p-1 custom-widget bg-dark-card white media-body">
                                <div class="row">
                                    <div class="col-6 col-sm-4"
                                        style="text-align: center; font-size: 3em;">
                                        <i class="ft-pocket"></i>
                                    </div>
                                    <div class="col-6 col-sm-8">
                                        <h5 class="text-center" style="color:#DFA426;">Account</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <p style="margin-bottom:0px;">Cash:</p>
                                    </div>
                                    <div class="col-6 text-right">
                                        <p style="margin-bottom:0px;">${{parseFloat(account_info.balance).toFixed(2)}}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <p style="margin-bottom:0px;">Securities: </p>
                                    </div>
                                    <div class="col-6 text-right">
                                        <p style="margin-bottom:0px;">${{account_info.unrealized}}</p>
                                    </div>
                                </div>
                                <p style="margin-top:10px;margin-bottom:0px;" class="text-center">Total Value:</p>
                                <p style="font-size:20px;color:#DFA426;" class="text-center">${{parseFloat(account_info.balance + account_info.unrealized).toFixed(2)}}</p>
                                <!-- <h6 class="text-center" style="font-size: 2em;">
                                    {{active_accounts.length}}</h6> -->
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-6 col-12">
            <div class="card">
                <div class="card-content">
                    <a href="/investor/holdings">
                        <div class="media align-items-stretch" style="min-height: 184px;">
                            <div class="p-1 custom-widget bg-dark-card white media-body">
                                <div class="row">
                                    <div class="col-6 col-sm-4"
                                        style="text-align: center; font-size: 3em;">
                                        <i class="ft-layers"></i>
                                    </div>
                                    <div class="col-6 col-sm-8">
                                        <h5 class="text-center" style="color:#DFA426;">Holdings</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <p style="margin-bottom:0px;">Sims Owned:</p>
                                    </div>
                                    <div class="col-6 text-right">
                                        <p style="margin-bottom:0px;"> {{holdings.sims_owned}}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <p style="margin-bottom:0px;">Ownership/Rank: </p>
                                    </div>
                                    <div class="col-6 text-right">
                                        <p style="margin-bottom:0px;">{{parseFloat(holdings.ownership).toFixed(0)}}% / {{holdings.rank}}</p>
                                    </div>
                                </div>
                                <p style="margin-top:10px;margin-bottom:0px;" class="text-center">Securities Owned:</p>
                                <p style="font-size:20px;color:#DFA426;" class="text-center">{{holdings.sec_owned}}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-6 col-12">
            <div class="card ">
                <div class="card-content">
                    <a href="/investor/available">
                        <div class="media align-items-stretch" style="min-height: 184px;">
                            <div class="p-1 custom-widget bg-dark-card white media-body">
                                <div class="row">
                                    <div class="col-6 col-sm-4"
                                        style="text-align: center; font-size: 3em;">
                                        <i class="ft-activity"></i>
                                    </div>
                                    <div class="col-6 col-sm-8">
                                        <h5 class="text-center" style="color:#DFA426;">Available</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <p style="margin-bottom:0px;">Sims Available:</p>
                                    </div>
                                    <div class="col-6 text-right">
                                        <p style="margin-bottom:0px;">{{securities.sims}}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <p style="margin-bottom:0px;">Total Available: </p>
                                    </div>
                                    <div class="col-6 text-right">
                                        <p style="margin-bottom:0px;">${{parseFloat(securities.dollar_amount).toFixed(2)}}</p>
                                    </div>
                                </div>
                                <p style="margin-top:10px;margin-bottom:0px;" class="text-center">Securities Available:</p>
                                <p style="font-size:20px;color:#DFA426;" class="text-center">{{securities.number_sec}}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-6 col-12">
            <div class="card">
                <div class="card-content">
                    <a href="/investor/accounts">
                        <div class="media align-items-stretch" style="min-height: 184px;">
                            <div class="p-1 custom-widget bg-dark-card white media-body">
                                <div class="row">
                                    <div class="col-6 col-sm-4"
                                        style="text-align: center; font-size: 3em;">
                                        <i class="ft-shuffle"></i>
                                    </div>
                                    <div class="col-6 col-sm-8">
                                        <h5 class="text-center" style="color:#DFA426;">MDF</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <p style="margin-bottom:0px;">Value of MDF:</p>
                                    </div>
                                    <div class="col-6 text-right">
                                        <p style="margin-bottom:0px;"> ${{parseFloat(mdf.balance).toFixed(2)}}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <p style="margin-bottom:0px;">Previous:</p>
                                    </div>
                                    <div class="col-6 text-right">
                                        <p style="margin-bottom:0px;">${{parseFloat(mdf.previous_month).toFixed(2)}}</p>
                                    </div>
                                </div>
                                <p style="margin-top:10px;margin-bottom:0px;" class="text-center">Current E.O.M:</p>
                                <p style="font-size:20px;color:#DFA426;" class="text-center">${{parseFloat(Math.floor(mdf.eom*100)/100).toFixed(2)}}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import DashboardBoxServices from '../services/DashboardBoxServices';
    import Paginator from '../../../../../components/Paginator.vue';
    import broadcast from '../broadcast';

    export default {
        mixins: [DashboardBoxServices,broadcast],
        name: 'DashboardBox',

        data() {
            return {
                transactions: [],
                securities:'',
                transactions_total:'',
                holdings:'',
                mdf:'',
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
                account:{},
                account_info:''
            }
        },
        watch: {

        },
        methods: {
            cardsDashboardCallBack(response) {
                if(response.data.status == 1){
                    this.securities = response.data.data.data.securities;
                    this.holdings = response.data.data.data.holding
                    this.account_info = response.data.data.data.account;
                    this.mdf = response.data.data.data.mdf;

                }else{
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
                $.LoadingOverlay("hide");
            },

            getUserAccount() {
                $.LoadingOverlay("hide");
                this.getUserAccountCall(this.getUserAccountCallback)
            },

            getUserAccountCallback(response) {
                if (response.data.status == 1) {
                    this.account = Object.assign(this.account, response.data.data);
                    var params = {
                        "account_id":this.account.id
                    }
                    this.cardsDashboardCall(params, this.cardsDashboardCallBack);

                    // this.getTransactions();
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
            },


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
        // watch: {
        //     "selected_account"(val){
        //         for (let i = 0; i < this.active_accounts.length; i++) {
        //             if(this.active_accounts[i].id == val){
        //                 this.all_info_account = this.active_accounts[i]
        //             }
        //         }
        //         var params = {
        //             "account_id":val
        //         }
        //         this.cardsDashboardCall(params, this.cardsDashboardCallBack);
        //     }

        //},
        created() {
            this.getUserAccount();
            // this.searchAccountsCall({
            //     page: this.paginator.current_page,
            //     limit: this.limit,
            //     fields: ['id', 'name', 'account_number', 'account_type', 'balance', 'status', 'created_at'],
            //     with: ['user', 'creator']
            // }, this.searchAccountsCallback);


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
