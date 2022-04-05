<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <label>
                            <b>Full name on account</b>
                        </label>
                        <div class="input-group">
                            <input v-model="form.name" type="text" class="form-control" :class="{'input-error-select' : error.name}">
                        </div>
                        <span v-if="error.name" class="message-error">{{error_message.name}}</span>
                    </div>
                </div>
                <div class="row" style="margin-top: 10px">
                    <div class="col-md-6">
                        <label>
                            <b>Account number</b>
                        </label>
                        <div class="input-group">
                            <input v-model="form.account_number" type="text" class="form-control" :class="{'input-error-select' : error.account_number}">
                        </div>
                        <span v-if="error.account_number" class="message-error">{{error_message.account_number}}</span>
                    </div>
                    <div class="col-md-6">
                        <label>
                            <b>Routing number</b>
                        </label>
                        <div class="input-group">
                            <input v-model="form.routing_number" type="text" class="form-control" :class="{'input-error-select' : error.routing_number}">
                        </div>
                        <span v-if="error.routing_number" class="message-error">{{error_message.routing_number}}</span>
                    </div>
                </div>
                <div class="row" style="margin-top: 10px">
                    <div class="col-md-6">
                        <label>
                            <b>Bank name</b>
                        </label>
                        <div class="input-group">
                            <input v-model="form.bank_name" type="text" class="form-control" :class="{'input-error-select' : error.bank_name}">
                        </div>
                        <span v-if="error.bank_name" class="message-error">{{error_message.bank_name}}</span>
                    </div>
                    <div class="col-md-6">
                        <label>
                            <b>Account type</b>
                        </label>
                        <div class="input-group">
                            <select v-model="form.account_type" class="form-control" :class="{'input-error-select' : error.account_type}">
                                <option v-for="(type, index) in account_types" :key="index" :value="type.name">{{type.label}}</option>
                            </select>
                        </div>
                        <span v-if="error.account_type" class="message-error">{{error_message.account_type}}</span>
                    </div>
                </div>
                <div v-show="save_method" class="row" style="margin-top: 10px">
                    <div class="col-md-6" style="padding-left: 5px">
                        <div class="input-group">
                            <div class="skin skin-square">
                                <span style="padding: 10px">
                                    <input id="save-method-bank" type="checkbox" name="save-method-bank">
                                    <label for="save-method-bank">
                                        Save for future use
                                    </label>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style="margin-top: 10px">
                    <div class="col-md-6" style="padding-left: 5px">
                        <div v-show="recurring_payments" class="input-group">
                            <div class="skin skin-square">
                                <span style="padding: 10px">
                                    <input id="recurring-payment-bank" type="checkbox" name="recurring-payment-bank">
                                    <label for="recurring-payment-bank">
                                        Enroll in automatic payments
                                    </label>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 text-right">
                        <button @click="back()" class="btn btn-default">
                            Back
                        </button>
                        <button v-if="total_amount && total_amount > 0" @click="save()" class="btn btn-primary" :disabled="(total_amount <= 0)">
                            Pay ${{total_amount}}
                        </button>
                        <button v-else @click="save()" class="btn btn-primary">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import misc from '../../misc/payments.js';
    import Helpers from '../../misc/helpers.js';
    export default {
        mixins: [Helpers],
        props: {
            'card_processor':{
                required: true
            }, 
            'client_key':{
                required: true
            }, 
            'api_id':{
                required: true
            },
            'recurring_payments':{
                default: true,
            },
            'save_method':{
                default: true
            },
            'total_amount':{
                required:false,
                default: 0
            }
        },
        data() {
            return {
                form: {
                    name: '',
                    bank_name: '',
                    account_number: '',
                    routing_number: '',
                    account_type: '',
                    save_method: false,
                    recurring_payments: true
                },
                payment: payments.driver(this.card_processor, 'bank'),
                account_types: [
                    {
                        name: 'checking',
                        label: 'Checking'
                    },
                    {
                        name: 'savings',
                        label: 'Savings'
                    }],
                
                error: {
                    name: false,
                    bank_name: false,
                    account_number: false,
                    routing_number: false,
                    account_type: false
                },
                error_message: {
                    name: '',
                    bank_name: '',
                    account_number: '',
                    routing_number: '',
                    account_type: ''
                }
            }
        },
        methods: {
            save() {
                if(!this.validateBankAccountInfo()){
                    return false;
                }

                var paymentData = {
                    clientKey: this.client_key,
                    apiLoginID: this.api_id,
                    bankInfo: this.form,
                    type: 'bank'
                };

                console.log(this.payment);

                $.LoadingOverlay("show");
                this.payment.bank.createCardToken(paymentData, this.createTokenCallback);
            },
            createTokenCallback(response) {
                if (response.status > 0) {
                    let data = {
                        'token': response.data.token,
                        'description': response.data.description,
                        'name': this.form.name,
                        'bank_name': this.form.bank_name,
                        'account_type': this.form.account_type,
                        'recurring_payments': this.form.recurring_payments,
                        'billing_country': 'US',
                        'save': this.form.save_method,
                        'type': 'bank',
                        'payment_method_type': 'bank',
                        'last_4': this.form.account_number.substr(-4),
                        'amount': this.total_amount
                    }
                    this.$emit('save', data);
                } else {
                    var errors = '';
                    for (var i in response.errors) {
                        errors += response.errors[i].text + '.';
                    }
                    toastr.error(errors, 'An error has occurred');
                    $.LoadingOverlay("hide");
                }
            },
            back(){
                this.$emit('back', true);
                this.resetBankInfo();
            },
            validateBankAccountInfo() {
                var hasError = false;
                
                for (const key in this.error) {
                    this.error[key] = false;
                    this.error_message[key] = '';
                }

                if (this.form.name == '') {
                    hasError = true;
                    this.error.name = true;
                    this.error_message.name = 'Name on account is required';
                }

                if (this.form.account_number == '') {
                    hasError = true;
                    this.error.account_number = true;
                    this.error_message.account_number = 'Account number is required';
                }

                if (this.form.routing_number == '') {
                    hasError = true;
                    this.error.routing_number = true;
                    this.error_message.routing_number = 'Routing number is required';
                }

                if (this.form.account_type == '') {
                    hasError = true;
                    this.error.account_type = true;
                    this.error_message.account_type = 'Account type is required';
                }

                if (this.form.bank_name == '') {
                    hasError = true;
                    this.error.bank_name = true;
                    this.error_message.bank_name = 'Bank name is required';
                }

                return !hasError;
            },
            resetBankInfo() {
                this.form.name = '';
                this.form.bank_name = '';
                this.form.account_number = '';
                this.form.routing_number = '';
                this.form.account_type = '';
                this.form.save_method = false;
                this.form.recurring_payments = false;
            },
            onSuccess(){
                this.resetBankInfo();
                $.LoadingOverlay("hide");
            },
            onError(errors){
                this.resetCardErrors();
                if (Helpers.isAssoc(errors)) {
                    let _errors = [];
                    for (var i in errors) {
                        if(this.errors.hasOwnProperty(i)){
                            this.error[i] = true;
                            this.error_message[i] = errors[i][0];
                        }
                        _errors.push('<span>' + errors[i] + '</span></br>')
                    }
                    toastr.error(_errors, 'Some error(s) has occurred');
                } else {
                    toastr.error(errors[0], 'An error has occurred');
                }
                $.LoadingOverlay("hide");
            }
        },
        watch: {
            'form.name'(val) {
                if (val != '') {
                    this.error.name = false;
                    this.error_message.name = '';
                }
            },
            'form.account_number'(val) {
                if (val != '') {
                    this.error.account_number = false;
                    this.error_message.account_number = '';
                }
            },
            'form.routing_number'(val) {
                if (val != '') {
                    this.error.routing_number = false;
                    this.error_message.routing_number = '';
                }
            },
            'form.account_type'(val) {
                if (val != '') {
                    this.error.account_type = false;
                    this.error_message.account_type = '';
                }
            },
            'form.bank_name'(val) {
                if (val != '') {
                    this.error.bank_name = false;
                    this.error_message.bank_name = '';
                }
            },
        },
        created() {
            if (this.card_processor.toLowerCase() == 'stripe') {
                Stripe.setPublishableKey(this.client_key);
            }
            this.$eventHub.$on("processor-component-success", this.onSuccess);
            this.$eventHub.$on("processor-component-error", this.onError);
        },
        mounted() {
            var self = this;
            this.$nextTick(function () {
                $('#recurring-payment-bank').iCheck({
                    checkboxClass: 'icheckbox_square-red',
                    radioClass: 'iradio_square-red',
                });
                $('#save-method-bank').iCheck({
                    checkboxClass: 'icheckbox_square-red',
                    radioClass: 'iradio_square-red',
                });

                $('#recurring-payment-bank').on('ifChecked', function (event) {
                    self.form.recurring_payments = 1;
                    $('#save-method-bank').iCheck('check');
                });

                $('#recurring-payment-bank').on('ifUnchecked', function (event) {
                    self.form.recurring_payments = 0;
                    $('#save-method-bank').iCheck('uncheck');
                });

                $('#save-method-bank').on('ifChecked', function (event) {
                    self.form.save_method = true;
                });

                $('#save-method-bank').on('ifUnchecked', function (event) {
                    self.form.save_method = false;
                });
            });           
        },
        beforeDestroy(){
            this.$eventHub.$off("processor-component-success", true);
            this.$eventHub.$off("processor-component-error", true);
        }
    }
</script>

<style>
    .message-error {
        color: #d61212;
        padding-top: 10px;
        font-size: 12px;
    }
    .input-error-select {
        color: #d61212;
        border: 1px solid #b60707;
        border-radius: 5px
    }
</style>