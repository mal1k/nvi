<template>
    <div class="card" style="min-height: 75vh;">
        <div class="card-header">
            <div class="float-left">
                <h4 v-if="current_plan.id === 0" class="card-title">Add Plan</h4>
                <h4 v-else class="card-title">Plan Details</h4>
            </div>
        </div>
        <div class="card-content">
            <div class="card-body">
                <form class="form" autocomplete="off" @submit.prevent="saveUpdatePlan" method="post" novalidate>
                    <div class="form-body">
                        <div v-show="current_plan.id > 0" class="row mb-2">
                            <div class="col-12 col-md-4">
                                <div class="skin skin-square">
                                    <span style="padding: 10px">
                                        <input id="reflect-users" type="checkbox" name="reflect-users">
                                        <label for="reflect-users">
                                            Reflect changes on current users
                                        </label>
                                    </span>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="skin skin-square">
                                    <span style="padding: 10px">
                                        <input id="send-email" type="checkbox" name="send-email">
                                        <label for="send-email">
                                            Notify users the changes.
                                        </label>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <fieldset class="form-group">
                                    <label for="basicInput">
                                        <b>Title</b>
                                    </label>
                                    <input type="text" v-model="current_plan.title" class="form-control" v-bind:class="{'input-error-select' : error.title}">
                                    <span v-if="error.title" class="message-error">{{error_message.title}}</span>
                                </fieldset>
                            </div>
                            <div class="col-md-4">
                                <fieldset class="form-group">
                                    <label for="status">
                                        <b>Status</b>
                                    </label>
                                    <select id="status" class="select2 form-control" style="width: 100%" v-model="current_plan.status" name="status">
                                        <option value="public">Public</option>
                                        <option value="private">Private</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div class="col-md-4">
                                <fieldset>
                                    <label class="label-custom" for="interval_count">
                                        <b>Interval</b>
                                        </label>
                                    <div class="input-group">
                                        <input type="text" class="form-control text-right" name="interval_count" v-model="current_plan.interval_count"  v-bind:class="{'input-error-select' : error.interval_count}">
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-primary text-capitalize dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <fieldset class="form-group">
                                    <label for="basicInput">
                                        <b>Price</b>
                                    </label>
                                    <input type="text" v-model="current_plan.min_price" class="form-control" v-bind:class="{'input-error-select' : error.min_price}">
                                    <span v-if="error.min_price" class="message-error">{{error_message.min_price}}</span>
                                </fieldset>
                            </div>
                            <!-- <div class="col-md-4">
                                <fieldset class="form-group">
                                    <label for="basicInput">
                                        <b>Price Per Record</b>
                                    </label>
                                    <input type="text" v-model="current_plan.unit_price" class="form-control" v-bind:class="{'input-error-select' : error.unit_price}">
                                    <span v-if="error.unit_price" class="message-error">{{error_message.unit_price}}</span>
                                </fieldset>
                            </div> -->
                            <!-- <div class="col-md-4">
                                <fieldset class="form-group">
                                    <label for="basicInput">
                                        <b>Free Records</b>
                                    </label>
                                    <input type="text" v-model="current_plan.free_records" class="form-control">
                                </fieldset>
                            </div> -->
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <fieldset class="form-group">
                                    <label for="basicInput">
                                        <b>Description</b>
                                    </label>
                                    <textarea type="text" v-model="current_plan.description" class="form-control" rows="6"></textarea>
                                </fieldset>
                            </div>
                        </div>
                        <!-- <div class="row">
                            <div class="col-md-6">
                                <fieldset class="form-group">
                                    <label for="basicInput">
                                        <b>Discount type</b>
                                    </label>
                                    <select id="discount_type" v-model="current_plan.discount_type" class="select2 form-control" style="width: 100%">
                                        <option v-for="(type, index) in discount_types" :key="index" :value="type.value">{{type.label}}</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div v-if="current_plan.discount_type != 'none'" class="col-md-6">
                                <fieldset class="form-group">
                                    <label><b>Discount value</b></label>
                                    <div v-if="current_plan.discount_type == 'percentage'" class="input-group">
                                        <input type='number' v-model="current_plan.discount_value" id="discount_value" class="form-control" min="0" max="100" v-bind:class="{'input-error-select' : error.discount_value}"/>
                                        <span class="input-group-addon">%</span>
                                    </div>
                                    <div v-else-if="current_plan.discount_type == 'fixed_amount'" class="input-group">
                                        <span class="input-group-addon">$</span>
                                        <input type='number' v-model="current_plan.discount_value" id="discount_value" class="form-control" min="0" max="100" placeholder="0.00" step="0.01" v-bind:class="{'input-error-select' : error.discount_value}">
                                    </div>
                                    <span v-if="error.discount_value" class="message-error">{{error_message.discount_value}}</span>
                                </fieldset>
                            </div>
                        </div> -->
                        <div class="row">
                            <div class="col-md-12">
                                <fieldset class="form-group">
                                    <label for="basicInput">
                                        <b>Background Color</b>
                                    </label>
                                    <input type='text' id="text-color"/>
                                </fieldset>
                            </div>
                        </div>
                        <h5 class="form-section" style="margin-top:20px;"><i class="fa fa-bookmark"></i>Includes</h5>
                        <div class="row">
                            <div class="col-6 col-md-8 col-lg-5" style="align-self:center;">
                                <div class="form-group">
                                    <div class="input-group">
                                        <input class="form-control" style="width: 100%" v-model="text"/>
                                        <span class="input-group-btn">
                                            <button @click="addInclude()" class="btn btn-primary" type="button">
                                                <i class="ft-plus"></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <ul id="sortable" class="list-group">
                                    <li v-for="(include, key) in current_plan.includes" class="list-group-item" :key="key" style="padding:0;" :data-previndex="include.sort_order">
                                        <div class="row" style="padding:10px;">
                                            <div class="col-md-10" style="align-self:center;">
                                                {{include.title}}
                                            </div>
                                            <div class="col-md-2 text-right" style="align-self:center;">
                                                <div style="padding: 5px; display:inline;">
                                                    <a @click="removeInclude(key)" title="Remove include">
                                                        <i class="fa fa-remove d-none d-sm-inline" style="color:red;font-size:18px;"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="form-actions text-right">
                        <button @click="$router.push({ name: 'plans_list'})" type="reset"
                            class="btn btn-warning mr-1">
                            <i class="feather icon-x"></i> Cancel
                        </button>
                        <button type="submit" class="btn btn-primary">
                            <i
                                v-bind:class="{'fa fa-circle-o-notch fa-spin fa-fw' : loading, 'fa fa-check-square-o': !loading}"></i>
                            {{current_plan.id > 0 ? 'Update' : 'Save'}}
                        </button>
                        <button v-if="current_plan.id > 0" @click="remove()" type="button" class="btn btn-danger ml-1">
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
    export default {
        mixins: [PlanServices],
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
                    discount_value:'',
                    color_hex:'#F06C3B',
                    includes:[],
                    free_records: 0,
                    reflect_users: false,
                    send_email: false
                },
                intervals:['month', 'year'],
                discount_types:[
                    {
                        "label": "None",
                        "value": "none"
                    },
                    {
                        "label": "Percentage",
                        "value": "percentage"
                    },
                    {
                        "label": "Fixed Amount",
                        "value": "fixed_amount"
                    },
                ],
                error: {
                    title: false,
                    min_price: false,
                    unit_price: false,
                    interval_count: false,
                    discount_value: false,
                    requirement_amount: false
                },
                error_message: {
                    title: '',
                    min_price:'',
                    unit_price:'',
                    interval_count:'',
                    discount_value:'',
                    requirement_amount:''
                },
                text:''
            }
        },
        methods: {
            saveUpdatePlan() {
                if (this.current_plan.title != '') {
                    $.LoadingOverlay("show");
                    if(this.current_plan.id > 0){
                         this.updatePlanCall(this.current_plan, this.saveUpdatePlanCallback);
                    }else{
                         this.createPlanCall(this.current_plan, this.saveUpdatePlanCallback);
                    }
                } else {
                    if (this.current_plan.title == '') {
                        this.error.title = true;
                        this.error_message.title = 'Plan title is required';
                    }
                }

            },
            saveUpdatePlanCallback(response) {
                if(response.status > 0){
                    for(var i in this.error){
                        this.error[i] = false;
                    }
                    this.current_plan.id = response.data.id;
                    toastr.success(response.message, 'Create/Update Plan', { "showMethod": "slideDown", "hideMethod": "slideUp", timeOut: 3000 });
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
            remove() {
                var self = this;
                 swal({
                    title: "Are you sure?",
                    // text: "You won't be able to revert this!",
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
                        if (self.current_plan.id > 0) {
                            $.LoadingOverlay('show');
                            self.removePlanCall(self.current_plan.id, self.removePlanCallback);
                        }
                    }
                });
            },
            removePlanCallback(response) {
                $.LoadingOverlay("hide");
                if (response.status > 0) {
                    this.$router.push({ name: 'plans_list' });
                } else {
                    Helpers.displayError(response, 'toastr');
                }
            },
            getPlanCallback(response) {
                if (response.status > 0) {
                    this.current_plan = Object.assign({}, response.data);
                    setTimeout(function(){
                        $.LoadingOverlay("hide");
                    }, 100);
                } else {
                    Helpers.displayError(response, 'toastr');
                    $.LoadingOverlay("hide");
                }
            },
            addInclude(){
                var addData = true;
                for(var i in this.current_plan.includes){
                    if(this.current_plan.includes[i].title.toLowerCase() == this.text.toLowerCase()){
                        addData = false;
                        break;
                    }
                }
                if(addData){
                    var sort_order = this.current_plan.includes.length*1 +1*1;
                    this.current_plan.includes.push({
                        title: this.text,
                        sort_order: sort_order,
                    });
                }
                this.text = ''
            },
            removeInclude(index){
                this.current_plan.includes.splice(index,1);
            },
        },
        watch: {
            'current_plan.title'(val) {
                if (val) {
                    this.error.title = false;
                    this.error_message.title = '';
                }
            }
        },
        created() {
            if (this.$route.params.id > 0) {
                $.LoadingOverlay("show");
                this.getPlanCall(this.$route.params.id, this.getPlanCallback);
            }
        },
        mounted() {
            Helpers.unBlockPage();

            var self = this;

            if(this.$route.params.id > 0){
                this.$nextTick(function(){
                    $('.skin-square input').iCheck({
                        checkboxClass: 'icheckbox_square-red',
                        radioClass: 'iradio_square-red',
                    });

                    $('#reflect-users').on('ifChecked', function (event) {
                        self.current_plan.reflect_users = true;
                    });
    
                    $('#reflect-users').on('ifUnchecked', function (event) {
                        self.current_plan.reflect_users = false;
                    });

                    $('#send-email').on('ifChecked', function (event) {
                        self.current_plan.send_email = true;
                    });
    
                    $('#send-email').on('ifUnchecked', function (event) {
                        self.current_plan.send_email = false;
                    });
                })
            }

            $("#text-color").spectrum({
                color: self.current_plan.color_hex,
                allowEmpty: true,
                showPaletteOnly: true,
                togglePaletteOnly: true,
                togglePaletteMoreText: 'more',
                togglePaletteLessText: 'less',
                palette: [
                    ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
                    ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
                    ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
                    ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
                    ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
                    ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
                    ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
                    ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
                ],
                change: function(color) {
                    self.current_plan.color_hex = color.toHexString(); // #ff0000
                }
            });

            $("#sortable").sortable({
                start: function(e, ui) {
                    $(this).attr('data-previndex', ui.item.index()*1+1*1);
                },
                stop(event, ui){
                    var newIndex = ui.item.index()*1+1*1;
                    var oldIndex = ui.item.attr('data-previndex');
                    if(newIndex < oldIndex){
                        for(var i in self.current_plan.includes){
                            if(self.current_plan.includes[i].sort_order == oldIndex){
                                self.current_plan.includes[i].sort_order = newIndex;
                            }else if(self.current_plan.includes[i].sort_order >= newIndex && self.current_plan.includes[i].sort_order <= oldIndex){
                                self.current_plan.includes[i].sort_order = self.current_plan.includes[i].sort_order*1+1*1;
                            }
                        }
                    }
                    if(newIndex > oldIndex){
                        for(var i in self.current_plan.includes){
                            if(self.current_plan.includes[i].sort_order == oldIndex){
                                self.current_plan.includes[i].sort_order = newIndex;
                            }else if(self.current_plan.includes[i].sort_order <= newIndex && self.current_plan.includes[i].sort_order > oldIndex){
                                self.current_plan.includes[i].sort_order = self.current_plan.includes[i].sort_order*1-1*1;
                            }
                        }
                    }
                    // $(this).removeAttr('data-previndex');
                    self.current_plan.includes.push();
                }  
            });
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