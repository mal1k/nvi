export default {
    methods: {
        //ApiCalls
        getUsers(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/admin/users/search',
                data: data
            }).then(response => {
                if (response.data.status == 1) {
                    return callBackHandler('200', response.data);
                } else {
                    return callBackHandler('001', response.data.errors);
                }
            }).catch((error) => {
                return callBackHandler('002', error.response);
            });
        },
        createUserCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/admin/users/store-user',
                data: data
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });
        },
        updateUserCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/admin/users/update-user',
                data: data
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });
        },
        updateProfileCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/admin/users/update-profile',
                data: data
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });
        },
        removeRoleCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/admin/users/remove-role',
                data: data
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });
        },
        changeUserPasswordCall(id, data, callBackHandler) {
            axios({
                method: 'put',
                url: '/api/admin/users/change-user-password/' + id,
                data: data
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });
        },
        /* getLedgersCall(data, callBackHandler) {
            axios({
                method: 'post',
                url: '/api/admin/users/ledgers/search',
                data: data
            }).then(response => {
                return callBackHandler(response.data);
            }).catch((error) => {
                return callBackHandler('002', error.response);
            });
        }, */
        removeAvatarCall(id, callBackHandler) {
            axios({
                method: 'delete',
                url: '/api/admin/users/remove-avatar/' + id,
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler('002', error.response);
            });
        },
    }
}