<template>
    <div class="card">
        <div class="card-content" style="min-height: 75vh;">
            <div class="card-body">
                <div class="col-md-12">
                    <h4 style="margin-bottom:10px;"><strong>Securities</strong></h4>
                </div>
                <div>
                    <div class="card-content">
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-12 col-md-6 " style="padding-left:21px; padding-right:21px;">
                                        <label>Search</label>
                                        <input type="text" v-model="query" class="form-control" id="query"
                                            placeholder="Type security number...">
                                    </div>
                                    <div class="col-12 col-md-3 " style="padding-left:21px; padding-right:21px;">
                                        <div class="form-group" style="width: 100%;">
                                            <label>Status</label>
                                            <select v-model="status" class="form-control" style="width: 100%">
                                                <option value="all" selected>All</option>
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                                <option value="sold">Sold</option>
                                                <option value="blocked">Blocked</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div v-if="securities.length > 0" class="table-responsive">
                                <table id="recent-customers"
                                    class="table table-hover mb-0 ps-container ps-theme-default">
                                    <thead>
                                        <tr>
                                            <th>Security #</th>
                                            <th>Stock price</th>
                                            <th>Put</th>
                                            <th>Straddle</th>
                                            <th>Total Price</th>
                                            <th>Expected Value</th>
                                            <th>Simulations</th>
                                            <th>Type</th>
                                            <th>Status</th>
                                            <th>Created at</th>
                                            <th class="text-center"></th>
                                            <th class="text-center"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(security, index) in securities" :key="index">
                                            <td class="separated">
                                                {{security.security_number}}
                                            </td>
                                            <td class="separated text-center">
                                                <b>${{parseFloat(security.stock_price ).toFixed(2)}}</b>
                                            </td>
                                            <td class="separated text-center">
                                                ${{parseFloat(security.put ).toFixed(2)}}
                                            </td>
                                            <td class="separated text-center">
                                                ${{parseFloat(security.straddle ).toFixed(2)}}
                                            </td>
                                            <td class="separated text-center">
                                                <b>${{parseFloat(security.total_price ).toFixed(2)}}</b>
                                            </td>
                                            <td class="separated text-center">
                                                <span
                                                    v-if="security.expected_value">${{parseFloat(security.expected_value).toFixed(2)}}</span>
                                                <span v-else>N/A</span>
                                            </td>
                                            <td class="separated text-center">
                                                {{security.simulations}}
                                            </td>
                                            <td class="separated text-center">
                                                <div>
                                                    {{security.type}}
                                                </div>
                                            </td>
                                            <td class="separated">
                                                <div
                                                    :class="{'badge badge-primary' : security.status == 'active', 'badge badge-danger' : security.status == 'inactive', 'badge badge-danger': security.status == 'sold', 'badge badge-warning': security.status == 'blocked'}">
                                                    {{security.status | format}}
                                                </div>
                                            </td>
                                            <td class="separated">
                                                {{moment(security.created_at).format('LL')}}
                                            </td>
                                            <td style="text-align:center;"><a @click="openSecurityDetails(index)"
                                                    style="cursor: pointer;margin-top:10px;"
                                                    class="btn mr-1 mb-1 btn-outline-secondary btn-sm"
                                                    alt="Security details"><i class="fa fa-eye"></i></a></td>
                                           <!--  <td style="text-align:center;"><a @click="openConfigSimulation(index)"
                                                    style="cursor: pointer;"
                                                    class="btn mr-1 mb-1 btn-outline-secondary btn-sm"
                                                    alt="Configure simulation parameters"><i class="fa fa-gear"></i></a>
                                            </td> -->
                                            <td  style="text-align:center;">
                                                <a v-if="security.status == 'blocked' && security.type=='A'" style="margin-top:10px;"
                                                    :href="'/admin/securities/pay/' + security.id"
                                                    class="btn mr-1 mb-1 btn-outline-secondary btn-sm"
                                                    alt="Edit security"><i class="fa fa-usd"></i></a>
                                                <a v-else-if="security.type=='A'" style="margin-top:10px;"
                                                    :href="((security.status!='sold') ? '/admin/securities/edit/' + security.id : '#' )"
                                                    class="btn mr-1 mb-1 btn-outline-secondary btn-sm" :class="{'isDisabled' : security.status == 'sold'}"
                                                    alt="Edit security"><i class="fa fa-pencil"></i></a>
                                            </td>

                                            <!-- <td v-if="security.status=='blocked'" style="text-align:center;"><a style="margin-top:10px;"
                                                    :href="'/admin/securities/edit/' + security.id"
                                                    class="btn mr-1 mb-1 btn-outline-secondary btn-sm"
                                                    alt="Edit security"><i class="fa fa-pencil"></i></a></td> -->
                                        </tr>
                                    </tbody>
                                </table>
                                <securities-paginator v-if="paginator.last_page > 1" :pagination="paginator" style="margin-top:20px;"
                                    @paginate="searchSecurities()" :offset="offset"></securities-paginator>
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
        <div class="modal fade text-left" id="security-details" tabindex="-1" role="dialog" aria-labelledby="sd"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="sd">Security Details</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6 col-12 border-right-blue-grey border-right-lighten-3">
                                <div class="row">
                                    <div class="col-md-9">
                                        <h4 style="text-align: center; color: #000"><b>Derivative A (Investor)</b></h4>
                                    </div>
                                    <div class="col-md-3">
                                        <h4 style="text-align: center; color:red">
                                            <b>{{selected_security.simulations}}</b></h4>
                                    </div>
                                </div>
                                <div class="row" style="margin-top: 15px;">
                                    <div class="col-md-12">
                                        <div class="card bg-blue-grey bg-darken-1">
                                            <div class="card-content" style="color: #fff;">
                                                <div class="card-body">
                                                    <table>
                                                        <thead>
                                                            <th style="text-align: center;">
                                                                <h5>Underlying Stock</h5>
                                                            </th>
                                                        </thead>
                                                        <tr>
                                                            <td style="width: 100%;">
                                                                <div>Price:</div>
                                                            </td>
                                                            <td style="width: 100%;">
                                                                <div>
                                                                    ${{parseFloat(selected_security.stock_price).toFixed(2)}}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="width: 100%;">
                                                                <div>Sims:</div>
                                                            </td>
                                                            <td style="width: 100%;">
                                                                <div>{{selected_security.simulations}}</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="width: 100%;">
                                                                <div>EV:</div>
                                                            </td>
                                                            <td style="width: 100%;">
                                                                <div>
                                                                    ${{parseFloat(selected_security.expected_value).toFixed(2)}}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" style="margin-top: 15px;">
                                    <div class="col-md-6 col-12 border-right-blue-grey border-right-lighten-3">
                                        <table>
                                            <thead>
                                                <th style="text-align: center;">
                                                    <h5><b>Put</b></h5>
                                                </th>
                                            </thead>
                                            <tr>
                                                <td style="width: 100%;">
                                                    <div>Price:</div>
                                                </td>
                                                <td style="width: 100%;">
                                                    <div>${{parseFloat(selected_security.put).toFixed(2)}}</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="width: 100%;">
                                                    <div>Sims:</div>
                                                </td>
                                                <td style="width: 100%;">
                                                    <div>{{selected_security.simulations}}</div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="col-md-6 col-12 border-right-blue-grey border-right-lighten-3">
                                        <table>
                                            <thead>
                                                <th style="text-align: center;">
                                                    <h5><b>Straddle</b></h5>
                                                </th>
                                            </thead>
                                            <tr>
                                                <td style="width: 100%;">
                                                    <div>Price:</div>
                                                </td>
                                                <td style="width: 100%;">
                                                    <div>${{parseFloat(selected_security.straddle).toFixed(2)}}</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="width: 100%;">
                                                    <div>Sims:</div>
                                                </td>
                                                <td style="width: 100%;">
                                                    <div>{{selected_security.simulations}}</div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 text-center">
                                        <div>
                                            <h5><b>Security Total:
                                                    ${{parseFloat(selected_security.total_price).toFixed(2)}}</b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-12 border-right-blue-grey border-right-lighten-3">
                                <div class="row">
                                    <div class="col-md-9">
                                        <h4 style="text-align: center; color: #000"><b>Derivative B (NVIC)</b></h4>
                                    </div>
                                    <div class="col-md-3">
                                        <h4 style="text-align: center; color:red">
                                            <b>{{selected_security.simulations}}</b></h4>
                                    </div>
                                </div>
                                <div class="row" style="margin-top: 15px;">
                                    <div class="col-md-12">
                                        <div class="card bg-blue-grey bg-darken-1">
                                            <div class="card-content" style="color: #fff;">
                                                <div class="card-body">
                                                    <table>
                                                        <thead>
                                                            <th style="text-align: center;">
                                                                <h5>Underlying Stock</h5>
                                                            </th>
                                                        </thead>
                                                        <tr>
                                                            <td style="width: 100%;">
                                                                <div>Price:</div>
                                                            </td>
                                                            <td style="width: 100%;">
                                                                <div>
                                                                    ${{parseFloat(selected_security.stock_price).toFixed(2)}}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="width: 100%;">
                                                                <div>Sims:</div>
                                                            </td>
                                                            <td style="width: 100%;">
                                                                <div>{{selected_security.simulations}}</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="width: 100%;">
                                                                <div>EV:</div>
                                                            </td>
                                                            <td style="width: 100%;">
                                                                <div>
                                                                    ${{parseFloat(selected_security.expected_value).toFixed(2)}}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" style="margin-top: 15px;">
                                    <div class="col-md-6 col-12 border-right-blue-grey border-right-lighten-3">
                                        <table>
                                            <thead>
                                                <th style="text-align: center;">
                                                    <h5><b>Put</b></h5>
                                                </th>
                                            </thead>
                                            <tr>
                                                <td style="width: 100%;">
                                                    <div>Price:</div>
                                                </td>
                                                <td style="width: 100%;">
                                                    <div>${{parseFloat(selected_security.put).toFixed(2)}}</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="width: 100%;">
                                                    <div>Sims:</div>
                                                </td>
                                                <td style="width: 100%;">
                                                    <div>{{selected_security.simulations}}</div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="col-md-6 col-12 border-right-blue-grey border-right-lighten-3">
                                        <table>
                                            <thead>
                                                <th style="text-align: center;">
                                                    <h5><b>Straddle</b></h5>
                                                </th>
                                            </thead>
                                            <tr>
                                                <td style="width: 100%;">
                                                    <div>Price:</div>
                                                </td>
                                                <td style="width: 100%;">
                                                    <div>${{parseFloat(selected_security.straddle).toFixed(2)}}</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="width: 100%;">
                                                    <div>Sims:</div>
                                                </td>
                                                <td style="width: 100%;">
                                                    <div>{{selected_security.simulations}}</div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 text-center">
                                        <div>
                                            <h5><b>Security Total:
                                                    ${{parseFloat(selected_security.total_price).toFixed(2)}}</b></h5>
                                        </div>
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
        <div class="modal fade text-left" id="simulation-params" tabindex="-1" role="dialog" aria-labelledby="sd"
            aria-hidden="true" style="z-index: 9999;">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="sd">Simulation parameters</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="table-responsive">
                                    <table class="table table-sm mb-0">
                                        <tbody>
                                            <tr>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="table-responsive">
                                    <table class="table table-sm mb-0">
                                        <tbody>
                                            <tr>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="table-responsive">
                                    <table class="table table-sm mb-0">
                                        <tbody>
                                            <tr>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
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
    import SecurityServices from '../services/SecurityServices.js';
    import Paginator from '../../../../../components/Paginator.vue';
    import broadcast from '../../broadcast.js';

    export default {
        mixins: [SecurityServices, broadcast],
        components: {
            'securities-paginator': Paginator
        },
        data() {
            return {
                securities: [],
                no_found_msg: 'No securities found',
                query: '',
                paginator: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                selected_security: {
                    id: '',
                    security_number: '',
                    creator_id: '',
                    stock_price: '',
                    put: '',
                    straddle: '',
                    simulations: '',
                    total_price: '',
                    expected_value: '',
                    status: '',
                    interest_rate:'',
                    type:''
                },

                initial_values: {
                    strike_10_50x: '',
                    strike_10_00x: '',
                    D1_A_10_50x: '',
                    D2_A_10_50x: '',
                    D1_B_10_50x: '',
                    D2_B_10_50x: '',
                    D1_A_10_00x: '',
                    D2_A_10_00x: '',
                    D1_B_10_00x: '',
                    D2_B_10_00x: '',
                    Ay_A: '',
                    Bx_A: '',
                    Ay_B: '',
                    Bx_B: '',
                    volatility: ''
                },
                current_values: {
                    strike_10_50x: '',
                    strike_10_00x: '',
                    D1_A_10_50x: '',
                    D2_A_10_50x: '',
                    D1_B_10_50x: '',
                    D2_B_10_50x: '',
                    D1_A_10_00x: '',
                    D2_A_10_00x: '',
                    D1_B_10_00x: '',
                    D2_B_10_00x: '',
                    Ay_A: '',
                    Bx_A: '',
                    Ay_B: '',
                    Bx_B: '',
                    volatility: ''
                },

                offset: 5,
                moment: moment,
                type: '',
                status: 'all',
                limit: 10
            }
        },
        watch: {
            query: _.debounce(function () {
                this.searchSecurities(1);
            }, 300),
            type(val) {
                this.searchSecurities(1);
            },
            status(val) {
                this.searchSecurities(1);
            }
        },
        methods: {
            getStrike_10_50x() {
                return this.round(parseFloat(this.initial_values.strike_10_00x) + this.initial_values.strike_10_00x * 0.05, 2);
            },
            getStrike_10_00x() {
                return this.getX();
            },
            getD1_A_10_50x() {
                return this.round((this.getX() < 0 ? (Math.log(-this.getX() / this.getStrike_10_50x()) + (1 + (Math.log(this.getVolatility(), 2)) / 2) * 1) / (this.getVolatility() * Math.sqrt(1)) : (Math.log(this.getX() / this.getStrike_10_50x()) + (this.getInterestRate() + (Math.pow(this.getVolatility(), 2)) / 2) * 1) / (this.getVolatility() * Math.sqrt(1))), 4);
            },
            getD1_B_10_50x() {
                return this.round((this.getX() < 0 ? (Math.log(-this.getX() / this.getStrike_10_50x()) + (1 + Math.pow(this.getVolatility(), 2) / 2) * 1) / (this.getVolatility() * Math.sqrt(1)) : (Math.log(this.getX() / this.getStrike_10_50x()) + (this.getInterestRate() + Math.pow(this.getVolatility(), 2) / 2) * 1) / (this.getVolatility() * Math.sqrt(1))), 4);
            },
            getD2_B_10_50x() {
                return this.round(this.getD1_B_10_50x() - this.getVolatility() * Math.sqrt(1), 4);
            },
            getD2_A_10_50x() {
                return this.round(this.getD1_A_10_50x() - this.getVolatility() * Math.sqrt(1), 4);
            },
            getD1_A_10_00x() {
                return this.round((this.getX() < 0 ? (Math.log(-this.getX() / this.getStrike_10_00x()) + (this.getInterestRate() + Math.pow(this.getVolatility(), 2) / 2) * 1) / (this.getVolatility() * Math.sqrt(1)) : (Math.log(this.getX() / this.getStrike_10_00x()) + (this.getInterestRate() + Math.pow(this.getVolatility(), 2) / 2) * 1) / (this.getVolatility() * Math.sqrt(1))), 4);
            },
            getD2_A_10_00x() {
                return this.round(this.getD1_A_10_00x() - this.getVolatility() * Math.sqrt(1), 4);
            },
            getD1_B_10_00x() {
                return this.round((this.getX() < 0 ? (Math.log(-this.getX() / this.getStrike_10_00x()) + (this.getInterestRate() + math.pow(this.getVolatility(), 2) / 2) * 1) / (this.getVolatility() * Math.sqrt(1)) : (Math.log(this.getX() / this.getStrike_10_00x()) + (this.getInterestRate() + Math.pow(this.getVolatility(), 2) / 2) * 1) / (this.getVolatility() * Math.sqrt(1))), 4);
            },
            getD2_B_10_00x() {
                return this.round(this.getD1_B_10_00x() - this.getVolatility() * Math.sqrt(1), 4);
            },
            getAy_A() {
                return this.round(this.getX() * this.getNormdist(this.getD1_A_10_00x()) - this.getStrike_10_00x() * Math.exp(-this.getInterestRate() * 1) * this.getNormdist(this.getD2_A_10_00x()), 2);
            },
            getAy_B() {
                return this.round(this.getX() * this.getNormdist(this.getD1_B_10_00x()) - this.getStrike_10_00x() * Math.exp(-this.getInterestRate() * 1) * this.getNormdist(this.getD2_B_10_00x()), 2);
            },
            getBx_A() {
                return this.round(this.getStrike_10_00x() * Math.exp(-this.getInterestRate() * 1) * this.getNormdist(-this.getD2_A_10_00x()) - this.getX() * this.getNormdist(-this.getD1_A_10_00x()), 2);
            },
            getBx_B() {
                return this.round(this.getStrike_10_00x() * Math.exp(-this.getInterestRate() * 1) * this.getNormdist(-this.getD2_B_10_00x()) - this.getX() * this.getNormdist(-this.getD1_B_10_00x()), 2);
            },
            getInitialVolatility() {
                return this.round(((((0.0048 * Math.pow(this.getA(), 2)) - (0.0009 * this.getA()) + 0.0024) * (Math.pow(this.getSimulations(), ((0.0228 * Math.pow(this.getA(), 2))) - (0.1961 * this.getA()) + 0.6277)) / Math.pow(10, -1)) * Math.pow(this.getX(), -1)), 4);
            },
            getVolatility() {
                return this.round(((((0.0048 * Math.pow(this.getA(), 2)) - (0.0009 * this.getA()) + 0.0024) * (Math.pow(this.getSimulations(), ((0.0228 * Math.pow(this.getA(), 2)) - (0.1961 * this.getA()) + 0.6277))) / Math.pow(10, -1)) * Math.pow(this.getX(), -1)), 4);
            },
            getA() {
                return this.round(0.02 * parseFloat(this.security.stock_price) - 0.1434, 2);
            },
            getX() {
                return this.round(this.security.stock_price, 2);
            },
            getWA() {
                return this.round(0.0009 * this.getX() + 0.053, 2);
            },
            getEV() {
                return this.round(0.02 * Math.pow(this.getX(), 1.4), 2);
            },
            getSimulations() {
                return this.round(((0.02 * Math.pow(parseFloat(this.security.stock_price), 1.4) - 0.0066 * parseFloat(this.security.stock_price) - 0.0734) / 0.000950), 0);
            },
            getInterestRate() {
                return this.round((parseFloat(this.interest_rate) / 100), 2);
            },
            getTimeValue() {
                return this.round(this.time_value, 2);
            },
            getPutA() {
                return this.round(this.getStrike_10_50x() * Math.exp(- this.getInterestRate() * this.initial_values.time_value) * this.getNormdist(-this.getD2_A_10_50x()) - this.getX() * this.getNormdist(-this.getD1_A_10_50x()), 2);
            },
            /* getPutB() {
                return this.round(this.getStrike_10_50x() * Math.exp(- this.getInterestRate() * this.initial_values.time_value) * this.getNormdist(-this.getD2_B_10_50x()) - this.getStockPriceB() * this.getNormdist(-this.getD1_B_10_50x()), 2);
            }, */
            getStraddleA() {
                return this.round(this.getAy_A() + this.getBx_A(), 2);
            },
            getNormdist(x) {
                if (isNaN(x)) return null;
                var mean = 0, sd = 1;
                return jStat.normal.cdf(x, mean, sd);
            },
            round(value, decimals) {
                return math.round(value, decimals);
            },

            searchSecuritiesCallback(code, response, errors) {
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
                    this.securities = response.data;
                } else {
                    swal("Error!", errors[0], "error");
                }
                $.LoadingOverlay("hide");
            },
            searchSecurities(page) {
                $.LoadingOverlay("show");
                var params = {
                    page: (typeof page == 'undefined') ? this.paginator.current_page : page,
                    limit: this.limit,
                    fields: ['id', 'security_number', 'stock_price', 'type', 'put', 'straddle', 'total_price', 'expected_value', 'simulations', 'status', 'created_at'],
                    orderby: {
                        'created_at': 'desc'
                    }
                };

                params['where'] = [];

                if (this.query != '') {
                    let query = this.query;
                    params['query'] = {
                        value: "+*" + query.replace(/\s+/g, "* +*") + "*", // search term
                        fields: ['security_number']
                    }
                }
                if (this.status != '' && this.status != 'all') {
                    params['where'].push(['status', this.status]);
                }

                this.searchSecuritiesCall(params, this.searchSecuritiesCallback);
            },
            openSecurityDetails(index) {
                if (this.securities.length > 0) {
                    this.selected_security = Object.assign({}, this.securities[index]);
                    $('#security-details').modal('show');
                }
            },
            openConfigSimulation(index) {
                if (this.securities.length > 0) {
                    this.selected_security = Object.assign({}, this.securities[index]);
                    $('#simulation-params').modal({ backdrop: 'static', keyboard: false });
                }
            },
            resetSelectedSecurity() {
                for (const property in this.selected_security) {
                    object[property] = ''
                }
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
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        created() {
            this.searchSecurities();
        },
        mounted() {
            var _this = this;
            this.$nextTick(function () {
                $('#security-details').on('show.bs.modal', function (e) {

                });
                $('#security-details').on('hidden.bs.modal', function (e) {
                    _this.resetSelectedSecurity
                });
                $('#simulation-params').on('show.bs.modal', function (e) {

                });
                $('#simulation-params').on('hidden.bs.modal', function (e) {
                    _this.resetSelectedSecurity
                });
            });
        }
    }
</script>
<style>
    .isDisabled {
        cursor: default!important;
        opacity: 0.5;
        text-decoration: none;
    }
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

</style>
