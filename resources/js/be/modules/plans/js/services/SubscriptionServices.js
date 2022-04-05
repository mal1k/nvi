export default {
    methods: {
        //ApiCalls
        getSubscriptionsCall(params, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/subscriptions/search',
                data: params,
            }).then(function (response) {
                if (Helpers.isJson(response.data)) {
                    callBackHandler(response.data);
                } else {
                    callBackHandler(Helpers.unknownError(response));
                }
            }.bind(this)).catch(function (error) {
                if (Helpers.isJson(error.response.data)) {
                    callBackHandler(error.response.data);
                } else {
                    callBackHandler(Helpers.unknownError(error.response));
                }
            });
        },
        createSubscriptionCall(params, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/subscriptions/store',
                data: params,
            }).then(function (response) {
                callBackHandler(response.data);
            }.bind(this)).catch(function (error) {
                Helpers.unknownError(error.response)
            });
        },
        updateSubscriptionCall(params, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/subscriptions/update',
                data: params,
            }).then(function (response) {
                callBackHandler(response.data);
            }.bind(this)).catch(function (error) {
                Helpers.unknownError(error.response)
            });
        },
        changeSubscriptionCall(params, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/subscriptions/change',
                data: params,
            }).then(function (response) {
                callBackHandler(response.data);
            }.bind(this)).catch(function (error) {
                Helpers.unknownError(error.response)
            });
        },
        getSubscriptionCall(id, callBackHandler) {
            axios({
                method: 'get',
                url: '/api/subscriptions/show/' + id
            }).then(function (response) {
                if (Helpers.isJson(response.data)) {
                    callBackHandler(response.data);
                } else {
                    callBackHandler(Helpers.unknownError(response));
                }
            }.bind(this)).catch(function (error) {
                if (Helpers.isJson(error.response.data)) {
                    callBackHandler(error.response.data);
                } else {
                    callBackHandler(Helpers.unknownError(error.response));
                }
            });
        },
        getSubscriptionAsOwnerCall(id, params, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/subscriptions/show/' + id,
                data: params,
            }).then(function (response) {
                if (Helpers.isJson(response.data)) {
                    callBackHandler(response.data);
                } else {
                    callBackHandler(Helpers.unknownError(response));
                }
            }.bind(this)).catch(function (error) {
                if (Helpers.isJson(error.response.data)) {
                    callBackHandler(error.response.data);
                } else {
                    callBackHandler(Helpers.unknownError(error.response));
                }
            });
        },
        removeSubscriptionCall(id, callBackHandler) {
            axios({
                method: 'delete',
                url: '/api/subscriptions/delete/' + id
            }).then(function (response) {
                if (Helpers.isJson(response.data)) {
                    callBackHandler(response.data);
                } else {
                    callBackHandler(Helpers.unknownError(response));
                }
            }.bind(this)).catch(function (error) {
                if (Helpers.isJson(error.response.data)) {
                    callBackHandler(error.response.data);
                } else {
                    callBackHandler(Helpers.unknownError(error.response));
                }
            });
        },
        getPlanTypesCall(callBackHandler){
            axios({
                method: 'get',
                url: '/api/plans/type',
            }).then(function (response) {
                callBackHandler(response.data);
            }.bind(this)).catch(function (error) {
                Helpers.unknownError(error.response)
            });
        }
    }
}