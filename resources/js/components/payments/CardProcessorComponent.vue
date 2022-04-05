<template>
    <div>
        <div class="row">
            <div class="col-xs-12 col-sm-12">
                <div class="row">
                    <div class="col-md-12">
                        <label>
                            <b>Card Holder</b>
                        </label>
                        <div class="input-group">
                            <input v-model="form.card_holder" type="text" class="form-control" :class="{'input-error-select' : error.card_holder}">
                        </div>
                        <span v-if="error.card_holder" class="message-error">{{error_message.card_holder}}</span>
                    </div>
                </div>
                <div class="row" style="margin-top: 10px">
                    <div class="col-md-6">
                        <label>
                            <b>Card number</b>
                        </label>
                        <div class="input-group">
                            <input id="cc_number" v-model="form.card_number" type="text" class="form-control"
                                :class="{'input-error-select' : error.card_number}">
                        </div>
                        <span v-if="error.card_number" class="message-error">{{error_message.card_number}}</span>
                    </div>
                    <div class="col-md-4">
                        <label>
                            <b>Exp. date
                                <span style="font-size: 12px">(MM/YYYY)</span>
                            </b>
                        </label>
                        <div class="input-group">
                            <input v-model="exp_date" type="text" class="form-control" :class="{'input-error-select' : error.exp_date}">
                        </div>
                        <span v-if="error.exp_date" class="message-error">{{error_message.exp_date}}</span>
                    </div>
                    <div class="col-md-2">
                        <label>
                            <b>CVV</b>
                        </label>
                        <div class="input-group">
                            <input v-model="form.cvv" type="text" class="form-control" :class="{'input-error-select' : error.cvv}">
                        </div>
                        <span v-if="error.cvv" class="message-error">{{error_message.cvv}}</span>
                    </div>
                </div>
                <div class="row" style="margin-top: 10px">
                    <div class="col-md-6">
                        <label>
                            <b>Zip code</b>
                        </label>
                        <div class="input-group">
                            <input v-model="form.billing_zip" type="text" class="form-control" :class="{'input-error-select' : error.billing_zip}">
                        </div>
                        <span v-if="error.billing_zip" class="message-error">{{error_message.billing_zip}}</span>
                    </div>
                    <div class="col-md-6">
                        <label>
                            <b>Account type</b>
                        </label>
                        <fieldset class="form-group position-relative">
                            <select v-model="form.account_type" class="form-control" id="role" :class="{'input-error-select' : error.account_type}">
                                <option v-for="(account_type, index) in account_types" :key="index" :value="account_type.name">{{account_type.label}}</option>
                            </select>
                            <span v-if="error.account_type" class="message-error">{{error_message.account_type}}</span>
                        </fieldset>
                    </div>
                </div>
                <div class="row" style="margin-top: 10px">
                    <div v-show="save_method" class="col-md-6" style="padding-left: 5px">
                        <div class="input-group">
                            <div class="skin skin-square">
                                <span style="padding: 10px">
                                    <input id="save-method-card" type="checkbox" name="save-method-card">
                                    <label for="save-method-card">
                                        Save for future use
                                    </label>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 text-right" style="padding-left: 0px">
                        <span style="padding: 5px">
                            <img src="/images/creditCard/visa.png" style="width: 40px; height: auto;">
                        </span>
                        <span style="padding: 5px">
                            <img src="/images/creditCard/mastercard.png" style="width: 40px; height: auto;">
                        </span>
                        <span style="padding: 5px">
                            <img src="/images/creditCard/amex.png" style="width: 40px; height: auto;">
                        </span>
                        <span style="padding: 5px">
                            <img src="/images/creditCard/discover.png" style="width: 40px; height: auto;">
                        </span>
                        <span style="padding: 5px">
                            <img src="/images/creditCard/jcb.png" style="width: 40px; height: auto;">
                        </span>
                    </div>
                </div>
                <div  class="row" style="margin-top: 10px">
                    <div v-show="recurring_payments" class="col-md-6" style="padding-left: 5px">
                        <div class="input-group">
                            <div class="skin skin-square">
                                <span style="padding: 10px">
                                    <input id="recurring-payment-card" type="checkbox" name="recurring-payment-card">
                                    <label for="recurring-payment-card">
                                        Enroll in automatic payments
                                    </label>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 text-right" style="margin-top: 20px">
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
    import Helpers from '../../misc/helpers';
    import misc from '../../misc/payments.js';
    import CardProcessorServices from '../../services/CardProcessorServices.js';
    export default {
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
            'description':{
                default: ''
            },
            'save_method':{
                default: true
            },
            'recurring_payments':{
                default: true,
            },
            'total_amount':{
                required:false,
                default: 0
            }
        },
        mixins: [CardProcessorServices, Helpers],
        data(){
            return{
                form: {
                    card_holder: '',
                    card_number: '',
                    cvv: '',
                    exp_month: '',
                    exp_year: '',
                    billing_address: '',
                    billing_city: '',
                    billing_zip: '',
                    billing_state: '',
                    billing_country: '',
                    account_type:'',
                    save_method:false
                },
                error: {
                    card_holder: false,
                    card_number: false,
                    exp_month: false,
                    exp_year: false,
                    exp_date: false,
                    cvv: false,
                    billing_address: false,
                    billing_city: false,
                    billing_zip: false,
                    billing_state: false,
                    billing_country: false
                },
                error_message: {
                    card_holder: '',
                    card_number: '',
                    exp_month: '',
                    exp_year: '',
                    exp_date: '',
                    cvv: '',
                    billing_address: '',
                    billing_city: '',
                    billing_zip: '',
                    billing_state: '',
                    billing_country: ''
                },
                exp_date:'',
                card_brand: '',
                years:[],
                countries:[],
                states:[],
                disable: true,
                processing: false,
                account_types: [
                    {
                        name: 'individual',
                        label: 'Personal'
                    },
                    {
                        name: 'business',
                        label: 'Business'
                    }
                ],
            }
        },
        watch: {
                'form.card_holder'(val) {
                    if (val != '') {
                        this.error.card_holder = false;
                        this.error_message.card_holder = '';
                    }
                },
                'form.card_number'(val) {
                    if (val != '') {
                        this.error.card_number = false;
                        this.error_message.card_number = '';
                    }
                },
                'form.exp_month'(val) {
                    if (val != '') {
                        this.error.exp_month = false;
                        this.error_message.exp_month = '';
                    }
                },
                'form.exp_year'(val) {
                    if (val != '') {
                        this.error.exp_year = false;
                        this.error_message.exp_year = '';
                    }
                },
                'form.cvv'(val) {
                    if (this.val != '') {
                        this.error.cvv = false;
                        this.error_message.cvv = '';
                    }
                    if (Helpers.validateCVV(val)) {
                        this.error.cvv = false;
                    }
                },
                'form.billing_address'(val) {
                    if (this.val != '') {
                        this.error.billing_address = false;
                        this.error_message.billing_address = '';
                    }
                },
                'form.billing_city'(val) {
                    if (this.val != '') {
                        this.error.billing_city = false;
                        this.error_message.billing_city = '';
                    }
                },
                'form.billing_zip'(val) {
                    if (this.val != '') {
                        this.error.billing_zip = false;
                        this.error_message.billing_zip = '';
                    }
                },
                'form.billing_state'(val) {
                    if (this.val != '') {
                        this.error.billing_state = false;
                        this.error_message.billing_state = '';
                    }
                },
                'form.billing_country'(val) {
                    if (val != '') {
                        this.error.billing_country = false;
                        this.error_message.billing_country = '';
                    }
                },
                'exp_date'(val) {
                    if (val != '') {
                        this.error.exp_date = false;
                        this.error_message.exp_date = '';
                    }
                    if (Helpers.validateExpDateMMYYYY(val)) {
                        this.error.exp_date = false;
                    } else {
                        this.error.exp_date = true;
                        this.error_message.exp_date = 'Exp. date is incorrect.'
                    }
                },
            },
        methods:{
            save() {
                var date = this.exp_date.split('/');
                this.form.exp_month = date[0];
                if(date[1]){
                    this.form.exp_year = date[1];
                }
                
                if (this.validateCardInfo()) {
                    $.LoadingOverlay("show");
                    var paymentData = {
                        clientKey: this.client_key,
                        apiLoginID: this.api_id,
                        cardInfo: this.form,
                        description: this.description,
                        type: 'card'
                    };
                    
                    var payment = payments.driver(this.card_processor);
                    payment.card.createCardToken(paymentData, this.createCardTokenCallback);
                }
                
            },
            createCardTokenCallback(response){
                Helpers.gotoTop();
                if (response.status > 0) {
                    var data = {
                        token : response.data.token,
                        type: 'card',
                        name: this.form.card_holder,
                        billing_zip: this.form.billing_zip,
                        billing_country: this.form.billing_country,
                        billing_address: this.form.billing_address,
                        billing_city: this.form.billing_city,
                        billing_state: this.form.billing_state,
                        expiration_date: this.form.exp_month + '/' + this.form.exp_year,
                        description: response.data.description,
                        account_type: this.form.account_type,
                        amount: this.total_amount,
                        last_4: this.form.card_number.substring(this.form.card_number.length - 4)
                    }
                    this.$emit('save', data);
                } else {
                    var _errors = [];
                    for (var i in response.errors) {
                        _errors.push('<span>' + response.errors[i].text + '</span></br>');
                    }
                    toastr.error(_errors, 'Error');
                    $.LoadingOverlay("hide");
                }
            },
            back() {
                this.$emit('back', false);
                this.resetCardInfo();
                this.resetCardErrors();
            },
            resetCardInfo() {
                this.cardInfo.card_holder = '';
                this.cardInfo.card_number = '';
                this.cardInfo.cvv = '';
                this.cardInfo.card_brand = '';
                this.cardInfo.billing_address = '';
                this.cardInfo.billing_city = '';
                this.cardInfo.billing_zip = '';
                this.cardInfo.billing_country = '';
                this.cardInfo.billing_state = '';
                this.cardInfo.exp_month = '';
                this.cardInfo.exp_year = '';
                this.exp_date = '';
                this.card_brand = '';
                $("#select2-countries-card").val('US').trigger('change');
                $("#select2-states-card").val(-1).trigger('change');
            },
            resetCardErrors() {
                for (const key in this.error) {
                    this.error[key] = false;
                    this.error_message[key] = '';
                }
            },
            validateCardInfo() {
                this.resetCardErrors();
                var hasError= false;
                if (this.form.card_holder == '') {
                    hasError = true;
                    this.error.card_holder = true;
                    this.error_message.card_holder = 'Card holder name is required';
                }

                if (this.form.card_number == '') {
                    hasError = true;
                    this.error.card_number = true;
                    this.error_message.card_number = 'Card number is required';
                }

                if (this.form.cvv == '') {
                    hasError = true;
                    this.error.cvv = true;
                    this.error_message.cvv = 'cvv is required';
                }

                if (this.form.exp_year == '' || this.form.exp_month == '') {
                    hasError = true;
                    this.error.exp_date = true;
                    this.error_message.exp_date = 'Exp year is required';
                }

                if (this.form.billing_zip == '') {
                    hasError = true;
                    this.error.billing_zip = true;
                    this.error_message.billing_zip = 'Zip code is required';
                }

                return !hasError;
            },
            getCountriesCallback(code, msg, data) {
                if (code == '200') {
                    this.countries = data;
                    var _this = this;
                    this.$nextTick(function(){
                        let data = {
                            name: 'United States',
                            id: 'US'
                        };
                        var option = new Option(data.name, data.id, true, true);
                        $("#select2-countries-card").append(option).trigger('change');
                        $("#select2-countries-card").trigger({
                            type: 'select2:select',
                            params: {
                                data: data
                            }
                        });
                        
                    })
                    
                }
            },
            getStates() {
                this.processing = true;
                $.LoadingOverlay("show");
                this.getStatesCall(this.getStatesCallback);
            },
            getStatesCallback(code, msg, data) {
                $.LoadingOverlay("hide");
                if (code == '200') {
                    this.states = data;
                    this.processing = false;
                }
            },
            matchCustom(params, data) {
                if ($.trim(params.term) === '') {
                return data;
                }

                // Do not display the item if there is no 'text' property
                if (typeof data.text === 'undefined') {
                return null;
                }

                // `params.term` should be the term that is used for searching
                // `data.text` is the text that is displayed for the data object
                if (data.text.toUpperCase().startsWith(params.term.toUpperCase())) {
                var modifiedData = $.extend({}, data, true);

                return modifiedData;
                }
                // Return `null` if the term should not be displayed
                return null;
            },
            onSuccess(){
                this.resetCardInfo();
                this.resetCardErrors();
                $.LoadingOverlay("hide");
            },
            onError(errors){
                Helpers.gotoTop();
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
        created(){
            var date = new Date,
                years = [],
                year = date.getFullYear();

            for (var i = year; i < year + 10; i++) {
                this.years.push(i);
            }
            // this.getCountriesCall(this.getCountriesCallback);
            this.$eventHub.$on("processor-component-success", this.onSuccess);
            this.$eventHub.$on("processor-component-error", this.onError);
        },
        mounted(){
            if(this.card_processor.toLowerCase() == 'stripe'){
                Stripe.setPublishableKey(this.client_key);
            }

            var self = this;
            this.$nextTick(function () {
                $("#select2-countries-card").select2({
                    matcher: self.matchCustom
                });
                $("#select2-states-card").select2({
                    matcher: self.matchCustom
                });

                $('.skin-square input').iCheck({
                    checkboxClass: 'icheckbox_square-red',
                    radioClass: 'iradio_square-red',
                });

                $('#recurring-payment-card').on('ifChecked', function (event) {
                    self.form.recurring_payments = 1;
                    $('#save-method-card').iCheck('check');
                });

                $('#recurring-payment-card').on('ifUnchecked', function (event) {
                    self.form.recurring_payments = 0;
                    $('#save-method-card').iCheck('uncheck');
                });

                $('#select2-countries-card').on('change', function (e) {
                    self.form.billing_country = $('#select2-countries-card').select2('data')[0].id;
                    if (self.form.billing_country == 'US' && self.processing == false) {
                        self.getStates();
                    }
                    if (self.form.billing_country != '') {
                        $(".select2-selection").removeClass("select2-error");
                    }
                });

                $('#select2-states-card').on('change', function (e) {
                    self.form.billing_state = $('#select2-states-card').select2('data')[0].id;
                    if (self.form.billing_state != '') {
                        $(".select2-selection").removeClass("select2-error");
                    }
                });

                $('#save-method-card').on('ifChecked', function (event) {
                    self.form.save_method = true;
                });

                $('#save-method-card').on('ifUnchecked', function (event) {
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
    .default-method {
        padding-bottom: 0px;
        background-color: #86dd861a;
        border-color: #00800066;
        border-style: dashed;
        margin-top: 5px;
    }
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