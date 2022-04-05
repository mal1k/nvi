<template>
    <div class="card">
        <div class="card-content">
            <div class="card-body">
                <div class="col-md-12">
                    <h4 style="margin-bottom:10px;"><strong>Withdraws</strong></h4>
                </div>
                <div>
                    <div class="card-content">
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-12 col-md-6 " style="padding-left:21px; padding-right:21px;">
                                        <label>Search</label>
                                        <input type="text" v-model="query" class="form-control" id="query"
                                            placeholder="Type account number...">
                                    </div>
                                    <div class="col-12 col-md-3 " style="padding-left:21px; padding-right:21px;">
                                        <div class="form-group" style="width: 100%;">
                                            <label>Status</label>
                                            <select v-model="status" class="form-control" style="width: 100%">
                                                <option value="all">All</option>
                                                <option value="pending">Pending</option>
                                                <option value="success">Success</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div v-if="withdraws.length > 0" class="table-responsive">
                                <table id="recent-customers"
                                    class="table table-hover mb-0 ps-container ps-theme-default">
                                    <thead>
                                        <tr>
                                            <th>Owner</th>
                                            <th class="text-center">Account number</th>
                                            <th class="text-center">Account Type</th>
                                            <th class="text-center">Amount</th>
                                            <th class="text-center">Status</th>
                                            <th class="text-center"> Created at</th>
                                            <th class="text-center"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(withdraw, index) in withdraws" :key="index">
                                            <td class="separated text-center">
                                                <b>{{withdraw.creator.firstname}} {{withdraw.creator.lastname}}</b></td>
                                            <td class="separated text-center">{{withdraw.account.account_number}}</td>
                                            <td class="separated text-center"><span
                                                    :class="{
                                                        'badge bg-warning bg-darken-2' : withdraw.account.account_type == 'personal',
                                                        'badge badge-secondary' : withdraw.account.account_type == 'business',
                                                        'badge bg-blue bg-darken-2' : withdraw.account.account_type == 'professional',
                                                        'badge bg-red bg-darken-2' : withdraw.account.account_type == 'nvic' || withdraw.account.account_type == 'sf' || withdraw.account.account_type == 'mdf',
                                                    }">
                                                    {{withdraw.account.account_type | format}}</span>
                                            </td>
                                            <td class="separated text-center">
                                                <b>${{parseFloat(withdraw.amount).toFixed(2)}}</b></td>
                                            <td class="separated text-center">
                                                <div :class="{'badge badge-primary' : withdraw.status == 'approved', 'badge badge-danger' : withdraw.status == 'pending',
                                                     'badge badge-secondary' : withdraw.status == 'error'}">
                                                    {{withdraw.status | format}}
                                                </div>
                                            </td>
                                            <td class="separated">
                                                {{moment(withdraw.created_at).format('LL')}}
                                            </td>
                                            <td style="text-align:center;">
                                                <a v-if="withdraw.status == 'pending'" style="margin-top:10px;" @click="completeWithdraw(withdraw.id)"
                                                    class="btn mr-1 mb-1 btn-outline-danger btn-sm">approve
                                                </a>
                                            </td>

                                            <!-- <td v-show='account.name=="NVIC"' style="text-align:center;"><button class="btn" @click="addFunds()" ><i class="fa fa-plus"></i></button></td> -->
                                        </tr>
                                    </tbody>
                                </table>
                                <withdraw-paginator v-if="paginator.last_page > 1" :pagination="paginator"
                                    @paginate="searchWithdraw()" :offset="offset"></withdraw-paginator>
                            </div>
                            <div v-else class="text-center">
                                <div style="padding: 20px">
                                    <h4>{{no_found_msg}}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import WithdrawServices from '../services/WithdrawServices.js';
    import Paginator from '../../../../../components/Paginator.vue';
    import broadcast from '../../broadcast.js';
    export default {
        mixins: [WithdrawServices, broadcast],
        components: {
            'withdraw-paginator': Paginator
        },
        props: ['roles'],
        data() {
            return {
                withdraws: [],
                no_found_msg: 'No withdraws found',
                query: '',
                paginator: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                offset: 5,
                moment: moment,
                account_type: '',
                status: '',
                limit: 10
            }
        },
        watch: {
            query: _.debounce(function () {
                this.searchWithdraws(1);
            }, 300),
            account_type(val) {
                this.searchWithdraws(1);
            },
            status(val) {
                this.searchWithdraws(1);
            }
        },
        methods: {
            searchWithdrawsCallback(code, response, errors) {
                if (code == '200') {
                    if (response.data.length > 0) {
                        this.paginator = response.pagination;
                    } else {
                        this.paginator = {
                            total: 0,
                            per_page: 2,
                            from: 1,
                            to: 0,
                            current_page: 1
                        };
                    }
                    this.withdraws = response.data;
                } else {
                    swal("Error!", errors[0], "error");
                }
                $.LoadingOverlay("hide");
            },
            searchWithdraws(page) {
                $.LoadingOverlay("show");
                var params = {
                    page: (typeof page == 'undefined') ? this.paginator.current_page : page,
                    limit: this.limit,
                    fields: ['id', 'amount', 'account', 'status', 'creator', 'created_at'],
                    with: {
                        'account': {}, 
                        'creator': {}
                    },
                    where: [
                        ['operation', 'deposit']
                    ]
                };

                params['where'] = [];

                if (this.query != '') {
                    params['with']['account'] = {
                        query: {
                            value: "+*" + query.replace(/\s+/g, "* +*") + "*", // search term
                            fields: ['name', 'account_number', 'account_type']

                        }
                    }

                    params['with']['user'] = {
                        query: {
                            value: "+*" + query.replace(/\s+/g, "* +*") + "*", // search term
                            fields: ['firstname', 'lastname']

                        }
                    }
                }

                if (this.status != '' && this.status != 'all') {
                    params['where'].push(['status', this.status]);
                }

                this.searchWithdrawsCall(params, this.searchWithdrawsCallback);
            },
            completeWithdraw(id){
                var _this = this;
                swal({
                        title: "Are you sure?",
                        text: "Confirm that the withdraw was completed",
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
                            $.LoadingOverlay("show");
                            _this.withdrawCompletedCall({id:id}, _this.withdrawCompletedCallback)
                        }
                    });
            },
            withdrawCompletedCallback(response){
                if(response.status > 0){
                    this.searchWithdraws(1)
                }else{
                    swal("Error!", response.errors[0], "error");
                }
                $.LoadingOverlay("hide");
            }
        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            },
            format: function (value) {
                if (!value) return ''
                value = value.replace('_', ' ').toString()
                if(value == 'nvic' || value == 'sf' || value == 'mdf'){
                    return value.toUpperCase();
                }else{
                    return value.charAt(0).toUpperCase() + value.slice(1);
                }
            }
        },
        created() {
            $.LoadingOverlay("show");
            this.searchWithdrawsCall({
                page: this.paginator.current_page,
                limit: this.limit,
                fields: ['id', 'amount', 'account', 'status', 'creator', 'created_at'],
                with: {
                    'account': {}, 
                    'creator': {}
                },
                where: ['operation', 'deposit']
            }, this.searchWithdrawsCallback);
        },
        mounted() {
            var _this = this;
            this.$nextTick(function () {

            })
        }
    }
</script>
<style>
    .icon-store {
        width: 30px;
        height: auto;
    }

    .icon-amazon {
        width: 50px;
        height: auto;
    }

    .input-error-select {
        color: #d61212 !important;
        border: 1px solid #b60707 !important;
        border-radius: 5px
    }

    .message-error {
        color: #d61212;
        float: right;
        padding-top: 10px;
        font-size: 12px;
    }

    .icons-custom {
        width: 20px;
        height: 20px;
    }

    .separated {
        padding-top: 20px !important;
    }
</style>

<style scoped>
    td {
        width: 15%;
    }
</style>
