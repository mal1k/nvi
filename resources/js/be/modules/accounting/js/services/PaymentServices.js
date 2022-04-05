export default {
    methods: {
        getProfilesCall(callBackHandler) {
            axios({
                method: 'get',
                url: '/api/profiles'
            }).then(response => {
                return callBackHandler(response.data);
            }).catch(error => {
                return callBackHandler(error);
            });
        },
        setAsDefaultAsOwnerCall(id, data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/my/payment/profile/'+id+'/set-default',
                data: data
            }).then(response => {
                return callBackHandler(response.data);
            }).catch(error => {
                return callBackHandler(error);
            });
        },
        setAsDefaultCall(id, data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/payment/profile/'+id+'/set-default',
                data: data
            }).then(response => {
                return callBackHandler(response.data);
            }).catch(error => {
                return callBackHandler(error);
            });
        },
        removePaymentProfileCall(id,data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/payment/profile/'+id+'/remove',
                data: data
            }).then(response => {
                return callBackHandler(response.data);
            }).catch(error => {
                return callBackHandler(error);
            });
        },
        removePaymentProfileAsOwnerCall(id,data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/my/payment/profile/'+id+'/remove',
                data: data
            }).then(response => {
                return callBackHandler(response.data);
            }).catch(error => {
                return callBackHandler(error);
            });
        },
        getTransactionsCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/transactions/search',
                data: data
            }).then(response => {
                return callBackHandler(response.data);
            }).catch(error => {
                return callBackHandler(error);
            });
        },
        getTransactionsAsOwnerCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/my/transactions/search',
                data: data
            }).then(response => {
                return callBackHandler(response.data);
            }).catch(error => {
                return callBackHandler(error);
            });
        },
    }
}