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
                        <input v-model="security.stock_price" type="number" min="4" class="form-control">
                        <span v-if="error.stock_price" class="message-error">{{error_message.stock_price}}</span>
                    </div>
                    <div class="form-group mb-1 col-sm-6 col-md-3">
                        <label>Interest rate</label>
                        <input v-model="security.interest_rate" type="number" min="0" step="0.001" class="form-control">
                        <span v-if="error.interest_rate" class="message-error">{{error_message.interest_rate}}</span>
                    </div>
                    <div class="form-group mb-1 col-sm-6 col-md-3">
                        <label>Marturity Date (Days)</label>
                        <input v-model="security.maturity_date" type="number" min="0" step="10" class="form-control">
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
                    <div class="form-group mb-1 col-sm-6 col-md-3">
                        <label>Status</label>
                        <select v-model="security.status" class="form-control" style="font-size: 12px !important">
                            <option value="">Select security status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                        <span v-if="error.status" class="message-error">{{error_message.status}}</span>
                    </div>
                </div>

                <div class="row card-body">
                    <div class="form-group mb-1 text-left col-sm-12 col-md-6" style="width: 100%">
                        <button @click="getInitialValues" type="button" class="btn btn-dark btn-min-width mr-1 mb-1"
                            style="margin-top: 4px;">Get initial
                            values</button>
                    </div>
                </div>
                <div class=" row card-body" style="width:100%;">
                    <!-- <div class="row"> -->
                        <div class="form-group mb-1 text-right col-sm-12 display-buttom">
                            <div v-show="show_number_input" class="form-group glow mb-1 col-12 col-sm-2 " style="padding-right:10px;">
                                <label>quantity</label>
                                <input v-model="security.quantity" type="number" min="1" max="1000" class="form-control">
                            </div>
                            <button v-if="show_action_button" @click="createSecurity" type="button"
                                class="btn btn-primary glow mb-1 mb-sm-0 mr-0 mr-sm-1" style="height:40px;margin-top:25px;">
                                {{security.id > 0 ? 'Update security' : 'Add security'}}
                            </button>

                            <a href="/admin/securities" style="height:40px;margin-top:25px;"
                                class="btn btn-light glow mb-1 mb-sm-0 mr-0 mr-sm-1">Cancel</a>

                        </div>
                    <!-- </div> -->
                </div>
            </div>
        </div>

        <div class="modal fade text-left" id="initial-values" tabindex="-1" role="dialog" aria-labelledby="sd"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="sd">Initial values</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="interest_rate">Interest rate</label>
                                        <input v-model="interest_rate" type="number" id="interest_rate"
                                            class="form-control" placeholder="Interest rate" name="interest_rate"
                                            readonly>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="time_value">Time value</label>
                                        <input v-model="time_value" type="number" id="time_value" class="form-control"
                                            readonly placeholder="Time value" name="time_value">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="volatility">Volatility</label>
                                        <input v-model="initial_values.volatility" type="number" id="volatility"
                                            class="form-control" placeholder="Volatility" name="volatility" readonly>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="strike_10_50x">Strike 10.50x</label>
                                        <input v-model="initial_values.strike_10_50x" type="text" id="strike_10_50x"
                                            class="form-control" placeholder="Strike 10.50x" name="strike_10_50x"
                                            readonly>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="strike_10_00x">Strike 10.00x</label>
                                        <input v-model="initial_values.strike_10_00x" type="number" id="strike_10_00x"
                                            class="form-control" placeholder="Strike 10.00x" readonly
                                            name="strike_10_00x">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="D1_A_10_50x">D1-A-10.50x</label>
                                        <input v-model="initial_values.D1_A_10_50x" type="number" id="D1_A_10_50x"
                                            class="form-control" placeholder="D1-A-10.50x" name="D1_A_10_50x" readonly>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="D2_A_10_50x">D2-A-10.50x</label>
                                        <input v-model="initial_values.D2_A_10_50x" type="number" id="D2_A_10_50x"
                                            class="form-control" placeholder="D2-A-10.50x" name="D2_A_10_50x" readonly>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="D1_B_10_50x">D1-B-10.50x</label>
                                        <input v-model="initial_values.D1_B_10_50x" type="number" id="D1_B_10_50x"
                                            class="form-control" placeholder="D1-B-10.50x" name="D1_B_10_50x" readonly>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="D2_B_10_50x">D2-B-10.50x</label>
                                        <input v-model="initial_values.D2_B_10_50x" type="number" id="D2_B_10_50x"
                                            class="form-control" placeholder="D2-B-10.50x" name="D2_B_10_50x" readonly>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="D1_A_10_00x">D1-A-10.00x</label>
                                        <input v-model="initial_values.D1_A_10_00x" type="number" id="D1_A_10_00x"
                                            class="form-control" placeholder="D1-A-10.00x" name="D1_A_10_00x" readonly>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="D2_A_10_00x">D2-A-10.00x</label>
                                        <input v-model="initial_values.D2_A_10_00x" type="number" id="D2_A_10_00x"
                                            class="form-control" placeholder="D2-A-10.00x" name="D2_A_10_00x" readonly>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="D1_B_10_00x">D1-B-10.00x</label>
                                        <input v-model="initial_values.D1_B_10_00x" type="number" id="D1_B_10_00x"
                                            class="form-control" placeholder="D1-B-10.00x" name="D1_B_10_00x" readonly>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="D2_B_10_00x">D2-B-10.00x</label>
                                        <input v-model="initial_values.D2_B_10_00x" type="number" id="D2_B_10_00x"
                                            class="form-control" placeholder="D2-B-10.00x" name="D2_B_10_00x" readonly>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="Ay_A">Ay-A</label>
                                        <input v-model="initial_values.Ay_A" type="number" id="Ay_A"
                                            class="form-control" placeholder="Ay-A" name="Ay_A" readonly>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="Bx_A">Bx-A</label>
                                        <input v-model="initial_values.Bx_A" type="number" id="Bx_A"
                                            class="form-control" placeholder="Bx-A" name="Bx_A" readonly>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="Ay_B">Ay-B</label>
                                        <input v-model="initial_values.Ay_B" type="number" id="Ay_B"
                                            class="form-control" placeholder="Ay-B" name="Ay_B" readonly>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="Bx_B">Bx-B</label>
                                        <input v-model="initial_values.Bx_B" type="number" id="Bx_B"
                                            class="form-control" placeholder="Bx-B" name="Bx_B" readonly>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--  <div class="form-actions text-right">
                            <button @click="fillInitialValues(true)" type="button" class="btn btn-primary">
                                <i class="fa fa-check-square-o"></i> Accept
                            </button>
                        </div> -->
                    </div>
                    <div class="modal-footer">
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
            }
        },

        methods: {
            createSecurity() {
                if (this.security.stock_price && this.security.simulations && this.security.status) {
                    if (this.security.stock_price >= 4) {
                        $.LoadingOverlay("show");
                        if (this.security.id > 0) {
                            this.updateSecurityCall(this.security, this.createSecurityCallback)
                        } else {
                            this.createSecurityCall(this.security, this.createSecurityCallback)
                        }
                    } else {
                        this.error.stock_price = true;
                        this.error_message.stock_price = 'Initial stock price should be equal or greater than $4';
                    }
                } else {
                    if (this.security.stock_price == '') {
                        this.error.stock_price = true;
                        this.error_message.stock_price = 'Stock price is required';
                    }
                    if (this.security.simulations == '') {
                        this.error.simulations = true;
                        this.error_message.simulations = 'Number of simulations is required';
                    }
                    if (this.security.status == '') {
                        this.error.status = true;
                        this.error_message.status = 'Security status is required';
                    }
                }
            },
            createSecurityCallback(response) {
                $.LoadingOverlay("hide");
                if (response.data.status == 1) {
                    toastr.success(response.data.message, 'Success', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    if (this.security.id > 0) {
                        this.security = response.data.data;
                    } else {
                        window.location.href = '/admin/securities';
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
            },
            getInitialValues() {
                if (this.security.stock_price) {
                    if (this.security.stock_price >= 4) {
                        $.LoadingOverlay("show");
                        var params = {
                             stock_price: this.security.stock_price,
                             interest_rate: this.security.interest_rate
                        }
                        this.getInitialValuesCall(params, this.getInitialValuesCallback);
                    } else {

                        this.error.stock_price = true;
                        this.error_message.stock_price = 'Initial stock price should be equal or greater than $4';
                    }
                } else {
                        this.error.stock_price = true;
                        this.error_message.stock_price = 'Initial stock price is required';
                }
            },
            getInitialValuesCallback(response) {
                $.LoadingOverlay("hide");
                if (response.data.status == 1) {
                    toastr.success(response.data.message, 'Success', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    this.fillInitialValues(response.data.data);
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
            fillInitialValues(values) {
                this.interest_rate = values['interest_rate'] ? values['interest_rate'].toFixed(3) : 0;
                this.time_value = values['time_value'] ? values['time_value'] : 0;

                this.initial_values.strike_10_00x = values['strike_10_00x'] ? values['strike_10_00x'] : 0;
                this.initial_values.strike_10_50x = values['strike_10_50x'] ? values['strike_10_50x'] : 0;
                this.initial_values.volatility = values['volatility'] ? values['volatility'] : 0;
                this.initial_values.D1_A_10_50x = values['D1_A_10_50x'] ? values['D1_A_10_50x'] : 0;
                this.initial_values.D2_A_10_50x = values['D2_A_10_50x'] ? values['D2_A_10_50x'] : 0;
                this.initial_values.D1_B_10_50x = values['D1_B_10_50x'] ? values['D1_B_10_50x'] : 0;
                this.initial_values.D2_B_10_50x = values['D2_B_10_50x'] ? values['D2_B_10_50x'] : 0;
                this.initial_values.D1_A_10_00x = values['D1_A_10_00x'] ? values['D1_A_10_00x'] : 0;
                this.initial_values.D2_A_10_00x = values['D2_A_10_00x'] ? values['D2_A_10_00x'] : 0;
                this.initial_values.D1_B_10_00x = values['D1_B_10_00x'] ? values['D1_B_10_00x'] : 0;
                this.initial_values.D2_B_10_00x = values['D2_B_10_00x'] ? values['D2_B_10_00x'] : 0;
                this.initial_values.Ay_A = values['Ay_A'] ? values['Ay_A'] : 0;
                this.initial_values.Bx_A = values['Bx_A'] ? values['Bx_A'] : 0;
                this.initial_values.Ay_B = values['Ay_B'] ? values['Ay_B'] : 0;
                this.initial_values.Bx_B = values['Bx_B'] ? values['Bx_B'] : 0;

                this.security.simulations = values['simulations'] ? values['simulations'] : 0;
                this.security.put = values['put'] ? values['put'] : 0;
                this.security.straddle = values['straddle'] ? values['straddle'] : 0;
                this.security.expected_value = values['expected_value'] ? values['expected_value'] : 0;
                this.security.total_price = values['total_price'] ? values['total_price'] : 0;

                this.show_action_button = true;
                if(!this.security.id){
                    this.show_number_input = true;
                }else{
                    this.show_number_input = false;
                }
                $('#initial-values').modal({ backdrop: 'static', keyboard: false });
            },

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
