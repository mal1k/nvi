<template>
<div class="mt-4">
    <form v-if="subscription.id" class="form">
        <h5 class="form-section" style="margin-top:20px;color:#fff;border-bottom:1px solid #fff;"><i class="fa fa-clipboard"></i>Subscription</h5>
        <div class="form-body">
            <div class="row">
                <div class="col-md-5">
                    <ul style="list-style: none; font-size: 12px; padding-left: 0px">
                        <li>
                            <label>
                                <b>Selected plan:</b>
                                <span>
                                    {{subscription.plan.title}}
                                </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <b>Type:</b> <span>{{subscription.interval}}ly</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <b><span v-if="subscription.interval == 'month'">Monthly</span>
                                    <span v-else-if="subscription.interval == 'year'">Yearly</span> fee:</b> ${{parseFloat(subscription.price).toFixed(2)}}
                            </label>
                        </li>
                        <li v-if="subscription.plan">
                            <label>
                                <b>Fee by record:</b> ${{parseFloat(subscription.plan.unit_price).toFixed(2)}}
                            </label>
                        </li>
                        <li>
                            <label>
                                <b>Free Records:</b> {{subscription.free_records}}
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4 offset-md-1">
                    <ul style="list-style: none; font-size: 12px; padding-left: 0px">
                        <li v-if="subscription.price > 0">
                            <label>
                                <b>Last payment at:</b>
                                <span v-if=" subscription.last_payment_date">
                                    {{moment(subscription.last_payment_date).format('LL')}}</span>
                                <span v-else>Unknown date</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <b>Next payment date:</b>
                                <span
                                    v-if="subscription.next_billing_date">{{moment(subscription.next_billing_date).format('LL')}}</span>
                                <span v-else>Unknown date</span>
                            </label>
                        </li>
                         <li>
                            <label style="font-size: 12px">
                                <b>Since:</b>
                                <span><b>{{moment(subscription.created_at).format('LLL')}}</b></span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-if="subscription.next_plan_id > 0" class="row">
                <div class="col-md-5">
                    <ul style="list-style: none; font-size: 12px; padding-left: 0px">
                        <li>
                            <label>
                                <b>Next plan:</b>
                                <span>
                                    {{subscription.next_plan.title}}
                                </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <b>Type:</b> <span>{{subscription.next_plan.interval}}ly</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <b>
                                    <span v-if="subscription.next_plan.interval == 'month'">Monthly</span>
                                    <span v-else-if="subscription.next_plan.interval == 'year'">Yearly</span>
                                fee:</b> ${{parseFloat(subscription.next_plan.min_price).toFixed(2)}}
                            </label>
                        </li>
                        <li v-if="subscription.next_plan.unit_price > 0">
                            <label>
                                <b>Fee by record:</b> ${{parseFloat(subscription.next_plan.unit_price).toFixed(2)}}
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="text-right">
                    <button type="button" class="btn btn-primary" @click="openModal()">
                        <i v-bind:class="{'fa fa-circle-o-notch fa-spin fa-fw' : processing, 'fa fa-refresh': !processing}"></i>
                        Change
                    </button>
                </div>
            </div>
        </div>
        
    </form>
    <div class="modal fade text-left" id="change-subscription" tabindex="-1" role="dialog" aria-labelledby="myModalLabel17"  aria-hidden="true">
        <div class="modal-dialog" :class="{'modal-lg' : plans.length <=2, 'modal-xl': plans.length >2}" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Plans</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="col-md-12 text-right" style="margin-bottom:2rem;">
                        <fieldset  v-if="Object.keys(type).length > 1">
                            <div class="text-center">
                                <input type="checkbox" class="switch" data-off-label="Monthly" data-on-label="Annually" id="switch12" data-off-active-cls="btn-primary"/>
                            </div>
                        </fieldset>
                    </div>
                    <div v-if="plans && plans.length > 0" class="text-center" style="width:100%;">
                        <div class="col-md-12 text-center">
                            <div v-for="(plan, index) in plans" :key="index"  style="display:inline-flex;"
                                :class="{'plan-1': plans.length == 1, 'plan-2' : plans.length == 2, 'plan-3' : plans.length == 3, 'plan-4' : plans.length > 3}"
                            >
                                <div class="box" style="min-height:320px;">
                                    <a>
                                        <div :style="{ 'background-color': plan.color_hex, 'height' : '50px', 'border-top-left-radius' : '6px', 'border-top-right-radius' : '6px'}">
                                            <span :style="{'color': plan.color_hex, 'margin-top' : '8px'}">{{plan.title}}</span>
                                        </div>
                                        <div class="form" style="padding: 2rem 0;">
                                            <form>
                                                <p style="font-size:30px;font-weight:700;color:#000;" data-pricing-currency-code="USD">
                                                    $ {{plan.min_price}} /<span style="font-size:20px;">{{interval[plan.interval]}}</span>
                                                </p>
                                                <p v-if="plan.id != subscription.plan.id">
                                                   <button type="button" class="btn btn-primary" :style="{ 'background-color': plan.color_hex+'!important', 'border-color': plan.color_hex+'!important'}" @click="changeSubscription(plan.id)">Select Plan</button>
                                                </p>
                                                <p v-else>
                                                   <button type="button" disabled class="btn btn-primary" :style="{ 'background-color': plan.color_hex+'!important', 'border-color': plan.color_hex+'!important'}">Current Plan</button>
                                                </p>
                                                <p v-for="(include, index) in plan.includes" :key="index" style="color:#000;">
                                                    {{include.title}}
                                                </p>
                                            </form>
                                            
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
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
    import SubscriptionServices from '../../services/SubscriptionServices';
    import PlanServices from '../../services/PlanServices';
    export default {
        props: ['owner_id','owner_type'],
        mixins: [SubscriptionServices,PlanServices],
        data() {
            return {
                subscription : {
                    plan:{
                        title:''
                    }
                },
                processing: false,
                interval:{
                    'year':'yr',
                    'month':'mo',
                },
                moment:moment,
                plans: [],
                filter: {
                    interval: 'month'
                }, 
                type: {}
            }
        },
        methods: {
            convertCent(value){
                value = value *100;
                return value + ' Cents';
            },
            getSubscriptionCallback(response){
                if(response.status > 0){
                    this.subscription = Object.assign({}, response.data);
                }else{
                    swal("Error", response.errors[0], "error");
                }
                $.LoadingOverlay("hide");
            },
            getPlans(){
                $.LoadingOverlay("show");
                 this.getPlansCall({
                    where:[
                        ['status', 'public'],
                        ['interval', this.filter.interval],
                    ],
                    limit: 15, 
                    page: 1
                },this.getPlansCallback);
            },
            openModal(){
               this.getPlans();
            },
            getPlansCallback(response){
                if(response.status > 0){
                    this.plans = response.data;
                    var _this = this;
                    $("#change-subscription").modal('show');
                    // $('.switch:checkbox').checkboxpicker();

                    $('#switch12').on('change', function() {
                        if($('#switch12:checkbox:checked').length > 0){
                            _this.filter.interval = 'year';
                        }else{
                            _this.filter.interval = 'month';
                        }
                        setTimeout(function(){
                            _this.getPlans();
                        },200)
                    });
                }else{
                    toastr.error(response.errors[0], 'Error');
                }
                $.LoadingOverlay("hide");
            },
            changeSubscription(plan_id){
                 $.LoadingOverlay("show");
                var params = {
                    'subscription_id' : this.subscription.id,
                    'plan_id' : plan_id
                };
                this.changeSubscriptionCall(params, this.changeSubscriptionCallback);
            },
            changeSubscriptionCallback(response){
                if(response.status > 0){
                    location.reload();
                }else{
                    toastr.error(response.errors[0], 'Error');
                     $.LoadingOverlay("hide");
                }
            },
            getPlanTypesCallback(response){
                if(response.status > 0){
                    for(var i in response.data){
                        this.type[response.data[i].interval] = true;
                    }
                }
            }
        },
        watch: {
        },
        created() {
            if(this.owner_id && this.owner_type){
                this.getSubscriptionAsOwnerCall(this.owner_id, {owner_type: this.owner_type}, this.getSubscriptionCallback);
            }
            this.getPlanTypesCall(this.getPlanTypesCallback);
        },
        mounted() {
        }

    }
</script>

<style scoped>
    label{
        color:#fff;
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
        width: 25%;
        margin: 20px;
    }
    .plan-4{
        width: 25%;
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

    @media (max-width: 1000px){
        .plan-1, .plan-2{
            width: 50%;
        }
        
    }
    @media (max-width: 995px){
        .plan-3, .plan-4{
            width: 40%;
        }
        
    }

    @media (max-width: 550px){
        .plan-1, .plan-2, .plan-3, .plan-4{
            width: 75%;
        }
    }

    
</style>