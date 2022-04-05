<template>
     <section>
         <!-- <div style="padding-top: 5rem;width:100%;">
            <div class="col-md-12 text-center">
                <img class="login-logo" src="/themes/listiva/images/logo-name.png">
            </div>
        </div> -->
        <div v-show="!changePlan" class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <h3 class="text-center">Pay Subscription  ({{subscription.title}})</h3>
            <div style="padding-top: 5rem;">
                <div v-show="!showAddPaymentMethod" class="form-group mb-2" style="padding:0;">
                    <button class="btn btn-outline-primary" type="button" @click="showAddPaymentMethod = true"><i class="fa fa-credit-card"></i> New payment method</button>
                </div>
                <add-payment-profile v-show="showAddPaymentMethod"
                    :card_processor="card_processor" 
                    :client_key="client_key" 
                    :api_id="api_id" 
                    :options="options"
                    :total_amount="subscription.price"
                    @save="onSave"
                    @back="onBack"
                ></add-payment-profile>
            </div>
            <div v-show="!showAddPaymentMethod" class="mt-3" style="margin-top:5rem;">
                <payment-methods :pmethods="pmethods" @sendPaymentId="sendPaymentIdHandle" @hasPaymentProfile="hasPaymentProfileHandle"></payment-methods>
            </div>
            <div v-show="!showAddPaymentMethod" style="margin-top:5rem;text-align: right;">
                <div class="form-group mb-2" style="padding:0;">
                    <button class="btn btn-primary" type="button" @click="paySubscription()">Pay ${{subscription.price}}</button>
                    <button class="btn btn-outline-primary" @click="changePlan = true" type="button">Change Plan</button>
                </div>
            </div>
        </div>

        <div v-show="changePlan">
           <div style="text-align: center;">
                <div class="form-group mb-2" style="padding:0;">
                    <button class="btn btn-outline-primary" @click="changePlan = false" type="button">Back</button>
                </div>
            </div>
           <plans-component @selectPlan="selectPlanHandle" :current_plan_id="subscription.current_plan_id"></plans-component>

        </div>
    </section>
</template>

<script>
import PaymentMethodsComponent from '../../../../../be/modules/accounting/js/components/PaymentProfileListComponent';
import AddPaymentProfileComponent from '../../../../../be/modules/accounting/js/components/AddPaymentProfileComponent';
import PlansComponent from './PlansComponent';
import AuthServices from '../services/AuthService';
export default {
    props: ['card_processor', 'client_key', 'api_id'],
    mixins:[AuthServices],
    components:{
        "payment-methods" : PaymentMethodsComponent,
        "add-payment-profile" : AddPaymentProfileComponent,
        "plans-component": PlansComponent
    },
    data() {
        return {
            options: {
                card: true,
                bank: false,
                cash: false
            },
            showAddPaymentMethod: false,
            pmethods:{},
            showSubscription: false,
            subscription: {
                price: 0,
                current_plan_id: 0,
                title: ''
            },
            changePlan: false,
            title:'',
            payment_profile: 0,
            has_profiles: false
        }
    },
    methods:{
        onSave(data){
            data['owner_type'] = 'user';
            data['id'] = this.subscription.id;
            this.paySubscriptionWithOutProfileCall(data, this.payCallback);
        },
        onBack(val){
            this.showAddPaymentMethod = this.has_profiles;
        },
        storePaymenCallback(response) {
            $.LoadingOverlay("hide");
            if (response.status > 0) {
                this.showAddPaymentMethod = false;
                this.pmethods = Object.assign({}, response.data);
            }else{
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

                if(response.data.plan){
                    this.subscription.title = response.data.plan.title;
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
        },
        selectPlanHandle(plan){
            var params = {
                subscription_id: this.subscription.id,
                plan_id: plan.id
            }
            this.title = plan.title;
            this.updateSubscriptionCall(params, this.updateSubscriptionCallback);
            console.log(plan);
        },
        updateSubscriptionCallback(response){
            if(response.status > 0){
                this.subscription = Object.assign({}, response.data);
                this.subscription.title = this.title;
                this.title = '';
                 this.$notify({
                    group: 'message',
                    title: 'Success!!',
                    text: "Plan updated successfully",
                    type: 'success',
                    duration: 3000
                });
                this.changePlan = false;
            }else{
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
            $.LoadingOverlay("hide");
        },
        paySubscription(){
            if(this.payment_id > 0){
                Helpers.block();
                var params = {
                    payment_id: this.payment_id,
                    id: this.subscription.id
                }
                this.paySubscriptionWithProfileCall(params, this.payCallback)
            }else{
                toastr.error("Select a payment method, please","Error!!");
            }
        },
        sendPaymentIdHandle(id){
            this.payment_id = id;
        },
        payCallback(response){
           if(response.status > 0){
               window.location.href = '/';
           }else{
               
           }
            Helpers.unblock();
        },
        hasPaymentProfileHandle(value){
            this.has_profiles = value;
            this.showAddPaymentMethod = value;
        }
    },
    created(){
    },
    mounted(){
        this.getSubscriptionCall(this.$route.params.subscription_id, this.getSubscriptionCallback)
    }
}
</script>


<style>
    input:focus {
        outline:none;
    }

    input{
        height: 48px!important;
    }


</style>
<style scoped>
.invalid-feedback {
    display: block;
    width: 100%;
    margin-top: .25rem;
    font-size: 80%;
    color: #dc3545;
}
.plans-title{
    border-radius: 25px;
    display: inline-block;
    font-weight: 800;
    height: auto;
    line-height: 1.6;
    width: auto;
    background-color: #fff;
    font-size: 18px;
    padding: 2px 14px;
    color: #F06C3B;
}
.plus {
    color: #0b1723!important;
    font-weight: 700;
}

.feature-list ul li.plus .plus-bubble span {
    background-color: #F06C3B;
}

    section{
        justify-content: center;
        height: 100vh;
    }


    .login-logo{
        width: 200px;
        margin-bottom: 40px;
    }

    

</style>