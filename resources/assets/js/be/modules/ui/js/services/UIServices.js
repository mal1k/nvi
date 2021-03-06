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
        }
    }
}