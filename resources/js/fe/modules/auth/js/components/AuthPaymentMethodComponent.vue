<template>
     <section>
        <div class="row mt-4">
            <div id="payment-method" class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <div class="text-center">
                    <div class="col-md-12">
                        <div class="sec-content">
                            <h1 class="title-one mt-0 mb-5">Add Payment Method</h1>
                        </div>
                    </div>
                </div>
                <payment-method-container 
                        :card_processor="card_processor" 
                        :client_key="client_key" 
                        :api_id="api_id" 
                        :options="options"
                        :save_method="false"
                        payable_type="subscription"
                        :payable_id="$route.params.subscription_id"
                        @save="onSave"
                        @back="onBack"
                        @cancelAddPaymentMethod="cancelAddPaymentMethodHandle"
                        >
                </payment-method-container>
            </div> 
        </div> 
    </section>
</template>

<script>

import PaymentMethodContainer from '../../../../../components/payments/PaymentMethodContainer';
import PaymentServices from '../../../../../services/PaymentServices';
import AuthServices from '../services/AuthService';

export default {
    props: ['card_processor', 'client_key', 'api_id'],
    components: {
        'payment-method-container': PaymentMethodContainer,
    },
    mixins:[AuthServices,PaymentServices],
    data() {
        return {
            options:[
                'credit_card'
            ],
            subscription:{}
        }
    },
    methods:{
        cancelAddPaymentMethodHandle(val){
            if(val){
                $.LoadingOverlay("show");
                this.deleteSubscriptionCall(this.$route.params.subscription_id, this.deleteSubscriptionCallback);
            }
        },
        deleteSubscriptionCallback(response){
            if(response.status > 0){
                window.location.href = '/register/plans';
            }else{
                $.LoadingOverlay("hide");
                if(Helpers.isAssoc(response.errors) > 0){
                    for(let field in response.errors){
                        this.errors[field].message = response.errors[field][0];
                        this.errors[field].invalid = true;                        
                    }
                }else{
                    this.$notify({
                        group: 'message',
                        title: 'Error!!',
                        text: response.errors[0],
                        type: 'error',
                        duration: 3000
                    });
                }
            }
        },
        onSave(data){
            data['amount'] = 0;
            data['owner_type'] = 'user';
           
            if(this.subscription.plan.min_price > 0){
                data['amount'] = this.subscription.plan.min_price ;
                data['order_type'] = 'subscription';
                data['order_items'] = [];
                data['order_items'].push({
                    name : this.subscription.plan.title,
                    description: this.subscription.plan.description,
                    qty: 1,
                    price: this.subscription.plan.min_price ,
                    owner_type: 'subscription',
                    owner_id: this.subscription.id
                })
                this.storeAndPayCall(data, this.storePaymenCallback);
            }else{
                this.addPaymentProfileAsOwnerCall(data, this.storePaymenCallback);
            }
        },
        storePaymenCallback(response) {
            if (response.status > 0) {
                this.$notify({
                    group: 'message',
                    title: 'Success!!',
                    text: response.message,
                    type: 'success',
                    duration: 3000
                });
                 window.location.href = '/investor/dashboard';
            }else{
                $.LoadingOverlay("hide");
                if(Helpers.isAssoc(response.errors) > 0){
                    for(let field in response.errors){
                        this.errors[field].message = response.errors[field][0];
                        this.errors[field].invalid = true;                        
                    }
                }else{
                    this.$notify({
                        group: 'message',
                        title: 'Error!!',
                        text: response.errors[0],
                        type: 'error',
                        duration: 3000
                    });
                }
            }
        },
        onBack(val){
            if(val){
                $.LoadingOverlay("show");
                this.deleteSubscriptionCall(this.$route.params.subscription_id, this.deleteSubscriptionCallback);
            }
        },
        deleteSubscriptionCallback(response){
            if(response.status > 0){
                window.location.href = '/auth/plans';
            }else{
                $.LoadingOverlay("hide");
                if(Helpers.isAssoc(response.errors) > 0){
                    for(let field in response.errors){
                        this.errors[field].message = response.errors[field][0];
                        this.errors[field].invalid = true;                        
                    }
                }else{
                    this.$notify({
                        group: 'message',
                        title: 'Error!!',
                        text: response.errors[0],
                        type: 'error',
                        duration: 3000
                    });
                }
            }
        },
        getSubscriptionCallback(response){
            if(response.status > 0){
                this.subscription = Object.assign({}, response.data);
            }else{
                this.$notify({
                    group: 'message',
                    title: 'Error!!',
                    text: response.errors[0],
                    type: 'error',
                    duration: 3000
                });
            }
            $.LoadingOverlay("hide");
        }
    },
    mounted(){
        this.getSubscriptionCall(this.$route.params.subscription_id, this.getSubscriptionCallback)
    }
}
</script>

<style>

    section{
        justify-content: center;
        height: 100vh;
        background: #fff;
    }

    .login-logo{
        width: 200px;
        margin-bottom: 40px;
    }

    #payment-method input{
        width: 100%;
        outline: none;
        border: 1px solid rgba(17, 95, 143,0.2)!important;
        background: transparent!important;
        padding: 8px 10px!important;
        border-radius: 6px!important;
        font-size: 16px!important;
        font-weight: 300!important;
        color: #aba5b6!important;
        height: 48px!important;
        /* box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.2); */
    }
    select{
        width: 100%;
        outline: none;
        border: 1px solid rgba(17, 95, 143,0.2)!important;
        background: transparent!important;
        padding: 8px 10px!important;
        border-radius: 6px!important;
        font-size: 16px!important;
        font-weight: 300!important;
        color: #aba5b6!important;
        height: 48px!important;
        /* box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.2); */
    }
</style>