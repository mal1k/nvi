<template>
    <div>
        <!-- <select-account :accounts="accounts" @account-selected="setSelectedAccount"></select-account> -->
        <dashboard-box v-if="accounts.length > 0" ></dashboard-box>
        <div class="card card-dark">
            <div class="card-content" style="min-height: 70vh;">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6 text-center">
                            <div class="row" style="margin-bottom:20px;">
                                <div class="col-6" style="padding-top:15px;">
                                    <h5 style="font-size:20px;color:#DFA426;font-weight:500;">Available Balance:</h5>
                                </div>
                                <div class="col-6" style="padding-top:15px;">
                                    <h5 style="font-size:20px;color:#DFA426;font-weight:500;">${{parseFloat(account.balance).toFixed(2)}}</h5>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-3" style="text-align: -webkit-right;">
                            <div class="input-group" style="width:23rem;">
                                <input v-model="amount" type="number" class="form-control form-control-lg" id="Large"
                                    min="10" placeholder="Amount to be funded">
                                <div class="input-group-append">
                                <button @click="openModal()" type="button" class="btn btn-primary">Add funds</button>
                                </div>
                            </div>
                            <span v-if="error.amount" class="message-error">{{error_message.amount}}</span>
                        </div>
                    </div>


                     <div class="row">
                        <div class="col-12 ">
                            <div v-if="transactions.length > 0">
                                <!-- <label>Transactions History</label> -->
                                <div class="table-responsive">
                                    <table id="recent-orders"
                                        class="table table-hover mb-0 ps-container ps-theme-default">
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
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(transaction, index) in transactions"
                                                    :key="index">
                                                    <td class="text-truncate text-center">
                                                        {{moment(transaction.created_at).format('MM/DD/YYYY')}}
                                                    </td>
                                                    <td class="text-truncate text-center">
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
                                                    <td class="text-truncate text-center">
                                                        ${{parseFloat(transaction.amount).toFixed(2)}}
                                                    </td>
                                                    <td class="text-truncate text-center">
                                                        ${{parseFloat(transaction.ending_withdrawable).toFixed(2)}}
                                                    </td>
                                                    <td class="text-truncate text-center">
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
                                    :pagination="paginator" @paginate="getTransactions" :offset="offset">
                                </transaction-paginator>
                            </div>
                            <div v-else>
                                <div class="row mt-3">
                                    <div class="col-md-12 text-center">
                                        <h4>No registered transactions on this account.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- <fieldset class="form-group position-relative mt-2">
                        <input v-model="amount" type="number" class="form-control form-control-lg" id="Large"
                            min="10" placeholder="Amount to be funded">
                        <span v-if="error.amount" class="message-error">{{error_message.amount}}</span>
                        <button @click="addFunds" type="button" class="btn btn-outline-primary">Add funds</button>
                    </fieldset> -->
                </div>
            </div>
        </div>
         <div class="modal fade text-left" id="add-funds" tabindex="-1" role="dialog" aria-labelledby="myModalLabel17"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Deposit</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <div class="col-8 col-xs-12" style="margin-top: 20px">
                                <div class="form-group mb-2" style="padding:0;">
                                    <button v-show="!showAddPaymentMethod" class="btn btn-outline-primary" type="button" @click="showAddPaymentMethod = true"><i class="fa fa-credit-card"></i> Add</button>
                                </div>
                            </div>
                            <add-payment-profile v-show="showAddPaymentMethod"
                                :card_processor="card_processor"
                                :client_key="client_key"
                                :api_id="api_id"
                                :save_method="true"
                                :total_amount="amount"
                                :options="options"
                                @save="onSave"
                                @back="onBack"
                            ></add-payment-profile>
                        </div>
                        <div v-show="!showAddPaymentMethod" class="mt-3">
                            <payment-methods
                                :pmethods="pmethods"
                                :hidecontrols="true"
                                @hasPaymentProfile="onHasPaymentProfile"
                                @sendPaymentId="sendPaymentIdHandle"
                            ></payment-methods>
                        </div>
                    </div>
                    <div v-show="!showAddPaymentMethod" class="modal-footer" style="border:none;">
                        <button @click="addFunds" type="button" class="btn btn-outline-primary" style="">$Pay {{amount}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DepositServices from '../services/depositServices.js';
    import Paginator from '../../../../../components/Paginator.vue';
    import storage from '../../../../../misc/storage';
    import DashboardBoxComponent from '../../../dashboard_cards/js/components/DashboradBoxComponents';
    import PaymentMethodsComponent from '../../../accounting/js/components/PaymentProfileListComponent.vue';
    import AddPaymentProfileComponent from '../../../accounting/js/components/AddPaymentProfileComponent.vue';
    import PaymentServices from '../../../accounting/js/services/PaymentServices'

    export default {
        mixins: [DepositServices, PaymentServices],
        props: ['accounts','card_processor', 'client_key', 'api_id'],
        components: {
            'transaction-paginator': Paginator,
            'dashboard-box': DashboardBoxComponent,
            "payment-methods" : PaymentMethodsComponent,
            "add-payment-profile" : AddPaymentProfileComponent,
        },
        data() {
            return {
                account: {
                    id: '',
                    user_id: '',
                    creator_id: '',
                    name: '',
                    account_number: '',
                    account_type: '',
                    balance: '',
                    withdrawable: '',
                    status: ''
                },
                transactions: [],
                selected_account: '',
                amount: '',
                withdraw: '',
                selected_bank: '',

                bank: {
                    namne: '',
                    account_number: '',
                    routing_number: ''
                },

                error: {
                    withdraw: false,
                    amount: false
                },
                error_message: {
                    withdraw: '',
                    amount: ''
                },
                paginator: {
                    total: 0,
                    from: 1,
                    to: 0,
                    current_page: 1,
                    last_page: 1
                },
                offset: 10,
                moment: moment,
                showAddPaymentMethod: false,
                pmethods:{},
                options: {
                    card: true,
                    bank: true,
                    cash: false
                },
                payment_id: 0
            }
        },
        watch: {
            selected_account(val) {

            }
        },
        methods: {
            onHasPaymentProfile(val){
                if(val){
                    this.showAddPaymentMethod = true;
                }else{
                    this.showAddPaymentMethod = false
                }
            },
            sendPaymentIdHandle(id){
                this.payment_id = id;
                console.log(this.payment_id);
            },
            openModal() {
                if (this.amount > 0) {
                    $('#add-funds').modal('show');
                } else {
                    this.error.amount = true;
                    this.error_message.amount = 'Amount must be greater or equal than $0.00'
                }
            },
            addFunds(){
                var data = {
                    amount: this.amount,
                    owner_type: 'user',
                    id: this.account.id
                }
                $.LoadingOverlay("show");
                if(!this.showAddPaymentMethod && this.payment_id > 0){
                    data['payment_id'] = this.payment_id;
                }

                this.addFundsCall(data, this.addFundsCallback);
            },
            addFundsCallback(response) {
                $.LoadingOverlay("hide");
                if (response.data.status == 1) {
                    this.account = Object.assign({}, response.data.data);
                    this.getTransactions();
                    this.amount = '';
                    $('#add-funds').modal('hide');
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
            withdrawCash() {
                if (this.withdraw > 0) {
                    if (this.withdraw <= this.account.withdrawable) {
                        this.account.withdraw = this.withdraw;
                        $.LoadingOverlay("show");
                        this.withdrawCashCall(this.account, this.withdrawCashCallback);
                    } else {
                        this.error.withdraw = true;
                        this.error_message.withdraw = 'Amount to withdraw must be less or equal than $' + parseFloat(this.account.withdrawable).toFixed(2);
                    }
                } else {
                    if (this.withdraw <= 0) {
                        this.error.withdraw = true;
                        this.error_message.withdraw = 'Amount to withdraw must be greater or equal than 0';
                    }
                }
            },
            withdrawCashCallback(response) {
                $.LoadingOverlay("hide");
                if (response.data.status == 1) {
                    this.account = Object.assign({}, response.data.data);
                    this.getTransactions();
                    $('#withdraw').modal('hide');
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
            setSelectedAccount(data) {
                this.selected_account = data;
                if (this.selected_account) {
                    this.getAccount();
                }
            },
            getAccount() {
                this.getAccountCall(this.selected_account, this.getAccountCallback)
            },
            getTransactions() {
                this.getTransactionsCall(this.selected_account, this.paginator.current_page, this.getTransactionsCallback)
            },
            getAccountCallback(response) {
                if (response.data.status == 1) {
                    this.account = Object.assign(this.account, response.data.data);
                    this.getTransactions();
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
            getTransactionsCallback(response) {
                if (response.data.status == 1) {
                    this.transactions = [];
                    for(var i in response.data.data.data){
                        if(response.data.data.data[i].operation == 'deposit'){
                            this.transactions.push(response.data.data.data[i]);
                        }
                    }
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
            },
            clearAmountErrors() {
                this.error.amount = false;
                this.error_message.amount = '';
            },
            clearWithdrawErrors() {
                this.error.withdraw = false;
                this.error_message.withdraw = '';
            },
            onSave(data){
                data['owner_type'] = 'user';
                // $.LoadingOverlay("show");
                data['id'] = this.account.id;
                if(!this.showAddPaymentMethod && this.payment_id > 0){
                    data['payment_id'] = this.payment_id;
                }

                this.addFundsCall(data, this.addFundsCallback);
            },
            onBack(val){
                this.showAddPaymentMethod = false;
            },
            storePaymenCallback(response) {
                $.LoadingOverlay("hide");
                if (response.status > 0) {
                    this.showAddPaymentMethod = false;
                    this.pmethods = Object.assign({}, response.data);
                }else{
                    if(Helpers.isAssoc(response.errors) > 0){
                        for(let field in response.errors){
                            this.errors[field].message = response.errors[field][0];
                            this.errors[field].invalid = true;
                        }
                    }else{
                        this.$notify({
                            group: 'message',
                            title: 'Error!!',
                            text: response.errors[0],
                            type: 'error',
                            duration: 3000
                        });
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
        watch: {
            'withdraw'(val) {
                if (val) {
                    this.error.withdraw = false;
                    this.error_message.withdraw = '';
                }
            },
            'amount'(val) {
                if (val) {
                    this.error.amount = false;
                    this.error_message.amount = '';
                }
            },
        },
        created() {
            if(this.accounts.length == 0){
                toastr.error('You do not have an active account. Please contact with your administrator', 'An error has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
            }else{
                this.setSelectedAccount(this.accounts[0].id);
            }


        },
        mounted() {
            var self = this;

            this.$nextTick(function () {
                $('#add').on('hidden.bs.modal', function (e) {
                    self.amount = '';
                    self.clearAmountErrors();
                });

                $('#withdraw').on('hidden.bs.modal', function (e) {
                    self.withdraw = '';
                    self.clearWithdrawErrors();
                });
            });
        }
    }
</script>
<style>
    .message-error {
        color: #dc6161;
        float: right;
        padding-top: 10px;
        font-size: 16px;
    }


    .page-item.active .page-link {
        background-color: #411c5e !important;
        border-color: #411c5e !important;
    }
</style>

<style scoped>
    .inputGroup {
        background-color: #fff;
        display: block;
        margin: 10px 0;
        position: relative;
    }

    .inputGroup label {
        padding: 12px 30px;
        width: 100%;
        display: block;
        text-align: left;
        color: #3C454C;
        cursor: pointer;
        position: relative;
        z-index: 2;
        -webkit-transition: color 200ms ease-in;
        transition: color 200ms ease-in;
        overflow: hidden;
        border: 1px solid #411c5e;
    }

    .inputGroup label:before {
        width: 100%;
        height: 10px;
        border-radius: 50%;
        content: '';
        background-color: #411c5e;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%) scale3d(1, 1, 1);
        transform: translate(-50%, -50%) scale3d(1, 1, 1);
        -webkit-transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0;
        z-index: -1;
    }

    .inputGroup label:after {
        width: 32px;
        height: 32px;
        content: '';
        border: 2px solid #D1D7DC;
        background-color: #fff;
        background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
        background-repeat: no-repeat;
        background-position: 2px 3px;
        border-radius: 50%;
        z-index: 2;
        position: absolute;
        right: 30px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        cursor: pointer;
        -webkit-transition: all 200ms ease-in;
        transition: all 200ms ease-in;
    }

    .inputGroup input:checked~label {
        color: #fff;
    }

    .inputGroup input:checked~label:before {
        -webkit-transform: translate(-50%, -50%) scale3d(56, 56, 1);
        transform: translate(-50%, -50%) scale3d(56, 56, 1);
        opacity: 1;
    }

    .inputGroup input:checked~label:after {
        background-color: #3d4554;
        border-color: #fff;
    }

    .inputGroup input {
        width: 32px;
        height: 32px;
        -webkit-box-ordinal-group: 2;
        order: 1;
        z-index: 2;
        position: absolute;
        right: 30px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        cursor: pointer;
        visibility: hidden;
    }

    .form {
        padding: 0 16px;
        /*  max-width: 550px; */
        margin: 50px auto;
        font-size: 18px;
        font-weight: 600;
        line-height: 36px;
    }

    #label1,
    #label2 {
        height: 100px !important;
    }

    body {
        background-color: #D1D7DC;
        font-family: 'Fira Sans', sans-serif;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
    }

    code {
        background-color: #9AA3AC;
        padding: 0 8px;
    }

    .btn-outline-purple:hover {
        background-color: #411c5e;
        color: #FFF !important;
    }

    .btn-outline-purple {
        border-color: #411c5e;
        color: #411c5e;
    }

    .table thead th {
        padding: 0.75rem 2rem !important;
    }

    .btn-outline-purple {
        border-color: #fff;
        color: #fff;
    }

    table {
        color: #fff;
    }

    .badge {
        color: #000;
    }
</style>
