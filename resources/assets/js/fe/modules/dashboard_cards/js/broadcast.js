
export default {
    created() {
        var self = this;
        //Events
        window.Echo.channel('dashboard-front-updates')
            .listen('.dashboard_front_updated', (e) => {
                console.log(e);
                if(e.array_data.length > 0){
                    for (let i = 0; i < e.array_data.length; i++) {
                        if(e.array_data[i].account_id == self.account.id){
                            self.securities = e.array_data[i].data.securities;
                            self.holdings = e.array_data[i].data.holding
                            self.account_info = e.array_data[i].data.account;
                            self.mdf = e.array_data[i].data.mdf;
                        }

                    }
                }

        });
    }
}
