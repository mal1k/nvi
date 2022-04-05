<template>
    <div class="card">
        <div v-if="hideTitle" class="card-header">
            <div class="float-left">
                <h4 class="card-title">Transactions List</h4>
            </div>
        </div>
         <div class="card-content">
            <div class="card-body">
                <div class="row">
                    <div class="col-12 col-md-4 form-group" style="margin-bottom:15px;">
                        <form style="width:100%;">
                            <input type="text" v-model="query" class="form-control" id="query" placeholder="Search..." style="width:100%;">
                        </form>
                    </div>
                    <div class="col-12 col-md-5 input-group" style="margin-bottom:15px;">
                        <div class="form-group" style="width:100%;">
                            <div class='input-group'>
                                <input id="date" type='text' class="form-control daterange" placeholder="Date range"/>
                                <div class="input-group-append">
                                    <span class="input-group-text">
                                        <span class="fa fa-calendar"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 form-group" style="margin-bottom:15px;">
                        <select id="select2-status" class="select2-placeholder form-control" style="width:100%" v-model="filters.status">
                            <option value="approved">Approved</option>
                            <option value="pending">Pending</option>
                            <option value="declined">Declined</option>
                            <option value="" selected>All Statuses</option>
                        </select>
                    </div>
                </div>
                <div class="table-responsive">
                    <table id="recent-customers" class="table table-hover mb-0">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Operation</th>
                                <!-- <th class="text-center">Operation</th> -->
                                <th>Amount</th>
                                <th>Refund</th>
                                <th class="text-center">Card</th>
                                <th class="text-center">Status</th>
                                <!-- <th class="text-center">Auth. Code</th> -->
                                <th class="text-center">Trans. Id</th>
                                <th class="text-center">Date</th>
                                <th class="text-center"></th>
                            </tr>
                        </thead>
                        <tbody v-if="transactions.length">
                            <tr v-for="(payment, index) in transactions" :key="index">
                                <td class="text-truncate">
                                    <span v-if="payment.payable && payment.payable.order_type">
                                        {{payment.payable.order_type | capitalize}}
                                    </span>
                                    <span v-else>
                                        N/A
                                    </span>
                                </td>
                                <td class="text-truncate">{{payment.operation}}</td>
                                <td class="text-truncate">${{parseFloat(payment.amount).toFixed(2)}}</td>
                                <td class="text-truncate">${{parseFloat(payment.refund_amount).toFixed(2)}}</td>
                                <td class="text-truncate text-center"> x{{payment.last_4}}</td>
                                <td class="text-center">
                                    <span :class="{'badge badge-primary' : payment.status == 'approved' || payment.status == 'succeeded',
                                    'badge badge-danger' : payment.status == 'error'}">{{payment.status}}
                                    </span>
                                </td>
                                
                                <td class="text-center">
                                    <span v-if="payment.transaction_id">
                                        {{payment.transaction_id}}
                                    </span>
                                    <span v-else style="text-align: center">
                                        ------
                                    </span>
                                </td>
                                <td class="text-center">
                                    {{moment(payment.created_at).format('MMM DD, YYYY')}}
                                </td>
                                <td class="text-right">
                                     <div  class="btn-group mr-1 mb-1">
                                        <button v-if="payment.amount > payment.refund_amount && payment.operation == 'charge'" type="button" class="btn btn-outline-primary dropdown-toggle btn-sm btn-dots" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="padding: 3px 8px 3.5px 1px;"></button>
                                        <div class="dropdown-menu" style="min-width: unset; max-width:unset;float: right;">
                                            <a class="dropdown-item" style="color:red;" v-if="(payment.operation == 'charge' || payment.operation == 'received') && payment.payment_method_type == 'cash' && payment.amount > payment.refund_amount" @click="openModal(payment.transaction_id)">Refund</a>
                                            <a class="dropdown-item" style="color:red;" v-else-if="(payment.operation == 'charge' || payment.operation == 'received') && payment.amount > payment.refund_amount && getHours(payment.created_at) && (payment.last_4)" @click="openModal(payment.transaction_id)">Refund</a>
                                            <a class="dropdown-item" style="color:red;" v-else-if="(payment.operation == 'charge' || payment.operation == 'received') && payment.amount > payment.refund_amount && payment.payment_method_type == 'paypal'" @click="openModal(payment.transaction_id)">Refund</a>
                                            <a class="dropdown-item" style="color:red;" v-else-if="(payment.operation == 'charge' || payment.operation == 'received') && payment.refund_amount == 0 && !getHours(payment.created_at) && (payment.payment_method_type != 'paypal')" @click="voidAmount(payment.transaction_id)">Void</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <th colspan="10" class="text-center">No data</th>
                            </tr>
                        </tbody>
                    </table>
                </div>  
                <div style="margin-top:20px;">
                    <pagination
                        :pagination="pagination"
                        p_classes="justify-content-center"
                        @onFirst="first" 
                        @onLast="last"
                        @onShowPage="showPage"
                    ></pagination>
                </div>
                <div class="modal fade text-left" id="make-refund" tabindex="-1" role="dialog" aria-labelledby="myModalLabel17"
                    aria-hidden="true">
                    <div class="modal-dialog modal-xs" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Make Refund</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Amount (equal or less than ${{(payment_amount*1-refund_amount*1).toFixed(2)}})</label>
                                            <input v-model="amount" type="text" class="form-control">
                                            <span v-if="error.amount" class="message-error">{{error_message.amount}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn grey btn-outline-secondary" data-dismiss="modal">Close</button>
                                <button @click="refundAmount" type="button" class="btn btn-outline-primary" style="">Ok</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Paginator from '../../../../../components/PaginationViewComponent'
    import PaginationMixin from "../../../../../misc/pagination";
    import PaymentServices from '../services/PaymentServices'
    export default {
        props: ['user_id','hideTitle'],
        mixins:[PaymentServices,PaginationMixin],
        components:{
            'pagination': Paginator
        },
        data() {
            return {
                transactions: [],
                moment:moment,
                amount:'',
                id:0,
                manually:0,
                error:{
                    amount:false
                },
                error_message:{
                    amount:false
                },
                payment_amount:0,
                refund_amount:0,
                limit: 15,
                query:'',
                filters:{
                    start_date:'',
                    end_date:'',
                    status: ''
                }
            }
        },
        watch: {
            query: _.debounce(function () {
                this.showPage(1);
            }, 300),
            'filters.status': _.debounce(function () {
                this.showPage(1);
            }, 300),
        },
        methods: {
            openModal(transaction_id){
                this.transaction_id = transaction_id;
                for(var i in this.transactions){
                    if(this.transactions[i].transaction_id == transaction_id){
                        this.payment_amount = this.transactions[i].amount;
                        this.refund_amount = this.transactions[i].refund_amount;
                    }
                }
                setTimeout(function(){
                    $("#make-refund").modal("show");
                },200);
            },
            refundAmount(){
                if(this.amount != '' && this.amount <= (this.payment_amount*1-this.refund_amount*1)){
                    var params = {
                        amount: this.amount,
                        transaction_id: this.transaction_id,
                    };
                     $.LoadingOverlay("show");
                     $("#make-refund").modal("hide");
                    this.refundAmountCall(params, this.refundAmountCallback);
                }else{
                    this.error.amount = true;
                    if(this.amount == ''){
                        this.error_message.amount = 'Amount is required';
                    }else{
                        this.error_message.amount = 'Amount must be equal or less than  $'+(this.payment_amount*1-this.refund_amount*1);
                    }
                }
            },
            refundAmountCallback(response){
                 $.LoadingOverlay("hide");
                if(response.data.status > 0){
                     toastr.success(response.data.message, 'Success', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                     location.reload();
                }else{
                    var text = '';
                    for(var i in response.data.errors){
                        text += response.data.errors[i];
                    }
                    swal('Error!',text, 'error')
                }
            },
            voidAmount(transaction_id){
                swal({
                    title: "Are you sure?",
                    text: "Confirm that you want to make a void.",
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
                        var params = {
                            transaction_id: transaction_id,
                        };
                        $.LoadingOverlay("show");
                        this.voidAmountCall(params, this.voidAmountCallback);
                    }
                });
                
            },
            voidAmountCallback(response){
                 $.LoadingOverlay("hide");
                if(response.data.status > 0){
                    toastr.success(response.data.message, 'Success', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    location.reload();
                }else{
                    var text = '';
                    for(var i in response.data.errors){
                        text += response.data.errors[i];
                    }
                    swal('Error!',text, 'error')
                }
            },
            getHours(startTime){
                var end = moment(new Date());
                var duration = moment.duration(end.diff(startTime));
                var hours = duration.asHours();
                if(hours > 24){
                    return true;
                }
                return false;
            },
            searchTransactions(params){
                $.LoadingOverlay("show");
                params['orderby'] = {
                    created_at: 'DESC'
                };
                params['fields'] = ['id','payment_method_id','payment_method_type','amount','refund_amount','operation','status','currency','fee','transaction_id','created_at','payable_type','provider','last_4','payable_id']
                params['with'] = ['payable'];

                if(this.query != ''){
                    params['query'] = '+*' + this.query.trim().replace(" ", "* +*") + '*';
                }

                if(this.filters.status != ''){
                    params['where'] = [
                        ['status', this.filters.status]
                    ];
                }

                 var where = {
                    sql: '',
                    params: []
                };

                if(this.filters.start_date != ''){
                    if(where.sql != ''){
                        where.sql += ' AND created_at >= ?';
                    }else{
                        where.sql += ' created_at >= ?';
                    }
                    where.params.push(moment(this.filters.start_date).format('YYYY-MM-DD'));
                }
                if(this.filters.end_date != ''){
                    if(where.sql != ''){
                        where.sql += ' AND created_at <= ?';
                    }else{
                        where.sql += ' created_at <= ?';
                    }
                    where.params.push(moment(this.filters.end_date).add(1, 'day').format('YYYY-MM-DD'));
                }

                if(this.filters.status != ''){
                    if(where.sql != ''){
                        where.sql += ' AND status = ?';
                    }else{
                        where.sql += ' status = ?';
                    }
                    where.params.push(this.filters.status);
                }

                if(where.sql != ''){
                    params['where_raw'] = where;
                }

                if(this.user_id){
                    params['where'] = [
                        ['owner_type', 'user'],
                        ['owner_id', this.user_id],
                    ]
                    this.getTransactionsCall(params, this.getTransactionsCallBack);
                }else{
                    this.getTransactionsAsOwnerCall(params, this.getTransactionsCallBack);
                }
            },
            getTransactionsCallBack(response){
                 if (response.status > 0) {
                    this.transactions = response.data;
                    this.calcPages(response.pagination);
                } else {
                    swal("Error", response.errors[0], "error");
                }
                $.LoadingOverlay("hide");
            }
        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        created() {
            this.paginationInit(this.limit, this.searchTransactions);
        },
        mounted() {
            var self = this;
            this.$nextTick(function(){

                $(".nav-item").removeClass("active");
                $('#transactions').addClass('active');

                $('.skin-square input').iCheck({
                    checkboxClass: 'icheckbox_square-green',
                    radioClass: 'iradio_square-green',
                });

                $('#manually').on('ifChecked', function (event) {
                    self.manually = 1;
                });

                $('#manually').on('ifUnchecked', function (event) {
                    self.manually = 0;
                });
                $("#make-refund").on("hide.bs.modal", function(){
                    self.id = 0;
                    self.amount = '';
                    self.payment_amount =0;
                    self.refund_amount =0;
                    self.manually = 0;
                    $('#manually').iCheck('uncheck');
                });

                 $( '.daterange' ).daterangepicker({
                    autoUpdateInput: false,
                    startDate: moment().subtract(7, 'd'),
                    endDate: moment(),
                    locale: {
                        cancelLabel: 'Clear'
                    }
                });
                $('.daterange').on('apply.daterangepicker', function(ev, picker) {
                    self.filters.start_date = picker.startDate.format('YYYY-MM-DD');
                    self.filters.end_date = picker.endDate.format('YYYY-MM-DD');
                    $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
                    self.showPage(1);
                });

                $('.daterange').on('cancel.daterangepicker', function(ev, picker) {
                    self.filters.start_date = moment().subtract(15, 'd').format('MM/DD/YYYY');
                    self.filters.end_date = moment().format('MM/DD/YYYY');
                    $(this).val('');
                     self.showPage(1);
                });

                self.showPage(1, false);
            })
        }
    }
</script>

<style scoped>

    .dropdown-toggle::after {
        font-family: unset;
        content: '...'!important;
        border: none!important;
        position: relative;
        top: -4px;
        right: 0;
        padding: 0 6px 0 6px;
        margin: 0 .3em 0 0;
        vertical-align: 0;
        font-size: 16px;
    }
    .card-body {
        min-height: 80vh;
    }

    .input-group-text {
        display: flex;
        align-items: center;
        padding: 0.85rem 1rem;
        font-size: 1rem;
        line-height: 1.25;
        color: #4E5154;
        text-align: center;
        background-color: #F5F7FA;
        border: 1px solid #D9D9D9;
        border-radius: .25rem;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: none;
        cursor: pointer;
    }
</style>