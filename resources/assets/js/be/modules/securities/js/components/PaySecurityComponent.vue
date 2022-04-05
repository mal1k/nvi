<template>
    <div>
        <div class="card" style="min-height: 70vh;">
            <div class="card-content">
                <div class="row card-body">
                    <div class="form-group mb-1 col-sm-6 col-md-3">
                        <!-- <label>Name or Abbr</label>
                            <input v-model="security.name" type="text" class="form-control">
                            <span v-if="error.name" class="message-error">{{error_message.name}}</span> -->
                        <label>Stock price ($)</label>
                        <input v-model="security.stock_price" type="number" min="4" class="form-control" readonly>
                        <span v-if="error.stock_price" class="message-error">{{error_message.stock_price}}</span>
                    </div>
                    <div class="form-group mb-1 col-sm-6 col-md-3">
                        <label>Interest rate</label>
                        <input v-model="security.interest_rate" type="number" min="0" step="0.001" class="form-control" readonly>
                        <span v-if="error.interest_rate" class="message-error">{{error_message.interest_rate}}</span>
                    </div>
                    <div class="form-group mb-1 col-sm-6 col-md-3">
                        <label>Marturnity Date</label>
                        <input v-model="security.maturity_date" type="number" min="0" step="10" class="form-control" readonly>
                        <span v-if="error.maturity_date" class="message-error">{{error_message.maturity_date}}</span>
                    </div>
                    <!-- <div class="form-group mb-1 col-sm-6 col-md-3">
                            <label>Company</label>
                            <input v-model="security.company" type="text" class="form-control">
                        </div> -->
                    <div class="form-group mb-1 col-sm-6 col-md-3">
                        <label>Number of simulations</label>
                        <input v-model="security.simulations" type="number" class="form-control" readonly>
                    </div>
                    <div class="form-group mb-1 col-sm-6 col-md-3">
                        <label>Put ($)</label>
                        <input v-model="security.put" type="number" class="form-control" readonly>
                    </div>
                    <div class="form-group mb-1 col-sm-6 col-md-3">
                        <label>Straddle ($)</label>
                        <input v-model="security.straddle" type="number" class="form-control" readonly>
                    </div>
                    <!-- <div class="form-group mb-1 col-sm-6 col-md-8">
                            <label>Company Description</label>
                            <textarea v-model="security.company_description" class="form-control" rows="5"></textarea>
                        </div> -->
                    <div class="form-group mb-1 col-sm-6 col-md-3">
                        <label>Total ($)</label>
                        <input v-model="security.total_price" type="number" class="form-control" readonly>
                    </div>
                    <div class="form-group mb-1 col-sm-6 col-md-3">
                        <label>Expected value ($)</label>
                        <input v-model="security.expected_value" type="number" class="form-control" readonly>
                    </div>
                </div>
                <div class=" row card-body" style="width:100%;">
                    <!-- <div class="row"> -->
                        <div class="form-group mb-1 text-right col-sm-12 display-buttom">

                            <button @click="unblockSecurity" type="button" class="btn btn-primary glow mb-1 mb-sm-0 mr-0 mr-sm-1"
                            style="height:40px;margin-top:25px;">Pay</button>

                            <a href="/admin/securities" style="height:40px;margin-top:25px;"
                                class="btn btn-light glow mb-1 mb-sm-0 mr-0 mr-sm-1">Cancel</a>

                        </div>
                    <!-- </div> -->
                </div>
            </div>
        </div>
        <div class="modal fade text-left" id="unblock-security" tabindex="-1" role="dialog" aria-labelledby="sd"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="sd">Pay Security</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-body">
                            <div class="text-center">
                                <span>Are you sure yu want to pay ${{parseFloat(amount).toFixed(2)}}?</span>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="payUnblockSecurity">Pay ${{parseFloat(amount).toFixed(2)}}</button>
                        <button type="button" class="btn grey btn-outline-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SecurityServices from '../services/SecurityServices.js';
    export default {
        props: ['editable_security'],
        mixins: [SecurityServices],
        data() {
            return {
                security: {
                    id: '',
                    creator_id: '',
                    quantity:'1',
                    /* name: '',
                    company: '',
                    company_description: '',*/
                    security_number: '',
                    stock_price: '',
                    interest_rate: '2.000',
                    put: '',
                    straddle: '',
                    total_price: '',
                    expected_value: '',
                    simulations: '',
                    maturity_date: '30',
                    status: 'active'
                },
                error: {
                    /* name: false,
                    company: false,
                    company_description: false,
                    status: false, */
                    stock_price: false,
                    interest_rate:false,
                    maturity_date:false,
                    simulations: false,
                },
                error_message: {
                    /* name: '',
                    company: '',
                    company_description: '',
                    status: '',*/
                    stock_price: '',
                    interest_rate:'',
                    maturity_date:'',
                    simulations: '',
                },
                initial_values: {
                    strike_10_50x: '',
                    strike_10_00x: '',
                    D1_A_10_50x: '',
                    D2_A_10_50x: '',
                    D1_B_10_50x: '',
                    D2_B_10_50x: '',
                    D1_A_10_00x: '',
                    D2_A_10_00x: '',
                    D1_B_10_00x: '',
                    D2_B_10_00x: '',
                    Ay_A: '',
                    Bx_A: '',
                    Ay_B: '',
                    Bx_B: '',
                    volatility: ''
                },
                interest_rate: '',
                time_value: '',

                show_action_button: false,
                show_number_input: false,
                amount: ''
            }
        },

        methods: {
            unblockSecurity(){
                if (this.security.status == 'blocked') {
                    $.LoadingOverlay("show");
                    var params = {
                            id: this.security.id,
                    }
                    this.unblockSecurityCall(params, this.unblockSecurityCallback);

                }


            },
            unblockSecurityCallback(response){
                $.LoadingOverlay("hide");
                if (response.data.status == 1) {
                    this.amount = response.data.data.amount;
                    setTimeout(function(){
                        $('#unblock-security').modal({ backdrop: 'static', keyboard: false });

                    },250);
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
            payUnblockSecurity(){
                $.LoadingOverlay("show");
                var params = {
                        id: this.security.id,
                        amount: this.amount
                }
                this.payUnblockSecurityCall(params, this.payUnblockSecurityCallback);

            },
            payUnblockSecurityCallback(response){
                $.LoadingOverlay("hide");
                if (response.data.status == 1) {
                    $("#unblock-security").modal('hide');
                    this.security.status = 'active';
                    window.location.href = '/admin/securities';
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
            /*removeSecurity(index, role) {
                swal({
                    title: "Are you sure?",
                    text: "Please confirm you want to remove this role.",
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
                        if (this.security.id > 0) {
                            if (role.id > 0) {
                                var data = {
                                    user_id: this.security.id,
                                    role: role.name,
                                    restrictable_id: role.acc_id
                                }
                                $.LoadingOverlay('show');
                                this.removeRoleCall(data, this.removeRoleCallback);
                            }
                            else {
                                this.security.roles.splice(index, 1);
                            }
                        }
                        else {
                            for (var i in this.security.roles) {
                                if (i == index) {
                                    this.security.roles.splice(index, 1);
                                }
                            }
                        }
                    }
                });
            }, */
        },
        computed: {

        },
        watch: {
            'security.interest_rate'(val, oldVal) {
                if (val) {
                    if (val==0) {
                        this.error.interest_rate = true;
                        this.error_message.interest_rate = 'Initial interest rate shoul be greater than 0';
                        this.show_action_button = false;
                    }else{
                        this.error.interest_rate = false;
                        this.error_message.interest_rate = '';
                        this.show_action_button = false;

                    }
                }

            },
            'security.stock_price'(val, oldVal) {
                if (val) {
                    this.error.stock_price = false;
                    this.error_message.stock_price = '';
                    this.show_action_button = false;
                }
            },
            'security.simulations'(val) {
                if (val) {
                    this.error.simulations = false;
                    this.error_message.simulations = '';
                }
            },
            'security.status'(val) {
                if (val) {
                    this.error.status = false;
                    this.error_message.status = '';
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
        created() {
            if (this.editable_security) {
                this.security = Object.assign(this.security, this.editable_security);
            }
            console.log(this.editable_security)
            /* else {
                this.interest_rate = 2.00;
                this.time_value = 1;
            } */

        },
        mounted() {
            var self = this;
            this.$nextTick(function () {
                $('#initial-values').on('show.bs.modal', function (e) {

                });
                $('#initial-values').on('hidden.bs.modal', function (e) {

                });
                $('#unblock-security').on('show.bs.modal', function (e) {

                });
                $('#unblock-security').on('hidden.bs.modal', function (e) {

                });
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
</style>
<style scoped>
.display-buttom{
    width: 100%;
    display:inline-flex;
    justify-content:flex-end;
}
@media (max-width: 576px){
    .display-buttom{
        width: 100%;
        display:block;
        justify-content:flex-end;
    }
}

</style>
