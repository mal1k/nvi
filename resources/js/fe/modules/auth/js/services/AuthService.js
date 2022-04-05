export default {    
    data: function () {
        return {
            session: {
                user_token: '',
                refresh_token: '',
                authenticated: false,
                userInfo: {}
            },
            error:{
                status: 0,
                code: '500',
                errors: 'Connection Error',
            }
        };
    },
    methods: {
        getUserInfoFromLocal() {
            let userInfo = this.get('session').userInfo;
            if (userInfo) {
                return userInfo;
            }
        },
        login(credentials, callBackHandler) {
            axios.post('/login', credentials).then(function (response) {
                callBackHandler(response.data);
            }.bind(this)).catch(function (error) {
                callBackHandler(Helpers.unknownError(error));
            }.bind(this));
        },
        logoutCall(callBackHandler) {
            axios({
                method: 'post',
                url: 'logout',
            }).then(function (response) {
                callBackHandler(response.data);
            }.bind(this)).catch(function (error) {
                callBackHandler(Helpers.unknownError(error));
            });
        },
        getRolesCall(domain, callBackHandler){
            axios.get(domain+'/current-roles').then(function (response) {
                callBackHandler(response.data);
            }.bind(this)).catch(function (error) {
                callBackHandler(Helpers.unknownError(error));
            }.bind(this));
        },
        updateProfileCall(data, callBackHandler){
            axios({
                method: 'post',
                url: '/update-profile',
                data: data
            }).then(function (response) {
                callBackHandler(response.data);
            }.bind(this)).catch(function (error) {
                callBackHandler(Helpers.unknownError(error));
            });
        },
        resetPasswordLinkCall(data, callBackHandler){
            axios({
                method: 'post',
                url: '/api/v1/password/email',
                data: data
            }).then(function (response) {
                callBackHandler(response.data);
            }.bind(this)).catch(function (error) {
                callBackHandler(Helpers.unknownError(error));
            });
        },
        getPlansCall(data,callBackHandler) {
            axios({
                method: 'post',
                url: '/api/plans/search',
                data: data
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
        selectPlanCall(id, total_units, callBackHandler) {
            axios({
                method: 'get',
                url: '/api/plans/select/'+id,
                params: {
                    total_units: total_units
                }
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
        deleteSubscriptionCall(id, callBackHandler){
            axios({
                method: 'delete',
                url: '/api/subscriptions/delete/'+id,
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
        registerCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/v1/register',
                data: data
            }).then(response => {
                return callBackHandler(response.data);
            }).catch((error) => {
                return callBackHandler('002', error);
            });
        },
        getSubscriptionCall(id, callBackHandler){
            axios({
                method: 'get',
                url: '/api/subscriptions/show/'+id,
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
        storeAndPayCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/orders/store-and-pay',
                data: data
            }).then(response => {
                return callBackHandler(response.data);
            }).catch((error) => {
                return callBackHandler('002', error);
            });
        },
        updateSubscriptionCall(params, callBackHandler) {
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
        paySubscriptionWithProfileCall(params, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/subscriptions/pay-with-profile',
                data: params,
            }).then(function (response) {
                callBackHandler(response.data);
            }.bind(this)).catch(function (error) {
                Helpers.unknownError(error.response)
            });
        },
        paySubscriptionWithOutProfileCall(params, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/subscriptions/pay-without-profile',
                data: params,
            }).then(function (response) {
                callBackHandler(response.data);
            }.bind(this)).catch(function (error) {
                Helpers.unknownError(error.response)
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