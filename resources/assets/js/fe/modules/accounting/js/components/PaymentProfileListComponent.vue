<template>
    <div class="row" style="margin-top: 20px">
        <div v-show="payment_profiles.length > 0" class="col-xs-12 col-sm-12 col-md-12">
            <ul id="payments_list" class="list-group" style="list-style: none">
                <li v-for="(payment_profile, index) in payment_profiles"
                    class="list-group-item" :class="{'default-method' : payment_profile.default == 1}">
                    <div class="row">
                        <div class="col-2 col-md-1">
                            <div class="input-group">
                                <div class="skin skin-square">
                                    <span style="padding: 10px">
                                        <input :class="'payment_profile'+payment_profile.id" :id="'payment_profile' + index" :value="payment_profile.payment_profile_id" :data-id="payment_profile.id"
                                            :data-pfi="payment_profile.payment_profile_id" type="radio"
                                            name="payment_profiles">
                                        <label :for="'payment_profile' + index">
                                        </label>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-6">
                            <b>
                                <span v-if="payment_profile.payment_method_type == 'card'">{{payment_profile.brand|capitalize}}</span> 
                                <span v-else-if="payment_profile.payment_method_type == 'bank' && payment_profile.brand">{{payment_profile.brand|capitalize}}</span> 
                                <span v-else-if="payment_profile.payment_method_type == 'bank' && !payment_profile.brand">Bank Account</span> 
                            
                            ending in 
                                {{payment_profile.last_4}}</b>
                            <div v-show="payment_profile.default == 1" style="color: green; font-size: 10px"><b>Default</b></div>
                        </div>
                        <div v-if="!hidecontrols" class="col-md-4" style="text-align: right;margin-top: 5px">
                            <span v-show="payment_profile.default == 0" style="padding: 10px" title="Set as default method">
                                <i @click="setAsDefault(payment_profile.id)" class="fa fa-chevron-up"
                                    style="cursor: pointer; font-size: 22px"></i>
                            </span>
                            <span style="padding: 10px" title="Remove">
                                <i @click="removePaymentProfile(payment_profile.id)"
                                    class="fa fa-trash" style="cursor: pointer; font-size: 22px;color:red;"></i>
                            </span>
                        </div>
                        <div v-else class="col-md-4" style="text-align: right;margin-top: 5px">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import PaymentServices from '../services/PaymentServices';
    export default {
        props: ['user','pmethods','hidecontrols', 'list_payments'],
        mixins:[PaymentServices],
        data() {
            return {
                payment_profiles: [],
                current_customer_profile: {},
                payment_method: 'credit_card',
                showAddPaymentMethod: false,
                hide_payment_methods: false,
                customer_payment_profile:''
            }
        },
        watch:{
            pmethods(val){
                if(val){
                    this.payment_profiles.push(this.pmethods);
                    this.initPayments();
                }
            },
            list_payments(val){
                if(val){
                    this.getProfilesCall(this.getProfilesCallback);
                }
            }
        },
        methods: {
            getProfilesCallback(response){
                if(response.status > 0){
                    this.payment_profiles = response.data;
                    this.initPayments();
                    if(this.payment_profiles.length == 0){
                        this.$emit("hasPaymentProfile", true);
                    }else{
                        this.$emit("hasPaymentProfile", false);
                    }
                }else{
                    if (Helpers.isAssoc(response.errors)) {
                        let errors = [];
                        for (var i in response.errors) {
                            var string
                            errors.push('<span>' + response.errors[i] + '</span></br>')
                        }
                        toastr.error(errors, 'Some error(s) has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    } else {
                        toastr.error(response.errors[0], 'An error has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    }
                }
            },
            removePaymentProfile(id) {
                swal({
                    title: "Are you sure?",
                    text: "Even if you remove this payment method, any pending transaction will be completed.",
                    icon: "warning",
                    buttons: {
                        cancel: {
                            text: "Cancel",
                            value: null,
                            visible: true,
                            className: "btn-warning",
                            closeModal: true,
                        },
                        confirm: {
                            text: "Yes",
                            value: true,
                            visible: true,
                            className: "btn-primary",
                            closeModal: true
                        }
                    }
                }).then(isConfirm => {
                    if (isConfirm) {
                        let data = {
                            'id': id,
                            'owner_type' : 'user'
                        }
                        $.LoadingOverlay("show");
                        if(this.user){
                            data['owner_id'] = this.user.id;
                            this.removePaymentProfileCall(id, data, this.removePaymentProfileCallback);
                        }else{
                            this.removePaymentProfileAsOwnerCall(id, data, this.removePaymentProfileCallback)
                        }
                    }
                });
            },
            removePaymentProfileCallback(response) {
                $.LoadingOverlay("hide");
                if (response.status == 1) {
                    toastr.success(response.message, 'Success', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    for (var i in this.payment_profiles) {
                        if (this.payment_profiles[i].id == response.data) {
                            this.payment_profiles.splice(i, 1);
                        }
                    }
                } else {
                    if (Helpers.isAssoc(response.errors)) {
                        let errors = [];
                        for (var i in response.errors) {
                            var string
                            errors.push('<span>' + response.errors[i] + '</span></br>')
                        }
                        toastr.error(errors, 'Some error(s) has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    } else {
                        toastr.error(response.errors[0], 'An error has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    }
                }
            },
            setAsDefault(id) {
                if (id) {
                    let data = {
                        'owner_type': 'user',
                    }
                    $.LoadingOverlay("show");
                    if(this.user){
                        data['owner_id'] = this.user.id;
                        this.setAsDefaultCall(id, data, this.setAsDefaultCallback)
                    }else{
                        this.setAsDefaultAsOwnerCall(id, data, this.setAsDefaultCallback)
                    }
                }
            },
            setAsDefaultCallback(response) {
                $.LoadingOverlay("hide");
                if (response.status == 1) {
                    toastr.success(response.message, 'Success', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    this.payment_profiles = response.data;
                } else {
                    if (Helpers.isAssoc(response.errors)) {
                        let errors = [];
                        for (var i in response.errors) {
                            var string
                            errors.push('<span>' + response.errors[i] + '</span></br>')
                        }
                        toastr.error(errors, 'Some error(s) has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    } else {
                        toastr.error(response.errors[0], 'An error has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    }
                }
            },
            initPayments(){
                var self = this;
                this.$nextTick(function () {
                    $('#payments_list .skin-square input').iCheck({
                        checkboxClass: 'icheckbox_square-green',
                        radioClass: 'iradio_square-green',
                    });

                    if (self.payment_profiles.length > 0) {
                        for (var i in self.payment_profiles) {
                            $('#payment_profile' + i).on('ifChecked', function (event) {
                                self.customer_payment_profile = event.target.value;
                                self.$emit('sendPaymentId', $(this).attr('data-id'));
                            });

                            $('#payment_profile' + i).on('ifUnchecked', function (event) {
                                self.customer_payment_profile = '';
                            });
    
                            if(self.payment_profiles[i].default == 1){
                                $('#payment_profile' + i).iCheck('check');
                            }
                        }
                    }
                });
            }
        },
        created() {
            this.getProfilesCall(this.getProfilesCallback);
        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    .card-body {
        min-height: 80vh;
    }

    .default-method {
        padding-bottom: 0px;
        background-color: #86dd861a;
        border-color: #00800066;
        border-style: dashed;
        min-height: 68px;
    }
</style>