<template>
    <div>
        <div class="col-12">
            <payment-method-container 
                :card_processor="card_processor" 
                :client_key="client_key" 
                :api_id="api_id" 
                :options="options"
                :amount="total_amount"
                :save_method="false"
                @save="onSave"
                @back="onBack"
                >
            </payment-method-container>
        </div>
    </div>
</template>

<script>
    import PaymentServices from '../services/PaymentServices';
    import PaymentMethodContainer from '../../../../../components/payments/PaymentMethodContainer'
    export default {
        props: ['user','card_processor', 'client_key', 'api_id','payable_type','payable_id','options','total_amount'],
        mixins:[PaymentServices],
        components:{
            'payment-method-container' : PaymentMethodContainer
        },
        data() {
            return {
            }
        },
        methods: {
            onBack(){
                this.$emit('back', true);
            },
            onSave(data){
                this.$emit('save', data);
            }
        },
        created() {
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
</style>