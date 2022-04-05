export default {
    methods: {
        //ApiCalls
        searchWithdrawsCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/withdraws/search',
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
        withdrawCompletedCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/withdraws/complete',
                data: data
            }).then(response => {
                return callBackHandler(response.data);
            }).catch((error) => {
                return callBackHandler('002', error);
            });
        },
    }
}
