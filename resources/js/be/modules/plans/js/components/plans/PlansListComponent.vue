<template>
    <div class="card">
        <div class="card-header">
            <div class="float-left">
                <h4 class="card-title">Plans List</h4>
            </div>
            <div class="float-right">
                <ul class="list-inline mb-0" style="margin-top:-5px;">
                    <li><a href="#" @click="searchPlans(paginator.current_page)" style="padding: 0 8px;"><i class="ft-rotate-cw"></i></a></li>                    
                </ul>
            </div>
        </div>
        <div class="card-content">
            <div class="card-content">
                <div class="card-body">
                    <div class="form-group mb-2 col-8 col-xs-12" style="padding:0;">
                        <a class="btn btn-outline-primary" href="/plans/create"><i class="fa fa-plus"></i> Add</a>
                    </div>
                    <div v-if="plans.length >0">
                        <div class="table-responsive position-relative">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Min Price</th>
                                        <th>Free Records</th>
                                        <th>Interval</th>
                                        <th>Status</th>
                                        <th>Created at</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(_plan, index) in plans" :key="index">
                                        <td class="align-middle">
                                            <div style="align-self:center;"
                                                class="text-truncate">{{_plan.title}}</div>
                                        </td>
                                        <td class="align-middle">
                                            <div style="align-self:center;"
                                                class="text-truncate">${{(_plan.min_price) ? (_plan.min_price*1).toFixed(2) : 0}}</div>
                                        </td>
                                        <td class="align-middle">
                                            <div style="align-self:center;"
                                                class="text-truncate">{{_plan.free_records}}</div>
                                        </td>
                                        <td class="align-middle">
                                            <div style="align-self:center;"
                                                class="text-truncate">{{_plan.interval}}</div>
                                        </td>
                                        <td class="align-middle">
                                            <span :class="{'badge badge-primary' : _plan.status == 'public',
                                            'badge badge-warning' : _plan.status == 'private', 'badge badge-danger' : _plan.status == 'cancelled'}">
                                                {{_plan.status}}
                                            </span>
                                        </td>
                                        <td class="align-middle">
                                            <div style="align-self:center;"
                                                class="text-truncate">{{moment(_plan.created_at).format("MMM Do, YYYY")}}</div>
                                        </td>
                                        <td style="width:10%;" class="align-middle">
                                            <div class="btn-group" role="group">
                                                <button
                                                    @click="$router.push({name: 'edit_plan', params: {id: _plan.id}})"
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
    import PlanServices from '../../services/PlanServices.js';
    export default {
        mixins: [PlanServices, PaginationMixin],
        components: {
            pagination: PaginationViewComponent
        },
        data() {
            return {
                plans: [],
                Helpers: Helpers,
                query: "",
                status: "all",
                no_found_msg: '',
                moment:moment
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
            getPlanList(params) {
                params["fields"] = ["id","title","description", "min_price", "created_at", "status","interval", "free_records"];
                params["orderby"] = { created_at: 'desc' };
                this.query = this.query.trim();
                if (this.query !== "") {
                    let query = this.query;
                    params["query"] = {
                        value: "+*" + query.replace(/\s+/g, "* +*") + "*", // search term
                        fields: ["title", "description"]
                    };
                }
                $.LoadingOverlay("show");
                this.getPlansCall(params, this.getPlansCallback);
            },
            getPlansCallback(response) {
                if (response.status > 0) {
                    this.plans = response.data;
                    this.calcPages(response.pagination);
                    if (this.plans.length > 0) {
                        this.no_found_msg = '';
                    } else {
                        this.no_found_msg = 'No plans were found';
                    }
                    $.LoadingOverlay("hide");
                } else {
                    Helpers.displayError(response, 'toastr');
                    $.LoadingOverlay("hide");
                }
            }
        },
        created() {
            this.paginationInit(15, this.getPlanList);
        },
        mounted() {
            Helpers.unBlockPage();
            this.showPage(1, false);
        }
    }
</script>

<style scoped>
    .avatar {
        width: 60px;
        height: 60px;
    }
</style>