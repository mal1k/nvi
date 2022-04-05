<template>
    <div class="card">
        <div class="card-header">
            <div class="float-left">
                <h4 class="card-title">Subscriptions List</h4>
            </div>
            <div class="float-right">
                <ul class="list-inline mb-0" style="margin-top:-5px;">
                    <li><a href="#" @click="searchSubscriptions(paginator.current_page)" style="padding: 0 8px;"><i class="ft-rotate-cw"></i></a></li>                    
                </ul>
            </div>
        </div>
        <div class="card-content">
            <div class="card-content">
                <div class="card-body">
                    <div class="form-group mb-2 col-8 col-xs-12" style="padding:0;">
                        <a class="btn btn-outline-primary" href="/subscriptions/create"><i class="fa fa-plus"></i> Add</a>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 input-group" style="margin-bottom:15px;">
                            <form style="width:100%;">
                                <input type="text" v-model="query" class="form-control" id="query" placeholder="Search..." style="width:100%;">
                            </form>
                        </div>
                        <div class="col-12 col-md-6 input-group" style="align-self:center;">
                            <div class="skin skin-square">
                                <div class="form-group">
                                    <fieldset>
                                        <input type="checkbox" id="pay_due">
                                        <label for="pay_due">Payment Due</label>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="subscriptions.length >0">
                        <div class="table-responsive position-relative">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Owner</th>
                                        <th>Plan</th>
                                        <th>Status</th>
                                        <th>Next Payment Date</th>
                                        <th>Expire At</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(_subscription, index) in subscriptions" :key="index">
                                        <td class="align-middle">
                                            <div v-if="_subscription.user" style="align-self:center;"
                                                class="text-truncate">
                                                <p style="margin:0;"><strong>{{_subscription.user.firstname}} {{_subscription.user.lastname}}</strong></p>
                                            </div>
                                        </td>
                                        <td v-if="_subscription.next_plan_id > 0 && _subscription.next_plan" class="align-middle">
                                            <div style="align-self:center;" class="text-truncate">
                                                {{_subscription.next_plan.title}} - ${{_subscription.next_plan.min_price}}/{{interval[_subscription.next_plan.interval]}}
                                            </div>
                                        </td>
                                        <td v-else-if="_subscription.current_plan_id > 0 && _subscription.plan" class="align-middle">
                                            <div style="align-self:center;" class="text-truncate">
                                                {{_subscription.plan.title}} - ${{_subscription.plan.min_price}}/{{interval[_subscription.plan.interval]}}
                                            </div>
                                        </td>
                                        <td v-else class="align-middle">
                                            <div style="align-self:center;" class="text-truncate">
                                                -
                                            </div>
                                        </td>
                                        <td class="align-middle">
                                            <span :class="{'badge badge-primary' : _subscription.status == 'active',
                                            'badge badge-warning' : _subscription.status == 'trial' || _subscription.status == 'pending',
                                            'badge badge-danger' : _subscription.status == 'locked' || _subscription.status == 'expired'}">
                                                {{_subscription.status}}
                                            </span>
                                        </td>
                                        <td class="align-middle">
                                            <div style="align-self:center;"
                                                class="text-truncate">{{moment(_subscription.next_payment_date, 'YYYY-MM-DD HH:mm:ss').format('MMM DD, YYYY')}}</div>
                                        </td>
                                        <td class="align-middle">
                                            <div style="align-self:center;"
                                                class="text-truncate">{{moment(_subscription.expires_at, 'YYYY-MM-DD HH:mm:ss').format('MMM DD, YYYY')}}</div>
                                        </td>
                                        <td style="width:10%;" class="align-middle">
                                            <div class="btn-group" role="group">
                                                <button
                                                    @click="$router.push({name: 'edit_subscription', params: {id: _subscription.id}})"
                                                    type="button" class="btn btn-icon btn-outline-primary"><i
                                                        class="fa fa-pencil"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <pagination :pagination="pagination" p_classes="justify-content-center" @onFirst="first"
                            @onLast="last" @onShowPage="showPage">
                        </pagination>
                    </div>
                    <div v-else class="table-responsive position-relative mt-5">
                        <table class="table">
                            <tbody>
                                <tr class="text-center">
                                    <h3>{{no_found_msg}}</h3>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PaginationMixin from "../../../../../../misc/pagination";
    import PaginationViewComponent from "../../../../../../components/PaginationViewComponent";
    import SubscriptionServices from '../../services/SubscriptionServices.js';
    export default {
        mixins: [SubscriptionServices, PaginationMixin],
        components: {
            pagination: PaginationViewComponent
        },
        data() {
            return {
                subscriptions: [],
                Helpers: Helpers,
                query: "",
                status: "all",
                no_found_msg: '',
                moment:moment,
                pay_due: false,
                interval:{
                    'year':'yr',
                    'month':'mo',
                },
            }
        },
        watch: {
            query: _.debounce(function () {
                this.showPage(1);
            }, 300),

            status(val) {
                this.showPage(1);
            }
        },
        methods: {
            getSubscriptionList(params) {
                $.LoadingOverlay("show");
                params["fields"] = ['id','status','next_payment_date','expires_at','user','plan','next_plan','next_plan_id','current_plan_id','owner_id'];
                params["orderby"] = { created_at: 'desc' };
                params["with"] = {
                    'plan':{},
                    'next_plan':{},
                    'user':{}
                };
                this.query = this.query.trim();
                if (this.query !== "") {
                    let query = this.query;
                    params['where_has'] = {
                        user:{
                            query: {
                                value: "+*" + query.replace(/\s+/g, "* +*") + "*", // search term
                                fields: ["firstname", "lastname"]
                            }
                        }
                    };
                }
                if(this.pay_due){
                    params['where'] = [
                        ['next_payment_date','<', moment().format('YYYY-MM-DD HH:mm:ss')],
                        ['status', 'active'],
                    ];
                }
                this.getSubscriptionsCall(params, this.getSubscriptionsCallback);
            },
            getSubscriptionsCallback(response) {
                if (response.status > 0) {
                    this.subscriptions = response.data;
                    this.calcPages(response.pagination);
                    if (this.subscriptions.length > 0) {
                        this.no_found_msg = '';
                    } else {
                        this.no_found_msg = 'No subscriptions were found';
                    }
                    $.LoadingOverlay("hide");
                } else {
                    Helpers.displayError(response, 'toastr');
                    $.LoadingOverlay("hide");
                }
            }
        },
        created() {
            this.paginationInit(15, this.getSubscriptionList);
        },
        mounted() {
            Helpers.unBlockPage();
            this.showPage(1, false);
            var _this = this;
            $('.skin-square input').iCheck({
                checkboxClass: 'icheckbox_square-red',
                radioClass: 'iradio_square-red',
            });

            $('#pay_due').on('ifChecked', function (event) {
                _this.pay_due = true;
                _this.showPage(1);
            });

            $('#pay_due').on('ifUnchecked', function (event) {
                _this.pay_due = false;
                _this.showPage(1);
            });
        }
    }
</script>

<style scoped>
    .avatar {
        width: 60px;
        height: 60px;
    }
</style>