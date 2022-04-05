<template>
    <div>
        <div class="row">
            <div class="col-12 col-md-6 form-group" style="margin-bottom:15px;">
                <form style="width:100%;">
                    <input type="text" v-model="query" class="form-control" id="query" placeholder="Search..." style="width:100%;">
                </form>
            </div>
             <div class="col-12 col-md-6 input-group" style="margin-bottom:15px;">
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
        </div>
        <div class="table-responsive">
            <table id="recent-customers" class="table table-hover mb-0" style="color:#fff;">
                <thead>
                    <tr>
                        <th class="text-center">Method</th>
                        <th class="text-center">Amount</th>
                        <th class="text-center">Currency</th>
                        <th class="text-center">Type</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">Trans. Id</th>
                        <th class="text-center">Date</th>
                    </tr>
                </thead>
                <tbody v-if="transactions.length">
                    <tr v-for="(payment, index) in transactions" :key="index">
                        <td class="text-truncate"> {{payment.payment_method_type | capitalize}}</td>
                        <td class="text-truncate">${{parseFloat(payment.amount).toFixed(2)}}</td>
                        <td class="text-truncate"> {{payment.currency.toUpperCase()}}</td>
                        <td class="text-truncate">
                            <span v-if="payment.payable_type">
                                {{payment.payable_type}}
                            </span>
                            <span v-else>
                                N/A
                            </span>
                        </td>
                        <td class="text-center">
                            <span :class="{'badge badge-primary' : payment.status == 'approved',
                            'badge badge-danger' : payment.status == 'declined' || payment.status == 'error'}">{{payment.status}}
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
                            {{moment(payment.created_at).format('LLL')}}
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <th colspan="6" class="text-center">No data</th>
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
        
    </div>
</template>

<script>
    import Paginator from '../../../../../components/PaginationViewComponent'
    import PaginationMixin from "../../../../../misc/pagination";
    import PaymentServices from '../services/PaymentServices'
    export default {
        mixins:[PaymentServices,PaginationMixin],
        components:{
            'pagination': Paginator
        },
        data() {
            return {
                transactions: [],
                moment:moment,
                id:0,
                error:{
                    amount:false
                },
                error_message:{
                    amount:false
                },
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
            searchTransactions(params){
                $.LoadingOverlay("show");
                params['orderby'] = {
                    created_at: 'DESC'
                };
                params['fields'] = ['id','payment_method_id','payment_method_type','amount','refund_amount','operation','status','currency','fee','transaction_id','created_at','payable_type','payable_id']
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

                if(where.sql != ''){
                    params['where_raw'] = where;
                }

                params['where'] = [
                    ['owner_type', 'user'],
                ];

                this.getTransactionsAsOwnerCall(params, this.getTransactionsCallBack);
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