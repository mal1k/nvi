<template>
    <div>
        <!-- <select-account :accounts="accounts" @account-selected="setSelectedAccount"></select-account> -->
        <dashboard-box v-if="accounts.length > 0" ></dashboard-box>
        <div class="card card-dark">
            <div class="card-content" style="min-height: 70vh;">
                <div class="card-body" style="padding-top:5px;">
                    <div v-if="selected_account">
                        <!-- <div class="col-md-12 text-center">
                            <h4 style="margin-bottom:10px;"><strong>Account Details</strong></h4>
                        </div> -->
                        <div class="card-content">
                            <div class="card-body" style="padding-top:5px;">
                                <hr>
                                <div class="row">
                                    <div class="col-12 col-md-8">
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
                                                                <td class="text-truncate">
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
                                    <div class="col-12 col-md-4 text-center">
                                        <div class="row" style="margin-bottom:20px;">
                                            <div class="col-6" style="padding-top:15px;">
                                                <h5 style="font-size:20px;color:#DFA426;font-weight:500;">Account Value:</h5>
                                            </div>
                                            <div class="col-6" style="padding-top:15px;">
                                                <h5 style="font-size:20px;color:#DFA426;font-weight:500;">${{parseFloat(account.balance).toFixed(2)}}</h5>
                                            </div>

                                        </div>

                                        <div class="col-12 height-400">
                                            <canvas id="account-balance-chart"></canvas>
                                        </div>


                                        <!-- <button type="button" class="btn mr-1 mb-1 btn-outline-purple btn-lg square"
                                            style="width: 80%;" data-toggle="modal" data-target="#add">
                                            Add funds
                                        </button>
                                        <button type="button" class="btn mr-1 mb-1 btn-outline-purple btn-lg square"
                                            style="width: 80%;" data-toggle="modal" data-target="#withdraw">
                                            <i class="ft-less-circle"></i>
                                            Cash withdraw
                                        </button> -->
                                        <!-- <button type="button" class="btn mr-1 mb-1 btn-outline-purple btn-lg square"
                                            style="width: 80%;" data-toggle="modal" data-target="#banks">
                                            <i class="ft-less-circle"></i>
                                            Add bank accounts
                                        </button> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="row mt-4">
                            <div class="col-md-12 text-center mt-4">
                                <h4>No account has been selected.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Add funds modal -->
        <div class="modal fade text-left" id="add" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1"
            aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel1">Add funds from a linked bank account</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!--<fieldset class="form-group position-relative">
                            <select class="form-control form-control-lg" id="LargeSelect">
                                <option selected="">Select bank account</option>
                            </select>
                             <span v-if="error.selected_bank" class="message-error">{{error_message.selected_bank}}</span>
                        </fieldset>
                        <hr> -->
                        <fieldset class="form-group position-relative mt-2">
                            <input v-model="amount" type="number" class="form-control form-control-lg" id="Large"
                                min="10" placeholder="Amount to be funded">
                            <span v-if="error.amount" class="message-error">{{error_message.amount}}</span>
                        </fieldset>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn grey btn-outline-secondary" data-dismiss="modal">Close</button>
                        <button @click="addFunds" type="button" class="btn btn-outline-primary">Add funds</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Withdraw funds modal -->
        <div class="modal fade text-left" id="withdraw" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1"
            aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel1">Withdraw cash</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <label>Withdrawable amount</label>
                        <fieldset class="form-group position-relative mt-2">
                            <input v-model="account.withdrawable" type="number" class="form-control form-control-lg"
                                disabled>
                        </fieldset>
                        <hr>
                        <fieldset class="form-group position-relative mt-2">
                            <input v-model="withdraw" type="number" class="form-control form-control-lg"
                                placeholder="Amount to withdraw">
                            <span v-if="error.withdraw" class="message-error">{{error_message.withdraw}}</span>
                        </fieldset>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn grey btn-outline-secondary" data-dismiss="modal">Close</button>
                        <button @click="withdrawCash" type="button" class="btn btn-outline-primary">Withdraw
                            Cash</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Manage bank accounts -->
        <div class="modal fade text-left" id="banks" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1"
            aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel1">Add bank accounts</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <fieldset class="form-group position-relative mt-2">
                            <input v-model="bank.name" type="text" class="form-control form-control-lg"
                                placeholder="Bank name">
                        </fieldset>
                        <hr>
                        <fieldset class="form-group position-relative mt-2">
                            <input v-model="bank.account_number" type="text" class="form-control form-control-lg"
                                placeholder="Account number">
                        </fieldset>
                        <hr>
                        <fieldset class="form-group position-relative mt-2">
                            <input v-model="bank.routing_number" type="text" class="form-control form-control-lg"
                                placeholder="Routing number">
                        </fieldset>
                        <hr>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn grey btn-outline-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AccountServices from '../services/AccountServices.js';
    import Paginator from '../../../../../components/Paginator.vue';
    import storage from '../../../../../misc/storage';
    import DashboardBoxComponent from '../../../dashboard_cards/js/components/DashboradBoxComponents';

    export default {
        mixins: [AccountServices],
        props: ['accounts'],
        components: {
            'transaction-paginator': Paginator,
            'dashboard-box': DashboardBoxComponent
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
                lineChartA:'',
                chartData:{},
                configData:{}
            }
        },
        watch: {
            selected_account(val) {

            }
        },
        methods: {
            addFunds() {
                if (this.amount > 0) {
                    this.account.amount = this.amount;
                    $.LoadingOverlay("show");
                    this.addFundsCall(this.account, this.addFundsCallback);
                } else {
                    this.error.amount = true;
                    this.error_message.amount = 'Amount must be greater or equal than $0.00'
                }
            },
            addFundsCallback(response) {
                $.LoadingOverlay("hide");
                if (response.data.status == 1) {
                    this.account = Object.assign({}, response.data.data);
                    this.getTransactions();
                    $('#add').modal('hide');
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
                    this.transactions = response.data.data.data;
                    this.paginator = response.data.data
                    var data_draw=[];
                    var labels=[];
                    for (let i = this.transactions.length-1; i >= 0; i--) {
                        labels.push(moment(this.transactions[i].created_at).format('MM/DD/YYYY'))
                        data_draw.push(parseFloat(this.transactions[i].ending_balance).toFixed(2))
                    }
                    this.drawGraphBalance("account-balance-chart",data_draw,labels);
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
            drawGraphBalance(id,data,labels){
                console.log(data)
                console.log(labels)
                //Get the context of the Chart canvas element we want to select
                var ctx = $("#"+id);
                // Chart Options
                var chartOptions = {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend:{
                        display:false
                    },
                    hover: {
                        mode: 'label'
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            ticks:{
                                fontColor:'#fff',
                                fontSize: 14,
                                padding: 20,
                                callback: function(dataLabel, index) {
                                    // Hide the label of every 2nd dataset. return null to hide the grid line too
                                    if(data.length > 100){
                                        var num = Math.ceil(data.length/100);
                                    }else{
                                        var num = Math.ceil(data.length/10);
                                    }
                                    return index === data.length-1 || index === 0 ? dataLabel : null;
                                },
                            },

                            gridLines: {
                                display:false,
                                color: "#f3f3f3",
                                drawTicks: false,
                            },
                            scaleLabel: {
                                display: true,
                                // labelString: 'Simulations',
                                fontColor:'#fff',
                            }
                        }],
                        yAxes: [{
                            display: true,
                            ticks:{
                                callback: function(value, index, values) {
                                    return '$' + value.toFixed(2);
                                },
                                fontColor:'#fff',
                                fontSize: 14,
                                padding: 20
                            },

                            gridLines: {
                                color: "#f3f3f3",
                                drawTicks: false,

                            },
                            scaleLabel: {
                                display: true,
                                // labelString: 'Value',
                                fontColor:'#fff'
                            }
                        }]
                    },
                    title: {
                        display: false,
                        text: '',
                        fontSize: 18,
                        fontColor:'#fff',
                    },
                    elements: {
                        point:{
                            radius: 0
                        }
                    },

                };

                // Chart Data
                this.chartData = {
                    // labels: labels_array,
                    labels: labels,
                    datasets: [{
                        data: data,
                        lineTension: 0,
                        fill: false,
                        borderColor: "#EE7E21",
                    }]
                };
                this.configData = {
                    type: 'line',
                    options : chartOptions,
                    data : this.chartData
                };
                console.log(this.configData)
                console.log(ctx)

                // Create the chart
                this.lineChartA = new Chart(ctx, this.configData);
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
        color: #d61212;
        float: right;
        padding-top: 10px;
        font-size: 12px;
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
