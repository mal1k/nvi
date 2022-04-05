export default {
    methods: {
        //ApiCalls
        searchHoldingsCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/holding/search',
                data: data
            }).then(response => {
                if (response.data.status == 1) {
                    return callBackHandler('200', response.data);
                } else {
                    return callBackHandler('001', response.data.errors);
                }
            }).catch((error) => {
                return callBackHandler('002', error);
            });
        },
        sellHoldingCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/investor/sell-holding',
                data: data
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });
        }
    }
}