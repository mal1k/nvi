<template>
    <div>
        <div class="card" style="min-height: 70vh;">
            <div class="card-content">
                <div class="card-body">
                    <form class="form row card-body">
                        <div class="form-group mb-1 col-sm-6 col-md-3">
                            <label for="status">Account name</label>
                            <input v-model="account.name" type="text" class="form-control">
                        </div>
                        <div class="form-group mb-1 col-sm-6 col-md-3">
                            <label for="status">Account owner</label>
                            <select id="select2-users" class="form-control" style="font-size: 12px !important">
                                <option value="">Select account owner</option>
                            </select>
                            <span v-if="error.user_id" class="message-error">{{error_message.user_id}}</span>
                        </div>
                        <div class="form-group mb-1 col-sm-6 col-md-3">
                            <label for="status">Account type</label>
                            <select v-model="account.account_type" class="form-control"
                                style="font-size: 12px !important">
                                <option value="">Select account type</option>
                                <option value="personal">Personal</option>
                                <option value="business">Business</option>
                                <option value="professional">Professional</option>
                                <option value="nvic">NVIC</option>
                                <option value="mdf">MDF</option>
                                <option value="sf">SF</option>
                            </select>
                            <span v-if="error.account_type" class="message-error">{{error_message.account_type}}</span>
                        </div>
                        <div class="form-group mb-1 col-sm-6 col-md-3">
                            <label for="status">Status</label>
                            <select v-model="account.status" class="form-control" style="font-size: 12px !important">
                                <option value="">Select account status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </form>
                    <div class="repeater-default card-body">
                        <div>
                            <div class="text-center">
                                <span v-if="error.users" class="error_message">{{error_message.roles}}</span>
                            </div>
                            <div class="row">
                                <div class="form-group mb-1 col-sm-12 col-md-12" style="width: 100%">
                                    <div class="form-group text-right" style="margin-top: 25px">
                                        <button @click="createAccount" type="button" class="btn btn-primary">
                                            {{account.id > 0 ? 'Update account' : 'Add account'}}
                                        </button>
                                        <a href="/admin/accounts" class="btn btn-light">Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AccountServices from '../services/AccountServices.js';
    export default {
        props: ['editable_account'],
        mixins: [AccountServices],
        data() {
            return {
                account: {
                    id: '',
                    name: '',
                    user_id: '',
                    creator_id: '',
                    account_number: '',
                    account_type: '',
                    balance: '',
                    status: '',
                },
                error: {
                    name: false,
                    user_id: false,
                    account_number: false,
                    account_type: false,
                    balance: false,
                    status: false
                },
                error_message: {
                    name: '',
                    user_id: '',
                    account_number: '',
                    account_type: '',
                    balance: '',
                    status: ''
                }
            }
        },

        methods: {
            createAccount() {
                if (this.account.user_id && this.account.account_type) {
                    $.LoadingOverlay("show");
                    if (this.account.id > 0) {
                        this.updateAccountCall(this.account, this.createAccountCallback)
                    } else {
                        this.createAccountCall(this.account, this.createAccountCallback)
                    }
                } else {
                    if (!this.account.user_id) {
                        this.error.user_id = true;
                        this.error_message.user_id = 'Owner account is required';
                    }
                    if (this.account.account_type == '') {
                        this.error.account_type = true;
                        this.error_message.account_type = 'Account type is required';
                    }
                }
            },
            changeAction() {
                if (this.role.name == 'admin') {
                    $("#select2-units").prop("disabled", true);
                } else {
                    $("#select2-units").prop("disabled", false);
                }
            },
            createAccountCallback(response) {
                $.LoadingOverlay("hide");
                if (response.data.status == 1) {
                    toastr.success(response.data.message, 'Success', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    if (this.account.id > 0) {
                        this.account = response.data.data;
                        if (response.data.data.addresses && response.data.data.addresses.length > 0) {
                            this.address.state = response.data.data.addresses[0].state;
                            this.address.country = response.data.data.addresses[0].country;
                        }
                        if (response.data.data.date_of_birth) {
                            this.account.date_of_birth = moment(response.data.data.date_of_birth, "YYYY-MM-DD").format("MM/DD/YYYY");
                        }
                        this.account.roles = response.data.data._roles;
                    } else {
                        window.location.href = '/admin/accounts';
                    }
                } else {
                    if (Helpers.isAssoc(response.data.errors)) {
                        let errors = [];
                        for (var i in response.data.errors) {
                            var string
                            errors.push('<span>' + response.data.errors[i] + '</span></br>')
                        }
                        toastr.error(errors, 'Some error(s) has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    } else {
                        toastr.error(response.data.errors[0], 'An error has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    }
                }
            },
            addUserRole() {
                if (this.role.name) {
                    if (this.account.roles.length > 0) {
                        for (var i in this.account.roles) {
                            if (this.role.name != 'admin' && this.account.roles[i].name == this.role.name && this.account.roles[i].acc_id == this.role.acc_id) {
                                this.error.role_acc_id = true;
                                this.error_message.role_acc_id = 'This account has been already registered in this unit';
                                return false;
                            } else if (this.role.name == 'admin') {
                                if (this.account.roles[i].name == this.role.name) {
                                    this.error.role_name = true;
                                    this.error_message.role_name = 'This account has been already registered as admin.';
                                    return false;
                                }
                            }
                        }
                    }

                    var _role = Object.assign({}, this.role);
                    this.account.roles.push(_role);
                    for (var i in this.account.roles) {
                        this.$nextTick(function () {
                            $("#select2-units" + i).select2({});
                        });
                    }
                    this.clearRole();
                } else {
                    this.error.role_name = true;
                    this.error_message.role_name = 'User role is required';
                }
            },
            removeRole(index, role) {
                swal({
                    title: "Are you sure?",
                    text: "Please confirm you want to remove this role.",
                    icon: "warning",
                    buttons: {
                        cancel: {
                            text: "Cancel",
                            value: null,
                            visible: true,
                            className: "btn-warning",
                            closeModal: true,
                        },
                        confirm: {
                            text: "Yes",
                            value: true,
                            visible: true,
                            className: "btn-primary",
                            closeModal: true
                        }
                    }
                }).then(isConfirm => {
                    if (isConfirm) {
                        if (this.account.id > 0) {
                            if (role.id > 0) {
                                var data = {
                                    user_id: this.account.id,
                                    role: role.name,
                                    restrictable_id: role.acc_id
                                }
                                $.LoadingOverlay('show');
                                this.removeRoleCall(data, this.removeRoleCallback);
                            }
                            else {
                                this.account.roles.splice(index, 1);
                            }
                        }
                        else {
                            for (var i in this.account.roles) {
                                if (i == index) {
                                    this.account.roles.splice(index, 1);
                                }
                            }
                        }
                    }
                });
            },
            removeRoleCallback(response) {
                $.LoadingOverlay('hide');
                if (response.data.status == 1) {
                    toastr.success(response.data.message, 'Success', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    if (this.account.roles.length > 0) {
                        for (var i in this.account.roles) {
                            if (this.account.roles[i].name == response.data.data.role && this.account.roles[i].acc_id == response.data.data.restrictable_id) {
                                this.account.roles.splice(i, 1);
                            }
                        }
                    } else {
                        this.account.roles = [];
                    }
                } else {
                    if (Helpers.isAssoc(response.data.errors)) {
                        let errors = [];
                        for (var i in response.data.errors) {
                            var string
                            errors.push('<span>' + response.data.errors[i] + '</span></br>')
                        }
                        toastr.error(errors, 'Some error(s) has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    } else {
                        toastr.error(response.data.errors[0], 'An error has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    }
                }
            },
            clearRole() {
                this.role.name = '';
                this.role.acc_id = '';
                $("#select2-units").val('').trigger('change');
            },
            changeUserPassword() {
                if (this.new_password && this.new_password_confirmation) {
                    let data = {
                        'new_password': this.new_password,
                        'new_password_confirmation': this.new_password_confirmation
                    }
                    $.LoadingOverlay("show");
                    this.changeUserPasswordCall(this.account.id, data, this.changeUserPasswordCallback);
                } else {
                    if (!this.new_password) {
                        this.error.new_password = true;
                        this.error_message.new_password = "Password is required";
                    }
                    if (!this.new_password_confirmation) {
                        this.error.new_password_confirmation = true;
                        this.error_message.new_password_confirmation = "Password confirmation is required";
                    }
                }
            },
            changeUserPasswordCallback(response) {
                $.LoadingOverlay("hide");
                if (response.data.status == 1) {
                    $('#changePassword').modal('hide');
                    toastr.success(response.data.message, 'Success', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                } else {
                    if (Helpers.isAssoc(response.data.errors)) {
                        let errors = [];
                        for (var i in response.data.errors) {
                            var string
                            errors.push('<span>' + response.data.errors[i] + '</span></br>')
                        }
                        toastr.error(errors, 'Some error(s) has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    } else {
                        toastr.error(response.data.errors[0], 'An error has occurred', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    }
                }
            }
        },
        computed: {
            checkForInvestor() {
                if (this.account.roles.some(e => e.name === 'investor')) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        watch: {
            'account.user_id'(val) {
                if (val) {
                    this.error.user_id = false;
                    this.error_message.user_id = '';
                }
            },
            'account.account_type'(val) {
                if (val) {
                    this.error.account_type = false;
                    this.error_message.account_type = '';
                }
            },
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
            if (this.editable_account) {
                this.account = Object.assign(this.account, this.editable_account);
            }

        },
        mounted() {
            var self = this;
            this.$nextTick(function () {
                $("#select2-users").select2({
                    placeholder: 'Select account owner',
                    allowClear: true,
                    width: '100%',
                    ajax: {
                        url: '/api/admin/users/search',
                        dataType: 'json',
                        delay: 250,
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        type: 'POST',
                        data: function (params) {
                            params.term = (typeof params.term == 'undefined') ? '' : params.term;
                            var terms = {
                                query: params.term + '*', // search term
                                fields: ['id', 'firstname', 'lastname'],
                                page: params.page,
                                limit: 10
                            }
                            return terms;
                        },
                        processResults: function (response, params) {
                            params.page = params.page || 1;
                            return {
                                results: response.data,
                                pagination: {
                                    more: (params.page) <= response.pagination.total_pages
                                }
                            };
                        },
                        cache: true
                    },
                    escapeMarkup: function (markup) { return markup; },
                    templateResult: function (repo) {
                        if (repo.loading) return repo.text;
                        var markup = "<div class='select2-result-repository clearfix'>" + repo.firstname + ' ' + repo.lastname + "</div>";
                        return markup;
                    },
                    templateSelection: function (repo) {
                        if (repo.firstname) {
                            return repo.firstname + ' ' + repo.lastname;
                        } else {
                            return 'Select account owner'
                        }
                    }
                });

                $("#select2-users").on("select2:select", function (e) {
                    self.account.user_id = $(e.currentTarget).val();
                });
                $('#select2-users').on('select2:clear', function (e) {
                    self.account.user_id = '';
                });

                if (self.account.id > 0) {
                    $("#select2-users").val(self.account.user_id).trigger("change");
                }
            });
        }
    }
</script>
<style>
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

    label {
        font-size: 12px
    }

    .select2-selection__rendered {
        font-size: 12px !important;
    }

    .vcenter {
        display: inline-block;
        vertical-align: middle;
        float: none;
    }
</style>
<style scoped>
    input,
    select,
    textarea {
        font-size: 12px;
    }

    .logo-list {
        width: 80px;
        height: auto;
    }
</style>
