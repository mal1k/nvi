export default {
    methods: {
        addPaymentAndPayCall(data, payable_type, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/'+payable_type+'/payment-profile/create-and-pay',
                data: data
            }).then(response => {
                if (response.data.status == 1) {
                    return callBackHandler('200', response.data.message, response.data.data);
                } else {
                    return callBackHandler('001', response.data.message, response.data.errors);
                }
            }).catch((error) => {
                return error;
            });
        },
        addPaymentProfileCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/admin/payment/profile',
                data: data
            }).then(response => {
                return callBackHandler(response.data);
            }).catch((error) => {
                return callBackHandler(error);
            });
        },
        addPaymentProfileAsOwnerCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/my/payment/profile',
                data: data
            }).then(response => {
                return callBackHandler(response.data);
            }).catch((error) => {
                return callBackHandler(error);
            });
        },
        payWithoutProfileCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/payment/pay',
                data: data
            }).then(response => {
                return callBackHandler(response.data);
            }).catch((error) => {
                return callBackHandler(error);
            });
        },
        payWithProfileCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/my/payment/profile/pay',
                data: data
            }).then(response => {
                return callBackHandler(response.data);
            }).catch((error) => {
                return callBackHandler(error);
            });
        },
    }
}