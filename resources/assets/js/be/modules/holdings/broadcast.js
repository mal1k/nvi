
export default {
    created() {
        var self = this;
        //Events
        window.Echo.channel('holding-updates')
            .listen('.holding_updated', (e) => {
                console.log(e);
                var newHolding = true;
                if (self.holdings.length > 0) {
                    for (var i in self.holdings) {
                        if (self.holdings[i].id == e['holding'].id) {
                            newHolding = false;
                            $('#row' + i).fadeToggle(300)
                            self.holdings.splice(i,1)
                            $('#row' + i).fadeToggle(300)
                        }
                    }
                    if(newHolding == true){
                        self.holdings.push(e['holding']);
                    }
                }
            });
    }
}
