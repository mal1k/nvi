<template>
    <div>
        <div class="row">
            <!-- <div class="col-xl-10 col-lg-9 col-12"> -->
            <div class="col-12">
                <div class="row">
                    <div class="col-12">
                        <div class="card card-dark">
                            <div class="card-header no-margin" >
                                <div class="row">
                                    <div  class="col-12 text-center">
                                        <h4 style="font-weight: bold;" >Security Logs History</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content collapse show">
                                <div class="card-body">
                                    <form>
                                        <div class="row">
                                            <div class="col-12 col-md-4 " style="padding-left:21px; padding-right:21px;">
                                                <div class="form-group" style="width: 100%;">
                                                    <label style="color:white;padding-rigth:20px;">Type</label>
                                                    <select id="select2-roles" class="select2-placeholder form-control"
                                                        data-placeholder="Select roles..." style="width: 100%" v-model="type">
                                                        <option value="A">Investor</option>
                                                        <option value="B">NVIC</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div v-if="security_logs.length > 0">
                                        <div class="table-responsive">
                                            <table id="recent-orders" style="color: #fff"
                                                class="table mb-0 ps-container ps-theme-default">
                                                <thead>
                                                    <tr>
                                                        <th style="padding: 0.75rem 2rem;">Stock Price</th>
                                                        <!-- <th style="padding: 0.75rem 2rem;">Stock Price (NVIC)</th> -->
                                                        <th class="text-center" style="padding: 0.75rem 2rem;">Put</th>
                                                        <!-- <th style="padding: 0.75rem 2rem;">Put (NVIC)</th> -->
                                                        <th class="text-center" style="padding: 0.75rem 2rem;">Straddle</th>
                                                        <!-- <th style="padding: 0.75rem 2rem;">Straddle (NVIC)</th> -->
                                                        <th class="text-center" style="padding: 0.75rem 2rem;">Total Price</th>
                                                        <!-- <th style="padding: 0.75rem 2rem;">Total Price (NVIC)</th> -->
                                                        <!-- <th style="padding: 0.75rem 2rem;">Status</th> -->
                                                        <!-- <th style="padding: 0.75rem 2rem;">Date</th> -->
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(log, index) in security_logs"
                                                        :key="index">
                                                        <td class="text-truncate">
                                                            ${{parseFloat(log.stock_price).toFixed(2)}}
                                                        </td>

                                                        <td class="text-center">
                                                            ${{parseFloat(log.put).toFixed(2)}}
                                                        </td>
                                                        <td class="text-center">
                                                            ${{parseFloat(log.straddle).toFixed(2)}}
                                                        </td>
                                                        <td class="text-center">
                                                            ${{parseFloat(log.total_price).toFixed(2)}}
                                                        </td>
                                                        <!-- <td class="text-truncate"><span
                                                                :class="{'badge bg-blue bg-darken-1' : transaction.status == 'settled',
                                                                        'badge badge-danger' : transaction.status == 'declined',
                                                                        'badge badge-warning' : transaction.status == 'pending',}">{{transaction.status | format}}</span>
                                                        </td>
                                                        <td class="text-truncate">
                                                            {{moment(transaction.created_at).format('LLLL')}}
                                                        </td> -->
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <logs-paginator v-if="paginator.last_page > 1" class="mt-2"
                                            :pagination="paginator" @paginate="getLogs"
                                            :offset="offset">
                                        </logs-paginator>
                                    </div>
                                    <div v-else>
                                        <div class="row mt-3">
                                            <div class="col-md-12 text-center" style="color: #fff">
                                                <h4>No logs on this security.</h4>
                                            </div>
                                        </div>
                                    </div>

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
    // import DashboardServices from '../services/DashboardServices.js';
    // import Paginator from '../../../../../components/Paginator.vue';
    import SimulationServices from '../services/SimulationServices.js';
    import Paginator from '../../../../../components/Paginator.vue';

    export default {
        mixins: [SimulationServices],
            props: ['logs'],
            components: {
                'logs-paginator': Paginator
            },
        data() {
            return {
    //             transactions: [],
                securities:[],
                security_logs:[],
                data_logs_nvic:[],
    //             transactions_total:'',
    //             holdings:'',
    //             selected_account: '',
                paginator: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                offset: 5,
                limit: 10,
                type: 'A',
                query:""
    //             moment: moment
            }
        },

        watch: {
            query: _.debounce(function () {
                this.getLogs(1);
            }, 300),

            // 'type'(val) {
            //     console.log(val)
            //     this.getLogs(1);
            // },

            type: _.debounce(function () {
                this.getLogs(1);
            }, 300)
        },
        methods: {
            getLogs(page, exported = false) {
                $.LoadingOverlay("show");
                 var params = {
                    page: (typeof page == 'undefined') ? this.paginator.current_page : page,
                    limit: this.limit,
                    fields: ['id', 'stock_price', 'put', 'straddle', 'total_price']
                };

                if (this.query != '') {
                    let query = this.query;
                    params['query'] = {
                        value: "+*" + query.replace(/\s+/g, "* +*") + "*", // search term
                        fields: ['security_number']
                    }
                }

                params['where'] = [];
                params['where'].push(['security_number', this.logs.security_number]);
                params['orderby'] = {'id':'desc'};
                params['where'].push(['type', this.type]);

                this.tableSecurityInformationCall(params,this.getLogsCallback);
            },

            getLogsCallback(response) {
                $.LoadingOverlay("hide");
                if(response.data.status > 0){
                    console.log(this.security_logs)
                    this.security_logs = response.data.data;
                    this.paginator = response.data.pagination;
                }else{
                    if (Helpers.isAssoc(response.data.errors)) {
                        let errors = [];
                        for (var i in response.data.errors) {
                            var string
                            errors.push('<span>' + response.data.errors[i] + '</span></br>')
                        }
                        toastr.error(errors, 'Some error(s) has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    } else {
                        toastr.error(response.data.errors[0], 'An error has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    }
                }
            },

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
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        created() {
            // console.log(this.logs)
            // if(this.logs){
            //     this.getLogs()

            // }
        },
        mounted() {
           var _this = this;
           if(this.logs){
                this.getLogs()
            }
            this.$nextTick(function () {
                $("#select2-roles").select2();
                $("#select2-roles").on('change', function (e) {
                    _this.type = $("#select2-roles").val()
                });
            })
        }
    }
</script>
<style>
    .page-item.active .page-link {
        background-color: #411c5e !important;
        border-color: #411c5e !important;
    }
</style>

<style scoped>
    .card-dark {
        background: #404e67;
        color: #000;
    }

    .badge {
        color: #000;
    }

    .no-margin{
        margin: 0px!important;
        padding: 0px!important;
    }
</style>
