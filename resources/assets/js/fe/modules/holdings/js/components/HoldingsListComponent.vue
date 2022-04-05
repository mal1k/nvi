<template>
    <div>
        <!-- <select-account :accounts="accounts" @account-selected="setSelectedAccount"></select-account> -->
        <dashboard-box v-if="accounts.length > 0" ></dashboard-box>
        <div class="card card-dark">
            <div class="card-content" style="min-height: 70vh;">
                <div class="card-body">
                    <div v-if="selected_account">
                        <!--  <div class="col-md-12 text-center">
                            <h4 style="margin-bottom:10px;"><strong>Account Details</strong></h4>
                        </div> -->
                        <div class="card-content">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div v-if="holdings.length > 0">
                                            <!-- <label>Holdings in this account</label> -->
                                            <div class="table-responsive">
                                                <table id="recent-orders"
                                                    class="table mb-0 ps-container ps-theme-default">
                                                    <thead>
                                                        <tr>
                                                            <th>Security</th>
                                                            <th class="text-center">Sims</th>
                                                            <th class="text-center">Market price</th>
                                                            <th class="text-center">Days to Maturity</th>
                                                            <th class="text-center">Expected value</th>
                                                            <th class="text-center"></th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr :id="'row' + index" v-for="(holding, index) in holdings"
                                                            :key="index">
                                                            <td class="text-truncate"><b>{{holding.security.security_number}}</b>
                                                            </td>
                                                            <td class="text-truncate text-center">
                                                                 <span :id="'_interest' + index">
                                                                    {{holding.security.simulations}}
                                                                </span>
                                                            </td>
                                                           <td class="text-truncate text-center">
                                                                <b>
                                                                    <span :id="'_price' + index">
                                                                        ${{parseFloat(holding.security.total_price*((holding.security.initial_maturity_date - holding.security.maturity_date)/holding.security.initial_maturity_date)).toFixed(2)}}
                                                                    </span>
                                                                </b>
                                                            </td>
                                                            <td class="text-truncate text-center">
                                                                <b>
                                                                    <span :id="'_price' + index">
                                                                        {{holding.security.maturity_date}}
                                                                    </span>
                                                                </b>
                                                            </td>
                                                            <td class="text-truncate text-center">
                                                                <span :id="'_value' + index" class="badge badge-warning">
                                                                    ${{parseFloat(holding.security.expected_value).toFixed(2)}}
                                                                </span>
                                                            </td>
                                                            <td class="text-truncate">
                                                                <button type="button" @click="showSellModal(holding)" style="color: #fff; border-radius: 0;"
                                                                    class="btn mr-1 mb-1 btn-outline bg-blue bg-lighten-1 btn-sm" :disabled="holding.security.sim_status!='unblocked' || holding.security.maturity_date != 0">Sell</button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <transaction-paginator style="color:black;" v-if="paginator.last_page > 1" class="mt-2"
                                                :pagination="paginator" @paginate="searchHoldings" :offset="offset">
                                            </transaction-paginator>
                                        </div>
                                        <div v-else>
                                            <div class="row mt-3">
                                                <div class="col-md-12 text-center">
                                                    <h4>No holdings registered in this account.</h4>
                                                </div>
                                            </div>
                                        </div>
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
        <!-- Manage bank accounts -->
        <div class="modal fade text-left" id="sell" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1"
            aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel1">Sell security</b>
                        </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- <span v-if="error.selected_account"
                            class="message-error">{{error_message.selected_account}}</span>
                        <span v-if="error.selected_holding"
                            class="message-error">{{error_message.selected_holding}}</span>
                        <fieldset class="form-group position-relative mt-2">
                            <input v-model="shares_qty" type="number" class="form-control form-control-lg" min="1"
                                placeholder="Quantity of shares to sell">
                            <span v-if="error.shares_qty" class="message-error">{{error_message.shares_qty}}</span>
                        </fieldset>
                        <hr> -->
                        <span id="question" class="message-question" >{{message_question}}</span>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn grey btn-outline-secondary" data-dismiss="modal">Close</button>
                        <button @click="sellShare" type="button" class="btn btn-outline-primary">Sell</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HoldingServices from '../services/HoldingServices.js';
    import Paginator from '../../../../../components/Paginator.vue';
    import storage from '../../../../../misc/storage';
    import broadcast from '../broadcast';
    import DashboardBoxComponent from '../../../dashboard_cards/js/components/DashboradBoxComponents';

    export default {
        mixins: [HoldingServices, broadcast],
        props: ['accounts'],
        components: {
            'transaction-paginator': Paginator,
            'dashboard-box': DashboardBoxComponent
        },
        data() {
            return {
                holdings: [],
                selected_holding: '',
                shares_qty: '',
                selected_account: '',
                query: '',
                type: '',
                message_question:'',
                error: {
                    shares_qty: false,
                    selected_account: false,
                    selected_holding: false
                },
                error_message: {
                    shares_qty: '',
                    selected_account: '',
                    selected_holding: '',
                },
                paginator: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                offset: 5,
                limit: 10
            }
        },
        watch: {

        },
        methods: {
            sellShare() {
                if (this.selected_holding.security.total_price && this.selected_account > 0 && this.selected_holding.security_id > 0) {
                    // if (parseInt(this.shares_qty) <= this.selected_holding.shares_qty) {
                        $.LoadingOverlay("show");
                        var params = {
                            id: this.selected_holding.id,
                            account_id: this.selected_account
                        };
                        this.sellHoldingCall(params, this.sellHoldingCallback);
                        $('#sell').modal('hide');
                } else {
                    if (!this.selected_holding.security.total_price) {
                        this.error.shares_qty = true;
                        this.error_message.shares_qty = 'The total price of the selected value is not available';
                    }
                    if (this.selected_account <= 0) {
                        this.error.selected_account = true;
                        this.error_message.selected_account = 'Invalid selected account';
                    }
                    if (this.selected_holding.security_id <= 0) {
                        this.error.selected_holding = true;
                        this.error_message.selected_holding = 'Invalid selected holding';
                    }
                }
            },
            sellHoldingCallback(response) {
                $.LoadingOverlay("hide");
                if (response.data.status == 1) {
                    toastr.success(response.data.message, 'Success', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    this.searchHoldings();
                    $('#sell').modal('hide');
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
                    this.searchHoldings();
                }
            },
            showSellModal(holding) {
                this.selected_holding = Object.assign({}, holding);
                this.shares_qty = this.selected_holding.shares_qty;
                this.message_question = 'Are you sure you want to sell this security?'
                $('#sell').modal('show');
            },
            searchHoldings() {
                $.LoadingOverlay("show");
                var params = {
                    page: (typeof page == 'undefined') ? this.paginator.current_page : page,
                    limit: this.limit,
                    fields: ['security_id','id'],
                    with: {
                        security:{
                            where:[
                                ['security_number','>',0]
                            ]
                        }
                    }

                    // fields: ['id', 'shares_qty', 'cost', 'average_cost', 'status', 'security_id'],
                };

                params['where'] = [];
                params['where'].push(['status', 'active']);
                params['where'].push(['account_id', this.selected_account]);

                /* if (this.query != '') {
                    let query = this.query;
                    params['query'] = {
                        value: "+*" + query.replace(/\s+/g, "* +*") + "*", // search term
                        fields: ['name', 'company']
                    }
                } */

                this.searchHoldingsCall(params, this.searchHoldingsCallback);
            },
            searchHoldingsCallback(code, response, errors) {
                if (code == '200') {
                    if (response.data.length > 0) {
                        this.holdings = response.data;
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
                    this.holdings = response.data;
                } else {
                    swal("Error!", errors[0], "error");
                }
                $.LoadingOverlay("hide");
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
            'shares_qty'(val) {
                if (val) {
                    this.error.shares_qty = false;
                    this.error_message.shares_qty = '';
                }
            }
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
                $('#sell').on('hidden.bs.modal', function (e) {
                    self.shares_qty = '';
                    self.selected_holding = '';

                    self.error.shares_qty = false;
                    self.error_message.shares_qty = '';
                    self.error.selected_account = false;
                    self.error_message.selected_account = '';
                    self.error.selected_holding = false;
                    self.error_message.selected_holding = '';
                });

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
    .message-error {
        color: #d61212;
        float: right;
        padding-top: 10px;
        font-size: 12px;
    }
    .message-question {
        color: black;
        padding-top: 10px;
        font-size: 12px;
    }


    .page-item.active .page-link {
        background-color: #411c5e !important;
        border-color: #411c5e !important;
    }
</style>

<style scoped>
    .table {
        color: #fff;
    }

    .badge {
        color: #000;
    }

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
</style>
