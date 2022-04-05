
export default {
    created() {
        var self = this;
        //Events
        window.Echo.channel('security-updates')
            .listen('.security_updated', (e) => {
                console.log(e);
                var newSecurity = true;
                if (self.securities.length > 0) {
                    for (var i in self.securities) {
                        if (self.securities[i].security_number == e.security_number && e.status == "active") {
                            newSecurity=false;
                            $('#row' + i).fadeToggle(300)
                            self.securities[i].interest_rate = e.interest_rate;
                            self.securities[i].id = e.id;
                            self.securities[i].total_price = e.total_price;
                            self.securities[i].expected_value = e.expected_value;
                            self.securities[i].expected_value = e.maturity_date;
                            self.securities[i].status = e.status;
                            $('#row' + i).fadeToggle(300)
                        }
                    }
                    for (let i = 0; i < self.accounts.length; i++) {
                        if (self.accounts[i].id == self.selected_account) {
                            var balance = self.accounts[i].balance
                        };
                    };
                    if (newSecurity == true && e.total_price <= balance){
                        self.securities.push(e);
                    }
                }
            });
    }
}
