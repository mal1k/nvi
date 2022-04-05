<template>
    <div class="card">
        <div class="card-content">
            <div class="card-body">
                <div class="col-md-12">
                    <h4 style="margin-bottom:10px;"><strong>Users</strong></h4>
                </div>
                <div>
                    <div class="card-content">
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-12 col-md-6 " style="padding-left:21px; padding-right:21px;">
                                        <label>Search</label>
                                        <input type="text" v-model="query" class="form-control" id="query"
                                            placeholder="Name, Phone & Email">
                                    </div>
                                    <div class="col-12 col-md-3 " style="padding-left:21px; padding-right:21px;">
                                        <div class="form-group" style="width: 100%;">
                                            <label>Roles</label>
                                            <select id="select2-roles" class="select2-placeholder form-control"
                                                data-placeholder="Select roles..." style="width: 100%">
                                                <option value="all">All</option>
                                                <option v-for="(role, index) in roles" :key="index" :value="role.name"
                                                    style="text-transform:capitalize;">
                                                    {{role.name | format}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div v-if="users.length >0" class="table-responsive">
                                <table id="recent-customers"
                                    class="table table-hover mb-0 ps-container ps-theme-default">
                                    <thead>
                                        <tr>
                                            <th>Full Name</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th class="text-center">Status</th>
                                            <th class="text-center">Audit</th>
                                            <th class="text-center"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(user, index) in users" :key="index">
                                            <td class="text-truncate">
                                                <div class="avatar avatar-md mr-1">
                                                    <img class="rounded-circle"
                                                        :src="user.avatar ? '/storage/' + user.avatar : '/be/images/avatar-placeholder.png'">
                                                    <span style="margin-left: 10px;">{{user.firstname}} {{user.lastname}}</span>
                                                </div>
                                            </td>
                                            <td class="text-truncate separated">{{user.phone}}</td>
                                            <td class="text-truncate separated">{{user.email}}</td>
                                            <td class="text-center separated">
                                                <span
                                                    :class="{'badge badge-primary' : user.status == 'active',
                                                        'badge badge-danger' : user.status == 'inactive'}">{{user.status | format}}
                                                </span>
                                            </td>
                                            <td style="text-align:center;"><a style="margin-top:10px;" :href="'/api/admin/su/'+user.id"><i style="margin-top:15px;"
                                                        class="fa fa-eye text-navy"></i></a></td>
                                            <td style="text-align:center;"><a style="margin-top:10px;" :href="'/admin/users/edit/' + user.id"
                                                    class="btn mr-1 mb-1 btn-outline-secondary btn-sm"><i class="fa fa-pencil"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div v-else class="text-center">
                                <div style="padding: 20px">
                                    <h4>{{no_found_msg}}</h4>
                                </div>
                            </div>
                        </div>
                        <order-paginator v-if="paginator.last_page > 1" :pagination="paginator"
                            @paginate="searchUsers()" :offset="offset"></order-paginator>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UserServices from '../services/UserServices.js';
    import Paginator from '../../../../../components/Paginator.vue';

    export default {
        mixins: [UserServices],
        components: {
            'order-paginator': Paginator
        },
        props: ['roles'],
        data() {
            return {
                users: [],
                no_found_msg: 'No users found',
                query: '',
                paginator: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                offset: 10,
                role: 'all'
            }
        },
        watch: {
            query: _.debounce(function () {
                this.searchUsers(1);
            }, 300),
            role: _.debounce(function () {
                this.searchUsers(1);
            }, 300)
        },
        methods: {
            getUsersCallback(code, response, errors) {
                if (code == '200') {
                    if (response.data.exported) {
                        swal("Success!", "The report is being exported and will be sent to your email.", "success");
                    } else {
                        if (response.data.length > 0) {
                            this.paginator = response.pagination;
                        } else {
                            this.paginator = {
                                total: 0,
                                per_page: 2,
                                from: 1,
                                to: 0,
                                current_page: 1
                            };
                        }
                        this.users = response.data;
                    }
                } else {
                    swal("Error!", errors[0], "error");
                }
                $.LoadingOverlay("hide");
            },
            print() {
                printJS({ printable: 'recent-orders', type: 'html', header: 'Sales by Date Range (' + this.start_date + '-' + this.end_date + ')' });
            },
            searchUsers(page, exported = false) {
                $.LoadingOverlay("show");
                var params = {
                    page: (typeof page == 'undefined') ? this.paginator.current_page : page,
                    limit: this.offset,
                    fields: ['id', 'firstname', 'lastname', 'phone', 'email', 'users', 'status', 'avatar'],
                };

                if (this.query != '') {
                    let query = this.query;
                    params['query'] = {
                        value: "+*" + query.replace(/\s+/g, "* +*") + "*", // search term
                        fields: ['firstname', 'lastname', 'phone', 'email', 'status', 'avatar']
                    }
                }
                if (exported) {
                    params['export'] = exported;
                }

                if (this.role != '' && this.role != 'all') {
                    params['with'] = {
                        roles: {
                            where: [
                                ['name', this.role]
                            ]
                        }
                    }
                }

                this.getUsers(params, this.getUsersCallback);
            }
        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            },
            format: function (value) {
                if (!value) return ''
                value = value.replace('_', ' ').toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        created() {
            $.LoadingOverlay("show");
            this.getUsers({
                page: this.paginator.current_page,
                limit: this.offset,
                fields: ['id', 'firstname', 'lastname', 'phone', 'email', 'users', 'status', 'avatar'],
            }, this.getUsersCallback);
        },
        mounted() {
            var _this = this;
            this.$nextTick(function () {
                $("#select2-roles").select2();
                $("#select2-roles").on('change', function (e) {
                    _this.role = $("#select2-roles").val()
                });
            })
        }
    }
</script>
<style>
    .icon-store {
        width: 30px;
        height: auto;
    }

    .icon-amazon {
        width: 50px;
        height: auto;
    }

    .input-error-select {
        color: #d61212 !important;
        border: 1px solid #b60707 !important;
        border-radius: 5px
    }

    .message-error {
        color: #d61212;
        float: right;
        padding-top: 10px;
        font-size: 12px;
    }

    .icons-custom {
        width: 20px;
        height: 20px;
    }
    .separated{
        padding-top: 20px !important;
    }
</style>
