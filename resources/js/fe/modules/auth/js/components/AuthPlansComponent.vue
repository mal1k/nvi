<template>
     <section>
         <div style="padding-top: 5rem;width:100%;">
        </div>
        <plans-component @selectPlan="selectPlanHandle"></plans-component>
    </section>
</template>

<script>
import AuthServices from '../services/AuthService';
import AuthPaymentMethodComponent from './AuthPaymentMethodComponent.vue';
import PlansComponent from './PlansComponent.vue';
export default {
    mixins:[AuthServices],
    components:{
        PlansComponent,
        AuthPaymentMethodComponent
    },
    data() {
        return {
        }
    },
    methods:{
        selectPlanHandle(plan){
            this.selectPlanCall(plan.id, plan.total_units, this.selectPlanCallback);
        },
        selectPlanCallback(response){
            if(response.status > 0 ){
                this.$router.push({path: 'payment-method/' + response.data.id})
                // window.location = '/admin/dashboard';
            }else{
                 $.LoadingOverlay("hide");
                if(Helpers.isAssoc(response.errors) > 0){
                    for(let field in response.errors){
                        this.error_messages[field] = response.errors[field][0];
                        this.errors[field] = true;
                    }
                    toastr.error('Check the input fields', 'Error');
                }else{
                    toastr.error(response.errors[0], 'Error');
                }
            }
        },
    },
    created(){
        
    },
    mounted(){
    }
}
</script>


<style>
    .noUi-handle {
        -webkit-box-shadow: none;
        box-shadow: none;
        border-radius: 50%;
        background: #FFF;
        border: 5px solid #F06C3B!important;
    }
    input:focus {
        outline:none;
    }

    .plan-1{
        width: 40%;
        margin: 20px;
    }

    .plan-2{
        width: 40%;
        margin: 20px;
    }

    .plan-3{
        width: 30%;
        margin: 20px;
    }

    .plan-4{
        width: 20%;
        margin: 20px;
    }

    .box span {
        border-radius: 25px;
        display: inline-block;
        font-weight: 800;
        height: auto;
        line-height: 1.6;
        width: auto;
        background-color: #fff;
        font-size: 18px;
        padding: 2px 14px;
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

    .box{
        position: relative;
        /* padding: 0 50px 30px 50px; */
        /* width: 400px;
        height: 480px; */
        width: 100%;;
        /* display: flex; */
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 6px;
        box-shadow: 0 5px 25px rgba(0,0,0,0.2);
    }
    .box::after{
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 5px;
        pointer-events: none;
        background: transparent;
    }
    .box .form{
        position: relative;
        width: 100%;
    }
    .box .form .inputBx{
        position: relative;
        width: 100%;
        margin-bottom: 20px;
    }
    .box .form .inputBx input{
        width: 100%;
        outline: none;
        border: 1px solid rgba(17, 95, 143,0.2);
        background: transparent;
        padding: 8px 10px;
        padding-left: 35px;;
        border-radius: 6px;
        font-size: 16px;
        font-weight: 300;
        color: #aba5b6;
        
        /* box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.2); */
    }
    .box .form .inputBx button{
        width: 100%;
        outline: none;
        border: 1px solid rgba(17, 95, 143,0.2);
        background: transparent;
        padding: 8px 10px;
        padding-left: 35px;;
        border-radius: 6px;
        font-size: 16px;
        font-weight: 300;
        color: #aba5b6;
        
        /* box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.2); */
    }
    .box .form .inputBx i{
        position: absolute;
        top: 15px;
        left: 10px;
        /* filter: invert(1); */
        font-size: 16px;
        color: #aba5b6;
    }
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #aba5b6;
        opacity: 1; /* Firefox */
    }

    .remember{
        position: relative;
        display: inline-block;
        font-weight: 300;
        margin-bottom: 10px;
        cursor: pointer;
    }

    .box .form .inputBx button{
        background: border-color;
        color: #fff;
        max-width: 100px;
        padding: 8px 10px;
        box-shadow: none;
        font-weight: 500;
        letter-spacing: 1px;
        cursor: pointer;
        margin-top: 20px;
    }

    .login-logo{
        width: 200px;
        margin-bottom: 40px;
    }

    @media (max-width: 425px){
        .box[data-v-5b7d63fc] {
            position: relative;
            padding: 30px 50px;
            width: 100%;
            height: 480px;
            display: flex;
            justify-content: center;
            align-items: center;
            background:transparent;
            border-radius: 6px;
            box-shadow: unset;
        }
        .plan-1, .plan-2, .plan-3, .plan-4{
            width: 100%;
        }
        
    }
    @media (max-width: 900px){
        .plan-4{
            width: 33%;
            margin: 20px;
        }
        
    }

</style>