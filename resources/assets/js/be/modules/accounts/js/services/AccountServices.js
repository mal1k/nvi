export default {
    methods: {
        //ApiCalls
        searchAccountsCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/account/search',
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
        createAccountCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/account/store',
                data: data
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });
        },
        updateAccountCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/account/update',
                data: data
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });
        },
        addFundsCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/admin/add-funds',
                data: data
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });
        },
        withdrawCashCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/admin/withdraw-cash',
                data: data
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });
        },
    }
}
