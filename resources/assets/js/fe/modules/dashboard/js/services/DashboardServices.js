export default {
    methods: {
        //ApiCalls

        getTransactionsCall(id, page, callBackHandler) {
            axios({
                method: 'get',
                url: '/api/account/get-transactions/' + id + '?page=' + page
            }).then(response => {
                return callBackHandler(response);
            }).catch((error) => {
                return callBackHandler(error.response);
            });
        },
    }
}
