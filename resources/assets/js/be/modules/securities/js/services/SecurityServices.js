export default {
    methods: {
        //ApiCalls
        searchSecuritiesCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/security/search',
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
        createSecurityCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/security/store',
                data: data
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });
        },
        updateSecurityCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/security/update',
                data: data
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });
        },
        modifySharesQtyCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/security/modify-shares',
                data: data
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });
        },
        getInitialValuesCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/security/get-initial-values',
                data: data
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });
        },
        unblockSecurityCall(data, callBackHandler){
            axios({
                method: 'post',
                url: '/api/security/get-unblock-amount',
                data: data
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });

        },
        payUnblockSecurityCall(data, callBackHandler){
            axios({
                method: 'post',
                url: '/api/security/pay-unblock-amount',
                data: data
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });

        },
    }
}
