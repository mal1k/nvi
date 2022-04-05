import { defaultsDeep } from "lodash";

export default {
    created() {
        var self = this;
        //Events
        window.Echo.channel('account-updates')
            .listen('.account_updated', (e) => {
                console.log(e);
                if (self.accounts.length > 0) {
                    for (var i in self.accounts) {
                        if(self.accounts[i].id == e.id){
                            $('#row' + i).fadeToggle(300)
                            self.accounts[i].balance = e.balance;
                            $('#row' + i).fadeToggle(300)
                        }
                    }
                }
            });
    }
}
