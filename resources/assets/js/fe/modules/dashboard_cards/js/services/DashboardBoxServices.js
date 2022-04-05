export default {
    methods: {
        //ApiCalls
        cardsDashboardCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/dashboard/dashboard-cards',
                data: data
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error);
            });
        },
        getUserAccountCall(callBackHandler) {
            axios({
                method: 'get',
                url: '/api/account/user'
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });
        },


    }
}
