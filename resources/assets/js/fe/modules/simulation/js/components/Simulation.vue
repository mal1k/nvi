<template>
    <div>
        <dashboard-box v-if="securities.length > 0" ></dashboard-box>
        <select-security :security="securities" @account-selected="setSelectedSecurity"></select-security>
        <div class="card card-dark">
            <div class="card-content" style="min-height: 70vh;">
                <div class="card-body">
                    <div v-show="selected_security_id">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-xl-10 col-lg-9 col-12" style="margin-bottom:2rem;">
                                        <div class="row" style="margin-bottom:2rem;">
                                            <div class="col-12 col-sm-3 box_security text-center">
                                                ${{parseFloat(selected_security.stock_price).toFixed(2)}}
                                                <span>Stock Price</span>
                                            </div>
                                            <div class="col-12 col-sm-3 box_security text-center">
                                                ${{parseFloat(selected_security.total_price).toFixed(2)}}
                                                <span>Total Price</span>
                                            </div>
                                            <div class="col-12 col-sm-3 box_security text-center">
                                                {{selected_security.initial_sim}}
                                                <span>Initial Simulations</span>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-12 col-sm-3 box_security text-center">
                                                {{selected_security.simulations}}
                                                <span>Simulations</span>
                                            </div>
                                            <div class="col-12 col-sm-3 box_security text-center">
                                                ${{parseFloat(selected_security.put).toFixed(2)}}
                                                <span>Put</span>

                                            </div>
                                            <div class="col-12 col-sm-3 box_security text-center">
                                                ${{parseFloat(selected_security.straddle).toFixed(2)}}
                                                <span>Straddle</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-xl-2 col-lg-3 col-12 text-center">

                                        <label>Quantity of Simulations</label>
                                        <input v-model="how_many_sim" type="number" min="1" placeholder="# simulations" class="form-control" style="margin-bottom:20px;">

                                        <button type="button" class="btn mr-1 mb-1 btn-outline-purple btn-lg square"
                                            style="width: 100%;" @click="simulate('one')" :disabled="disable_sim">
                                            Simulate
                                        </button>
                                        <button type="button" class="btn mr-1 mb-1 btn-outline-purple btn-lg square"
                                            style="width: 100%;"  @click="simulate('all')" :disabled="disable_sim">
                                            <i class="ft-less-circle"></i>
                                            Simulate All
                                        </button>
                                    </div>
                                </div>
                                <fieldset style="padding-bottom:2rem;">
                                    <div class="text-center">
                                        <input type="checkbox" class="switch" data-off-label="Graph" data-on-label="Table" id="switch12" data-off-active-cls="btn-primary"/>
                                    </div>
                                </fieldset>
                                <div v-if="!showGraph">
                                    <sim-logs v-if="selected_security"
                                        :logs="selected_security"
                                    ></sim-logs>

                                </div>
                                <div v-show="showGraph" class="col-12 height-500">
                                        <canvas id="line-basic-chart-total"></canvas>
                                </div>
                                <div v-show="showGraph" class="col-12 height-500" style="margin-top:4rem;">
                                    <canvas id="line-basic-chart-profit"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-show="!selected_security_id">
                        <div class="row mt-4">
                            <div class="col-md-12 text-center mt-4">
                                <h4>No security has been selected.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SimulationServices from '../services/SimulationServices.js';
    import SimLogs from  '../components/SimLogs.vue';
    import storage from '../../../../../misc/storage';
    import broadcast from '../broadcast';
    import DashboardBoxComponent from '../../../dashboard_cards/js/components/DashboradBoxComponents';

    export default {
        mixins: [SimulationServices,broadcast],
        props: ['securities'],
        components: {
            'sim-logs': SimLogs,
            'dashboard-box': DashboardBoxComponent
        },
        data() {
            return {
                selected_security_id: '',
                selected_security: '',
                query: '',
                type: '',
                message_question:'',
                chart_total:'',
                chart_profit:'',
                error: {
                    selected_security_id: false,
                },
                error_message: {
                    shares_qty: '',
                    selected_security_id: '',
                    selected_holding: '',
                },
                paginator: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                offset: 5,
                limit: 10,
                data_investor:[],
                data_nvic:[],
                lineChartA:'',
                lineChartB:'',
                configA:{},
                configB:{},
                chartDataA:{},
                chartDataB:{},
                how_many_sim:1,
                array_invA:[],
                array_invB:[],
                disable_sim:false,
                array_labelsA:[],
                array_labelsB:[],
                params:{},
                data_logs_A: [],
                data_logs_B: [],
                showGraph:true,


            }
        },
        watch: {
            "selected_security.simulations"(val){
                if(val<=0){
                    this.disable_sim = true;
                }else{
                    this.disable_sim = false;
                }
            }

        },
        methods: {
            simulate(value){
                if(value == "all"){
                    this.how_many_sim = this.selected_security.simulations;
                }
                this.params = {
                    'security':this.selected_security,
                    'sim':this.how_many_sim
                }
                if(this.params.sim > 300){
                    swal("Success!", 'The simulations are proccesing, please wait.', "success");
                }else{
                    $.LoadingOverlay("show");
                }
                this.simSecurityCall(this.params,this.simSecurityCallBack)
                this.how_many_sim = 1;

            },
            simSecurityCallBack(response){
                $.LoadingOverlay("hide");
                if(response.data.status > 0){
                    $('.switch:checkbox').checkboxpicker('state', false);
                    $('#switch12').prop('checked', false);

                    if(response.data.data.security){
                        this.selected_security =Object.assign({}, response.data.data.security);
                        this.showGraph = true;
                    }

                    if(response.data.data.sim_A && response.data.data.sim_B){
                        this.data_investor=[];
                        this.data_nvic=[];
                        this.array_labelsA=[];
                        for (let i = 0; i < response.data.data.sim_A.length; i++) {
                            this.data_investor.push(response.data.data.sim_A[i].total_price.toFixed(2))
                        }
                        for (let i = 0; i < response.data.data.sim_B.length; i++) {
                            this.data_nvic.push(response.data.data.sim_B[i].total_price.toFixed(2))
                        }
                        var count = 0;
                        for (let i = 0; i < this.data_investor.length; i++) {
                            this.array_labelsA.push(count);
                            count = count+1;
                        }
                        this.lineChartA.destroy();
                        this.lineChartB.destroy();
                        this.drawGraphTotal("line-basic-chart-total",this.data_investor,this.data_nvic);
                        this.profit(this.data_investor,this.data_nvic);
                    }

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
            setSelectedSecurity(data) {
                this.selected_security_id = data;
                for (let i = 0; i < this.securities.length; i++) {
                    if(this.securities[i].id == this.selected_security_id){
                        this.selected_security = this.securities[i];
                    }
                }
                if(this.lineChart){
                    this.lineChart.destroy()
                }
                if(this.selected_security.simulations <= 0){
                    this.disable_sim = true;
                }else{
                    this.disable_sim = false;
                }
                if(this.selected_security){
                    $.LoadingOverlay("show");
                    this.graphSecurityInformationCall(this.selected_security,this.graphSecurityInformationCallBack);
                }

            },
            addData(){
                this.lineChartA.update();
                this.lineChartB.update();
            },
            graphSecurityInformationCallBack(response){
                 $.LoadingOverlay("hide");
                if(response.data.status > 0){
                    this.data_investor=[]
                    this.data_nvic=[]
                    this.array_labelsA=[]

                    for (let i = 0; i < response.data.data.sim_A.length; i++) {
                        this.data_investor.push(response.data.data.sim_A[i].total_price.toFixed(2))
                    }
                    for (let i = 0; i < response.data.data.sim_B.length; i++) {
                        this.data_nvic.push(response.data.data.sim_B[i].total_price.toFixed(2))
                    }
                     var count = 0;
                    for (let i = 0; i < this.data_investor.length; i++) {
                        this.array_labelsA.push(count);
                        count = count+1;
                    }
                    this.profit(this.data_investor,this.data_nvic);
                    this.drawGraphTotal("line-basic-chart-total",this.data_investor,this.data_nvic);


                }else {
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
            profit(invA,invB){
                this.array_invA=[];
                this.array_invB=[];
                var beforeA=0;
                var beforeB=0;
                var difA = 0;
                var difB = 0;
                this.array_labelsB = [];
                for (let i = 0; i < invA.length; i++) {
                    if(i==0){
                        this.array_invA.push(0)
                    }else{
                        beforeA = invA[i-1]
                        difA = invA[i] - beforeA
                        this.array_invA.push(difA);
                    }
                }

                for (let i = 0; i < invB.length; i++) {
                    if(i==0){
                        this.array_invB.push(0)
                    }else{
                        beforeB = invB[i-1]
                        difB = invB[i] - beforeB
                        this.array_invB.push(difB);
                    }
                }
                 var count = 0;
                for (let i = 0; i < this.array_invA.length; i++) {
                    this.array_labelsB.push(count);
                    count = count+1;
                }
                this.drawGraphProfit('line-basic-chart-profit',this.array_invA,this.array_invB,this.array_labelsB);


            },

            drawGraphTotal(id,data_investor,data_nvic){
                //Get the context of the Chart canvas element we want to select
                var ctx = $("#"+id);
                // Chart Options
                var chartOptions = {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        position: 'bottom',
                        labels:{
                            fontColor:'#fff',
                            fontSize: 14,
                        }
                    },
                    hover: {
                        mode: 'label'
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            ticks:{
                                fontColor:'#fff',
                                fontSize: 14,
                                padding: 20,
                                callback: function(dataLabel, index) {
                                    // Hide the label of every 2nd dataset. return null to hide the grid line too
                                    if(data_investor.length > 500){
                                        var num = Math.ceil(data_investor.length/100);
                                    }else{
                                        var num = Math.ceil(data_investor.length/10);
                                    }
                                    return index === data_investor.length-1 || index === 0 ? dataLabel : null;
                                },
                            },

                            gridLines: {
                                display:false,
                                color: "#f3f3f3",
                                drawTicks: false,
                            },
                            scaleLabel: {
                                display: true,
                                // labelString: 'Simulations',
                                fontColor:'#fff',
                            }
                        }],
                        yAxes: [{
                            display: true,
                            ticks:{
                                callback: function(value, index, values) {
                                    return '$' + value.toFixed(2);
                                },
                                fontColor:'#fff',
                                fontSize: 14,
                                padding: 20
                            },

                            gridLines: {
                                color: "#f3f3f3",
                                drawTicks: false,

                            },
                            scaleLabel: {
                                display: true,
                                // labelString: 'Value',
                                fontColor:'#fff'
                            }
                        }]
                    },
                    title: {
                        display: true,
                        text: 'Total Value',
                        fontSize: 18,
                        fontColor:'#fff',
                    },
                    elements: {
                        point:{
                            radius: 0
                        }
                    },

                };

                // Chart Data
                this.chartDataA = {
                    // labels: labels_array,
                    labels: this.array_labelsA,
                    datasets: [{
                        label: "Investor",
                        data: this.data_investor,
                        lineTension: 0,
                        fill: false,
                        borderColor: "#EE7E21",
                    },  {
                        label: "NVIC",
                        data: this.data_nvic,
                        lineTension: 0,
                        fill: false,
                        borderColor: "#119CEB",
                    }]
                };
                this.configA = {
                    type: 'line',

                    // Chart Options
                    options : chartOptions,

                    data : this.chartDataA
                };

                console.log(ctx)
                console.log(this.configA)

                // Create the chart
                this.lineChartA = new Chart(ctx, this.configA);
            },

            drawGraphProfit(id,data_investor,data_nvic){
                //Get the context of the Chart canvas element we want to select
                var ctx = $("#"+id);
                // Chart Options
                var chartOptions = {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        position: 'bottom',
                        labels:{
                            fontColor:'#fff',
                            fontSize: 14,
                        }
                    },
                    hover: {
                        mode: 'label'
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            ticks:{
                                fontColor:'#fff',
                                fontSize: 14,
                                padding: 20,
                                callback: function(dataLabel, index) {
                                    // Hide the label of every 2nd dataset. return null to hide the grid line too
                                    if(data_investor.length > 500){
                                        var num = Math.ceil(data_investor.length/100);
                                    }else{
                                        var num = Math.ceil(data_investor.length/10);
                                    }
                                    return index === data_investor.length-1 || index === 0 ? dataLabel : null;
                                },
                            },

                            gridLines: {
                                display:false,
                                color: "#f3f3f3",
                                drawTicks: false,
                            },
                            scaleLabel: {
                                display: true,
                                // labelString: 'Simulations',
                                fontColor:'#fff',
                            }
                        }],
                        yAxes: [{
                            display: true,
                            ticks:{
                                callback: function(value, index, values) {
                                    return '$' + value.toFixed(2);
                                },
                                fontColor:'#fff',
                                fontSize: 14,
                                padding: 20
                            },

                            gridLines: {
                                color: "#f3f3f3",
                                drawTicks: false,

                            },
                            scaleLabel: {
                                display: true,
                                // labelString: 'Value',
                                fontColor:'#fff'
                            }
                        }]
                    },
                    title: {
                        display: true,
                        text: 'Profit/Loss',
                        fontSize: 18,
                        fontColor:'#fff',
                    },
                    elements: {
                        point:{
                            radius: 0
                        }
                    },

                };

                // Chart Data
                this.chartDataB = {
                    // labels: labels_array,
                    labels: this.array_labelsB,
                    datasets: [{
                        label: "Investor",
                        data: data_investor,
                        lineTension: 0,
                        fill: false,
                        borderColor: "#EE7E21",
                    },  {
                        label: "NVIC",
                        data: data_nvic,
                        lineTension: 0,
                        fill: false,
                        borderColor: "#119CEB",
                    }]
                };

                this.configB = {
                    type: 'line',

                    // Chart Options
                    options : chartOptions,

                    data : this.chartDataB
                };

                // Create the chart
                this.lineChartB = new Chart(ctx, this.configB);
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

        },
        mounted() {
            var self = this;
            console.log(this.securities)
            this.$nextTick(function () {

                window.addEventListener('storage', function (e) {
                    if (self.selected_security_id != e.newValue) {
                        storage.set_plain('selected_security_id', e.oldValue);
                    }
                    if (!e.newValue) {
                        self.selected_security_id = '';
                    }
                });

                $('.switch:checkbox').checkboxpicker();
                $('#switch12').on('change', function() {
                    if($('#switch12:checkbox:checked').length > 0){
                        self.showGraph = false;
                    }else{
                       self.showGraph = true;
                    }
                    setTimeout(function(){
                        // _this.getPlans();
                    },200)
                });
            });
        }
    }
