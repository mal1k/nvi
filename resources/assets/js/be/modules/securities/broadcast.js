import { defaultsDeep } from "lodash";

export default {
    created() {
        var self = this;
        //Events
        window.Echo.channel('security-updates')
            .listen('.security_updated', (e) => {
                console.log(e);
                if (self.securities.length > 0) {
                    for (var i in self.securities) {
                        if (self.securities[i].security_number == e.security_number) {
                            $('#row' + i).fadeToggle(300)
                            self.securities[i].interest_rate = e.interest_rate;
                            self.securities[i].id = e.id;
                            self.securities[i].total_price = e.total_price;
                            self.securities[i].expected_value = e.expected_value;
                            self.securities[i].status = e.status;
                            self.securities[i].put = e.put;
                            self.securities[i].straddle = e.straddle;
                            self.securities[i].simulations = e.simulations;
                            self.securities[i].creator_id = e.creator_id;
                            $('#row' + i).fadeToggle(300)
                        }
                    }
                }
            });
    }
}
