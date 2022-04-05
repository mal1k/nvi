<template>
<div>
    <div class="row">
        <div class="col-md-12">
            <ul id="payments_methods_options" style="list-style: none; margin-top: 10px">
                <li>
                    <div class="skin skin-square">
                        <div class="row">
                            <div v-show="payment_methods.credit_card" :class="{'col-md-4' : (options && options.length == 3), 'col-md-6' : (options && options.length == 2),
                             'col-md-12' : (!options || options.length == 1)}">
                                <span style="padding: 10px">
                                    <input id="credit_card" type="radio" value="credit_card" name="payment_method"
                                        checked>
                                    <label for="credit_card">Credit/Debit Card</label>
                                </span>
                            </div>
                            <div v-show="payment_methods.bank_account" :class="{'col-md-4' : (options && options.length == 3), 'col-md-6' : (options && options.length == 2),
                             'col-md-12' : (!options || options.length == 1)}">
                                <span style="padding: 10px">
                                    <input id="bank_account" type="radio" value="bank_account" name="payment_method">
                                    <label for="bank_account">Bank Account</label>
                                </span>
                            </div>
                            <div v-show="payment_methods.cash" :class="{'col-md-4' : (options && options.length == 3), 'col-md-6' : (options && options.length == 2),
                             'col-md-12' : (!options || options.length == 1)}">
                                <span style="padding: 10px">
                                    <input id="cash" type="radio" value="cash" name="payment_method">
                                    <label for="cash">Money Order/Cash</label>
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="row" style="margin-top: 20px; margin-bottom:4rem;">
        <div  class="col-12">
            <payout-credit-card v-if="payment_method == 'credit_card'"
                :card_processor="card_processor" 
                :client_key="client_key" 
                :api_id="api_id" 
                :save_method="true"
                :recurring_payments="false"
                :total_amount="0"
                :description="description"
                @save="onSave"
                @back="onBack">
            </payout-credit-card>
            <add-bank-account  v-if="payment_method == 'bank_account'"
                :card_processor="card_processor" 
                :client_key="client_key"
                :api_id="api_id"
                :save_method="save_method"
                :recurring_payments="false"
                :total_amount="0"
                :description="description"
                @save="onSave"
                @back="onBack"></add-bank-account>
            <payout-cash v-if="payment_method == 'cash'"
                @save="onSave"
                @back="onBack"></payout-cash>
        </div>
    </div>
</div>
</template>

<script>
import BankProcessor from './BankProcessorComponent.vue';
import CardProcessor from './CardProcessorComponent.vue';

export default {
    props: ['card_processor', 'client_key', 'api_id', 'description', 'options', 'payable_type', 'payable_id','save_method'],
    components: {
        'add-bank-account': BankProcessor,
        'payout-credit-card': CardProcessor,
    },
    data() {
        return {
            payment_method: 'credit_card',
            payment_methods:{
                credit_card: false,
                bank_account: false,
                cash: false,
            }
        }
    },
    methods:{
        onSave(data) {
            console.log('PaymentMethodContainer', data);
            this.$emit('save', data);
        },
        onBack() {
            this.$emit('back', true);
        },
    },
    created(){
        if(this.options){
            for(var i in this.options){
                if(this.payment_methods.hasOwnProperty(i)){
                    this.payment_methods[i] = this.options[i];
                }
            }
        }
    },
    mounted(){
        var self = this;
        this.$nextTick(function(){
            $('.skin-square input').iCheck({
                checkboxClass: 'icheckbox_square-red',
                radioClass: 'iradio_square-red',
            });
    
            $('#credit_card').on('ifChecked', function (event) {
                self.payment_method = event.target.value;
            });
    
            $('#bank_account').on('ifChecked', function (event) {
                self.payment_method = event.target.value;
            });
        })
    }
}
</script>