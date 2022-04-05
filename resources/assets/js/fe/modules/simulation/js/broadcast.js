
export default {
    created() {
        var self = this;
        //Events
        window.Echo.channel('sim-job-updates')
            .listen('.sim_job_updated', (e) => {
                console.log(e);
                if (self.selected_security.security_number == e.partA.security_number) {
                    self.selected_security = Object.assign({}, e.partA);
                    self.data_investor.push(e.partA.total_price.toFixed(2))
                    self.data_nvic.push(e.partB.total_price.toFixed(2))
                    self.array_labelsA.push(self.array_labelsA.length)
                    self.array_labelsB.push(self.array_labelsB.length)

                    self.array_invA.push(e.partA.total_price.toFixed(2) - self.data_investor[self.data_investor.length-2])
                    self.array_invB.push(e.partB.total_price.toFixed(2) - self.data_nvic[self.data_nvic.length-2])

                    self.addData();
                }
            });
    }
}
