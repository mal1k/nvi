<template>
    <div class="card">
        <div class="card-content" style="min-height: 75vh;">
            <div class="card-body">
                <div class="row">
                    <div class="col-12 text-right">
                        <div
                            :class="{'badge badge-primary' : account.status == 'active', 'badge badge-danger' : account.status == 'inactive'}">
                            {{account.status | format}}
                        </div>
                    </div>

                </div>
                <ul class="nav nav-tabs mb-2" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link d-flex align-items-center active" id="account-tab" data-toggle="tab"
                            href="#account" aria-controls="account" role="tab" aria-selected="true">
                            <i class="ft-user mr-25"></i><span class="d-none d-sm-block">Account</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-flex align-items-center" id="information-tab" data-toggle="tab"
                            href="#information" aria-controls="information" role="tab" aria-selected="false">
                            <i class="ft-info mr-25"></i><span class="d-none d-sm-block">Additional
                                Information</span>
                        </a>
                    </li>
                    <li v-show="account.account_type == 'nvic'" class="nav-item">
                        <a class="nav-link d-flex align-items-center" id="add-tab" data-toggle="tab"
                            href="#add_funds" aria-controls="add_funds" role="tab" aria-selected="false">
                            <i class="ft-plus mr-25"></i><span class="d-none d-sm-block">Details</span>
                        </a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="account" aria-labelledby="account-tab" role="tabpanel">
                        <div class="row">
                            <div class="col-md-2 offset-md-2">
                                <h5 class="media-heading"><b>Account Type:
                                        {{account.account_type | format}}</b>
                                </h5>
                            </div>
                            <div class="col-md-2 offset-md-4 text-right">
                                <h5 class="media-heading"><b>Balance:
                                        ${{parseFloat(account.balance).toFixed(2)}}</b>
                                </h5>
                            </div>
                            <div class="col-md-2 offset-md-2 media mb-2 mt-1">
                                <a class="mr-2 text-center" :href="'/admin/users/edit/' + account.user.id">
                                    <img :src="account.user.avatar ? '/storage/' + account.user.avatar : '/be/images/avatar-placeholder.png'"
                                        alt="users avatar" class="users-avatar-shadow rounded-circle" height="94"
                                        width="94">
                                    <div class="media-body">
                                        <div style="font-size: 16px; margin-top: 10px;">
                                            {{account.user.firstname}} {{account.user.lastname}}
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <form novalidate="">
                            <div class="row">
                                <div class="col-12 col-sm-6 col-md-4 offset-md-2">
                                    <div class="form-group">
                                        <div class="controls">
                                            <label>Account name</label>
                                            <input v-model="account.name" type="text" class="form-control"
                                                placeholder="Account name"
                                                data-validation-required-message="This username field is required">
                                            <div class="help-block"></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="controls">
                                            <label>Account number</label>
                                            <input v-model="account.account_number" type="text" class="form-control"
                                                disabled>
                                            <div class="help-block"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4">
                                    <!-- <div class="form-group validate">
                                        <div class="controls">
                                            <label>Add balance</label>
                                            <input v-model="amount" type="number" class="form-control" min="0">
                                            <div class="help-block"></div>
                                        </div>
                                    </div> -->
                                    <div class="form-group validate">
                                        <div class="controls">
                                            <label>Account type</label>
                                            <select v-model="account.account_type" class="form-control"
                                                aria-invalid="false" disabled>
                                                <option value="">--Select account type--</option>
                                                <option value="personal">Personal</option>
                                                <option value="business">Business</option>
                                                <option value="professional">Professional</option>
                                                <option value="nvic">NVIC</option>
                                                <option value="sf">SF</option>
                                                <option value="mdf">MDF</option>
                                            </select>
                                            <div class="help-block"></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="controls">
                                            <label>Status</label>
                                            <select v-model="account.status" class="form-control">
                                                <option value="">--Select status--</option>
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                                <option value="closed">Closed</option>
                                            </select>
                                            <div class="help-block"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <!-- users edit account form ends -->
                    </div>
                    <div class="tab-pane" id="add_funds" aria-labelledby="add-tab" role="tabpanel">
                        <div v-show="account.account_type=='nvic'">
                            <div class="col-md-12 text-center">
                                <h4 style="margin-bottom:10px;"><strong>Account Details</strong></h4>
                            </div>

                            <div class="row">
                                <div class="col-md-2 p-1">
                                    <b>
                                        Account number: </b>{{account.account_number}}

                                </div>
                                <div class="col-md-2 p-1">
                                    <b>
                                        Account type: </b>{{account.account_type | format}}

                                </div>
                                <!-- <div class="col-md-2 p-1">
                                    <b v-if="account.name">
                                        Account name: </b>{{account.name | format}}

                                </div> -->
                                <div class="col-md-3 offset-md-1 p-1">
                                    <h5>
                                        <b>
                                            Withdrawable cash: </b>${{parseFloat(account.withdrawable).toFixed(2)}}

                                    </h5>
                                </div>
                                <div class="col-md-2 p-1">
                                    <h5>
                                        <b>
                                            Balance: </b>${{parseFloat(account.balance).toFixed(2)}}

                                    </h5>
                                </div>
                            </div>

                            <div class="row text-center">
                                <fieldset class="form-group position-relative col-md-6">
                                    <div class="input-group ">
                                        <input type="text" class="form-control" placeholder="Amount to be funded" aria-label="Amount to be funded" aria-describedby="basic-addon2" v-model='amount'>
                                        <div class="input-group-append">
                                            <button class="btn btn-outline-secondary" type="button" @click="addFunds">Add funds</button>
                                        </div>
                                    </div>
                                    <span v-if="error.amount" class="message-error">{{error_message.amount}}</span>
                                </fieldset>
                                <fieldset class="form-group position-relative col-md-6 ">
                                <div class="input-group ">
                                    <input type="text" class="form-control" placeholder="Amount to withdraw" aria-label="Amount to withdraw" aria-describedby="basic-addon2" v-model='withdraw'>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" @click="withdrawCash">Cash withdraw</button>
                                    </div>
                                </div>
                                <span v-if="error.withdraw" class="message-error">{{error_message.withdraw}}</span>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="information" aria-labelledby="information-tab" role="tabpanel">
                        <!-- users edit Info form start -->

                        <div v-if="account.user.addresses.length > 0">
                            <div class="row">
                                <div class="col-12 col-sm-6 col-md-4 offset-md-2">
                                    <h5 class="mb-1"><i class="feather icon-link mr-25"></i>Region/Country</h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-sm-6 col-md-4 offset-md-2">
                                    <div>
                                        <!--  <label>Address</label>
                                        <input v-model="account.user.addresses[0].address1" class="form-control">
                                        <label v-if="account.user.addresses[0].address2" class="mt-1">Address Cont.</label>
                                        <input v-if="account.user.addresses[0].address2"
                                            v-model="account.user.addresses[0].address2" class="form-control">
                                        <label class="mt-1">City</label>
                                        <input v-model="account.user.addresses[0].city" class="form-control"> -->
                                        <label class="mt-1">State/Province</label>
                                        <input v-model="account.user.addresses[0].state" class="form-control">
                                        <!-- <label class="mt-1">Zip</label>
                                        <input v-model="account.user.addresses[0].zip" class="form-control"> -->
                                        <!-- <label class="mt-1">Country</label>
                                        <input v-model="account.user.addresses[0].country" class="form-control"> -->
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4">
                                    <div v-if="account.user.addresses.length > 0">
                                        <label class="mt-1">Country</label>
                                        <input v-model="account.user.addresses[0].country" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="mt-4">
                    <div class="row">
                        <div
                            class="col-12 col-md-2 offset-md-8 text-right d-flex flex-sm-row flex-column justify-content-end mt-1">
                            <button @click="createAccount" type="submit"
                                class="btn btn-primary glow mb-1 mb-sm-0 mr-0 mr-sm-1">Save
                                changes</button>
                            <a href="/admin/accounts" class="btn btn-light">Cancel</a>
                        </div>
                    </div>
                    <!-- <div class="row mt-2">
                        <div class="col-12 col-md-2 offset-md-2 text-left">
                            <button type="button" class="btn btn-outline-danger btn-sm" style="width: 100%;"><i class="fa fa-remove"></i>
                                Remove account</button>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AccountServices from '../services/AccountServices.js';
    export default {
        props: ['editable_account'],
        mixins: [AccountServices],
        data() {
            return {
                account: {
                    id: '',
                    name: '',
                    user_id: '',
                    creator_id: '',
                    account_number: '',
                    account_type: '',
                    status: '',
                    balance:'',
                    withdrawable:''

                },
                amount: '',
                withdraw: '',
                error: {
                    name: false,
                    user_id: false,
                    account_number: false,
                    account_type: false,
                    balance: false,
                    status: false,
                    withdraw: false,
                    amount: false
                },
                error_message: {
                    name: '',
                    user_id: '',
                    account_number: '',
                    account_type: '',
                    balance: '',
                    status: '',
                    withdraw: '',
                    amount: ''
                },

            }
        },

        methods: {
            addFunds() {
                if (this.amount > 0) {
                    console.log(this.account)
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
                    // this.account = Object.assign({}, response.data.data);
                    for (var i in response.data.data) {
                        if(i=='user'){
                            for(var j in response.data.data[i].user){
                                if(j != 'addresess'){
                                    this.account[i].user[j]=response.data.data[i].user[j];
                                }
                            }
                        }

                        else{
                            this.account[i]=response.data.data[i];
                        }

                    }
                    this.amount='';
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
                console.log(response);
                if (response.data.status == 1) {
                    for (var i in response.data.data) {
                        if(this.account[i]){
                            if(i=='user'){
                                for(var j in response.data.data[i].user){
                                    if(j != 'addresess'){
                                        this.account[i].user[j]=response.data.data[i].user[j];
                                    }
                                }
                            }else{
                                this.account[i]=response.data.data[i];
                                console.log(this.account[i])
                            }
                        }
                    }
                    console.log(this.account);
                    this.withdraw='';
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
            clearAmountErrors() {
                this.error.amount = false;
                this.error_message.amount = '';
            },
            clearWithdrawErrors() {
                this.error.withdraw = false;
                this.error_message.withdraw = '';
            },
            createAccount() {
                if (this.account.user_id && this.account.account_type) {
                    $.LoadingOverlay("show");
                    if (this.amount) {
                        this.account.amount = parseFloat(this.amount).toFixed(2);
                    }
                    if (this.account.user.addresses.length > 0) {
                        this.account.addresses = this.account.user.addresses;
                    }
                    this.updateAccountCall(this.account, this.updateAccountCallback)
                } else {
                    if (!this.account.user_id) {
                        this.error.user_id = true;
                        this.error_message.user_id = 'Owner account is required';
                    }
                    if (this.account.account_type == '') {
                        this.error.account_type = true;
                        this.error_message.account_type = 'Account type is required';
                    }
                }
            },
            updateAccountCallback(response) {
                $.LoadingOverlay("hide");
                if (response.data.status == 1) {
                    toastr.success(response.data.message, 'Success', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    if (this.account.id > 0) {
                        this.account = Object.assign({}, response.data.data);
                        this.amount = '';
                    } else {
                        window.location.href = '/admin/accounts';
                    }
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
        computed: {
            checkForInvestor() {
                if (this.account.roles.some(e => e.name === 'investor')) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        watch: {
            'account.user_id'(val) {
                if (val) {
                    this.error.user_id = false;
                    this.error_message.user_id = '';
                }
            },
            'account.account_type'(val) {
                if (val) {
                    this.error.account_type = false;
                    this.error_message.account_type = '';
                }
            },
            'amount'(val){
                if(val>0){
                    this.clearAmountErrors()
                }
            },
            'withdraw'(val){
                if(val>0){
                    this.clearWithdrawErrors()
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
                if(value ==  "nvic" || value == "mdf" || value == "sf"){
                    return value.toUpperCase();
                }else{
                    return value.charAt(0).toUpperCase() + value.slice(1)
                }
            }
        },
        created() {
            if (this.editable_account) {
                this.account = Object.assign({}, this.editable_account);
                console.log(this.account)
            }


        },
        mounted() {
            var self = this;
            this.$nextTick(function () {
                $("#select2-users").select2({
                    placeholder: 'Select account owner',
                    allowClear: true,
                    width: '100%',
                    ajax: {
                        url: '/api/admin/users/search',
                        dataType: 'json',
                        delay: 250,
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        type: 'POST',
                        data: function (params) {
                            params.term = (typeof params.term == 'undefined') ? '' : params.term;
                            var terms = {
                                query: params.term + '*', // search term
                                fields: ['id', 'firstname', 'lastname'],
                                page: params.page,
                                limit: 10
                            }
                            return terms;
                        },
                        processResults: function (response, params) {
                            params.page = params.page || 1;
                            return {
                                results: response.data,
                                pagination: {
                                    more: (params.page) <= response.pagination.total_pages
                                }
                            };
                        },
                        cache: true
                    },
                    escapeMarkup: function (markup) { return markup; },
                    templateResult: function (repo) {
                        if (repo.loading) return repo.text;
                        var markup = "<div class='select2-result-repository clearfix'>" + repo.firstname + ' ' + repo.lastname + "</div>";
                        return markup;
                    },
                    templateSelection: function (repo) {
                        if (repo.firstname) {
                            return repo.firstname + ' ' + repo.lastname;
                        } else {
                            return 'Select account owner'
                        }
                    }
                });

                $("#select2-users").on("select2:select", function (e) {
                    self.account.user_id = $(e.currentTarget).val();
                });
                $('#select2-users').on('select2:clear', function (e) {
                    self.account.user_id = '';
                });

                if (self.account.id > 0) {
                    $("#select2-users").val(self.account.user_id).trigger("change");
                }
            });
        }
    }
</script>
<style>
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

    label {
        font-size: 12px
    }

    .select2-selection__rendered {
        font-size: 12px !important;
    }

    .vcenter {
        display: inline-block;
        vertical-align: middle;
        float: none;
    }
</style>
<style scoped>
    input,
    select,
    textarea {
        font-size: 12px;
    }

    .logo-list {
        width: 80px;
        height: auto;
    }
</style>
