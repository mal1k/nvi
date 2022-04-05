/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_UserServices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/UserServices.js */ "./resources/assets/js/be/modules/users/js/services/UserServices.js");
var _watch;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['roles', 'units', 'editable_user'],
  mixins: [_services_UserServices_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
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
    };
  },
  methods: {
    createUser: function createUser() {
      if (this.user.firstname && this.user.lastname && this.user.email) {
        if (Helpers.validateEmail(this.user.email)) {
          this.user.addresses = [{
            state: this.address.state,
            country: this.address.country
          }];
          $.LoadingOverlay("show");

          if (this.$refs.avatar.files.length == 0) {
            delete this.user.avatar;
          }

          if (this.user.id > 0) {
            this.updateUserCall(this.jsonToFormData(this.user), this.createUserCallback);
          } else {
            this.createUserCall(this.jsonToFormData(this.user), this.createUserCallback);
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
    changeAction: function changeAction() {
      if (this.role.name == 'admin') {
        $("#select2-units").prop("disabled", true);
      } else {
        $("#select2-units").prop("disabled", false);
      }
    },
    createUserCallback: function createUserCallback(response) {
      $.LoadingOverlay("hide");

      if (response.data.status == 1) {
        toastr.success(response.data.message, 'Success', {
          positionClass: 'toast-top-center',
          containerId: 'toast-top-center'
        });

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
          var errors = [];

          for (var i in response.data.errors) {
            var string;
            errors.push('<span>' + response.data.errors[i] + '</span></br>');
          }

          toastr.error(errors, 'Some error(s) has occurred', {
            positionClass: 'toast-top-center',
            containerId: 'toast-top-center'
          });
        } else {
          toastr.error(response.data.errors[0], 'An error has occurred', {
            positionClass: 'toast-top-center',
            containerId: 'toast-top-center'
          });
        }
      }
    },
    addUserRole: function addUserRole() {
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
    removeRole: function removeRole(index, role) {
      var _this = this;

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
            closeModal: true
          },
          confirm: {
            text: "Yes",
            value: true,
            visible: true,
            className: "btn-primary",
            closeModal: true
          }
        }
      }).then(function (isConfirm) {
        if (isConfirm) {
          if (_this.user.id > 0) {
            if (role.id > 0) {
              var data = {
                user_id: _this.user.id,
                role: role.name,
                restrictable_id: role.acc_id
              };
              $.LoadingOverlay('show');

              _this.removeRoleCall(data, _this.removeRoleCallback);
            } else {
              _this.user.roles.splice(index, 1);
            }
          } else {
            for (var i in _this.user.roles) {
              if (i == index) {
                _this.user.roles.splice(index, 1);
              }
            }
          }
        }
      });
    },
    removeRoleCallback: function removeRoleCallback(response) {
      if (response.data.status == 1) {
        toastr.success(response.data.message, 'Success', {
          positionClass: 'toast-top-center',
          containerId: 'toast-top-center'
        });

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
          var errors = [];

          for (var i in response.data.errors) {
            var string;
            errors.push('<span>' + response.data.errors[i] + '</span></br>');
          }

          toastr.error(errors, 'Some error(s) has occurred', {
            positionClass: 'toast-top-center',
            containerId: 'toast-top-center'
          });
        } else {
          toastr.error(response.data.errors[0], 'An error has occurred', {
            positionClass: 'toast-top-center',
            containerId: 'toast-top-center'
          });
        }
      }

      $.LoadingOverlay('hide');
    },
    clearRole: function clearRole() {
      this.role.name = '';
      this.role.acc_id = '';
      $("#select2-units").val('').trigger('change');
    },
    changeUserPassword: function changeUserPassword() {
      if (this.new_password && this.new_password_confirmation) {
        var data = {
          'new_password': this.new_password,
          'new_password_confirmation': this.new_password_confirmation
        };
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
    changeUserPasswordCallback: function changeUserPasswordCallback(response) {
      $.LoadingOverlay("hide");

      if (response.data.status == 1) {
        $('#changePassword').modal('hide');
        toastr.success(response.data.message, 'Success', {
          positionClass: 'toast-top-center',
          containerId: 'toast-top-center'
        });
      } else {
        if (Helpers.isAssoc(response.data.errors)) {
          var errors = [];

          for (var i in response.data.errors) {
            var string;
            errors.push('<span>' + response.data.errors[i] + '</span></br>');
          }

          toastr.error(errors, 'Some error(s) has occurred', {
            positionClass: 'toast-top-center',
            containerId: 'toast-top-center'
          });
        } else {
          toastr.error(response.data.errors[0], 'An error has occurred', {
            positionClass: 'toast-top-center',
            containerId: 'toast-top-center'
          });
        }
      }
    },
    removeAvatar: function removeAvatar() {
      if (this.user.id) {
        $.LoadingOverlay("show");
        this.removeAvatarCall(this.user.id, this.removeAvatarCallback);
      }
    },
    removeAvatarCallback: function removeAvatarCallback(response) {
      $.LoadingOverlay("hide");

      if (response.data.status == 1) {
        this.user.avatar = response.data.data.avatar;
        this.user.roles = response.data.data._roles;
        toastr.success(response.data.message, 'Success', {
          positionClass: 'toast-top-center',
          containerId: 'toast-top-center'
        });
        $('.profile-pic-user').attr('src', "");
        $(".file-upload-user").val('');
      } else {
        if (Helpers.isAssoc(response.data.errors)) {
          var errors = [];

          for (var i in response.data.errors) {
            var string;
            errors.push('<span>' + response.data.errors[i] + '</span></br>');
          }

          toastr.error(errors, 'Some error(s) has occurred', {
            positionClass: 'toast-top-center',
            containerId: 'toast-top-center'
          });
        } else {
          toastr.error(response.data.errors[0], 'An error has occurred', {
            positionClass: 'toast-top-center',
            containerId: 'toast-top-center'
          });
        }
      }
    },
    buildFormData: function buildFormData(formData, data, parentKey) {
      var self = this;

      if (data && _typeof(data) === 'object' && !(data instanceof Date) && !(data instanceof File)) {
        Object.keys(data).forEach(function (key) {
          self.buildFormData(formData, data[key], parentKey ? "".concat(parentKey, "[").concat(key, "]") : key);
        });
      } else {
        var value = data == null ? '' : data;
        formData.append(parentKey, value);
      }
    },
    jsonToFormData: function jsonToFormData(data) {
      var formData = new FormData();
      this.buildFormData(formData, data);
      return formData;
    },
    readURL: function readURL() {
      if (this.$refs.avatar.files && this.$refs.avatar.files[0]) {
        this.user.avatar = this.$refs.avatar.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
          $('.profile-pic-user').attr('src', e.target.result);
        };

        reader.readAsDataURL(this.$refs.avatar.files[0]);
      }
    }
  },
  computed: {
    checkForInvestor: function checkForInvestor() {
      if (this.user.roles.some(function (e) {
        return e.name === 'investor';
      })) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: (_watch = {
    'role.name': function roleName(val) {
      if (val) {
        this.error.role_name = false;
        this.error_message.role_name = '';
      }
    },
    'user.firstname': function userFirstname(val) {
      if (val) {
        this.error.firstname = false;
        this.error_message.firstname = '';
      }
    },
    'user.lastname': function userLastname(val) {
      if (val) {
        this.error.lastname = false;
        this.error_message.lastname = '';
      }
    },
    'user.email': function userEmail(val) {
      if (val) {
        this.error.email = false;
        this.error_message.email = '';
      }
    }
  }, _defineProperty(_watch, "role.name", function roleName(val) {
    if (val) {
      this.error.role_name = false;
      this.error_message.role_name = '';
    }
  }), _defineProperty(_watch, 'role.acc_id', function roleAcc_id(val) {
    if (val) {
      this.error.role_acc_id = false;
      this.error_message.role_acc_id = '';
    }
  }), _defineProperty(_watch, "new_password", function new_password(val) {
    if (val) {
      this.error.new_password = false;
      this.error_message.new_password = '';
    }
  }), _defineProperty(_watch, "new_password_confirmation", function new_password_confirmation(val) {
    if (val) {
      this.error.new_password_confirmation = false;
      this.error_message.new_password_confirmation = '';
    }
  }), _watch),
  filters: {
    capitalize: function capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    format: function format(value) {
      if (!value) return '';
      value = value.replace('_', ' ').toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  created: function created() {
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

    this.system_roles = this.roles.filter(function (role) {
      return role.name == 'admin';
    } || function (role) {
      return role.name == 'super_admin';
    });
    this.management_roles = this.roles.filter(function (role) {
      return role.name != 'admin';
    } || function (role) {
      return role.name != 'super_admin';
    });
  },
  mounted: function mounted() {
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
          data: function data(params) {
            params.term = typeof params.term == 'undefined' ? '' : params.term;
            var terms = {
              query: params.term + '*',
              // search term
              fields: ['id', 'firstname', 'lastname'],
              page: params.page,
              limit: 5
            };

            if (self.editable_user) {
              terms['where'] = [['id', '<>', self.editable_user]];
            }

            return terms;
          },
          processResults: function processResults(response, params) {
            params.page = params.page || 1;
            return {
              results: response.data,
              pagination: {
                more: params.page <= response.pagination.total_pages
              }
            };
          },
          cache: true
        },
        escapeMarkup: function escapeMarkup(markup) {
          return markup;
        },
        templateResult: function templateResult(repo) {
          if (repo.loading) return repo.text;
          var markup = "<div class='select2-result-repository clearfix'>" + repo.firstname + ' ' + repo.lastname + "</div>";
          return markup;
        },
        templateSelection: function templateSelection(repo) {
          if (repo.firstname) {
            self.user.affiliate_id = repo.id;
            return repo.firstname + ' ' + repo.lastname;
          } else {
            return repo.text;
          }
        }
      });

      if (self.editable_user.affiliate_id > 0 && self.editable_user.affiliate) {
        var data = {
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
    });
    $('#dob').datetimepicker({
      format: 'MM/DD/YYYY'
    }).on('dp.change', function (e) {
      self.user.date_of_birth = e.date.format('MM/DD/YYYY');
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_UserServices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/UserServices.js */ "./resources/assets/js/be/modules/users/js/services/UserServices.js");
/* harmony import */ var _components_Paginator_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/Paginator.vue */ "./resources/assets/js/components/Paginator.vue");
/* harmony import */ var _js_be_modules_plans_js_components_subscriptions_SubscriptionDetailsComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue */ "./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['editable_user', 'user_id', 'pending_balance', 'available_balance'],
  mixins: [_services_UserServices_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    'paginator': _components_Paginator_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "subscription-details": _js_be_modules_plans_js_components_subscriptions_SubscriptionDetailsComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      moment: moment,
      user: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        addresses: [],
        account_type: '',
        investor: '',
        date_of_birth: ''
      },
      address: {
        state: '',
        country: ''
      },
      new_password: '',
      new_password_confirmation: '',
      error: {
        firstname: false,
        lastname: false,
        email: false,
        new_password: false
      },
      error_message: {
        firstname: '',
        lastname: '',
        email: '',
        new_password: ''
      },
      current_ledgers: [],
      paginator: {
        total: 0,
        per_page: 2,
        from: 1,
        to: 0,
        current_page: 1
      },
      offset: 10,
      showSubscription: false
    };
  },
  methods: {
    createUser: function createUser() {
      if (this.user.firstname && this.user.lastname && this.user.email) {
        if (Helpers.validateEmail(this.user.email)) {
          $.LoadingOverlay("show");
          this.user.addresses = [{
            state: this.address.state,
            country: this.address.country
          }];
          this.updateProfileCall(this.user, this.createProfileCallback);
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
    createProfileCallback: function createProfileCallback(response) {
      $.LoadingOverlay("hide");

      if (response.data.status == 1) {
        toastr.success(response.data.message, 'Success', {
          positionClass: 'toast-top-center',
          containerId: 'toast-top-center'
        });
      } else {
        if (Helpers.isAssoc(response.data.errors)) {
          var errors = [];

          for (var i in response.data.errors) {
            var string;
            errors.push('<span>' + response.data.errors[i] + '</span></br>');
          }

          toastr.error(errors, 'Some error(s) has occurred', {
            positionClass: 'toast-top-center',
            containerId: 'toast-top-center'
          });
        } else {
          toastr.error(response.data.errors[0], 'An error has occurred', {
            positionClass: 'toast-top-center',
            containerId: 'toast-top-center'
          });
        }
      }
    },
    changeUserPassword: function changeUserPassword() {
      if (this.new_password && this.new_password_confirmation) {
        var data = {
          'new_password': this.new_password,
          'new_password_confirmation': this.new_password_confirmation
        };
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
    changeUserPasswordCallback: function changeUserPasswordCallback(response) {
      $.LoadingOverlay("hide");

      if (response.data.status == 1) {
        $('#changePassword').modal('hide');
        toastr.success(response.data.message, 'Success', {
          positionClass: 'toast-top-center',
          containerId: 'toast-top-center'
        });
      } else {
        if (Helpers.isAssoc(response.data.errors)) {
          var errors = [];

          for (var i in response.data.errors) {
            var string;
            errors.push('<span>' + response.data.errors[i] + '</span></br>');
          }

          toastr.error(errors, 'Some error(s) has occurred', {
            positionClass: 'toast-top-center',
            containerId: 'toast-top-center'
          });
        } else {
          toastr.error(response.data.errors[0], 'An error has occurred', {
            positionClass: 'toast-top-center',
            containerId: 'toast-top-center'
          });
        }
      }
    },
    getLedgers: function getLedgers(page) {
      $.LoadingOverlay("show");
      var params = {
        page: typeof page == 'undefined' ? this.paginator.current_page : page,
        limit: this.offset,
        fields: ['id', 'user_id', 'type', 'debit', 'credit', 'sbalance', 'ebalance', 'status', 'created_at'],
        orderby: {
          id: 'DESC'
        },
        "with": ['user'],
        where: [['user_id', this.user_id]]
      };
      this.getLedgersCall(params, this.getLedgersCallback);
    },
    getLedgersCallback: function getLedgersCallback(response) {
      if (response.status > 0) {
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

        this.current_ledgers = response.data;
      } else {
        swal("Error!", response.errors[0], "error");
      }

      $.LoadingOverlay("hide");
    }
  },
  watch: {
    'user.firstname': function userFirstname(val) {
      if (val) {
        this.error.firstname = false;
        this.error_message.firstname = '';
      }
    },
    'user.lastname': function userLastname(val) {
      if (val) {
        this.error.lastname = false;
        this.error_message.lastname = '';
      }
    },
    'user.email': function userEmail(val) {
      if (val) {
        this.error.email = false;
        this.error_message.email = '';
      }
    },
    new_password: function new_password(val) {
      if (val) {
        this.error.new_password = false;
        this.error_message.new_password = '';
      }
    },
    new_password_confirmation: function new_password_confirmation(val) {
      if (val) {
        this.error.new_password_confirmation = false;
        this.error_message.new_password_confirmation = '';
      }
    }
  },
  filters: {
    capitalize: function capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  created: function created() {
    if (this.editable_user) {
      this.user = Object.assign(this.user, this.editable_user);

      if (this.editable_user.date_of_birth) {
        this.user.date_of_birth = moment(this.editable_user.date_of_birth, "YYYY-MM-DD").format("MM/DD/YYYY");
      }

      if (this.editable_user.addresses && this.editable_user.addresses.length > 0) {
        this.address.state = this.editable_user.addresses[0].state;
        this.address.country = this.editable_user.addresses[0].country;
      }

      this.showSubscription = true;
    }
  },
  mounted: function mounted() {
    var self = this;
    this.$nextTick(function () {
      self.new_password = "";
      $('#dob').datetimepicker({
        format: 'MM/DD/YYYY'
      }).on('dp.change', function (e) {
        self.user.date_of_birth = e.date.format('MM/DD/YYYY');
      });
      $('#changePassword').on('hidden.bs.modal', function (e) {
        self.new_password = "";
        self.new_password_confirmation = "";
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_UserServices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/UserServices.js */ "./resources/assets/js/be/modules/users/js/services/UserServices.js");
/* harmony import */ var _components_Paginator_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/Paginator.vue */ "./resources/assets/js/components/Paginator.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_services_UserServices_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    'order-paginator': _components_Paginator_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['roles'],
  data: function data() {
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
    };
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
    getUsersCallback: function getUsersCallback(code, response, errors) {
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
    print: function print() {
      printJS({
        printable: 'recent-orders',
        type: 'html',
        header: 'Sales by Date Range (' + this.start_date + '-' + this.end_date + ')'
      });
    },
    searchUsers: function searchUsers(page) {
      var exported = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      $.LoadingOverlay("show");
      var params = {
        page: typeof page == 'undefined' ? this.paginator.current_page : page,
        limit: this.offset,
        fields: ['id', 'firstname', 'lastname', 'phone', 'email', 'users', 'status', 'avatar']
      };

      if (this.query != '') {
        var query = this.query;
        params['query'] = {
          value: "+*" + query.replace(/\s+/g, "* +*") + "*",
          // search term
          fields: ['firstname', 'lastname', 'phone', 'email', 'status', 'avatar']
        };
      }

      if (exported) {
        params['export'] = exported;
      }

      if (this.role != '' && this.role != 'all') {
        params['with'] = {
          roles: {
            where: [['name', this.role]]
          }
        };
      }

      this.getUsers(params, this.getUsersCallback);
    }
  },
  filters: {
    capitalize: function capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    format: function format(value) {
      if (!value) return '';
      value = value.replace('_', ' ').toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  created: function created() {
    $.LoadingOverlay("show");
    this.getUsers({
      page: this.paginator.current_page,
      limit: this.offset,
      fields: ['id', 'firstname', 'lastname', 'phone', 'email', 'users', 'status', 'avatar']
    }, this.getUsersCallback);
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      $("#select2-roles").select2();
      $("#select2-roles").on('change', function (e) {
        _this.role = $("#select2-roles").val();
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Paginator.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Paginator.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    pagination: {
      type: Object,
      required: true
    },
    offset: {
      type: Number,
      "default": 5
    }
  },
  computed: {
    pagesNumber: function pagesNumber() {
      if (!this.pagination.to) {
        return [];
      }

      var from = this.pagination.current_page - this.offset;

      if (from < 1) {
        from = 1;
      }

      var to = from + this.offset * 2;

      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }

      var pagesArray = [];

      for (var page = from; page <= to; page++) {
        pagesArray.push(page);
      }

      return pagesArray;
    }
  },
  methods: {
    changePage: function changePage(page) {
      this.pagination.current_page = page;
      this.$emit('paginate');
    }
  },
  mounted: function mounted() {
    /* console.log(this.pagesNumber); */
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_SubscriptionServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/SubscriptionServices */ "./resources/js/be/modules/plans/js/services/SubscriptionServices.js");
/* harmony import */ var _services_PlanServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/PlanServices */ "./resources/js/be/modules/plans/js/services/PlanServices.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['owner_id', 'owner_type'],
  mixins: [_services_SubscriptionServices__WEBPACK_IMPORTED_MODULE_0__["default"], _services_PlanServices__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      subscription: {
        plan: {
          title: ''
        }
      },
      processing: false,
      interval: {
        'year': 'yr',
        'month': 'mo'
      },
      moment: moment,
      plans: [],
      filter: {
        interval: 'month'
      },
      type: {}
    };
  },
  methods: {
    convertCent: function convertCent(value) {
      value = value * 100;
      return value + ' Cents';
    },
    getSubscriptionCallback: function getSubscriptionCallback(response) {
      if (response.status > 0) {
        this.subscription = Object.assign({}, response.data);
      } else {
        swal("Error", response.errors[0], "error");
      }

      $.LoadingOverlay("hide");
    },
    getPlans: function getPlans() {
      $.LoadingOverlay("show");
      this.getPlansCall({
        where: [['status', 'public'], ['interval', this.filter.interval]],
        limit: 15,
        page: 1
      }, this.getPlansCallback);
    },
    openModal: function openModal() {
      this.getPlans();
    },
    getPlansCallback: function getPlansCallback(response) {
      if (response.status > 0) {
        this.plans = response.data;

        var _this = this;

        $("#change-subscription").modal('show'); // $('.switch:checkbox').checkboxpicker();

        $('#switch12').on('change', function () {
          if ($('#switch12:checkbox:checked').length > 0) {
            _this.filter.interval = 'year';
          } else {
            _this.filter.interval = 'month';
          }

          setTimeout(function () {
            _this.getPlans();
          }, 200);
        });
      } else {
        toastr.error(response.errors[0], 'Error');
      }

      $.LoadingOverlay("hide");
    },
    changeSubscription: function changeSubscription(plan_id) {
      $.LoadingOverlay("show");
      var params = {
        'subscription_id': this.subscription.id,
        'plan_id': plan_id
      };
      this.changeSubscriptionCall(params, this.changeSubscriptionCallback);
    },
    changeSubscriptionCallback: function changeSubscriptionCallback(response) {
      if (response.status > 0) {
        location.reload();
      } else {
        toastr.error(response.errors[0], 'Error');
        $.LoadingOverlay("hide");
      }
    },
    getPlanTypesCallback: function getPlanTypesCallback(response) {
      if (response.status > 0) {
        for (var i in response.data) {
          this.type[response.data[i].interval] = true;
        }
      }
    }
  },
  watch: {},
  created: function created() {
    if (this.owner_id && this.owner_type) {
      this.getSubscriptionAsOwnerCall(this.owner_id, {
        owner_type: this.owner_type
      }, this.getSubscriptionCallback);
    }

    this.getPlanTypesCall(this.getPlanTypesCallback);
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.input-error-select {\n    color: #d61212 !important;\n    border: 1px solid #b60707 !important;\n    border-radius: 5px\n}\n.message-error {\n    color: #d61212;\n    float: right;\n    padding-top: 10px;\n    font-size: 12px;\n}\nlabel {\n    font-size: 12px\n}\n.select2-selection__rendered {\n    font-size: 12px !important;\n}\n.vcenter {\n    display: inline-block;\n    vertical-align: middle;\n    float: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=1&id=4df91c4c&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=1&id=4df91c4c&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[data-v-4df91c4c],\nselect[data-v-4df91c4c],\ntextarea[data-v-4df91c4c] {\n    font-size: 12px;\n}\n.logo-list[data-v-4df91c4c] {\n    width: 80px;\n    height: auto;\n}\n.picture-wrapper[data-v-4df91c4c] {\n    position: relative;\n    height: 120px;\n    width: 120px;\n    border-radius: 50%;\n    overflow: hidden;\n    box-shadow: 1px 1px 15px -5px black;\n    transition: all .3s ease;\n    margin-left: 33%;\n}\n.picture-wrapper[data-v-4df91c4c]:hover {\n    transform: scale(1.05);\n    cursor: pointer;\n}\n.picture-wrapper:hover .profile-pic-user[data-v-4df91c4c] {\n    opacity: .5;\n}\n.picture-wrapper .profile-pic-user[data-v-4df91c4c] {\n    height: 100%;\n    width: 100%;\n    transition: all .3s ease;\n}\n.picture-wrapper .profile-pic-user[data-v-4df91c4c]:after {\n    font-family: FontAwesome;\n    content: \"\\F007\";\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    font-size: 120px;\n    background: #ecf0f1;\n    color: #34495e;\n    text-align: center;\n}\n.picture-wrapper .upload-button-user[data-v-4df91c4c] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n}\n.picture-wrapper .upload-button-user .fa-arrow-circle-up[data-v-4df91c4c] {\n    position: absolute;\n    font-size: 140px;\n    top: -10px;\n    text-align: center;\n    opacity: 0;\n    transition: all .3s ease;\n    color: #34495e;\n}\n.sep[data-v-4df91c4c] {\n    margin-top: 0px;\n}\n.picture-wrapper .upload-button-user:hover .fa-arrow-circle-up[data-v-4df91c4c] {\n    opacity: .9;\n}\n\n/* Small devices (landscape phones, 576px and up) */\n@media (min-width: 576px) {\n.picture-wrapper[data-v-4df91c4c] {\n        margin-left: 38%;\n}\n}\n\n/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */\n@media (min-width: 768px) {\n.picture-wrapper[data-v-4df91c4c] {\n        margin-left: 10%;\n}\n.sep[data-v-4df91c4c] {\n        margin-top: 3%;\n}\n}\n\n/* Large devices (desktops, 992px and up) */\n@media (min-width: 992px) {\n.picture-wrapper[data-v-4df91c4c] {\n        margin-left: 15%;\n}\n.sep[data-v-4df91c4c] {\n        margin-top: 3%;\n}\n}\n\n/* Extra large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) {\n.picture-wrapper[data-v-4df91c4c] {\n        margin-left: 33%;\n}\n.sep[data-v-4df91c4c] {\n        margin-top: 3%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.input-error-select {\n    color: #d61212 !important;\n    border: 1px solid #b60707 !important;\n    border-radius: 5px\n}\n.message-error {\n    color: #d61212;\n    float: right;\n    padding-top: 10px;\n    font-size: 12px;\n}\nlabel {\n    font-size: 12px\n}\n.select2-selection__rendered {\n    font-size: 12px !important;\n}\n.vcenter {\n    display: inline-block;\n    vertical-align: middle;\n    float: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=1&id=5746b3cc&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=1&id=5746b3cc&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[data-v-5746b3cc],\nselect[data-v-5746b3cc],\ntextarea[data-v-5746b3cc] {\n    font-size: 12px;\n}\n.logo-list[data-v-5746b3cc] {\n    width: 80px;\n    height: auto;\n}\n#first[data-v-5746b3cc] {\n    background-color: #e0e2e5;\n    font-size: 12px;\n}\n.shrink[data-v-5746b3cc] {\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.icon-store {\n    width: 30px;\n    height: auto;\n}\n.icon-amazon {\n    width: 50px;\n    height: auto;\n}\n.input-error-select {\n    color: #d61212 !important;\n    border: 1px solid #b60707 !important;\n    border-radius: 5px\n}\n.message-error {\n    color: #d61212;\n    float: right;\n    padding-top: 10px;\n    font-size: 12px;\n}\n.icons-custom {\n    width: 20px;\n    height: 20px;\n}\n.separated{\n    padding-top: 20px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Paginator.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Paginator.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pagination-button {\n    width: 28px;\n    height: 28px;\n    text-align: center;\n    cursor: pointer;\n    margin-right: 2px;\n    font-size: 10px;\n    font-weight: bold;\n}\n.disable-button {\n    pointer-events: none;\n    border-color: rgb(196, 197, 197) !important;\n    color: rgb(80, 80, 80) !important;\n    font-weight: bold;\n    background-color: rgb(229, 230, 231) !important;\n    cursor: not-allowed;\n}\n.disable-arrow {\n    color: gray !important;\n}\n.center {\n    margin: auto;\n    width: 60%;\n    padding: 10px;\n}\n@media (min-width: 576px) {\n.center {\n        margin: auto;\n        width: 35%;\n        padding: 10px;\n}\n}\n@media (min-width: 768px) {\n.center {\n        margin: auto;\n        width: 25%;\n        padding: 10px;\n}\n}\n@media (min-width: 992px) {\n.center {\n        margin: auto;\n        width: 25%;\n        padding: 10px;\n}\n}\n@media (min-width: 1200px) {\n.center {\n        margin: auto;\n        width: 30%;\n        padding: 10px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=style&index=0&id=20ee0662&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=style&index=0&id=20ee0662&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nlabel[data-v-20ee0662]{\n    color:#fff;\n}\n.plan-1[data-v-20ee0662]{\n    width: 40%;\n    margin: 20px;\n}\n.plan-2[data-v-20ee0662]{\n    width: 40%;\n    margin: 20px;\n}\n.plan-3[data-v-20ee0662]{\n    width: 25%;\n    margin: 20px;\n}\n.plan-4[data-v-20ee0662]{\n    width: 25%;\n    margin: 20px;\n}\n.box span[data-v-20ee0662] {\n    border-radius: 25px;\n    display: inline-block;\n    font-weight: 800;\n    height: auto;\n    line-height: 1.6;\n    width: auto;\n    background-color: #fff;\n    font-size: 18px;\n    padding: 2px 14px;\n}\nsection[data-v-20ee0662]{\n    justify-content: center;\n    height: 100vh;\n}\n.box[data-v-20ee0662]{\n    position: relative;\n    /* padding: 0 50px 30px 50px; */\n    /* width: 400px;\n    height: 480px; */\n    width: 100%;;\n    /* display: flex; */\n    justify-content: center;\n    align-items: center;\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 6px;\n    box-shadow: 0 5px 25px rgba(0,0,0,0.2);\n}\n.box[data-v-20ee0662]::after{\n    content: '';\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    right: 5px;\n    bottom: 5px;\n    border-radius: 5px;\n    pointer-events: none;\n    background: transparent;\n}\n.box .form[data-v-20ee0662]{\n    position: relative;\n    width: 100%;\n}\n.box .form .inputBx[data-v-20ee0662]{\n    position: relative;\n    width: 100%;\n    margin-bottom: 20px;\n}\n.box .form .inputBx input[data-v-20ee0662]{\n    width: 100%;\n    outline: none;\n    border: 1px solid rgba(17, 95, 143,0.2);\n    background: transparent;\n    padding: 8px 10px;\n    padding-left: 35px;;\n    border-radius: 6px;\n    font-size: 16px;\n    font-weight: 300;\n    color: #aba5b6;\n    \n    /* box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.2); */\n}\n.box .form .inputBx button[data-v-20ee0662]{\n    width: 100%;\n    outline: none;\n    border: 1px solid rgba(17, 95, 143,0.2);\n    background: transparent;\n    padding: 8px 10px;\n    padding-left: 35px;;\n    border-radius: 6px;\n    font-size: 16px;\n    font-weight: 300;\n    color: #aba5b6;\n    \n    /* box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.2); */\n}\n.box .form .inputBx i[data-v-20ee0662]{\n    position: absolute;\n    top: 15px;\n    left: 10px;\n    /* filter: invert(1); */\n    font-size: 16px;\n    color: #aba5b6;\n}\n@media (max-width: 1000px){\n.plan-1[data-v-20ee0662], .plan-2[data-v-20ee0662]{\n        width: 50%;\n}\n}\n@media (max-width: 995px){\n.plan-3[data-v-20ee0662], .plan-4[data-v-20ee0662]{\n        width: 40%;\n}\n}\n@media (max-width: 550px){\n.plan-1[data-v-20ee0662], .plan-2[data-v-20ee0662], .plan-3[data-v-20ee0662], .plan-4[data-v-20ee0662]{\n        width: 75%;\n}\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateUserComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=1&id=4df91c4c&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=1&id=4df91c4c&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateUserComponent.vue?vue&type=style&index=1&id=4df91c4c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=1&id=4df91c4c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MyProfileComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=1&id=5746b3cc&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=1&id=5746b3cc&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MyProfileComponent.vue?vue&type=style&index=1&id=5746b3cc&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=1&id=5746b3cc&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersListComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Paginator.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Paginator.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Paginator.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Paginator.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=style&index=0&id=20ee0662&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=style&index=0&id=20ee0662&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubscriptionDetailsComponent.vue?vue&type=style&index=0&id=20ee0662&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=style&index=0&id=20ee0662&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=template&id=4df91c4c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=template&id=4df91c4c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card", staticStyle: { "min-height": "70vh" } }, [
      _c("div", { staticClass: "card-content" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("form", { staticClass: "form row card-body" }, [
            _c("div", { staticClass: "mb-1 col-sm-12 col-md-3" }, [
              _c("div", { staticClass: "text-center" }, [
                _c("div", { staticClass: "picture-wrapper" }, [
                  _c("img", {
                    staticClass: "profile-pic-user",
                    attrs: { src: "" }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "upload-button-user" }),
                  _vm._v(" "),
                  _c("input", {
                    ref: "avatar",
                    staticClass: "file-upload-user",
                    attrs: { type: "file", accept: "image/*" },
                    on: { change: _vm.readURL }
                  })
                ]),
                _vm._v(" "),
                _vm.user.id > 0 && typeof _vm.user.avatar == "string"
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-secondary mt-1",
                        attrs: { type: "button" },
                        on: { click: _vm.removeAvatar }
                      },
                      [_vm._v("Remove")]
                    )
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-1 col-sm-6 col-md-3" }, [
              _c("label", { attrs: { for: "firstname" } }, [
                _vm._v("Firstname")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.firstname,
                    expression: "user.firstname"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "firstname" },
                domProps: { value: _vm.user.firstname },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "firstname", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.error.firstname
                ? _c("span", { staticClass: "message-error" }, [
                    _vm._v(_vm._s(_vm.error_message.firstname))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-1 col-sm-6 col-md-3" }, [
              _c("label", { attrs: { for: "lastname" } }, [_vm._v("Lastname")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.lastname,
                    expression: "user.lastname"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "lastname" },
                domProps: { value: _vm.user.lastname },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "lastname", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.error.lastname
                ? _c("span", { staticClass: "message-error" }, [
                    _vm._v(_vm._s(_vm.error_message.lastname))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-1 col-sm-6 col-md-3" }, [
              _c("label", { attrs: { for: "apt" } }, [_vm._v("Email")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.email,
                    expression: "user.email"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "email" },
                domProps: { value: _vm.user.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "email", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.error.email
                ? _c("span", { staticClass: "message-error" }, [
                    _vm._v(_vm._s(_vm.error_message.email))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-1 col-sm-6 col-md-3" }, [
              _c("label", { attrs: { for: "phone" } }, [_vm._v("Phone")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.phone,
                    expression: "user.phone"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "phone" },
                domProps: { value: _vm.user.phone },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "phone", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-1 col-sm-6 col-md-3" }, [
              _c("label", { attrs: { for: "dob" } }, [_vm._v("Date of birth")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.date_of_birth,
                    expression: "user.date_of_birth"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "dob" },
                domProps: { value: _vm.user.date_of_birth },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "date_of_birth", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-1 col-sm-6 col-md-3" }, [
              _c("label", { attrs: { for: "state" } }, [_vm._v("State")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.address.state,
                    expression: "address.state"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.address.state },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.address, "state", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-1 col-sm-6 col-md-3" }, [
              _c("label", { attrs: { for: "country" } }, [_vm._v("Country")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.address.country,
                    expression: "address.country"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.address.country },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.address, "country", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group mb-1 col-sm-6 col-md-3 sep" },
              [
                _c("label", { attrs: { for: "status" } }, [_vm._v("Status")]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.status,
                        expression: "user.status"
                      }
                    ],
                    staticClass: "form-control",
                    staticStyle: { "font-size": "12px !important" },
                    attrs: { id: "status" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.user,
                          "status",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Select status")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "active" } }, [
                      _vm._v("Active")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "inactive" } }, [
                      _vm._v("Inactive")
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group mb-1 col-sm-6 col-md-3 sep" },
              [
                _c("label", { attrs: { for: "investor_type" } }, [
                  _vm._v("Investor type")
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.investor_type,
                        expression: "user.investor_type"
                      }
                    ],
                    staticClass: "form-control",
                    staticStyle: { "font-size": "12px !important" },
                    attrs: { id: "investor_type" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.user,
                          "investor_type",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Select type")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "accredited" } }, [
                      _vm._v("Accredited")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "non-accredited" } }, [
                      _vm._v("Non-accredited")
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group mb-1 col-sm-12 col-md-3 sep" },
              [
                _c("label", { attrs: { for: "role" } }, [_vm._v("User role")]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.role.name,
                        expression: "role.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Select Option" },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.role,
                            "name",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.changeAction
                      ]
                    }
                  },
                  _vm._l(_vm.roles, function(role, index) {
                    return _c(
                      "option",
                      { key: index, domProps: { value: role.name } },
                      [_vm._v(_vm._s(_vm._f("format")(role.name)))]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _vm.error.role_name
                  ? _c("span", { staticClass: "message-error" }, [
                      _vm._v(_vm._s(_vm.error_message.role_name))
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "text-center" }, [
                  _vm.error.users
                    ? _c("span", { staticClass: "error_message" }, [
                        _vm._v(_vm._s(_vm.error_message.roles))
                      ])
                    : _vm._e()
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group mb-1 col-sm-12 col-md-1 sep" },
              [
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    staticStyle: { "margin-top": "25px" }
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary",
                        attrs: { type: "button" },
                        on: { click: _vm.addUserRole }
                      },
                      [
                        _c("i", { staticClass: "ft-plus" }),
                        _vm._v(
                          "\n                                Role\n                            "
                        )
                      ]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _vm.user.roles && _vm.user.roles.length > 0
              ? _c(
                  "div",
                  { staticClass: "form-group mb-1 col-sm-12 col-md-6" },
                  [
                    _c("label", [_vm._v("Current role")]),
                    _vm._v(" "),
                    _vm._l(_vm.user.roles, function(role, index) {
                      return _c(
                        "div",
                        { key: index, staticClass: "row mt-1" },
                        [
                          _c("div", { staticClass: "col-8" }, [
                            role.name == "admin"
                              ? _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: role.name,
                                        expression: "role.name"
                                      }
                                    ],
                                    staticClass: "form-control input-bordered",
                                    attrs: { disabled: "" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          role,
                                          "name",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.system_roles, function(
                                    _role,
                                    index
                                  ) {
                                    return _c(
                                      "option",
                                      {
                                        key: index,
                                        domProps: { value: _role.name }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm._f("format")(_role.name)
                                            ) +
                                            "\n                                    "
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: role.name,
                                        expression: "role.name"
                                      }
                                    ],
                                    staticClass: "form-control input-bordered",
                                    attrs: { disabled: "" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          role,
                                          "name",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.management_roles, function(
                                    _role,
                                    index
                                  ) {
                                    return _c(
                                      "option",
                                      {
                                        key: index,
                                        domProps: { value: _role.name }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm._f("format")(_role.name)
                                            ) +
                                            "\n                                    "
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-4" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.removeRole(index, role)
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "ft-x" }),
                                _vm._v(
                                  "\n                                    Delete\n                                "
                                )
                              ]
                            )
                          ])
                        ]
                      )
                    })
                  ],
                  2
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "repeater-default card-body" }, [
            _c("div", [
              _c("div", { staticClass: "text-center" }, [
                _vm.error.users
                  ? _c("span", { staticClass: "error_message" }, [
                      _vm._v(_vm._s(_vm.error_message.roles))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _vm.user.id > 0
                  ? _c("div", { staticClass: "col-12 text-right" }, [
                      _c(
                        "a",
                        {
                          staticStyle: { width: "100%", "font-size": "12px" },
                          attrs: {
                            "data-toggle": "modal",
                            "data-target": "#changePassword"
                          }
                        },
                        [
                          _vm._v(
                            "\n                                    Set new user password"
                          )
                        ]
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "form-group mb-1 col-sm-12 col-md-12",
                    staticStyle: { width: "100%" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "form-group text-right",
                        staticStyle: { "margin-top": "25px" }
                      },
                      [
                        _vm.user.roles && _vm.user.roles.length > 0
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                attrs: { type: "button" },
                                on: { click: _vm.createUser }
                              },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(
                                      _vm.user.id > 0
                                        ? "Update user"
                                        : "Add user"
                                    ) +
                                    "\n                                    "
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "changePassword",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true",
          "data-backdrop": "static",
          "data-keyboard": "false"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("fieldset", [
                  _c("label", { attrs: { for: "basicInput" } }, [
                    _vm._v("Password")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.new_password,
                          expression: "new_password"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "input-error-select": _vm.error.new_password },
                      attrs: { type: "password" },
                      domProps: { value: _vm.new_password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.new_password = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _vm.error.new_password
                    ? _c("span", { staticClass: "message-error" }, [
                        _vm._v(_vm._s(_vm.error_message.new_password))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("fieldset", { staticStyle: { "margin-top": "15px" } }, [
                  _c("label", { attrs: { for: "basicInput" } }, [
                    _vm._v("Confirm password")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.new_password_confirmation,
                          expression: "new_password_confirmation"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "input-error-select":
                          _vm.error.new_password_confirmation
                      },
                      attrs: { type: "password" },
                      domProps: { value: _vm.new_password_confirmation },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.new_password_confirmation = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _vm.error.new_password_confirmation
                    ? _c("span", { staticClass: "message-error" }, [
                        _vm._v(
                          _vm._s(_vm.error_message.new_password_confirmation)
                        )
                      ])
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "reset", "data-dismiss": "modal" }
                  },
                  [_vm._v("Close")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.changeUserPassword()
                      }
                    }
                  },
                  [_vm._v("Save")]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Change user password")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("i", { staticClass: "ft-type" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("i", { staticClass: "ft-type" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=template&id=5746b3cc&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=template&id=5746b3cc&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card", staticStyle: { "min-height": "70vh" } }, [
      _c("div", { staticClass: "card-content" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body", staticStyle: { "padding-top": "0px" } },
          [
            _c("ul", { staticClass: "nav nav-tabs mt-1" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: {
                      id: "base-ledgers",
                      "data-toggle": "tab",
                      "aria-controls": "tab2",
                      href: "#_ledgers",
                      "aria-expanded": "false"
                    },
                    on: {
                      click: function($event) {
                        return _vm.getLedgers()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-file-o" }),
                    _vm._v("My Ledgers")
                  ]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: {
                      id: "base-transactions",
                      "data-toggle": "tab",
                      "aria-controls": "tab1",
                      href: "#transactions",
                      "aria-expanded": "false"
                    },
                    on: {
                      click: function($event) {
                        return _vm.goTab("billing")
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-money" }), _vm._v("Billing")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: {
                      id: "base-payment-methods",
                      "data-toggle": "tab",
                      "aria-controls": "tab1",
                      href: "#payment-methods",
                      "aria-expanded": "false"
                    },
                    on: {
                      click: function($event) {
                        return _vm.goTab("payment_methods")
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-credit-card" }),
                    _vm._v("Payment Methods")
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tab-content px-1 pt-1" }, [
              _c(
                "div",
                {
                  staticClass: "tab-pane active",
                  attrs: {
                    role: "tabpanel",
                    id: "general",
                    "aria-expanded": "true",
                    "aria-labelledby": "base-general"
                  }
                },
                [
                  _c("form", { staticClass: "form row card-body" }, [
                    _c(
                      "div",
                      { staticClass: "form-group mb-1 col-sm-6 col-md-3" },
                      [
                        _c("label", { attrs: { for: "firstname" } }, [
                          _vm._v("Firstname")
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.firstname,
                              expression: "user.firstname"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "firstname" },
                          domProps: { value: _vm.user.firstname },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "firstname",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.error.firstname
                          ? _c("span", { staticClass: "message-error" }, [
                              _vm._v(_vm._s(_vm.error_message.firstname))
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-1 col-sm-6 col-md-3" },
                      [
                        _c("label", { attrs: { for: "lastname" } }, [
                          _vm._v("Lastname")
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.lastname,
                              expression: "user.lastname"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "lastname" },
                          domProps: { value: _vm.user.lastname },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "lastname",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.error.lastname
                          ? _c("span", { staticClass: "message-error" }, [
                              _vm._v(_vm._s(_vm.error_message.lastname))
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-1 col-sm-6 col-md-3" },
                      [
                        _c("label", { attrs: { for: "apt" } }, [
                          _vm._v("Email")
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.email,
                              expression: "user.email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "email" },
                          domProps: { value: _vm.user.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.user, "email", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.error.email
                          ? _c("span", { staticClass: "message-error" }, [
                              _vm._v(_vm._s(_vm.error_message.email))
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-1 col-sm-6 col-md-3" },
                      [
                        _c("label", { attrs: { for: "city" } }, [
                          _vm._v("Phone")
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.phone,
                              expression: "user.phone"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "phone" },
                          domProps: { value: _vm.user.phone },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.user, "phone", $event.target.value)
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-1 col-sm-6 col-md-3" },
                      [
                        _c("label", { attrs: { for: "dob" } }, [
                          _vm._v("Date of birth")
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.date_of_birth,
                              expression: "user.date_of_birth"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "dob" },
                          domProps: { value: _vm.user.date_of_birth },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "date_of_birth",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-1 col-sm-6 col-md-3" },
                      [
                        _c("label", { attrs: { for: "state" } }, [
                          _vm._v("State")
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.address.state,
                              expression: "address.state"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "state" },
                          domProps: { value: _vm.address.state },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.address,
                                "state",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-1 col-sm-6 col-md-3" },
                      [
                        _c("label", { attrs: { for: "country" } }, [
                          _vm._v("Country")
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.address.country,
                              expression: "address.country"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "country" },
                          domProps: { value: _vm.address.country },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.address,
                                "country",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("form", { staticClass: "form row card-body" }, [
                    _c(
                      "div",
                      { staticClass: "form-group mb-1 col-sm-6 col-md-3" },
                      [
                        _c("label", { attrs: { for: "account_type" } }, [
                          _vm._v("Account Type")
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.account_type,
                                expression: "user.account_type"
                              }
                            ],
                            staticClass: "form-control",
                            staticStyle: { "font-size": "12px !important" },
                            attrs: { id: "account_type" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.user,
                                  "account_type",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select account type")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "personal" } }, [
                              _vm._v("Personal")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "business" } }, [
                              _vm._v("Business")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "business" } }, [
                              _vm._v("Professional")
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-1 col-sm-6 col-md-3" },
                      [
                        _c("label", { attrs: { for: "investor" } }, [
                          _vm._v("Investor")
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.investor,
                                expression: "user.investor"
                              }
                            ],
                            staticClass: "form-control",
                            staticStyle: { "font-size": "12px !important" },
                            attrs: { id: "investor" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.user,
                                  "investor",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select investor type")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "accredited" } }, [
                              _vm._v("Accredited")
                            ]),
                            _vm._v(" "),
                            _c(
                              "option",
                              { attrs: { value: "non-accredited" } },
                              [_vm._v("Non-accredited")]
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.showSubscription
                    ? _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-12" },
                          [
                            _c("subscription-details", {
                              attrs: {
                                owner_type: "user",
                                owner_id: _vm.user.id
                              }
                            })
                          ],
                          1
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "row card-body" }, [
                    _c(
                      "div",
                      {
                        staticClass: "form-group mb-1 col-sm-12 col-md-12",
                        staticStyle: { width: "100%" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "form-group text-right",
                            staticStyle: { "margin-top": "25px" }
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                attrs: {
                                  type: "button",
                                  "data-toggle": "modal",
                                  "data-target": "#changePassword"
                                }
                              },
                              [
                                _vm._v(
                                  "Set new password\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                attrs: { type: "button" },
                                on: { click: _vm.createUser }
                              },
                              [
                                _vm._v(
                                  "Update\n                                    "
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "tab-pane",
                  attrs: {
                    role: "tabpanel",
                    id: "_ledgers",
                    "aria-expanded": "true",
                    "aria-labelledby": "base-ledgers"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "row",
                      staticStyle: { "margin-top": "20px" }
                    },
                    [
                      _c("div", { staticClass: "col-12 col-md-6" }, [
                        _c("strong", [_vm._v("Pending Balance: ")]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.pending_balance) +
                            "\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 col-md-6" }, [
                        _c("strong", [_vm._v("Available Balance: ")]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.available_balance) +
                            "\n                            "
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm.current_ledgers.length > 0
                    ? _c("div", { staticStyle: { "margin-top": "40px" } }, [
                        _c(
                          "ul",
                          { staticClass: "list-group" },
                          [
                            _vm._m(2),
                            _vm._v(" "),
                            _vm._l(_vm.current_ledgers, function(
                              ledgers,
                              index
                            ) {
                              return _c(
                                "li",
                                {
                                  key: index,
                                  staticClass: "list-group-item shrink"
                                },
                                [
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "col-md-2",
                                        staticStyle: { "padding-top": "10px" }
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(ledgers.user.firstname) +
                                              " " +
                                              _vm._s(ledgers.user.lastname) +
                                              "\n                                            "
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "col-md-1",
                                        staticStyle: { "padding-top": "10px" }
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(_vm._s(ledgers.type))
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "col-md-1",
                                        staticStyle: { "padding-top": "10px" }
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(
                                            "\n                                                $" +
                                              _vm._s(
                                                parseFloat(
                                                  ledgers.debit
                                                ).toFixed(2)
                                              ) +
                                              "\n                                            "
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "col-md-1",
                                        staticStyle: { "padding-top": "10px" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                $" +
                                            _vm._s(
                                              parseFloat(
                                                ledgers.credit
                                              ).toFixed(2)
                                            ) +
                                            "\n                                        "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "col-md-2",
                                        staticStyle: { "padding-top": "10px" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                $" +
                                            _vm._s(
                                              parseFloat(
                                                ledgers.sbalance
                                              ).toFixed(2)
                                            ) +
                                            "\n                                        "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "col-md-2",
                                        staticStyle: { "padding-top": "10px" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                $" +
                                            _vm._s(
                                              parseFloat(
                                                ledgers.ebalance
                                              ).toFixed(2)
                                            ) +
                                            "\n                                        "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "col-md-1",
                                        staticStyle: { "padding-top": "10px" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(ledgers.status) +
                                            "\n                                        "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "col-md-2",
                                        staticStyle: { "padding-top": "10px" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm
                                                .moment(ledgers.created_at)
                                                .format("LLL")
                                            ) +
                                            "\n                                        "
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticStyle: { "margin-top": "20px" } },
                          [
                            _vm.paginator.total > _vm.paginator.per_page
                              ? _c("paginator", {
                                  attrs: {
                                    pagination: _vm.paginator,
                                    offset: _vm.offset
                                  },
                                  on: {
                                    paginate: function($event) {
                                      return _vm.searchPayments()
                                    }
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      ])
                    : _c(
                        "div",
                        {
                          staticClass: "text-center",
                          staticStyle: { "margin-top": "50px" }
                        },
                        [
                          _c("h3", [
                            _vm._v("No ledgers registered at this moment")
                          ])
                        ]
                      )
                ]
              )
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "changePassword",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true",
          "data-backdrop": "static",
          "data-keyboard": "false"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("fieldset", [
                  _c("label", { attrs: { for: "basicInput" } }, [
                    _vm._v("Password")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.new_password,
                          expression: "new_password"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "input-error-select": _vm.error.new_password },
                      attrs: { type: "password" },
                      domProps: { value: _vm.new_password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.new_password = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _vm.error.new_password
                    ? _c("span", { staticClass: "message-error" }, [
                        _vm._v(_vm._s(_vm.error_message.new_password))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("fieldset", { staticStyle: { "margin-top": "15px" } }, [
                  _c("label", { attrs: { for: "basicInput" } }, [
                    _vm._v("Confirm password")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _vm._m(5),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.new_password_confirmation,
                          expression: "new_password_confirmation"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "input-error-select":
                          _vm.error.new_password_confirmation
                      },
                      attrs: { type: "password" },
                      domProps: { value: _vm.new_password_confirmation },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.new_password_confirmation = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _vm.error.new_password_confirmation
                    ? _c("span", { staticClass: "message-error" }, [
                        _vm._v(
                          _vm._s(_vm.error_message.new_password_confirmation)
                        )
                      ])
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "reset", "data-dismiss": "modal" }
                  },
                  [_vm._v("Close")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.changeUserPassword()
                      }
                    }
                  },
                  [_vm._v("Save")]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("h4", { staticClass: "form-section" }, [_vm._v("My Profile")])
        ])
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "heading-elements-toggle" }, [
        _c("i", { staticClass: "fa fa-ellipsis-v font-medium-3" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "heading-elements" }, [
        _c("ul", { staticClass: "list-inline mb-0" }, [
          _c("li", [
            _c("a", { attrs: { "data-action": "collapse" } }, [
              _c("i", { staticClass: "ft-minus" })
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { "data-action": "reload" } }, [
              _c("i", { staticClass: "ft-rotate-cw" })
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { "data-action": "expand" } }, [
              _c("i", { staticClass: "ft-maximize" })
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { "data-action": "close" } }, [
              _c("i", { staticClass: "ft-x" })
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link active",
          attrs: {
            id: "base-general",
            "data-toggle": "tab",
            "aria-controls": "tab1",
            href: "#general",
            "aria-expanded": "true"
          }
        },
        [_c("i", { staticClass: "fa fa-home" }), _vm._v("General")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass: "list-group-item d-none d-lg-block shrink",
        attrs: { id: "first" }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-2" }, [
            _c("strong", [_vm._v("Name")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-1" }, [
            _c("strong", [_vm._v("Type")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-1" }, [
            _c("strong", [_vm._v("Debit")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-1" }, [
            _c("strong", [_vm._v("Credit")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-2" }, [
            _c("strong", [_vm._v("Start Balance")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-2" }, [
            _c("strong", [_vm._v("End Balance")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-1" }, [
            _c("strong", [_vm._v("Status")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-2" }, [
            _c("strong", [_vm._v("Created at")])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Change user password")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("i", { staticClass: "ft-type" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("i", { staticClass: "ft-type" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=template&id=5ba9dbfa&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=template&id=5ba9dbfa& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-content" }, [
      _c("div", { staticClass: "card-body" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", [
          _c(
            "div",
            { staticClass: "card-content" },
            [
              _c("div", { staticClass: "card-body" }, [
                _c("form", [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass: "col-12 col-md-6 ",
                        staticStyle: {
                          "padding-left": "21px",
                          "padding-right": "21px"
                        }
                      },
                      [
                        _c("label", [_vm._v("Search")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.query,
                              expression: "query"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "query",
                            placeholder: "Name, Phone & Email"
                          },
                          domProps: { value: _vm.query },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.query = $event.target.value
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-12 col-md-3 ",
                        staticStyle: {
                          "padding-left": "21px",
                          "padding-right": "21px"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            staticStyle: { width: "100%" }
                          },
                          [
                            _c("label", [_vm._v("Roles")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                staticClass: "select2-placeholder form-control",
                                staticStyle: { width: "100%" },
                                attrs: {
                                  id: "select2-roles",
                                  "data-placeholder": "Select roles..."
                                }
                              },
                              [
                                _c("option", { attrs: { value: "all" } }, [
                                  _vm._v("All")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.roles, function(role, index) {
                                  return _c(
                                    "option",
                                    {
                                      key: index,
                                      staticStyle: {
                                        "text-transform": "capitalize"
                                      },
                                      domProps: { value: role.name }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(_vm._f("format")(role.name))
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm.users.length > 0
                  ? _c("div", { staticClass: "table-responsive" }, [
                      _c(
                        "table",
                        {
                          staticClass:
                            "table table-hover mb-0 ps-container ps-theme-default",
                          attrs: { id: "recent-customers" }
                        },
                        [
                          _vm._m(1),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.users, function(user, index) {
                              return _c("tr", { key: index }, [
                                _c("td", { staticClass: "text-truncate" }, [
                                  _c(
                                    "div",
                                    { staticClass: "avatar avatar-md mr-1" },
                                    [
                                      _c("img", {
                                        staticClass: "rounded-circle",
                                        attrs: {
                                          src: user.avatar
                                            ? "/storage/" + user.avatar
                                            : "/be/images/avatar-placeholder.png"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: { "margin-left": "10px" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(user.firstname) +
                                              " " +
                                              _vm._s(user.lastname)
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "text-truncate separated" },
                                  [_vm._v(_vm._s(user.phone))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "text-truncate separated" },
                                  [_vm._v(_vm._s(user.email))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "text-center separated" },
                                  [
                                    _c(
                                      "span",
                                      {
                                        class: {
                                          "badge badge-primary":
                                            user.status == "active",
                                          "badge badge-danger":
                                            user.status == "inactive"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("format")(user.status)
                                          ) +
                                            "\n                                            "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticStyle: { "text-align": "center" } },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticStyle: { "margin-top": "10px" },
                                        attrs: {
                                          href: "/api/admin/su/" + user.id
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-eye text-navy",
                                          staticStyle: { "margin-top": "15px" }
                                        })
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticStyle: { "text-align": "center" } },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn mr-1 mb-1 btn-outline-secondary btn-sm",
                                        staticStyle: { "margin-top": "10px" },
                                        attrs: {
                                          href: "/admin/users/edit/" + user.id
                                        }
                                      },
                                      [_c("i", { staticClass: "fa fa-pencil" })]
                                    )
                                  ]
                                )
                              ])
                            }),
                            0
                          )
                        ]
                      )
                    ])
                  : _c("div", { staticClass: "text-center" }, [
                      _c("div", { staticStyle: { padding: "20px" } }, [
                        _c("h4", [_vm._v(_vm._s(_vm.no_found_msg))])
                      ])
                    ])
              ]),
              _vm._v(" "),
              _vm.paginator.last_page > 1
                ? _c("order-paginator", {
                    attrs: { pagination: _vm.paginator, offset: _vm.offset },
                    on: {
                      paginate: function($event) {
                        return _vm.searchUsers()
                      }
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("h4", { staticStyle: { "margin-bottom": "10px" } }, [
        _c("strong", [_vm._v("Users")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Full Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Phone")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Audit")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Paginator.vue?vue&type=template&id=74bc836a&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Paginator.vue?vue&type=template&id=74bc836a& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { attrs: { "aria-label": "Page navigation mb-3" } }, [
    _c(
      "ul",
      { staticClass: "pagination justify-content-center" },
      [
        _c("li", { staticClass: "page-item" }, [
          _c(
            "a",
            {
              staticClass: "page-link",
              class: { "disable-button": _vm.pagination.current_page <= 1 },
              staticStyle: { cursor: "pointer" },
              attrs: { "aria-label": "Previous" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.changePage(_vm.pagination.current_page - 1)
                }
              }
            },
            [
              _c("span", { attrs: { "aria-hidden": "true" } }, [
                _vm._v("« Prev")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])
            ]
          )
        ]),
        _vm._v(" "),
        _vm._l(_vm.pagesNumber, function(page, index) {
          return _c(
            "li",
            {
              key: index,
              staticClass: "page-item",
              class: { active: page == _vm.pagination.current_page },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.changePage(page)
                }
              }
            },
            [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  staticStyle: { cursor: "pointer" }
                },
                [_vm._v(_vm._s(page))]
              )
            ]
          )
        }),
        _vm._v(" "),
        _c("li", { staticClass: "page-item" }, [
          _c(
            "a",
            {
              staticClass: "page-link",
              class: {
                "disable-button":
                  _vm.pagination.current_page >= _vm.pagination.last_page
              },
              staticStyle: { cursor: "pointer" },
              attrs: { "aria-label": "Next" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.changePage(_vm.pagination.current_page + 1)
                }
              }
            },
            [
              _c("span", { attrs: { "aria-hidden": "true" } }, [
                _vm._v("Next »")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])
            ]
          )
        ])
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=template&id=20ee0662&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=template&id=20ee0662&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mt-4" }, [
    _vm.subscription.id
      ? _c("form", { staticClass: "form" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "form-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-5" }, [
                _c(
                  "ul",
                  {
                    staticStyle: {
                      "list-style": "none",
                      "font-size": "12px",
                      "padding-left": "0px"
                    }
                  },
                  [
                    _c("li", [
                      _c("label", [
                        _c("b", [_vm._v("Selected plan:")]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.subscription.plan.title) +
                              "\n                                "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("label", [
                        _c("b", [_vm._v("Type:")]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.subscription.interval) + "ly")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("label", [
                        _c("b", [
                          _vm.subscription.interval == "month"
                            ? _c("span", [_vm._v("Monthly")])
                            : _vm.subscription.interval == "year"
                            ? _c("span", [_vm._v("Yearly")])
                            : _vm._e(),
                          _vm._v(" fee:")
                        ]),
                        _vm._v(
                          " $" +
                            _vm._s(
                              parseFloat(_vm.subscription.price).toFixed(2)
                            ) +
                            "\n                            "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.subscription.plan
                      ? _c("li", [
                          _c("label", [
                            _c("b", [_vm._v("Fee by record:")]),
                            _vm._v(
                              " $" +
                                _vm._s(
                                  parseFloat(
                                    _vm.subscription.plan.unit_price
                                  ).toFixed(2)
                                ) +
                                "\n                            "
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("li", [
                      _c("label", [
                        _c("b", [_vm._v("Free Records:")]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.subscription.free_records) +
                            "\n                            "
                        )
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4 offset-md-1" }, [
                _c(
                  "ul",
                  {
                    staticStyle: {
                      "list-style": "none",
                      "font-size": "12px",
                      "padding-left": "0px"
                    }
                  },
                  [
                    _vm.subscription.price > 0
                      ? _c("li", [
                          _c("label", [
                            _c("b", [_vm._v("Last payment at:")]),
                            _vm._v(" "),
                            _vm.subscription.last_payment_date
                              ? _c("span", [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        _vm
                                          .moment(
                                            _vm.subscription.last_payment_date
                                          )
                                          .format("LL")
                                      )
                                  )
                                ])
                              : _c("span", [_vm._v("Unknown date")])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("li", [
                      _c("label", [
                        _c("b", [_vm._v("Next payment date:")]),
                        _vm._v(" "),
                        _vm.subscription.next_billing_date
                          ? _c("span", [
                              _vm._v(
                                _vm._s(
                                  _vm
                                    .moment(_vm.subscription.next_billing_date)
                                    .format("LL")
                                )
                              )
                            ])
                          : _c("span", [_vm._v("Unknown date")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("label", { staticStyle: { "font-size": "12px" } }, [
                        _c("b", [_vm._v("Since:")]),
                        _vm._v(" "),
                        _c("span", [
                          _c("b", [
                            _vm._v(
                              _vm._s(
                                _vm
                                  .moment(_vm.subscription.created_at)
                                  .format("LLL")
                              )
                            )
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _vm.subscription.next_plan_id > 0
              ? _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-5" }, [
                    _c(
                      "ul",
                      {
                        staticStyle: {
                          "list-style": "none",
                          "font-size": "12px",
                          "padding-left": "0px"
                        }
                      },
                      [
                        _c("li", [
                          _c("label", [
                            _c("b", [_vm._v("Next plan:")]),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.subscription.next_plan.title) +
                                  "\n                                "
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("label", [
                            _c("b", [_vm._v("Type:")]),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm.subscription.next_plan.interval) +
                                  "ly"
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("label", [
                            _c("b", [
                              _vm.subscription.next_plan.interval == "month"
                                ? _c("span", [_vm._v("Monthly")])
                                : _vm.subscription.next_plan.interval == "year"
                                ? _c("span", [_vm._v("Yearly")])
                                : _vm._e(),
                              _vm._v("\n                                fee:")
                            ]),
                            _vm._v(
                              " $" +
                                _vm._s(
                                  parseFloat(
                                    _vm.subscription.next_plan.min_price
                                  ).toFixed(2)
                                ) +
                                "\n                            "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.subscription.next_plan.unit_price > 0
                          ? _c("li", [
                              _c("label", [
                                _c("b", [_vm._v("Fee by record:")]),
                                _vm._v(
                                  " $" +
                                    _vm._s(
                                      parseFloat(
                                        _vm.subscription.next_plan.unit_price
                                      ).toFixed(2)
                                    ) +
                                    "\n                            "
                                )
                              ])
                            ])
                          : _vm._e()
                      ]
                    )
                  ])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "text-right" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.openModal()
                      }
                    }
                  },
                  [
                    _c("i", {
                      class: {
                        "fa fa-circle-o-notch fa-spin fa-fw": _vm.processing,
                        "fa fa-refresh": !_vm.processing
                      }
                    }),
                    _vm._v(
                      "\n                        Change\n                    "
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade text-left",
        attrs: {
          id: "change-subscription",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "myModalLabel17",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog",
            class: {
              "modal-lg": _vm.plans.length <= 2,
              "modal-xl": _vm.plans.length > 2
            },
            attrs: { role: "document" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-md-12 text-right",
                    staticStyle: { "margin-bottom": "2rem" }
                  },
                  [
                    Object.keys(_vm.type).length > 1
                      ? _c("fieldset", [_vm._m(2)])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _vm.plans && _vm.plans.length > 0
                  ? _c(
                      "div",
                      {
                        staticClass: "text-center",
                        staticStyle: { width: "100%" }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "col-md-12 text-center" },
                          _vm._l(_vm.plans, function(plan, index) {
                            return _c(
                              "div",
                              {
                                key: index,
                                class: {
                                  "plan-1": _vm.plans.length == 1,
                                  "plan-2": _vm.plans.length == 2,
                                  "plan-3": _vm.plans.length == 3,
                                  "plan-4": _vm.plans.length > 3
                                },
                                staticStyle: { display: "inline-flex" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "box",
                                    staticStyle: { "min-height": "320px" }
                                  },
                                  [
                                    _c("a", [
                                      _c(
                                        "div",
                                        {
                                          style: {
                                            "background-color": plan.color_hex,
                                            height: "50px",
                                            "border-top-left-radius": "6px",
                                            "border-top-right-radius": "6px"
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              style: {
                                                color: plan.color_hex,
                                                "margin-top": "8px"
                                              }
                                            },
                                            [_vm._v(_vm._s(plan.title))]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form",
                                          staticStyle: { padding: "2rem 0" }
                                        },
                                        [
                                          _c(
                                            "form",
                                            [
                                              _c(
                                                "p",
                                                {
                                                  staticStyle: {
                                                    "font-size": "30px",
                                                    "font-weight": "700",
                                                    color: "#000"
                                                  },
                                                  attrs: {
                                                    "data-pricing-currency-code":
                                                      "USD"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                    $ " +
                                                      _vm._s(plan.min_price) +
                                                      " /"
                                                  ),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        "font-size": "20px"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.interval[
                                                            plan.interval
                                                          ]
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              plan.id !=
                                              _vm.subscription.plan.id
                                                ? _c("p", [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-primary",
                                                        style: {
                                                          "background-color":
                                                            plan.color_hex +
                                                            "!important",
                                                          "border-color":
                                                            plan.color_hex +
                                                            "!important"
                                                        },
                                                        attrs: {
                                                          type: "button"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.changeSubscription(
                                                              plan.id
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("Select Plan")]
                                                    )
                                                  ])
                                                : _c("p", [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-primary",
                                                        style: {
                                                          "background-color":
                                                            plan.color_hex +
                                                            "!important",
                                                          "border-color":
                                                            plan.color_hex +
                                                            "!important"
                                                        },
                                                        attrs: {
                                                          type: "button",
                                                          disabled: ""
                                                        }
                                                      },
                                                      [_vm._v("Current Plan")]
                                                    )
                                                  ]),
                                              _vm._v(" "),
                                              _vm._l(plan.includes, function(
                                                include,
                                                index
                                              ) {
                                                return _c(
                                                  "p",
                                                  {
                                                    key: index,
                                                    staticStyle: {
                                                      color: "#000"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    " +
                                                        _vm._s(include.title) +
                                                        "\n                                                "
                                                    )
                                                  ]
                                                )
                                              })
                                            ],
                                            2
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _vm._m(3)
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h5",
      {
        staticClass: "form-section",
        staticStyle: {
          "margin-top": "20px",
          color: "#fff",
          "border-bottom": "1px solid #fff"
        }
      },
      [_c("i", { staticClass: "fa fa-clipboard" }), _vm._v("Subscription")]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Plans")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("input", {
        staticClass: "switch",
        attrs: {
          type: "checkbox",
          "data-off-label": "Monthly",
          "data-on-label": "Annually",
          id: "switch12",
          "data-off-active-cls": "btn-primary"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn grey btn-outline-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateUserComponent_vue_vue_type_template_id_4df91c4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateUserComponent.vue?vue&type=template&id=4df91c4c&scoped=true& */ "./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=template&id=4df91c4c&scoped=true&");
/* harmony import */ var _CreateUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateUserComponent.vue?vue&type=script&lang=js& */ "./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CreateUserComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateUserComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _CreateUserComponent_vue_vue_type_style_index_1_id_4df91c4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateUserComponent.vue?vue&type=style&index=1&id=4df91c4c&scoped=true&lang=css& */ "./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=1&id=4df91c4c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _CreateUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateUserComponent_vue_vue_type_template_id_4df91c4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateUserComponent_vue_vue_type_template_id_4df91c4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4df91c4c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateUserComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateUserComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=1&id=4df91c4c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=1&id=4df91c4c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserComponent_vue_vue_type_style_index_1_id_4df91c4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateUserComponent.vue?vue&type=style&index=1&id=4df91c4c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=style&index=1&id=4df91c4c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserComponent_vue_vue_type_style_index_1_id_4df91c4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserComponent_vue_vue_type_style_index_1_id_4df91c4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserComponent_vue_vue_type_style_index_1_id_4df91c4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserComponent_vue_vue_type_style_index_1_id_4df91c4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=template&id=4df91c4c&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=template&id=4df91c4c&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserComponent_vue_vue_type_template_id_4df91c4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateUserComponent.vue?vue&type=template&id=4df91c4c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue?vue&type=template&id=4df91c4c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserComponent_vue_vue_type_template_id_4df91c4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserComponent_vue_vue_type_template_id_4df91c4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyProfileComponent_vue_vue_type_template_id_5746b3cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyProfileComponent.vue?vue&type=template&id=5746b3cc&scoped=true& */ "./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=template&id=5746b3cc&scoped=true&");
/* harmony import */ var _MyProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyProfileComponent.vue?vue&type=script&lang=js& */ "./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MyProfileComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyProfileComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _MyProfileComponent_vue_vue_type_style_index_1_id_5746b3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyProfileComponent.vue?vue&type=style&index=1&id=5746b3cc&scoped=true&lang=css& */ "./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=1&id=5746b3cc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _MyProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyProfileComponent_vue_vue_type_template_id_5746b3cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyProfileComponent_vue_vue_type_template_id_5746b3cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5746b3cc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MyProfileComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfileComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MyProfileComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfileComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfileComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfileComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfileComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=1&id=5746b3cc&scoped=true&lang=css&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=1&id=5746b3cc&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfileComponent_vue_vue_type_style_index_1_id_5746b3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MyProfileComponent.vue?vue&type=style&index=1&id=5746b3cc&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=style&index=1&id=5746b3cc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfileComponent_vue_vue_type_style_index_1_id_5746b3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfileComponent_vue_vue_type_style_index_1_id_5746b3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfileComponent_vue_vue_type_style_index_1_id_5746b3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfileComponent_vue_vue_type_style_index_1_id_5746b3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=template&id=5746b3cc&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=template&id=5746b3cc&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfileComponent_vue_vue_type_template_id_5746b3cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MyProfileComponent.vue?vue&type=template&id=5746b3cc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue?vue&type=template&id=5746b3cc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfileComponent_vue_vue_type_template_id_5746b3cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfileComponent_vue_vue_type_template_id_5746b3cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersListComponent_vue_vue_type_template_id_5ba9dbfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersListComponent.vue?vue&type=template&id=5ba9dbfa& */ "./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=template&id=5ba9dbfa&");
/* harmony import */ var _UsersListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersListComponent.vue?vue&type=script&lang=js& */ "./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UsersListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UsersListComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UsersListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsersListComponent_vue_vue_type_template_id_5ba9dbfa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsersListComponent_vue_vue_type_template_id_5ba9dbfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/be/modules/users/js/components/UsersListComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersListComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersListComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=template&id=5ba9dbfa&":
/*!******************************************************************************************************************!*\
  !*** ./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=template&id=5ba9dbfa& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListComponent_vue_vue_type_template_id_5ba9dbfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersListComponent.vue?vue&type=template&id=5ba9dbfa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue?vue&type=template&id=5ba9dbfa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListComponent_vue_vue_type_template_id_5ba9dbfa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListComponent_vue_vue_type_template_id_5ba9dbfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/be/modules/users/js/services/UserServices.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/be/modules/users/js/services/UserServices.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    //ApiCalls
    getUsers: function getUsers(data, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/admin/users/search',
        data: data
      }).then(function (response) {
        if (response.data.status == 1) {
          return callBackHandler('200', response.data);
        } else {
          return callBackHandler('001', response.data.errors);
        }
      })["catch"](function (error) {
        return callBackHandler('002', error.response);
      });
    },
    createUserCall: function createUserCall(data, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/admin/users/store-user',
        data: data
      }).then(function (response) {
        return callBackHandler(response);
      })["catch"](function (error) {
        return callBackHandler(error.response);
      });
    },
    updateUserCall: function updateUserCall(data, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/admin/users/update-user',
        data: data
      }).then(function (response) {
        return callBackHandler(response);
      })["catch"](function (error) {
        return callBackHandler(error.response);
      });
    },
    updateProfileCall: function updateProfileCall(data, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/admin/users/update-profile',
        data: data
      }).then(function (response) {
        return callBackHandler(response);
      })["catch"](function (error) {
        return callBackHandler(error.response);
      });
    },
    removeRoleCall: function removeRoleCall(data, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/admin/users/remove-role',
        data: data
      }).then(function (response) {
        return callBackHandler(response);
      })["catch"](function (error) {
        return callBackHandler(error.response);
      });
    },
    changeUserPasswordCall: function changeUserPasswordCall(id, data, callBackHandler) {
      axios({
        method: 'put',
        url: '/api/admin/users/change-user-password/' + id,
        data: data
      }).then(function (response) {
        return callBackHandler(response);
      })["catch"](function (error) {
        return callBackHandler(error.response);
      });
    },

    /* getLedgersCall(data, callBackHandler) {
        axios({
            method: 'post',
            url: '/api/admin/users/ledgers/search',
            data: data
        }).then(response => {
            return callBackHandler(response.data);
        }).catch((error) => {
            return callBackHandler('002', error.response);
        });
    }, */
    removeAvatarCall: function removeAvatarCall(id, callBackHandler) {
      axios({
        method: 'delete',
        url: '/api/admin/users/remove-avatar/' + id
      }).then(function (response) {
        return callBackHandler(response);
      })["catch"](function (error) {
        return callBackHandler('002', error.response);
      });
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/be/modules/users/js/user.js":
/*!*********************************************************!*\
  !*** ./resources/assets/js/be/modules/users/js/user.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_UsersListComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/UsersListComponent.vue */ "./resources/assets/js/be/modules/users/js/components/UsersListComponent.vue");
/* harmony import */ var _components_CreateUserComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CreateUserComponent.vue */ "./resources/assets/js/be/modules/users/js/components/CreateUserComponent.vue");
/* harmony import */ var _components_MyProfileComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MyProfileComponent.vue */ "./resources/assets/js/be/modules/users/js/components/MyProfileComponent.vue");
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//Users List



Vue.component('users-list', _components_UsersListComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
Vue.component('create-user', _components_CreateUserComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
Vue.component('my-profile', _components_MyProfileComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
var users = new Vue({
  el: '#users-module'
});

/***/ }),

/***/ "./resources/assets/js/components/Paginator.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/components/Paginator.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Paginator_vue_vue_type_template_id_74bc836a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paginator.vue?vue&type=template&id=74bc836a& */ "./resources/assets/js/components/Paginator.vue?vue&type=template&id=74bc836a&");
/* harmony import */ var _Paginator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paginator.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Paginator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Paginator_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Paginator.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/Paginator.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Paginator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Paginator_vue_vue_type_template_id_74bc836a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Paginator_vue_vue_type_template_id_74bc836a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Paginator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Paginator.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/Paginator.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Paginator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Paginator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Paginator.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/Paginator.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Paginator.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Paginator.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/components/Paginator.vue?vue&type=template&id=74bc836a&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/components/Paginator.vue?vue&type=template&id=74bc836a& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_template_id_74bc836a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Paginator.vue?vue&type=template&id=74bc836a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Paginator.vue?vue&type=template&id=74bc836a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_template_id_74bc836a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_template_id_74bc836a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue":
/*!****************************************************************************************************!*\
  !*** ./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubscriptionDetailsComponent_vue_vue_type_template_id_20ee0662_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubscriptionDetailsComponent.vue?vue&type=template&id=20ee0662&scoped=true& */ "./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=template&id=20ee0662&scoped=true&");
/* harmony import */ var _SubscriptionDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubscriptionDetailsComponent.vue?vue&type=script&lang=js& */ "./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SubscriptionDetailsComponent_vue_vue_type_style_index_0_id_20ee0662_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubscriptionDetailsComponent.vue?vue&type=style&index=0&id=20ee0662&scoped=true&lang=css& */ "./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=style&index=0&id=20ee0662&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SubscriptionDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubscriptionDetailsComponent_vue_vue_type_template_id_20ee0662_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubscriptionDetailsComponent_vue_vue_type_template_id_20ee0662_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "20ee0662",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubscriptionDetailsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=style&index=0&id=20ee0662&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=style&index=0&id=20ee0662&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionDetailsComponent_vue_vue_type_style_index_0_id_20ee0662_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubscriptionDetailsComponent.vue?vue&type=style&index=0&id=20ee0662&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=style&index=0&id=20ee0662&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionDetailsComponent_vue_vue_type_style_index_0_id_20ee0662_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionDetailsComponent_vue_vue_type_style_index_0_id_20ee0662_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionDetailsComponent_vue_vue_type_style_index_0_id_20ee0662_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionDetailsComponent_vue_vue_type_style_index_0_id_20ee0662_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=template&id=20ee0662&scoped=true&":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=template&id=20ee0662&scoped=true& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionDetailsComponent_vue_vue_type_template_id_20ee0662_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubscriptionDetailsComponent.vue?vue&type=template&id=20ee0662&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/be/modules/plans/js/components/subscriptions/SubscriptionDetailsComponent.vue?vue&type=template&id=20ee0662&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionDetailsComponent_vue_vue_type_template_id_20ee0662_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionDetailsComponent_vue_vue_type_template_id_20ee0662_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/be/modules/plans/js/services/PlanServices.js":
/*!*******************************************************************!*\
  !*** ./resources/js/be/modules/plans/js/services/PlanServices.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    //ApiCalls
    getPlansCall: function getPlansCall(params, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/plans/search',
        data: params
      }).then(function (response) {
        if (Helpers.isJson(response.data)) {
          callBackHandler(response.data);
        } else {
          callBackHandler(Helpers.unknownError(response));
        }
      }.bind(this))["catch"](function (error) {
        if (Helpers.isJson(error.response.data)) {
          callBackHandler(error.response.data);
        } else {
          callBackHandler(Helpers.unknownError(error.response));
        }
      });
    },
    createPlanCall: function createPlanCall(params, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/plans/store',
        data: params
      }).then(function (response) {
        callBackHandler(response.data);
      }.bind(this))["catch"](function (error) {
        Helpers.unknownError(error.response);
      });
    },
    updatePlanCall: function updatePlanCall(params, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/plans/update',
        data: params
      }).then(function (response) {
        callBackHandler(response.data);
      }.bind(this))["catch"](function (error) {
        Helpers.unknownError(error.response);
      });
    },
    getPlanCall: function getPlanCall(id, callBackHandler) {
      axios({
        method: 'get',
        url: '/api/plans/show/' + id
      }).then(function (response) {
        if (Helpers.isJson(response.data)) {
          callBackHandler(response.data);
        } else {
          callBackHandler(Helpers.unknownError(response));
        }
      }.bind(this))["catch"](function (error) {
        if (Helpers.isJson(error.response.data)) {
          callBackHandler(error.response.data);
        } else {
          callBackHandler(Helpers.unknownError(error.response));
        }
      });
    },
    removePlanCall: function removePlanCall(id, callBackHandler) {
      axios({
        method: 'delete',
        url: '/api/plans/delete/' + id
      }).then(function (response) {
        if (Helpers.isJson(response.data)) {
          callBackHandler(response.data);
        } else {
          callBackHandler(Helpers.unknownError(response));
        }
      }.bind(this))["catch"](function (error) {
        if (Helpers.isJson(error.response.data)) {
          callBackHandler(error.response.data);
        } else {
          callBackHandler(Helpers.unknownError(error.response));
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/be/modules/plans/js/services/SubscriptionServices.js":
/*!***************************************************************************!*\
  !*** ./resources/js/be/modules/plans/js/services/SubscriptionServices.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    //ApiCalls
    getSubscriptionsCall: function getSubscriptionsCall(params, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/subscriptions/search',
        data: params
      }).then(function (response) {
        if (Helpers.isJson(response.data)) {
          callBackHandler(response.data);
        } else {
          callBackHandler(Helpers.unknownError(response));
        }
      }.bind(this))["catch"](function (error) {
        if (Helpers.isJson(error.response.data)) {
          callBackHandler(error.response.data);
        } else {
          callBackHandler(Helpers.unknownError(error.response));
        }
      });
    },
    createSubscriptionCall: function createSubscriptionCall(params, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/subscriptions/store',
        data: params
      }).then(function (response) {
        callBackHandler(response.data);
      }.bind(this))["catch"](function (error) {
        Helpers.unknownError(error.response);
      });
    },
    updateSubscriptionCall: function updateSubscriptionCall(params, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/subscriptions/update',
        data: params
      }).then(function (response) {
        callBackHandler(response.data);
      }.bind(this))["catch"](function (error) {
        Helpers.unknownError(error.response);
      });
    },
    changeSubscriptionCall: function changeSubscriptionCall(params, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/subscriptions/change',
        data: params
      }).then(function (response) {
        callBackHandler(response.data);
      }.bind(this))["catch"](function (error) {
        Helpers.unknownError(error.response);
      });
    },
    getSubscriptionCall: function getSubscriptionCall(id, callBackHandler) {
      axios({
        method: 'get',
        url: '/api/subscriptions/show/' + id
      }).then(function (response) {
        if (Helpers.isJson(response.data)) {
          callBackHandler(response.data);
        } else {
          callBackHandler(Helpers.unknownError(response));
        }
      }.bind(this))["catch"](function (error) {
        if (Helpers.isJson(error.response.data)) {
          callBackHandler(error.response.data);
        } else {
          callBackHandler(Helpers.unknownError(error.response));
        }
      });
    },
    getSubscriptionAsOwnerCall: function getSubscriptionAsOwnerCall(id, params, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/subscriptions/show/' + id,
        data: params
      }).then(function (response) {
        if (Helpers.isJson(response.data)) {
          callBackHandler(response.data);
        } else {
          callBackHandler(Helpers.unknownError(response));
        }
      }.bind(this))["catch"](function (error) {
        if (Helpers.isJson(error.response.data)) {
          callBackHandler(error.response.data);
        } else {
          callBackHandler(Helpers.unknownError(error.response));
        }
      });
    },
    removeSubscriptionCall: function removeSubscriptionCall(id, callBackHandler) {
      axios({
        method: 'delete',
        url: '/api/subscriptions/delete/' + id
      }).then(function (response) {
        if (Helpers.isJson(response.data)) {
          callBackHandler(response.data);
        } else {
          callBackHandler(Helpers.unknownError(response));
        }
      }.bind(this))["catch"](function (error) {
        if (Helpers.isJson(error.response.data)) {
          callBackHandler(error.response.data);
        } else {
          callBackHandler(Helpers.unknownError(error.response));
        }
      });
    },
    getPlanTypesCall: function getPlanTypesCall(callBackHandler) {
      axios({
        method: 'get',
        url: '/api/plans/type'
      }).then(function (response) {
        callBackHandler(response.data);
      }.bind(this))["catch"](function (error) {
        Helpers.unknownError(error.response);
      });
    }
  }
});

/***/ }),

/***/ 1:
/*!***************************************************************!*\
  !*** multi ./resources/assets/js/be/modules/users/js/user.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/vhost/resources/assets/js/be/modules/users/js/user.js */"./resources/assets/js/be/modules/users/js/user.js");


/***/ })

/******/ });