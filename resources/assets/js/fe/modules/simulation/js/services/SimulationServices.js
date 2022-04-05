export default {
    methods: {
        //ApiCalls
        simSecurityCall(data, callBackHandler) {
            axios({
                method: "post",
                url: "/api/investor/simulate",
                data: data
            })
                .then(response => {
                    return callBackHandler(response);
                })
                .catch(error => {
                    return callBackHandler(error.response);
                });
        },
        graphSecurityInformationCall(data, callBackHandler){
            axios({
                method: "post",
                url: "/api/investor/graph-info",
                data: data
            })
                .then(response => {
                    return callBackHandler(response);
                })
                .catch(error => {
                    return callBackHandler(error.response);
                });
        },
        tableSecurityInformationCall(data, callBackHandler){
            axios({
                method: 'post',
                url: "/api/investor/table-info",
                data: data
            })
                .then(response => {
                    return callBackHandler(response);
                })
                .catch(error => {
                    return callBackHandler(error.response);
                });
        },
    }
};
