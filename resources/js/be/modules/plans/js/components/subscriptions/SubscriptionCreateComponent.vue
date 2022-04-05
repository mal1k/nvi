<template>
    <div class="card" style="min-height: 75vh;">
        <div v-if="!hideTitle" class="card-header">
            <div class="float-left">
                <h4 v-if="subscription.id == 0" class="card-title">Add Subscription</h4>
                <h4 v-else class="card-title">Subscription Details</h4>
            </div>
        </div>
        <div class="card-content">
            <div class="card-body">
                <form class="form" autocomplete="off" @submit.prevent="saveUpdateSubscription" method="post" novalidate>
                    <div class="form-body">
                        <div v-show="!hideUser" class="form-group row">
                            <label class="col-md-12 label-control" for="projectinput1" style="text-align:left!important;"><b>Search user</b></label>
                            <div class="col-md-12">
                                <div class="input-group" v-bind:class="{'input-error-select' : error.user}">
                                    <select id="select2-user" required class="select2-placeholder form-control" data-placeholder="Select user..." style="width: 100%">
                                    </select>
                                </div>
                                <span v-if="error.user" class="message-error">{{error_message.user}}</span>
                            </div>
                        </div>
                        <div v-show="choosePlan" class="form-group row">
                            <div class="col-md-8">
                                 <label class="label-control" for="projectinput1" style="text-align:left!important;"><b>Select plan</b></label>
                                <div class="input-group">
                                    <select id="select2-plans" class="select2-placeholder form-control" style="width: 100%">
                                        <option value="0">None</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-8 label-control" style="text-align:left!important;">
                                <label for="projectinput1" > 
                                    <b>Title: {{current_plan.title}}<br>
                                        <span v-if="current_plan['min_price'] >= 0 && choosePlan">Price: $ <strong>{{current_plan['min_price']}}</strong> <small>/{{interval[current_plan.interval]}}</small></span><br>
                                    </b></label>
                                <label>
                                    <span v-if="current_plan.discount_type && current_plan.discount_type != 'none'"> 
                                    <strong>Discount - </strong> 
                                    <span v-if="current_plan.discount_type == 'percentage'"> <strong>:</strong> {{current_plan.discount_value}}% off</span>
                                    <span v-if="current_plan.discount_type == 'fixed_amount'"> <strong>:</strong> ${{current_plan.discount_value}} off</span>
                                    </span>
                                </label>
                            </div>
                            <!-- <div v-show="choosePlan" class="col-md-4 text-right" style="align">
                                <button @click="customPlan()" class="btn btn-primary" type="button">
                                    Customize plan
                                </button>
                            </div>
                            <div v-show="!choosePlan" class="col-md-4 text-right" style="align">
                                <button @click="selectPlan()" class="btn btn-primary" type="button">
                                    Select plan
                                </button>
                            </div> -->
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-12 col-md-4">
                                <label class="label-control" for="projectinput1" style="text-align:left!important;"><b>Next billing date</b></label>
                                <input type='text' v-model="subscription.next_billing_date" id="next_billing_date" class="form-control" style="border-color: #D9D9D9!important;" />
                            </div>
                            <div class="col-sm-12 col-md-4">
                                <label class="label-control" for="projectinput1" style="text-align:left!important;"><b>Next payment date</b></label>
                                <input type='text' v-model="subscription.next_payment_date" id="next_payment_date" class="form-control" placeholder="Select a date" style="border-color: #D9D9D9!important;" disabled/>
                            </div>
                            <div class="col-sm-12 col-md-4">
                                <label class="label-control" for="projectinput1" style="text-align:left!important;"><b>Days to Pay</b></label>
                                <input type='text' v-model="subscription.days_to_pay" class="form-control" style="border-color: #D9D9D9!important;"/>
                            </div>
                            
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-12 col-md-4">
                                <label class="label-control" for="projectinput1" style="text-align:left!important;"><b>Grace Days</b></label>
                                <input type='text' v-model="subscription.grace_days" class="form-control" style="border-color: #D9D9D9!important;"/>
                            </div>
                            <div class="col-sm-12 col-md-4">
                                <label class="label-control" for="projectinput1" style="text-align:left!important;"><b>Expiration date</b></label>
                                <input type='text' v-model="subscription.expires_at" class="form-control" style="border-color: #D9D9D9!important;" disabled/>
                            </div>
                            <div class="col-sm-12 col-md-4">
                                <label class="label-control"><b>Status</b></label>
                                <div>
                                    <div class="input-group">
                                        <select id="subs-status" v-model="subscription.status" class="select2 form-control" style="width: 100%;border-color: #D9D9D9!important;">
                                            <option value="trial">Trial</option>
                                            <option value="active">Active</option>
                                            <option value="expired">Expired</option>
                                            <option value="locked">Locked</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-12 col-md-3">
                                <label class="label-control"><b>Payment Amount</b></label>
                                <div class="input-group">
                                    <input type="text" v-model="subscription.price" class="form-control" style="border-color: #D9D9D9!important;" :disabled="no_custom_plan">
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-3">
                                <fieldset>
                                    <label class="label-custom" for="interval_count"><b>Interval</b></label>
                                    <div class="input-group">
                                        <input type="text" class="form-control text-right" name="interval_count" v-model="current_plan.interval_count"  v-bind:class="{'input-error-select' : error.interval_count}" style="border-color: #D9D9D9!important;" :disabled="no_custom_plan">
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-primary text-capitalize dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" :disabled="no_custom_plan">
                                                {{current_plan.interval}}
                                            </button>
                                            <div class="dropdown-menu">
                                                <a v-for="(interval, index) in intervals" :key="index" class="dropdown-item text-capitalize" @click="current_plan.interval = interval">{{interval}}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <span v-if="error.interval_count" class="message-error">{{error_message.interval_count}}</span>
                                </fieldset>
                            </div>
                            <div class="col-sm-12 col-md-3">
                                <label class="label-control" style="text-align:left!important;"><b>Total Payments</b></label>
                                <input type='text' v-model="subscription.total_payments" class="form-control" style="border-color: #D9D9D9!important;"/>
                            </div>
                            <div class="col-sm-12 col-md-3">
                                <label class="label-control" for="projectinput1" style="text-align:left!important;"><b>Payments Made</b></label>
                                <input type='text' v-model="subscription.payments_made" class="form-control" style="border-color: #D9D9D9!important;" disabled/>
                            </div>
                        </div>
                        
                    </div>
                    <div class="form-actions text-right mt-3">
                        <button v-if="!hideUser" @click="$router.push({ name: 'subscriptions_list'})" type="reset"
                            class="btn btn-warning mr-1">
                            <i class="feather icon-x"></i> Cancel
                        </button>
                        <button type="submit" class="btn btn-primary" :disabled="current_plan.id == 0">
                            <i
                                v-bind:class="{'fa fa-circle-o-notch fa-spin fa-fw' : loading, 'fa fa-check-square-o': !loading}"></i>
                            {{subscription.id > 0 ? 'Update' : 'Save'}}
                        </button>
                        <button v-if="subscription.id > 0" @click="remove()" type="button" class="btn btn-danger ml-1">
                            <i class="fa fa-remove"></i>
                            Remove
                        </button>
                    
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import PlanServices from '../../services/PlanServices.js';
    import SubscriptionServices from '../../services/SubscriptionServices.js';
    export default {
        mixins: [PlanServices,SubscriptionServices],
        props:['hideTitle','hideUser','subscription_id','_user','user_id'],
        data() {
            return {
                Helpers: Helpers,
                loading: false,
                moment:moment,
                current_plan:{
                    id: '',
                    title: '',
                    description: '',
                    min_price: 0.00,
                    unit_price: 0.00,
                    interval_count: '1',
                    interval: 'month',
                    status: 'public',
                    discount_type:'none',
                    discount_value:''
                },
                price:0.00,
                interval:{
                    'year':'yr',
                    'month':'mo',
                },
                intervals:['day','month', 'year'],
                discount_type:{
                    'percentage': 'Percentage',
                    'fixed_amount': 'Fixed amount',
                    'free_shipping': 'Free shipping'
                },
               error: {
                    user: false,
                    price: false,
                    interval_count: false,
                },
                error_message: {
                    user: '',
                    price:'',
                    interval_count:''
                },
                subscription:{
                    id:'',
                    status: 'active',
                    next_plan_id:'',
                    next_payment_date: moment().add(1,'days').format('MM/DD/YYYY hh:mm A'),
                    next_billing_date: moment().add(1,'days').format('MM/DD/YYYY hh:mm A'),
                    payment_profile_id:0,
                    days_to_pay: (this.settings && this.settings.days_to_pay) ? this.settings.days_to_pay : 1,
                    grace_days: 0,
                    expires_at:'',
                    total_payments:0,
                    notes:'',
                    free_records: 0
                },
                old_subscription:{
                    id:'',
                    status: 'active',
                    next_plan_id:'',
                    next_payment_date: moment().add(1,'days').format('MM/DD/YYYY hh:mm A'),
                    next_billing_date: moment().add(1,'days').format('MM/DD/YYYY hh:mm A'),
                    payment_profile_id:0,
                    days_to_pay: (this.settings && this.settings.days_to_pay) ? this.settings.days_to_pay : 1,
                    grace_days: 0,
                    expires_at:'',
                    total_payments:0,
                    notes:'',
                    free_records: 0
                },
                user: {
                    id: '',
                    firstname: '',
                    lastname: ''
                },
                no_custom_plan: true,
                choosePlan: true,
                automatic_payments:false,
                automatic_payments_history: false,
                new_profile : false,

            }
        },
        watch:{
            'current_plan.title'(val) {
                if (val != '') {
                    this.error.title = false;
                    this.error_message.title = '';
                }
            },
            'subscription.days_to_pay'(val){
                // this.subscription.next_billing_date = moment(this.subscription.next_payment_date).add(val,'days').format('MM/DD/YYYY hh:mm A')
                this.subscription.expires_at = moment(this.subscription.next_payment_date).add(val*1+this.subscription.grace_days*1,'days').format('MM/DD/YYYY hh:mm A')
            },
            'subscription.grace_days'(val){
                this.subscription.expires_at = moment(this.subscription.next_payment_date).add(val*1+this.subscription.days_to_pay*1,'days').format('MM/DD/YYYY hh:mm A')
            },
        },
        methods: {
            customPlan(){
                this.no_custom_plan = false;
                this.choosePlan = false;
                this.current_plan.title = 'Custom';
                this.current_plan.id = 0;
            },
            selectPlan(){
                this.choosePlan = true;
                this.no_custom_plan = true;
                let data = {
                    name: 'None',
                    id: 0
                };
                var option = new Option(data.name, data.id, true, true);
                $("#select2-plans").append(option).trigger('change');
                $("#select2-plans").trigger({
                    type: 'select2:select',
                    params: {
                        data: data
                    }
                });
            },
            paymentIdHandle(value){
                this.subscription.payment_profile_id = value;
            },
            saveUpdateSubscription() {
                if (this.user.id > 0) {
                    $.LoadingOverlay("show");
                    var params = {};
                    this.subscription.owner_id = this.user.id;
                    this.subscription.owner_type = 'user';
                    this.subscription.interval_count = this.current_plan.interval_count;
                    this.subscription.interval = this.current_plan.interval;
                    this.subscription.current_plan_id = this.current_plan.id;
                    this.subscription.next_payment_date = moment(this.subscription.next_payment_date, 'MM/DD/YYYY hh:mm A').format('YYYY-MM-DD HH:mm:ss');
                    this.subscription.next_billing_date = moment(this.subscription.next_billing_date, 'MM/DD/YYYY hh:mm A').format('YYYY-MM-DD HH:mm:ss');
                    this.subscription.current_plan_id = this.current_plan.id;
                    
                    if(this.subscription.id > 0){
                        for(var i in this.subscription){
                            if(this.subscription[i] != this.old_subscription[i]){
                                params[i] = this.subscription[i];
                            }
                        }
                        params['id'] = this.subscription.id;
                        this.updateSubscriptionCall(params, this.saveUpdateSubscriptionCallback);
                    }else{
                         this.createSubscriptionCall(this.subscription, this.saveUpdateSubscriptionCallback);
                    }
                } else {
                    if (this.user.id == 0) {
                        this.error.user = true;
                        this.error_message.user = 'User is required';
                    }
                }
            },
            saveUpdateSubscriptionCallback(response) {
                if(response.status > 0){
                    for(var i in this.error){
                        this.error[i] = false;
                    }
                    this.subscription.id = response.data.id;
                    this.subscription.next_payment_date = moment(this.subscription.next_payment_date, 'YYYY-MM-DD HH:mm:ss').format('MM/DD/YYYY hh:mm A');
                    this.subscription.next_billing_date = moment(this.subscription.next_billing_date, 'YYYY-MM-DD HH:mm:ss').format('MM/DD/YYYY hh:mm A');
                    toastr.success(response.message, 'Create/Update Subscription', { "showMethod": "slideDown", "hideMethod": "slideUp", timeOut: 3000 });

                    this.old_subscription = Object.assign({}, this.old_subscription, response.data);
                    this.old_subscription.expires_at = moment(this.old_subscription.next_payment_date).add(this.old_subscription.days_to_pay*1+this.old_subscription.grace_days*1,'days').format('MM/DD/YYYY hh:mm A')
                
                }else{
                    if(Helpers.isAssoc(response.errors) > 0){
                        for(let field in response.errors){
                            this.error_message[field] = response.errors[field][0];
                            this.error[field] = true;
                        }
                        swal("Error!", 'Required fields missing', "error");
                    }else{
                        swal('Error', response.errors[0], 'error');
                    }
                }
                $.LoadingOverlay("hide");
            },
            cancelPlan() {
                window.location.href = "/admin/store/plans"
            },
            remove() {
                var self = this;
                 swal({
                    title: "Are you sure?",
                    text: "You are going to remove the subscription",
                    type: "warning",
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
                        if (self.subscription.id > 0) {
                            $.LoadingOverlay('show');
                            self.removeSubscriptionCall(self.subscription.id, self.removeSubscriptionCallback);
                        }
                    }
                });
            },
            removeSubscriptionCallback(response) {
                $.LoadingOverlay("hide");
                if (response.status > 0) {
                    if(!this.hideUser){
                        this.$router.push({ name: 'subscriptions_list' });
                    }else{
                        this.$emit('removeSubscription', true);
                    }
                } else {
                    Helpers.displayError(response, 'toastr');
                }
            },
            getSubscriptionCallback(response) {
                var _this = this;
                if (response.status > 0) {
                    this.subscription = Object.assign({}, this.subscription, response.data);
                    this.subscription.next_payment_date = (response.data.next_payment_date) ? moment(response.data.next_payment_date, 'YYYY-MM-DD HH:mm:ss').format('MM/DD/YYYY hh:mm A') :  moment().add(1,'days').format('MM/DD/YYYY hh:mm A');
                    this.subscription.next_billing_date = (response.data.next_billing_date) ? moment(response.data.next_billing_date, 'YYYY-MM-DD HH:mm:ss').format('MM/DD/YYYY hh:mm A') :  moment().add(1,'days').format('MM/DD/YYYY hh:mm A');
                    this.current_plan.id = response.data.current_plan_id;
                    this.current_plan.interval_count = (response.data.interval_count) ? response.data.interval_count : 1;
                    this.current_plan.interval = (response.data.interval) ? response.data.interval : 'month';

                    this.subscription.expires_at = moment(this.subscription.next_payment_date).add(this.subscription.days_to_pay*1+this.subscription.grace_days*1,'days').format('MM/DD/YYYY hh:mm A')

                if(response.data.user){
                    this.user = response.data.user;
                    this.user.id = response.data.user.id;
                    this.user.firstname = response.data.user.firstname;
                    this.user.lastname = response.data.user.lastname;
                    this.user.avatar = response.data.user.avatar ? '/storage/' + response.data.user.avatar : '';

                    let wdata = {
                        name: "<span style='margin:0'>"+ ((_this.user.logo) ? "<img src='"+_this.user.logo+"' style='width:30px;height:30px;border-radius:50%;margin-right:10px;'>" : "") + "<strong>" + _this.user.firstname + ' ' + _this.user.lastname + "</strong></span>",
                        id: _this.user.id
                    };
                    var woption = new Option(wdata.name, wdata.id, true, true);
                    $("#select2-user").append(woption).trigger('change');
                    $("#select2-user").trigger({
                        type: 'select2:select',
                            params: {
                                data: wdata
                            }
                        });
                }
                 
                if(this.current_plan.id == 0){
                    this.no_custom_plan =false;
                    this.choosePlan = false;
                    this.current_plan.title = 'Custom';
                }else{
                    this.no_custom_plan =true;
                    this.choosePlan = true;

                    this.current_plan.title = response.data.plan.title;
                    this.current_plan.discount_type = response.data.plan.discount_type;
                    this.current_plan.discount_value = response.data.plan.discount_value;
                    this.current_plan.min_price = (response.data.plan.min_price) ? parseFloat(response.data.plan.min_price).toFixed(2) : 0.00;
                    this.current_plan.unit_price = (response.data.plan.unit_price) ? parseFloat(response.data.plan.unit_price).toFixed(2) : 0.00;

                    let data = {
                        name: response.data.plan.title,
                        id: response.data.plan.id
                    };
                    var option = new Option(data.name, data.id, true, true);
                    $("#select2-plans").append(option).trigger('change');
                    $("#select2-plans").trigger({
                        type: 'select2:select',
                        params: {
                            data: data
                        }
                    });
                  
                }

                this.old_subscription = Object.assign({}, this.old_subscription, response.data);
                this.old_subscription.expires_at = moment(this.old_subscription.next_payment_date).add(this.old_subscription.days_to_pay*1+this.old_subscription.grace_days*1,'days').format('MM/DD/YYYY hh:mm A')
                
                setTimeout(function(){
                    $.LoadingOverlay("hide");
                }, 100);
                } else {
                    Helpers.displayError(response, 'toastr');
                    $.LoadingOverlay("hide");
                }
            },
            appendData(response){
                var data = response.data;
                data.unshift({id: 0, title: 'None'});
                return data;
            },
            initUser(){
                var self = this;
                $("#select2-user").select2({
                    placeholder: 'Select user...',
                    ajax: {
                        url: '/api/admin/users/search',
                        dataType: 'json',
                        delay: 250,
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        type: 'POST',
                        data: function (params) {
                            params.term = (typeof params.term == 'undefined') ? '' : params.term;
                            return {
                                query: params.term + '*', // search term
                                fields: ['id', 'firstname', 'lastname', 'avatar'],
                                page: params.page,
                                where:[
                                    ['status', 'active'],
                                ],
                                limit: 5
                            };
                        },
                        processResults: function (response, params) {
                            params.page = params.page || 1;
                            return {
                                results: response.data,
                                pagination: {
                                    more: (params.page) < response.pagination.total_pages
                                }
                            };
                        },
                        cache: true
                    },
                    escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
                    templateResult: function (repo) {
                        if (repo.loading) return repo.text;
                        // var markup = "<div class='select2-result-repository clearfix'><span style='margin:0'>"+ ((repo.avatar) ? "<img src='/storage/"+repo.avatar+"' style='width:40px;height:40px;border-radius:50%;margin-right:10px;'>" : "") + "<strong>" + repo.firstname + ' '+ repo.lastname + "</strong></span></div>";
                        var markup = "<div class='select2-result-repository clearfix'><span style='margin:0'>" + "<strong>" + repo.firstname + ' '+ repo.lastname + "</strong></span></div>";
                        return markup;
                    }, // omitted for brevity, see the source of this page
                    templateSelection: function (repo) {
                        if (repo.firstname) {
                            self.user.id = repo.id;
                            self.user.firstname = repo.firstname;
                            self.user.lastname = repo.lastname;
                            
                            // return "<span style='margin:0'>"+ ((repo.avatar) ? "<img src='/storage/"+repo.avatar+"' style='width:30px;height:30px;border-radius:50%;margin-right:10px;'>" : "") + "<strong>" + repo.firstname + ' '+ repo.lastname + "</strong></span>";
                            return "<span style='margin:0'>"+ "<strong>" + repo.firstname + ' '+ repo.lastname + "</strong></span>";
                        } else {
                            return repo.text;
                        }
                    } 
                });
            },
            initPlan(){
                var self = this;
                $("#select2-plans").select2({
                    ajax: {
                        url: '/api/plans/search',
                        dataType: 'json',
                        delay: 250,
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        type: 'POST',
                        data: function (params) {
                            params.term = (typeof params.term == 'undefined') ? '' : params.term;
                            return {
                                query: params.term + '*', // search term
                                fields: ['id', 'title', 'min_price','interval_count','interval','status','discount_type','discount_value','unit_price','free_records'],
                                page: params.page,
                                limit: 5
                            };
                        },
                        processResults: function (response, params) {
                            params.page = params.page || 1;
                            return {
                                results: self.appendData(response),
                                pagination: {
                                    more: (params.page) < response.pagination.total_pages
                                }
                            };
                        },
                        cache: true
                    },
                    escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
                    templateResult: function (repo) {
                        if (repo.loading) return repo.text;
                        var markup = "<div class='select2-result-repository clearfix'>" + repo.title + "</div>";
                        return markup;
                    }, // omitted for brevity, see the source of this page
                    templateSelection: function (repo) {
                            if(repo.id && repo.id > 0){
                                self.current_plan.id = repo.id;
                                self.current_plan.title = repo.title;
                                self.current_plan.min_price = repo.min_price;
                                self.current_plan.unit_price = repo.unit_price;
                                self.current_plan.interval_count = repo.interval_count;
                                self.current_plan.interval = repo.interval;
                                self.current_plan.status = repo.status;
                                self.current_plan.discount_type = repo.discount_type;
                                self.current_plan.discount_value = repo.discount_value;
                                self.no_custom_plan = true;
                                self.subscription.free_records = repo.free_records;

                                self.subscription.price = self.current_plan.min_price;

                               
                            }else{
                                self.current_plan.id =0;
                                self.no_custom_plan = false;
                            }
                        if (repo.title) {
                            return repo.title;
                        }else {
                            return repo.text;
                        }
                    } // omitted for brevity, see the source of this page
                });
            }
        },
        created() {
            if(this.subscription_id && this.subscription_id >0){
                this.getSubscriptionCall(this.subscription_id, this.getSubscriptionCallback);
            }else if (this.$route.params.id > 0) {
                $.LoadingOverlay("show");
                this.getSubscriptionCall(this.$route.params.id, this.getSubscriptionCallback);
            }else{
                this.subscription.expires_at = moment(this.subscription.next_payment_date).add(this.subscription.days_to_pay*1+this.subscription.grace_days*1,'days').format('MM/DD/YYYY hh:mm A')
            }

            if(this._user && this.user_id){
                this.user.id = this.user_id;
                this.user.firstname = this._user.firstname;
                this.user.lastname = this._user.lastname;
            }
        },
        mounted() {
            Helpers.unBlockPage();
            this.initUser();
            this.initPlan();
        }
    }
