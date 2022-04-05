export default { 
    data: function(){
        return {
            pagination: {
                per_page: 10,
                current_page: 1,
                total: 0,
                pages: 0,
            },
            callBackHandler:({})
        }
    },
    methods:{
        paginationInit: function (per_page, callBackHandler) {
            this.pagination.current_page = 1;
            this.pagination.per_page = per_page;
            this.callBackHandler = callBackHandler;
        },
        calcPages: function (pagination) {
            this.pagination = Object.assign({}, this.pagination, {
                per_page: this.pagination.per_page,
                current_page: pagination.current_page,
                total: pagination.total,
                pages: pagination.total_pages,
            });
        },
        showRecords: function (from) {
            var param = {
                page: from,
                limit: this.pagination.per_page,
            };
            this.callBackHandler(param);
        },
        from: function (pageNumber) {
            return ((pageNumber - 1) * this.pagination.per_page + 1) * 1;
        },
        to: function (from) {
            var to = (from * 1) + (this.pagination.per_page - 1) * 1;
            if (to >= this.pagination.total) {
                to = this.pagination.total;
            }
            return to;
        },
        showPage: function (pageNumber) {
            return this.showRecords(pageNumber);
        },
        first: function () {
            if (this.pagination.current_page > 1) {
                this.showPage(1);
            }
        },
        prev: function () {
            if (this.pagination.current_page > 1)
                this.showPage(this.pagination.current_page - 1);
        },
        next: function () {
            if (this.pagination.current_page < this.pagination.pages) {
                this.showPage(this.pagination.current_page + 1);
            }
        },
        last: function () {
            if (this.pagination.current_page < this.pagination.pages) {
                this.showPage(this.pagination.pages);
            }
        },
        print_show: function () {
            if (this.pagination.pages === 0) {
                return 'Showing 0 to 0 of 0';
            }
            return 'Showing ' + this.from(this.pagination.current_page) + ' to ' + this.to(this.from(this.pagination.current_page)) + ' of ' + this.pagination.total;
        }
    }
}