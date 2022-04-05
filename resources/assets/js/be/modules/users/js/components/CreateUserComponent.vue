<template>
    <div>
        <div class="card" style="min-height: 70vh;">
            <div class="card-content">
                <div class="card-body">
                    <form class="form row card-body">
                        <div class="mb-1 col-sm-12 col-md-3">
                            <div class="text-center">
                                <div class="picture-wrapper">
                                    <img class="profile-pic-user" src="" />
                                    <div class="upload-button-user">
                                        <!--   <i class="fa fa-arrow-circle-up" aria-hidden="true"></i> -->
                                    </div>
                                    <input @change="readURL" class="file-upload-user" type="file" accept="image/*"
                                        ref="avatar" />
                                </div>
                                <button v-if="user.id > 0 && typeof(user.avatar) == 'string'" @click="removeAvatar" class="btn btn-sm btn-secondary mt-1"
                                    type="button">Remove</button>
                            </div>
                        </div>
                        <div class="form-group mb-1 col-sm-6 col-md-3">
                            <label for="firstname">Firstname</label>
                            <br>
                            <input v-model="user.firstname" type="text" class="form-control" id="firstname">
                            <span v-if="error.firstname" class="message-error">{{error_message.firstname}}</span>
                        </div>
                        <div class="form-group mb-1 col-sm-6 col-md-3">
                            <label for="lastname">Lastname</label>
                            <br>
                            <input v-model="user.lastname" type="text" class="form-control" id="lastname">
                            <span v-if="error.lastname" class="message-error">{{error_message.lastname}}</span>
                        </div>
                        <div class="form-group mb-1 col-sm-6 col-md-3">
                            <label for="apt">Email</label>
                            <br>
                            <input v-model="user.email" type="text" class="form-control" id="email">
                            <span v-if="error.email" class="message-error">{{error_message.email}}</span>
                        </div>
                        <div class="form-group mb-1 col-sm-6 col-md-3">
                            <label for="phone">Phone</label>
                            <br>
                            <input v-model="user.phone" type="text" class="form-control" id="phone">
                        </div>
                        <div class="form-group mb-1 col-sm-6 col-md-3">
                            <label for="dob">Date of birth</label>
                            <br>
                            <input type='text' v-model="user.date_of_birth" id="dob" class="form-control" />
                        </div>
                        <div class="form-group mb-1 col-sm-6 col-md-3">
                            <label for="state">State</label>
                            <br>
                            <input v-model="address.state" type="text" class="form-control">
                        </div>
                        <div class="form-group mb-1 col-sm-6 col-md-3">
                            <label for="country">Country</label>
                            <br>
                            <input v-model="address.country" type="text" class="form-control">
                        </div>
                        <div class="form-group mb-1 col-sm-6 col-md-3 sep">
                            <label for="status">Status</label>
                            <br>
                            <select v-model="user.status" class="form-control" id="status"
                                style="font-size: 12px !important">
                                <option value="">Select status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <div class="form-group mb-1 col-sm-6 col-md-3 sep">
                            <label for="investor_type">Investor type</label>
                            <br>
                            <select v-model="user.investor_type" class="form-control" id="investor_type"
                                style="font-size: 12px !important">
                                <option value="">Select type</option>
                                <option value="accredited">Accredited</option>
                                <option value="non-accredited">Non-accredited</option>
                            </select>
                        </div>
                        <div class="form-group mb-1 col-sm-12 col-md-3 sep">
                            <label for="role">User role</label>
                            <br>
                            <select @change="changeAction" v-model="role.name" type="text" class="form-control"
                                placeholder="Select Option">
                                <option v-for="(role, index) in roles" :value="role.name" :key="index">{{role.name
                                    | format}}</option>
                            </select>
                            <span v-if="error.role_name" class="message-error">{{error_message.role_name}}</span>
                            <div class="text-center">
                                <span v-if="error.users" class="error_message">{{error_message.roles}}</span>
                            </div>
                        </div>
                        <div class="form-group mb-1 col-sm-12 col-md-1 sep">
                            <div class="form-group" style="margin-top: 25px">
                                <button @click="addUserRole" type="button" class="btn btn-secondary">
                                    <i class="ft-plus"></i>
                                    Role
                                </button>
                            </div>
                        </div>
                        <div v-if="user.roles && user.roles.length > 0" class="form-group mb-1 col-sm-12 col-md-6">
                            <label>Current role</label>
                            <div v-for="(role, index) in user.roles" :key="index" class="row mt-1">
                                <div class="col-8">
                                    <select v-if="role.name == 'admin'" v-model="role.name" disabled
                                        class="form-control input-bordered">
                                        <option v-for="(_role, index) in system_roles" :key="index" :value="_role.name">
                                            {{_role.name | format}}
                                        </option>
                                    </select>
                                    <select v-else v-model="role.name" disabled class="form-control input-bordered">
                                        <option v-for="(_role, index) in management_roles" :key="index"
                                            :value="_role.name">
                                            {{_role.name | format}}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-4">
                                    <button @click="removeRole(index, role)" type="button" class="btn btn-danger">
                                        <i class="ft-x"></i>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>


                    </form>
                    <div class="repeater-default card-body">
                        <div>
                            <div class="text-center">
                                <span v-if="error.users" class="error_message">{{error_message.roles}}</span>
                            </div>
                            <div class="row">
                                <!-- <div class="col-12 col-md-10">
                                    <fieldset>
                                        <div class="custom-control custom-checkbox">
                                            <input v-model="initialize_account" type="checkbox"
                                                class="custom-control-input" name="customCheck" id="customCheck1">
                                            <label class="custom-control-label" for="customCheck1">Initialize Holdings
                                                Account</label>
                                        </div>
                                    </fieldset>
                                    <div v-if="initialize_account" class="row mt-1">
                                        <div class="col-md-3">
                                            <label>Account name</label>
                                            <input class="form-control" v-model="account.name" type="text">
                                        </div>
                                        <div class="col-md-3">
                                            <label>Account type</label>
                                            <select v-model="account.account_type" class="form-control input-bordered">
                                                <option value="personal">Personal</option>
                                                <option value="business">Business</option>
                                                <option value="professional">Professional</option>
                                            </select>
                                        </div>
                                    </div>
                                </div> -->
                                <div v-if="user.id > 0" class="col-12 text-right">
                                    <a data-toggle="modal" data-target="#changePassword"
                                        style="width: 100%; font-size: 12px">
                                        Set new user password</a>
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-group mb-1 col-sm-12 col-md-12" style="width: 100%">
                                    <div class="form-group text-right" style="margin-top: 25px">
                                        <button v-if="user.roles && user.roles.length > 0" @click="createUser"
                                            type="button" class="btn btn-primary">
                                            {{user.id > 0 ? 'Update user' : 'Add user'}}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="changePassword" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Change user password</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <fieldset>
                            <label for="basicInput">Password</label>
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="ft-type"></i>
                                </span>
                                <input v-model="new_password" class="form-control"
                                    :class="{'input-error-select' : error.new_password}" type="password">
                            </div>
                            <span v-if="error.new_password" class="message-error">{{error_message.new_password}}</span>
                        </fieldset>
                        <fieldset style="margin-top: 15px">
                            <label for="basicInput">Confirm password</label>
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="ft-type"></i>
                                </span>
                                <input v-model="new_password_confirmation" class="form-control"
                                    :class="{'input-error-select' : error.new_password_confirmation}" type="password">
                            </div>
                            <span v-if="error.new_password_confirmation"
                                class="message-error">{{error_message.new_password_confirmation}}</span>
                        </fieldset>
                    </div>
                    <div class="modal-footer">
                        <button type="reset" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" @click="changeUserPassword()" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UserServices from '../services/UserServices.js';
    export default {
        props: ['roles', 'units', 'editable_user'],
        mixins: [UserServices],
        data() {
            return {
                user: {
                    id: '',
                    firstname: '',
                    lastname: '',
                    email: '',
                    avatar: '',
                    phone: '',
                    status: '',
                    roles: [],
                    system_roles: [],
                    management_roles: [],
                    addresses: [],
                    investor_type: '',
                    date_of_birth: ',',
                    accounts: []
                },
                initialize_account: false,
                account: {
                    id: '',
                    name: '',
                    account_number: '',
                    account_type: '',
                    balance: '',
                    status: ''
                },
                address: {
                    state: '',
                    country: ''
                },
                role: {
                    name: '',
                    acc_id: ''
                },
                new_password: '',
                new_password_confirmation: '',
                current_units: [],
                error: {
                    firstname: false,
                    lastname: false,
                    email: false,
                    role_name: false,
                    role_acc_id: false,
                    empty_role: false,
                    new_password: false
                },
                error_message: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    role_name: '',
                    role_acc_id: '',
                    empty_role: '',
                    new_password: ''
                }
            }
        },

        methods: {
            createUser() {
                if (this.user.firstname && this.user.lastname && this.user.email) {
                    if (Helpers.validateEmail(this.user.email)) {
                        this.user.addresses = [
                            {
                                state: this.address.state,
                                country: this.address.country,
                            }
                        ]
                        $.LoadingOverlay("show");
                        if (this.$refs.avatar.files.length == 0) {
                            delete this.user.avatar;
                        }
                        if (this.user.id > 0) {
                            this.updateUserCall(this.jsonToFormData(this.user), this.createUserCallback)
                        } else {
                            this.createUserCall(this.jsonToFormData(this.user), this.createUserCallback)
                        }
                    } else {
                        this.error.email = true;
                        this.error_message.email = 'Email is invalid';
                    }
                } else {
                    if (this.user.firstname == '') {
                        this.error.firstname = true;
                        this.error_message.firstname = 'Firstname is required';
                    }
                    if (this.user.lastname == '') {
                        this.error.lastname = true;
                        this.error_message.lastname = 'Lastname is required';
                    }
                    if (this.user.email == '') {
                        this.error.email = true;
                        this.error_message.email = 'Email is required';
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
            createUserCallback(response) {
                $.LoadingOverlay("hide");
                if (response.data.status == 1) {
                    toastr.success(response.data.message, 'Success', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    if (this.user.id > 0) {
                        this.user = response.data.data;
                        if (response.data.data.addresses && response.data.data.addresses.length > 0) {
                            this.address.state = response.data.data.addresses[0].state;
                            this.address.country = response.data.data.addresses[0].country;
                        }
                        if (response.data.data.date_of_birth) {
                            this.user.date_of_birth = moment(response.data.data.date_of_birth, "YYYY-MM-DD").format("MM/DD/YYYY");
                        }
                        this.user.roles = response.data.data._roles;
                    } else {
                        window.location.href = '/admin/users';
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
                    if (this.user.roles.length > 0) {
                        for (var i in this.user.roles) {
                            if (this.role.name != 'admin' && this.user.roles[i].name == this.role.name && this.user.roles[i].acc_id == this.role.acc_id) {
                                this.error.role_acc_id = true;
                                this.error_message.role_acc_id = 'This user has been already registered in this unit';
                                return false;
                            } else if (this.role.name == 'admin') {
                                if (this.user.roles[i].name == this.role.name) {
                                    this.error.role_name = true;
                                    this.error_message.role_name = 'This user has been already registered as admin.';
                                    return false;
                                }
                            }
                        }
                    }

                    var _role = Object.assign({}, this.role);
                    this.user.roles.push(_role);
                    for (var i in this.user.roles) {
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
                        if (this.user.id > 0) {
                            if (role.id > 0) {
                                var data = {
                                    user_id: this.user.id,
                                    role: role.name,
                                    restrictable_id: role.acc_id
                                }
                                $.LoadingOverlay('show');
                                this.removeRoleCall(data, this.removeRoleCallback);
                            }
                            else {
                                this.user.roles.splice(index, 1);
                            }
                        }
                        else {
                            for (var i in this.user.roles) {
                                if (i == index) {
                                    this.user.roles.splice(index, 1);
                                }
                            }
                        }
                    }
                });
            },
            removeRoleCallback(response) {
                if (response.data.status == 1) {
                    toastr.success(response.data.message, 'Success', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    if (this.user.roles.length > 0) {
                        for (var i in this.user.roles) {
                            // if (this.user.roles[i].name == response.data.data.role && this.user.roles[i].acc_id == response.data.data.restrictable_id) {
                            if (this.user.roles[i].name == response.data.data.role) {
                                this.user.roles.splice(i, 1);
                                location.reload();
                            }
                        }
                    } else {
                        this.user.roles = [];
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
                $.LoadingOverlay('hide');
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
                    this.changeUserPasswordCall(this.user.id, data, this.changeUserPasswordCallback);
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
            },
            removeAvatar() {
                if (this.user.id) {
                    $.LoadingOverlay("show");
                    this.removeAvatarCall(this.user.id, this.removeAvatarCallback);
                }
            },
            removeAvatarCallback(response) {
                $.LoadingOverlay("hide");
                if (response.data.status == 1) {
                    this.user.avatar = response.data.data.avatar;
                    this.user.roles = response.data.data._roles;
                    toastr.success(response.data.message, 'Success', { positionClass: 'toast-top-center', containerId: 'toast-top-center' });
                    $('.profile-pic-user').attr('src', "");
                    $(".file-upload-user").val('');
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
            buildFormData(formData, data, parentKey) {
                var self = this;
                if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
                    Object.keys(data).forEach(key => {
                        self.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
                    });
                } else {
                    const value = data == null ? '' : data;
                    formData.append(parentKey, value);
                }
            },

            jsonToFormData(data) {
                const formData = new FormData();
                this.buildFormData(formData, data);
                return formData;
            },
            readURL() {
                if (this.$refs.avatar.files && this.$refs.avatar.files[0]) {
                    this.user.avatar = this.$refs.avatar.files[0];
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        $('.profile-pic-user').attr('src', e.target.result);
                    }
                    reader.readAsDataURL(this.$refs.avatar.files[0]);
                }
            }
        },
        computed: {
            checkForInvestor() {
                if (this.user.roles.some(e => e.name === 'investor')) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        watch: {
            'role.name'(val) {
                if (val) {
                    this.error.role_name = false;
                    this.error_message.role_name = '';
                }
            },
            'user.firstname'(val) {
                if (val) {
                    this.error.firstname = false;
                    this.error_message.firstname = '';
                }
            },
            'user.lastname'(val) {
                if (val) {
                    this.error.lastname = false;
                    this.error_message.lastname = '';
                }
            },
            'user.email'(val) {
                if (val) {
                    this.error.email = false;
                    this.error_message.email = '';
                }
            },
            'role.name'(val) {
                if (val) {
                    this.error.role_name = false;
                    this.error_message.role_name = '';
                }
            },
            'role.acc_id'(val) {
                if (val) {
                    this.error.role_acc_id = false;
                    this.error_message.role_acc_id = '';
                }
            },
            new_password(val) {
                if (val) {
                    this.error.new_password = false;
                    this.error_message.new_password = '';
                }
            },
            new_password_confirmation(val) {
                if (val) {
                    this.error.new_password_confirmation = false;
                    this.error_message.new_password_confirmation = '';
                }
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
            if (this.editable_user) {
                this.user = Object.assign(this.user, this.editable_user);
                if (this.editable_user._roles != null && this.editable_user._roles.length > 0) {
                    this.user.roles = this.editable_user._roles;
                }
                if (this.editable_user.date_of_birth) {
                    this.user.date_of_birth = moment(this.editable_user.date_of_birth, "YYYY-MM-DD").format("MM/DD/YYYY");
                }
                if (this.editable_user.addresses && this.editable_user.addresses.length > 0) {
                    this.address.state = this.editable_user.addresses[0].state;
                    this.address.country = this.editable_user.addresses[0].country;
                }

            }
            this.system_roles = this.roles.filter((role => role.name == 'admin') || (role => role.name == 'super_admin'));
            this.management_roles = this.roles.filter((role => role.name != 'admin') || (role => role.name != 'super_admin'));


        },
        mounted() {
            var self = this;
            this.$nextTick(function () {
                /*  $(".file-upload-user").on('change', function () {
                     self.readURL(this);
                 }); */
                $(".upload-button-user").on('click', function () {
                    $(".file-upload-user").click();
                });
                $("#select2-users").select2({
                    placeholder: 'Select affiliate',
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
                                limit: 5
                            }
                            if (self.editable_user) {
                                terms['where'] = [
                                    ['id', '<>', self.editable_user]
                                ];
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
                            self.user.affiliate_id = repo.id;
                            return repo.firstname + ' ' + repo.lastname;
                        } else {
                            return repo.text;
                        }
                    }

                });

                if (self.editable_user.affiliate_id > 0 && self.editable_user.affiliate) {
                    let data = {
                        name: self.editable_user.affiliate.firstname + " " + self.editable_user.affiliate.lastname,
                        id: self.editable_user.affiliate.id
                    };
                    var option = new Option(data.name, data.id, true, true);
                    $("#select2-users").append(option).trigger('change');
                    $("#select2-users").trigger({
                        type: 'select2:select',
                        params: {
                            data: data
                        }
                    });
                }

                if (this.user.id > 0) {
                    if (this.user.avatar) {
                        $('.profile-pic-user').attr('src', '/storage/' + this.user.avatar);
                    }
                }
            });

            $('#changePassword').on('hidden.bs.modal', function (e) {
                self.new_password = "";
                self.new_password_confirmation = "";
            })

            $('#dob').datetimepicker({
                format: 'MM/DD/YYYY'
            }).on('dp.change', function (e) {
                self.user.date_of_birth = e.date.format('MM/DD/YYYY');
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

    .picture-wrapper {
        position: relative;
        height: 120px;
        width: 120px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 1px 1px 15px -5px black;
        transition: all .3s ease;
        margin-left: 33%;
    }

    .picture-wrapper:hover {
        transform: scale(1.05);
        cursor: pointer;
    }

    .picture-wrapper:hover .profile-pic-user {
        opacity: .5;
    }

    .picture-wrapper .profile-pic-user {
        height: 100%;
        width: 100%;
        transition: all .3s ease;
    }

    .picture-wrapper .profile-pic-user:after {
        font-family: FontAwesome;
        content: "\f007";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        font-size: 120px;
        background: #ecf0f1;
        color: #34495e;
        text-align: center;
    }

    .picture-wrapper .upload-button-user {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    .picture-wrapper .upload-button-user .fa-arrow-circle-up {
        position: absolute;
        font-size: 140px;
        top: -10px;
        text-align: center;
        opacity: 0;
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
        color: #34495e;
    }

    .sep {
        margin-top: 0px;
    }

    .picture-wrapper .upload-button-user:hover .fa-arrow-circle-up {
        opacity: .9;
    }

    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) {
        .picture-wrapper {
            margin-left: 38%;
        }
    }

    /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
    @media (min-width: 768px) {
        .picture-wrapper {
            margin-left: 10%;
        }

        .sep {
            margin-top: 3%;
        }
    }

    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {
        .picture-wrapper {
            margin-left: 15%;
        }

        .sep {
            margin-top: 3%;
        }
    }

    /* Extra large devices (large desktops, 1200px and up) */
    @media (min-width: 1200px) {
        .picture-wrapper {
            margin-left: 33%;
        }

        .sep {
            margin-top: 3%;
        }
    }
</style>
