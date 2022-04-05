import { defaultsDeep } from "lodash";

export default {
    created() {
        var self = this;
        //Events
        window.Echo.channel('dashboard-updates')
            .listen('.dashboard_updated', (e) => {
                console.log(e);
                self.users_prop = e.users;
                self.active_accounts_prop=e.active_accounts;
                self.securities_prop=e.securities;
                self.holdings_prop=e.holdings;
                self.transactions_prop=e.transactions;
            });
    }
}