</script>

<style scoped>
    .message-error {
        float: right;
        color: red;
        font-size: 12px;
        padding-top: 5px;
        padding-top: 5px;
        padding-bottom: 10px;
    }

    .avatar-wrapper {
        position: relative;
        height: 150px;
        width: 150px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 1px 1px 15px -5px black;
        transition: all .3s ease;
    }

    .avatar-wrapper:hover {
        transform: scale(1.05);
        cursor: pointer;
    }

    .avatar-wrapper:hover .profile-pic-logo {
        opacity: .5;
    }

    .avatar-wrapper .profile-pic-logo {
        height: 100%;
        width: 100%;
        transition: all .3s ease;
    }

    .avatar-wrapper .profile-pic-logo:after {
        font-family: FontAwesome;
        content: "\f03e";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        font-size: 105px;
        background: #ecf0f1;
        color: #34495e;
        text-align: center;
    }

    .avatar-wrapper .upload-button-user {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    .avatar-wrapper .upload-button-user .fa-arrow-circle-up {
        position: absolute;
        font-size: 179px;
        top: -15px;
        left: 2;
        text-align: center;
        opacity: 0;
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
        color: #34495e;
    }

    .avatar-wrapper .upload-button-user:hover .fa-arrow-circle-up {
        opacity: .9;
    }

    .sign-in-tld {
        margin-left: -15px;
        font-size: 1.5rem;
        line-height: 1.5;
    }
</style>