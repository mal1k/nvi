
export default {
    created() {
        var self = this;
        //Events
        window.Echo.channel('security-updates')
            .listen('.security_updated', (e) => {
                console.log(e);
                if (self.holdings.length > 0) {
                    for (var i in self.holdings) {
                        if (self.holdings[i].security.id == e.id) {
                            $('#row' + i).fadeToggle(300)
                            self.holdings[i].security.total_price = e.total_price;
                            self.holdings[i].security.interest_rate = e.interest_rate;
                            self.holdings[i].security.expected_value = e.expected_value;
                            self.holdings[i].security.id = e.id;
                            self.holdings[i].security.security_number = e.security_number;
                            self.holdings[i].security_id = e.id;
                            $('#row' + i).fadeToggle(300)
                        }
                        break;
                    }
                }
            });
    }
}