</script>
<style>
    .message-error {
        color: #d61212;
        float: right;
        padding-top: 10px;
        font-size: 12px;
    }
    .message-question {
        color: black;
        padding-top: 10px;
        font-size: 12px;
    }


    .page-item.active .page-link {
        background-color: #411c5e !important;
        border-color: #411c5e !important;
    }
</style>

<style scoped>
    .box_security{
        border:1px solid white;
        display:grid;
        padding:20px;
        margin-right:20px;
        min-height: 82px;
        font-size: 1.3rem;
    }
    .table {
        color: #fff;
    }

    .badge {
        color: #000;
    }

    .inputGroup {
        background-color: #fff;
        display: block;
        margin: 10px 0;
        position: relative;
    }

    .inputGroup label {
        padding: 12px 30px;
        width: 100%;
        display: block;
        text-align: left;
        color: #3C454C;
        cursor: pointer;
        position: relative;
        z-index: 2;
        -webkit-transition: color 200ms ease-in;
        transition: color 200ms ease-in;
        overflow: hidden;
        border: 1px solid #411c5e;
    }

    .inputGroup label:before {
        width: 100%;
        height: 10px;
        border-radius: 50%;
        content: '';
        background-color: #411c5e;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%) scale3d(1, 1, 1);
        transform: translate(-50%, -50%) scale3d(1, 1, 1);
        -webkit-transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0;
        z-index: -1;
    }

    .inputGroup label:after {
        width: 32px;
        height: 32px;
        content: '';
        border: 2px solid #D1D7DC;
        background-color: #fff;
        background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
        background-repeat: no-repeat;
        background-position: 2px 3px;
        border-radius: 50%;
        z-index: 2;
        position: absolute;
        right: 30px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        cursor: pointer;
        -webkit-transition: all 200ms ease-in;
        transition: all 200ms ease-in;
    }

    .inputGroup input:checked~label {
        color: #fff;
    }

    .inputGroup input:checked~label:before {
        -webkit-transform: translate(-50%, -50%) scale3d(56, 56, 1);
        transform: translate(-50%, -50%) scale3d(56, 56, 1);
        opacity: 1;
    }

    .inputGroup input:checked~label:after {
        background-color: #3d4554;
        border-color: #fff;
    }

    .inputGroup input {
        width: 32px;
        height: 32px;
        -webkit-box-ordinal-group: 2;
        order: 1;
        z-index: 2;
        position: absolute;
        right: 30px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        cursor: pointer;
        visibility: hidden;
    }

    .form {
        padding: 0 16px;
        /*  max-width: 550px; */
        margin: 50px auto;
        font-size: 18px;
        font-weight: 600;
        line-height: 36px;
    }

    #label1,
    #label2 {
        height: 100px !important;
    }

    body {
        background-color: #D1D7DC;
        font-family: 'Fira Sans', sans-serif;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
    }

    code {
        background-color: #9AA3AC;
        padding: 0 8px;
    }

    .btn-outline-purple:hover {
        background-color: #411c5e;
        color: #FFF !important;
    }

    .btn-outline-purple {
        border-color: #FFF;
        color:  #FFF;
    }

    .table thead th {
        padding: 0.75rem 2rem !important;
    }
</style>
