export default {
    methods: {
        //ApiCalls
        getPlansCall(params, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/plans/search',
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
        createPlanCall(params, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/plans/store',
                data: params,
            }).then(function (response) {
                callBackHandler(response.data);
            }.bind(this)).catch(function (error) {
                Helpers.unknownError(error.response)
            });
        },
        updatePlanCall(params, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/plans/update',
                data: params,
            }).then(function (response) {
                callBackHandler(response.data);
            }.bind(this)).catch(function (error) {
                Helpers.unknownError(error.response)
            });
        },
        getPlanCall(id, callBackHandler) {
            axios({
                method: 'get',
                url: '/api/plans/show/' + id
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
        removePlanCall(id, callBackHandler) {
            axios({
                method: 'delete',
                url: '/api/plans/delete/' + id
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
    }
}