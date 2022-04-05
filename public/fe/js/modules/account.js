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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_AccountServices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/AccountServices.js */ "./resources/assets/js/fe/modules/accounts/js/services/AccountServices.js");
/* harmony import */ var _components_Paginator_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/Paginator.vue */ "./resources/assets/js/components/Paginator.vue");
/* harmony import */ var _misc_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../misc/storage */ "./resources/assets/js/misc/storage.js");
/* harmony import */ var _dashboard_cards_js_components_DashboradBoxComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dashboard_cards/js/components/DashboradBoxComponents */ "./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue");
var _mixins$props$compone;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = (_mixins$props$compone = {
  mixins: [_services_AccountServices_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ['accounts'],
  components: {
    'transaction-paginator': _components_Paginator_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'dashboard-box': _dashboard_cards_js_components_DashboradBoxComponents__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      account: {
        id: '',
        user_id: '',
        creator_id: '',
        name: '',
        account_number: '',
        account_type: '',
        balance: '',
        withdrawable: '',
        status: ''
      },
      transactions: [],
      selected_account: '',
      amount: '',
      withdraw: '',
      selected_bank: '',
      bank: {
        namne: '',
        account_number: '',
        routing_number: ''
      },
      error: {
        withdraw: false,
        amount: false
      },
      error_message: {
        withdraw: '',
        amount: ''
      },
      paginator: {
        total: 0,
        from: 1,
        to: 0,
        current_page: 1,
        last_page: 1
      },
      offset: 10,
      moment: moment,
      lineChartA: '',
      chartData: {},
      configData: {}
    };
  },
  watch: {
    selected_account: function selected_account(val) {}
  },
  methods: {
    addFunds: function addFunds() {
      if (this.amount > 0) {
        this.account.amount = this.amount;
        $.LoadingOverlay("show");
        this.addFundsCall(this.account, this.addFundsCallback);
      } else {
        this.error.amount = true;
        this.error_message.amount = 'Amount must be greater or equal than $0.00';
      }
    },
    addFundsCallback: function addFundsCallback(response) {
      $.LoadingOverlay("hide");

      if (response.data.status == 1) {
        this.account = Object.assign({}, response.data.data);
        this.getTransactions();
        $('#add').modal('hide');
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
    withdrawCash: function withdrawCash() {
      if (this.withdraw > 0) {
        if (this.withdraw <= this.account.withdrawable) {
          this.account.withdraw = this.withdraw;
          $.LoadingOverlay("show");
          this.withdrawCashCall(this.account, this.withdrawCashCallback);
        } else {
          this.error.withdraw = true;
          this.error_message.withdraw = 'Amount to withdraw must be less or equal than $' + parseFloat(this.account.withdrawable).toFixed(2);
        }
      } else {
        if (this.withdraw <= 0) {
          this.error.withdraw = true;
          this.error_message.withdraw = 'Amount to withdraw must be greater or equal than 0';
        }
      }
    },
    withdrawCashCallback: function withdrawCashCallback(response) {
      $.LoadingOverlay("hide");

      if (response.data.status == 1) {
        this.account = Object.assign({}, response.data.data);
        this.getTransactions();
        $('#withdraw').modal('hide');
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
    setSelectedAccount: function setSelectedAccount(data) {
      this.selected_account = data;

      if (this.selected_account) {
        this.getAccount();
      }
    },
    getAccount: function getAccount() {
      this.getAccountCall(this.selected_account, this.getAccountCallback);
    },
    getTransactions: function getTransactions() {
      this.getTransactionsCall(this.selected_account, this.paginator.current_page, this.getTransactionsCallback);
    },
    getAccountCallback: function getAccountCallback(response) {
      if (response.data.status == 1) {
        this.account = Object.assign(this.account, response.data.data);
        this.getTransactions();
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
    getTransactionsCallback: function getTransactionsCallback(response) {
      if (response.data.status == 1) {
        this.transactions = response.data.data.data;
        this.paginator = response.data.data;
        var data_draw = [];
        var labels = [];

        for (var _i = this.transactions.length - 1; _i >= 0; _i--) {
          labels.push(moment(this.transactions[_i].created_at).format('MM/DD/YYYY'));
          data_draw.push(parseFloat(this.transactions[_i].ending_balance).toFixed(2));
        }

        this.drawGraphBalance("account-balance-chart", data_draw, labels);
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
    clearAmountErrors: function clearAmountErrors() {
      this.error.amount = false;
      this.error_message.amount = '';
    },
    clearWithdrawErrors: function clearWithdrawErrors() {
      this.error.withdraw = false;
      this.error_message.withdraw = '';
    },
    drawGraphBalance: function drawGraphBalance(id, data, labels) {
      console.log(data);
      console.log(labels); //Get the context of the Chart canvas element we want to select

      var ctx = $("#" + id); // Chart Options

      var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        hover: {
          mode: 'label'
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              fontColor: '#fff',
              fontSize: 14,
              padding: 20,
              callback: function callback(dataLabel, index) {
                // Hide the label of every 2nd dataset. return null to hide the grid line too
                if (data.length > 100) {
                  var num = Math.ceil(data.length / 100);
                } else {
                  var num = Math.ceil(data.length / 10);
                }

                return index === data.length - 1 || index === 0 ? dataLabel : null;
              }
            },
            gridLines: {
              display: false,
              color: "#f3f3f3",
              drawTicks: false
            },
            scaleLabel: {
              display: true,
              // labelString: 'Simulations',
              fontColor: '#fff'
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              callback: function callback(value, index, values) {
                return '$' + value.toFixed(2);
              },
              fontColor: '#fff',
              fontSize: 14,
              padding: 20
            },
            gridLines: {
              color: "#f3f3f3",
              drawTicks: false
            },
            scaleLabel: {
              display: true,
              // labelString: 'Value',
              fontColor: '#fff'
            }
          }]
        },
        title: {
          display: false,
          text: '',
          fontSize: 18,
          fontColor: '#fff'
        },
        elements: {
          point: {
            radius: 0
          }
        }
      }; // Chart Data

      this.chartData = {
        // labels: labels_array,
        labels: labels,
        datasets: [{
          data: data,
          lineTension: 0,
          fill: false,
          borderColor: "#EE7E21"
        }]
      };
      this.configData = {
        type: 'line',
        options: chartOptions,
        data: this.chartData
      };
      console.log(this.configData);
      console.log(ctx); // Create the chart

      this.lineChartA = new Chart(ctx, this.configData);
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
  }
}, _defineProperty(_mixins$props$compone, "watch", {
  'withdraw': function withdraw(val) {
    if (val) {
      this.error.withdraw = false;
      this.error_message.withdraw = '';
    }
  },
  'amount': function amount(val) {
    if (val) {
      this.error.amount = false;
      this.error_message.amount = '';
    }
  }
}), _defineProperty(_mixins$props$compone, "created", function created() {
  if (this.accounts.length == 0) {
    toastr.error('You do not have an active account. Please contact with your administrator', 'An error has occurred', {
      positionClass: 'toast-top-center',
      containerId: 'toast-top-center'
    });
  } else {
    this.setSelectedAccount(this.accounts[0].id);
  }
}), _defineProperty(_mixins$props$compone, "mounted", function mounted() {
  var self = this;
  this.$nextTick(function () {
    $('#add').on('hidden.bs.modal', function (e) {
      self.amount = '';
      self.clearAmountErrors();
    });
    $('#withdraw').on('hidden.bs.modal', function (e) {
      self.withdraw = '';
      self.clearWithdrawErrors();
    });
  });
}), _mixins$props$compone);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_DashboardBoxServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/DashboardBoxServices */ "./resources/assets/js/fe/modules/dashboard_cards/js/services/DashboardBoxServices.js");
/* harmony import */ var _components_Paginator_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/Paginator.vue */ "./resources/assets/js/components/Paginator.vue");
/* harmony import */ var _broadcast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../broadcast */ "./resources/assets/js/fe/modules/dashboard_cards/js/broadcast.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_services_DashboardBoxServices__WEBPACK_IMPORTED_MODULE_0__["default"], _broadcast__WEBPACK_IMPORTED_MODULE_2__["default"]],
  name: 'DashboardBox',
  data: function data() {
    return {
      transactions: [],
      securities: '',
      transactions_total: '',
      holdings: '',
      mdf: '',
      selected_account: '',
      paginator: {
        total: 0,
        per_page: 2,
        from: 1,
        to: 0,
        current_page: 1
      },
      offset: 5,
      moment: moment,
      account: {},
      account_info: ''
    };
  },
  watch: {},
  methods: {
    cardsDashboardCallBack: function cardsDashboardCallBack(response) {
      if (response.data.status == 1) {
        this.securities = response.data.data.data.securities;
        this.holdings = response.data.data.data.holding;
        this.account_info = response.data.data.data.account;
        this.mdf = response.data.data.data.mdf;
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

      $.LoadingOverlay("hide");
    },
    getUserAccount: function getUserAccount() {
      $.LoadingOverlay("hide");
      this.getUserAccountCall(this.getUserAccountCallback);
    },
    getUserAccountCallback: function getUserAccountCallback(response) {
      if (response.data.status == 1) {
        this.account = Object.assign(this.account, response.data.data);
        var params = {
          "account_id": this.account.id
        };
        this.cardsDashboardCall(params, this.cardsDashboardCallBack); // this.getTransactions();
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
  // watch: {
  //     "selected_account"(val){
  //         for (let i = 0; i < this.active_accounts.length; i++) {
  //             if(this.active_accounts[i].id == val){
  //                 this.all_info_account = this.active_accounts[i]
  //             }
  //         }
  //         var params = {
  //             "account_id":val
  //         }
  //         this.cardsDashboardCall(params, this.cardsDashboardCallBack);
  //     }
  //},
  created: function created() {
    this.getUserAccount(); // this.searchAccountsCall({
    //     page: this.paginator.current_page,
    //     limit: this.limit,
    //     fields: ['id', 'name', 'account_number', 'account_type', 'balance', 'status', 'created_at'],
    //     with: ['user', 'creator']
    // }, this.searchAccountsCallback);

    var params = {
      "account_id": this.selected_account
    };
  },
  mounted: function mounted() {
    var self = this;
    this.$nextTick(function () {
      window.addEventListener('storage', function (e) {
        if (self.selected_account != e.newValue) {
          storage.set_plain('selected_account', e.oldValue);
        }

        if (!e.newValue) {
          self.selected_account = '';
        }
      });
    });
  }
});

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.message-error {\n    color: #d61212;\n    float: right;\n    padding-top: 10px;\n    font-size: 12px;\n}\n.page-item.active .page-link {\n    background-color: #411c5e !important;\n    border-color: #411c5e !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=1&id=0cadedd3&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=1&id=0cadedd3&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.inputGroup[data-v-0cadedd3] {\n    background-color: #fff;\n    display: block;\n    margin: 10px 0;\n    position: relative;\n}\n.inputGroup label[data-v-0cadedd3] {\n    padding: 12px 30px;\n    width: 100%;\n    display: block;\n    text-align: left;\n    color: #3C454C;\n    cursor: pointer;\n    position: relative;\n    z-index: 2;\n    transition: color 200ms ease-in;\n    overflow: hidden;\n    border: 1px solid #411c5e;\n}\n.inputGroup label[data-v-0cadedd3]:before {\n    width: 100%;\n    height: 10px;\n    border-radius: 50%;\n    content: '';\n    background-color: #411c5e;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%) scale3d(1, 1, 1);\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    opacity: 0;\n    z-index: -1;\n}\n.inputGroup label[data-v-0cadedd3]:after {\n    width: 32px;\n    height: 32px;\n    content: '';\n    border: 2px solid #D1D7DC;\n    background-color: #fff;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: 2px 3px;\n    border-radius: 50%;\n    z-index: 2;\n    position: absolute;\n    right: 30px;\n    top: 50%;\n    transform: translateY(-50%);\n    cursor: pointer;\n    transition: all 200ms ease-in;\n}\n.inputGroup input:checked~label[data-v-0cadedd3] {\n    color: #fff;\n}\n.inputGroup input:checked~label[data-v-0cadedd3]:before {\n    transform: translate(-50%, -50%) scale3d(56, 56, 1);\n    opacity: 1;\n}\n.inputGroup input:checked~label[data-v-0cadedd3]:after {\n    background-color: #3d4554;\n    border-color: #fff;\n}\n.inputGroup input[data-v-0cadedd3] {\n    width: 32px;\n    height: 32px;\n    order: 1;\n    z-index: 2;\n    position: absolute;\n    right: 30px;\n    top: 50%;\n    transform: translateY(-50%);\n    cursor: pointer;\n    visibility: hidden;\n}\n.form[data-v-0cadedd3] {\n    padding: 0 16px;\n    /*  max-width: 550px; */\n    margin: 50px auto;\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 36px;\n}\n#label1[data-v-0cadedd3],\n#label2[data-v-0cadedd3] {\n    height: 100px !important;\n}\nbody[data-v-0cadedd3] {\n    background-color: #D1D7DC;\n    font-family: 'Fira Sans', sans-serif;\n}\n*[data-v-0cadedd3],\n*[data-v-0cadedd3]::before,\n*[data-v-0cadedd3]::after {\n    box-sizing: inherit;\n}\nhtml[data-v-0cadedd3] {\n    box-sizing: border-box;\n}\ncode[data-v-0cadedd3] {\n    background-color: #9AA3AC;\n    padding: 0 8px;\n}\n.btn-outline-purple[data-v-0cadedd3]:hover {\n    background-color: #411c5e;\n    color: #FFF !important;\n}\n.btn-outline-purple[data-v-0cadedd3] {\n    border-color: #411c5e;\n    color: #411c5e;\n}\n.table thead th[data-v-0cadedd3] {\n    padding: 0.75rem 2rem !important;\n}\n.btn-outline-purple[data-v-0cadedd3] {\n    border-color: #fff;\n    color: #fff;\n}\ntable[data-v-0cadedd3] {\n    color: #fff;\n}\n.badge[data-v-0cadedd3] {\n    color: #000;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page-item.active .page-link {\n    background-color: #411c5e !important;\n    border-color: #411c5e !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=1&id=3b2fb76a&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=1&id=3b2fb76a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-dark[data-v-3b2fb76a] {\n    background: #404e67;\n    color: #fff;\n}\n.badge[data-v-3b2fb76a] {\n    color: #000;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountsListComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=1&id=0cadedd3&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=1&id=0cadedd3&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountsListComponent.vue?vue&type=style&index=1&id=0cadedd3&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=1&id=0cadedd3&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboradBoxComponents.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=1&id=3b2fb76a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=1&id=3b2fb76a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboradBoxComponents.vue?vue&type=style&index=1&id=3b2fb76a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=1&id=3b2fb76a&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=template&id=0cadedd3&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=template&id=0cadedd3&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _vm.accounts.length > 0 ? _c("dashboard-box") : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "card card-dark" }, [
        _c(
          "div",
          {
            staticClass: "card-content",
            staticStyle: { "min-height": "70vh" }
          },
          [
            _c(
              "div",
              {
                staticClass: "card-body",
                staticStyle: { "padding-top": "5px" }
              },
              [
                _vm.selected_account
                  ? _c("div", [
                      _c("div", { staticClass: "card-content" }, [
                        _c(
                          "div",
                          {
                            staticClass: "card-body",
                            staticStyle: { "padding-top": "5px" }
                          },
                          [
                            _c("hr"),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-12 col-md-8" }, [
                                _vm.transactions.length > 0
                                  ? _c(
                                      "div",
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "table-responsive" },
                                          [
                                            _c(
                                              "table",
                                              {
                                                staticClass:
                                                  "table table-hover mb-0 ps-container ps-theme-default",
                                                attrs: { id: "recent-orders" }
                                              },
                                              [
                                                _vm._m(0),
                                                _vm._v(" "),
                                                _c(
                                                  "tbody",
                                                  _vm._l(
                                                    _vm.transactions,
                                                    function(
                                                      transaction,
                                                      index
                                                    ) {
                                                      return _c(
                                                        "tr",
                                                        { key: index },
                                                        [
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-truncate"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                                " +
                                                                  _vm._s(
                                                                    _vm
                                                                      .moment(
                                                                        transaction.created_at
                                                                      )
                                                                      .format(
                                                                        "MM/DD/YYYY"
                                                                      )
                                                                  ) +
                                                                  "\n                                                            "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-truncate text-center"
                                                            },
                                                            [
                                                              transaction.operation ==
                                                              "deposit"
                                                                ? _c("span", [
                                                                    _vm._v(
                                                                      "Deposit Funds"
                                                                    )
                                                                  ])
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              transaction.operation ==
                                                              "withdraw"
                                                                ? _c("span", [
                                                                    _vm._v(
                                                                      "Withdraw Funds"
                                                                    )
                                                                  ])
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              transaction.operation ==
                                                              "buy"
                                                                ? _c("span", [
                                                                    _vm._v(
                                                                      "Buy Securities"
                                                                    )
                                                                  ])
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              transaction.operation ==
                                                              "sale"
                                                                ? _c("span", [
                                                                    _vm._v(
                                                                      "Sale Securities"
                                                                    )
                                                                  ])
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              transaction.operation ==
                                                              "mdf"
                                                                ? _c("span", [
                                                                    _vm._v(
                                                                      "MDF payment"
                                                                    )
                                                                  ])
                                                                : _vm._e()
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-truncate text-center"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                                $" +
                                                                  _vm._s(
                                                                    parseFloat(
                                                                      transaction.amount
                                                                    ).toFixed(2)
                                                                  ) +
                                                                  "\n                                                            "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-truncate text-center"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                                $" +
                                                                  _vm._s(
                                                                    parseFloat(
                                                                      transaction.ending_withdrawable
                                                                    ).toFixed(2)
                                                                  ) +
                                                                  "\n                                                            "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-truncate text-center"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                                $" +
                                                                  _vm._s(
                                                                    parseFloat(
                                                                      transaction.ending_balance
                                                                    ).toFixed(2)
                                                                  ) +
                                                                  "\n                                                            "
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    }
                                                  ),
                                                  0
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm.paginator.last_page > 1
                                          ? _c("transaction-paginator", {
                                              staticClass: "mt-2",
                                              staticStyle: { color: "black" },
                                              attrs: {
                                                pagination: _vm.paginator,
                                                offset: _vm.offset
                                              },
                                              on: {
                                                paginate: _vm.getTransactions
                                              }
                                            })
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  : _c("div", [_vm._m(1)])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 col-md-4 text-center" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "row",
                                      staticStyle: { "margin-bottom": "20px" }
                                    },
                                    [
                                      _vm._m(2),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "col-6",
                                          staticStyle: { "padding-top": "15px" }
                                        },
                                        [
                                          _c(
                                            "h5",
                                            {
                                              staticStyle: {
                                                "font-size": "20px",
                                                color: "#DFA426",
                                                "font-weight": "500"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "$" +
                                                  _vm._s(
                                                    parseFloat(
                                                      _vm.account.balance
                                                    ).toFixed(2)
                                                  )
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(3)
                                ]
                              )
                            ])
                          ]
                        )
                      ])
                    ])
                  : _c("div", [_vm._m(4)])
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade text-left",
          attrs: {
            id: "add",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "myModalLabel1",
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
                _vm._m(5),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c(
                    "fieldset",
                    { staticClass: "form-group position-relative mt-2" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.amount,
                            expression: "amount"
                          }
                        ],
                        staticClass: "form-control form-control-lg",
                        attrs: {
                          type: "number",
                          id: "Large",
                          min: "10",
                          placeholder: "Amount to be funded"
                        },
                        domProps: { value: _vm.amount },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.amount = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.error.amount
                        ? _c("span", { staticClass: "message-error" }, [
                            _vm._v(_vm._s(_vm.error_message.amount))
                          ])
                        : _vm._e()
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn grey btn-outline-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-primary",
                      attrs: { type: "button" },
                      on: { click: _vm.addFunds }
                    },
                    [_vm._v("Add funds")]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade text-left",
          attrs: {
            id: "withdraw",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "myModalLabel1",
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
                _vm._m(6),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("label", [_vm._v("Withdrawable amount")]),
                  _vm._v(" "),
                  _c(
                    "fieldset",
                    { staticClass: "form-group position-relative mt-2" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.account.withdrawable,
                            expression: "account.withdrawable"
                          }
                        ],
                        staticClass: "form-control form-control-lg",
                        attrs: { type: "number", disabled: "" },
                        domProps: { value: _vm.account.withdrawable },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.account,
                              "withdrawable",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "fieldset",
                    { staticClass: "form-group position-relative mt-2" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.withdraw,
                            expression: "withdraw"
                          }
                        ],
                        staticClass: "form-control form-control-lg",
                        attrs: {
                          type: "number",
                          placeholder: "Amount to withdraw"
                        },
                        domProps: { value: _vm.withdraw },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.withdraw = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.error.withdraw
                        ? _c("span", { staticClass: "message-error" }, [
                            _vm._v(_vm._s(_vm.error_message.withdraw))
                          ])
                        : _vm._e()
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn grey btn-outline-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-primary",
                      attrs: { type: "button" },
                      on: { click: _vm.withdrawCash }
                    },
                    [_vm._v("Withdraw\n                        Cash")]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade text-left",
          attrs: {
            id: "banks",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "myModalLabel1",
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
                _vm._m(7),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c(
                    "fieldset",
                    { staticClass: "form-group position-relative mt-2" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.bank.name,
                            expression: "bank.name"
                          }
                        ],
                        staticClass: "form-control form-control-lg",
                        attrs: { type: "text", placeholder: "Bank name" },
                        domProps: { value: _vm.bank.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.bank, "name", $event.target.value)
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "fieldset",
                    { staticClass: "form-group position-relative mt-2" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.bank.account_number,
                            expression: "bank.account_number"
                          }
                        ],
                        staticClass: "form-control form-control-lg",
                        attrs: { type: "text", placeholder: "Account number" },
                        domProps: { value: _vm.bank.account_number },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.bank,
                              "account_number",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "fieldset",
                    { staticClass: "form-group position-relative mt-2" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.bank.routing_number,
                            expression: "bank.routing_number"
                          }
                        ],
                        staticClass: "form-control form-control-lg",
                        attrs: { type: "text", placeholder: "Routing number" },
                        domProps: { value: _vm.bank.routing_number },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.bank,
                              "routing_number",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("hr")
                ]),
                _vm._v(" "),
                _vm._m(8)
              ])
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [
          _c(
            "div",
            {
              staticStyle: {
                "background-color": "#C8A252",
                padding: "5px",
                border: "3px solid #6D4B03"
              }
            },
            [
              _vm._v(
                "\n                                                                    Date\n                                                                "
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [
          _c(
            "div",
            {
              staticStyle: {
                "background-color": "#C8A252",
                padding: "5px",
                border: "3px solid #6D4B03"
              }
            },
            [
              _vm._v(
                "\n                                                                    Description\n                                                                "
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [
          _c(
            "div",
            {
              staticStyle: {
                "background-color": "#C8A252",
                padding: "5px",
                border: "3px solid #6D4B03"
              }
            },
            [
              _vm._v(
                "\n                                                                    Deposits\n                                                                "
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [
          _c(
            "div",
            {
              staticStyle: {
                "background-color": "#C8A252",
                padding: "5px",
                border: "3px solid #6D4B03"
              }
            },
            [
              _vm._v(
                "\n                                                                    Withdrawals\n                                                                "
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [
          _c(
            "div",
            {
              staticStyle: {
                "background-color": "#C8A252",
                padding: "5px",
                border: "3px solid #6D4B03"
              }
            },
            [
              _vm._v(
                "\n                                                                    Acct. Balance\n                                                                "
              )
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mt-3" }, [
      _c("div", { staticClass: "col-md-12 text-center" }, [
        _c("h4", [_vm._v("No registered transactions on this account.")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-6", staticStyle: { "padding-top": "15px" } },
      [
        _c(
          "h5",
          {
            staticStyle: {
              "font-size": "20px",
              color: "#DFA426",
              "font-weight": "500"
            }
          },
          [_vm._v("Account Value:")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 height-400" }, [
      _c("canvas", { attrs: { id: "account-balance-chart" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mt-4" }, [
      _c("div", { staticClass: "col-md-12 text-center mt-4" }, [
        _c("h4", [_vm._v("No account has been selected.")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title", attrs: { id: "myModalLabel1" } }, [
        _vm._v("Add funds from a linked bank account")
      ]),
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
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title", attrs: { id: "myModalLabel1" } }, [
        _vm._v("Withdraw cash")
      ]),
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
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title", attrs: { id: "myModalLabel1" } }, [
        _vm._v("Add bank accounts")
      ]),
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
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn grey btn-outline-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-outline-primary", attrs: { type: "button" } },
        [_vm._v("Save")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=template&id=3b2fb76a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=template&id=3b2fb76a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-xl-3 col-lg-6 col-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-content" }, [
          _c("a", { attrs: { href: "/investor/accounts" } }, [
            _c(
              "div",
              {
                staticClass: "media align-items-stretch",
                staticStyle: { "min-height": "184px" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "p-1 custom-widget bg-dark-card white media-body"
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-6 text-right" }, [
                        _c("p", { staticStyle: { "margin-bottom": "0px" } }, [
                          _vm._v(
                            "$" +
                              _vm._s(
                                parseFloat(_vm.account_info.balance).toFixed(2)
                              )
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-6 text-right" }, [
                        _c("p", { staticStyle: { "margin-bottom": "0px" } }, [
                          _vm._v("$" + _vm._s(_vm.account_info.unrealized))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "text-center",
                        staticStyle: {
                          "margin-top": "10px",
                          "margin-bottom": "0px"
                        }
                      },
                      [_vm._v("Total Value:")]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "text-center",
                        staticStyle: { "font-size": "20px", color: "#DFA426" }
                      },
                      [
                        _vm._v(
                          "$" +
                            _vm._s(
                              parseFloat(
                                _vm.account_info.balance +
                                  _vm.account_info.unrealized
                              ).toFixed(2)
                            )
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-xl-3 col-lg-6 col-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-content" }, [
          _c("a", { attrs: { href: "/investor/holdings" } }, [
            _c(
              "div",
              {
                staticClass: "media align-items-stretch",
                staticStyle: { "min-height": "184px" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "p-1 custom-widget bg-dark-card white media-body"
                  },
                  [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(4),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-6 text-right" }, [
                        _c("p", { staticStyle: { "margin-bottom": "0px" } }, [
                          _vm._v(" " + _vm._s(_vm.holdings.sims_owned))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(5),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-6 text-right" }, [
                        _c("p", { staticStyle: { "margin-bottom": "0px" } }, [
                          _vm._v(
                            _vm._s(
                              parseFloat(_vm.holdings.ownership).toFixed(0)
                            ) +
                              "% / " +
                              _vm._s(_vm.holdings.rank)
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "text-center",
                        staticStyle: {
                          "margin-top": "10px",
                          "margin-bottom": "0px"
                        }
                      },
                      [_vm._v("Securities Owned:")]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "text-center",
                        staticStyle: { "font-size": "20px", color: "#DFA426" }
                      },
                      [_vm._v(_vm._s(_vm.holdings.sec_owned))]
                    )
                  ]
                )
              ]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-xl-3 col-lg-6 col-12" }, [
      _c("div", { staticClass: "card " }, [
        _c("div", { staticClass: "card-content" }, [
          _c("a", { attrs: { href: "/investor/available" } }, [
            _c(
              "div",
              {
                staticClass: "media align-items-stretch",
                staticStyle: { "min-height": "184px" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "p-1 custom-widget bg-dark-card white media-body"
                  },
                  [
                    _vm._m(6),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(7),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-6 text-right" }, [
                        _c("p", { staticStyle: { "margin-bottom": "0px" } }, [
                          _vm._v(_vm._s(_vm.securities.sims))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(8),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-6 text-right" }, [
                        _c("p", { staticStyle: { "margin-bottom": "0px" } }, [
                          _vm._v(
                            "$" +
                              _vm._s(
                                parseFloat(
                                  _vm.securities.dollar_amount
                                ).toFixed(2)
                              )
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "text-center",
                        staticStyle: {
                          "margin-top": "10px",
                          "margin-bottom": "0px"
                        }
                      },
                      [_vm._v("Securities Available:")]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "text-center",
                        staticStyle: { "font-size": "20px", color: "#DFA426" }
                      },
                      [_vm._v(_vm._s(_vm.securities.number_sec))]
                    )
                  ]
                )
              ]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-xl-3 col-lg-6 col-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-content" }, [
          _c("a", { attrs: { href: "/investor/accounts" } }, [
            _c(
              "div",
              {
                staticClass: "media align-items-stretch",
                staticStyle: { "min-height": "184px" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "p-1 custom-widget bg-dark-card white media-body"
                  },
                  [
                    _vm._m(9),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(10),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-6 text-right" }, [
                        _c("p", { staticStyle: { "margin-bottom": "0px" } }, [
                          _vm._v(
                            " $" +
                              _vm._s(parseFloat(_vm.mdf.balance).toFixed(2))
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(11),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-6 text-right" }, [
                        _c("p", { staticStyle: { "margin-bottom": "0px" } }, [
                          _vm._v(
                            "$" +
                              _vm._s(
                                parseFloat(_vm.mdf.previous_month).toFixed(2)
                              )
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "text-center",
                        staticStyle: {
                          "margin-top": "10px",
                          "margin-bottom": "0px"
                        }
                      },
                      [_vm._v("Current E.O.M:")]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "text-center",
                        staticStyle: { "font-size": "20px", color: "#DFA426" }
                      },
                      [
                        _vm._v(
                          "$" +
                            _vm._s(
                              parseFloat(
                                Math.floor(_vm.mdf.eom * 100) / 100
                              ).toFixed(2)
                            )
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ])
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
    return _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "col-6 col-sm-4",
          staticStyle: { "text-align": "center", "font-size": "3em" }
        },
        [_c("i", { staticClass: "ft-pocket" })]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-6 col-sm-8" }, [
        _c(
          "h5",
          { staticClass: "text-center", staticStyle: { color: "#DFA426" } },
          [_vm._v("Account")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("p", { staticStyle: { "margin-bottom": "0px" } }, [_vm._v("Cash:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("p", { staticStyle: { "margin-bottom": "0px" } }, [
        _vm._v("Securities: ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "col-6 col-sm-4",
          staticStyle: { "text-align": "center", "font-size": "3em" }
        },
        [_c("i", { staticClass: "ft-layers" })]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-6 col-sm-8" }, [
        _c(
          "h5",
          { staticClass: "text-center", staticStyle: { color: "#DFA426" } },
          [_vm._v("Holdings")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("p", { staticStyle: { "margin-bottom": "0px" } }, [
        _vm._v("Sims Owned:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("p", { staticStyle: { "margin-bottom": "0px" } }, [
        _vm._v("Ownership/Rank: ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "col-6 col-sm-4",
          staticStyle: { "text-align": "center", "font-size": "3em" }
        },
        [_c("i", { staticClass: "ft-activity" })]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-6 col-sm-8" }, [
        _c(
          "h5",
          { staticClass: "text-center", staticStyle: { color: "#DFA426" } },
          [_vm._v("Available")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("p", { staticStyle: { "margin-bottom": "0px" } }, [
        _vm._v("Sims Available:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("p", { staticStyle: { "margin-bottom": "0px" } }, [
        _vm._v("Total Available: ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "col-6 col-sm-4",
          staticStyle: { "text-align": "center", "font-size": "3em" }
        },
        [_c("i", { staticClass: "ft-shuffle" })]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-6 col-sm-8" }, [
        _c(
          "h5",
          { staticClass: "text-center", staticStyle: { color: "#DFA426" } },
          [_vm._v("MDF")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("p", { staticStyle: { "margin-bottom": "0px" } }, [
        _vm._v("Value of MDF:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("p", { staticStyle: { "margin-bottom": "0px" } }, [
        _vm._v("Previous:")
      ])
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

/***/ "./resources/assets/js/env.js":
/*!************************************!*\
  !*** ./resources/assets/js/env.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  APP_ID: '',
  APP_NAME: 'Properos',
  API_VERSION: 'v1',
  API_URL: '',
  HOST: 'localhost',
  CDN: '/storage',
  SOCKET_URL: 'http://localhost',
  SOCKET_PORT: '3000'
};

/***/ }),

/***/ "./resources/assets/js/fe/modules/accounts/js/account.js":
/*!***************************************************************!*\
  !*** ./resources/assets/js/fe/modules/accounts/js/account.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AccountsListComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AccountsListComponent.vue */ "./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue");
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
//Accounts List


Vue.component('accounts-list', _components_AccountsListComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
Vue.component('select-account', _components_AccountsListComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
var accounts = new Vue({
  el: '#accounts-module'
});

/***/ }),

/***/ "./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountsListComponent_vue_vue_type_template_id_0cadedd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountsListComponent.vue?vue&type=template&id=0cadedd3&scoped=true& */ "./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=template&id=0cadedd3&scoped=true&");
/* harmony import */ var _AccountsListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountsListComponent.vue?vue&type=script&lang=js& */ "./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AccountsListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountsListComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _AccountsListComponent_vue_vue_type_style_index_1_id_0cadedd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccountsListComponent.vue?vue&type=style&index=1&id=0cadedd3&scoped=true&lang=css& */ "./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=1&id=0cadedd3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _AccountsListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountsListComponent_vue_vue_type_template_id_0cadedd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountsListComponent_vue_vue_type_template_id_0cadedd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0cadedd3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountsListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountsListComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountsListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountsListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountsListComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountsListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountsListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountsListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountsListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=1&id=0cadedd3&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************!*\
  !*** ./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=1&id=0cadedd3&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountsListComponent_vue_vue_type_style_index_1_id_0cadedd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountsListComponent.vue?vue&type=style&index=1&id=0cadedd3&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=style&index=1&id=0cadedd3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountsListComponent_vue_vue_type_style_index_1_id_0cadedd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountsListComponent_vue_vue_type_style_index_1_id_0cadedd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountsListComponent_vue_vue_type_style_index_1_id_0cadedd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountsListComponent_vue_vue_type_style_index_1_id_0cadedd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=template&id=0cadedd3&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=template&id=0cadedd3&scoped=true& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountsListComponent_vue_vue_type_template_id_0cadedd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountsListComponent.vue?vue&type=template&id=0cadedd3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/accounts/js/components/AccountsListComponent.vue?vue&type=template&id=0cadedd3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountsListComponent_vue_vue_type_template_id_0cadedd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountsListComponent_vue_vue_type_template_id_0cadedd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/fe/modules/accounts/js/services/AccountServices.js":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/fe/modules/accounts/js/services/AccountServices.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    //ApiCalls
    searchAccountsCall: function searchAccountsCall(data, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/account/search',
        data: data
      }).then(function (response) {
        if (response.data.status == 1) {
          return callBackHandler('200', response.data);
        } else {
          return callBackHandler('001', response.data.errors);
        }
      })["catch"](function (error) {
        return callBackHandler('002', error);
      });
    },
    createAccountCall: function createAccountCall(data, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/account/store',
        data: data
      }).then(function (response) {
        return callBackHandler(response);
      })["catch"](function (error) {
        return callBackHandler(error.response);
      });
    },
    updateAccountCall: function updateAccountCall(data, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/account/update',
        data: data
      }).then(function (response) {
        return callBackHandler(response);
      })["catch"](function (error) {
        return callBackHandler(error.response);
      });
    },
    getAccountCall: function getAccountCall(id, callBackHandler) {
      axios({
        method: 'get',
        url: '/api/account/show/' + id
      }).then(function (response) {
        return callBackHandler(response);
      })["catch"](function (error) {
        return callBackHandler(error.response);
      });
    },
    addFundsCall: function addFundsCall(data, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/investor/add-funds',
        data: data
      }).then(function (response) {
        return callBackHandler(response);
      })["catch"](function (error) {
        return callBackHandler(error.response);
      });
    },
    withdrawCashCall: function withdrawCashCall(data, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/investor/withdraw-cash',
        data: data
      }).then(function (response) {
        return callBackHandler(response);
      })["catch"](function (error) {
        return callBackHandler(error.response);
      });
    },
    getTransactionsCall: function getTransactionsCall(id, page, callBackHandler) {
      axios({
        method: 'get',
        url: '/api/account/get-transactions/' + id + '?page=' + page
      }).then(function (response) {
        return callBackHandler(response);
      })["catch"](function (error) {
        return callBackHandler(error.response);
      });
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/fe/modules/dashboard_cards/js/broadcast.js":
/*!************************************************************************!*\
  !*** ./resources/assets/js/fe/modules/dashboard_cards/js/broadcast.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    var self = this; //Events

    window.Echo.channel('dashboard-front-updates').listen('.dashboard_front_updated', function (e) {
      console.log(e);

      if (e.array_data.length > 0) {
        for (var i = 0; i < e.array_data.length; i++) {
          if (e.array_data[i].account_id == self.account.id) {
            self.securities = e.array_data[i].data.securities;
            self.holdings = e.array_data[i].data.holding;
            self.account_info = e.array_data[i].data.account;
            self.mdf = e.array_data[i].data.mdf;
          }
        }
      }
    });
  }
});

/***/ }),

/***/ "./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboradBoxComponents_vue_vue_type_template_id_3b2fb76a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboradBoxComponents.vue?vue&type=template&id=3b2fb76a&scoped=true& */ "./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=template&id=3b2fb76a&scoped=true&");
/* harmony import */ var _DashboradBoxComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboradBoxComponents.vue?vue&type=script&lang=js& */ "./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DashboradBoxComponents_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboradBoxComponents.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _DashboradBoxComponents_vue_vue_type_style_index_1_id_3b2fb76a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DashboradBoxComponents.vue?vue&type=style&index=1&id=3b2fb76a&scoped=true&lang=css& */ "./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=1&id=3b2fb76a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _DashboradBoxComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboradBoxComponents_vue_vue_type_template_id_3b2fb76a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboradBoxComponents_vue_vue_type_template_id_3b2fb76a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3b2fb76a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboradBoxComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboradBoxComponents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboradBoxComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboradBoxComponents_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboradBoxComponents.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboradBoxComponents_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboradBoxComponents_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboradBoxComponents_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboradBoxComponents_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=1&id=3b2fb76a&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=1&id=3b2fb76a&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboradBoxComponents_vue_vue_type_style_index_1_id_3b2fb76a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboradBoxComponents.vue?vue&type=style&index=1&id=3b2fb76a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=style&index=1&id=3b2fb76a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboradBoxComponents_vue_vue_type_style_index_1_id_3b2fb76a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboradBoxComponents_vue_vue_type_style_index_1_id_3b2fb76a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboradBoxComponents_vue_vue_type_style_index_1_id_3b2fb76a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboradBoxComponents_vue_vue_type_style_index_1_id_3b2fb76a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=template&id=3b2fb76a&scoped=true&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=template&id=3b2fb76a&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboradBoxComponents_vue_vue_type_template_id_3b2fb76a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboradBoxComponents.vue?vue&type=template&id=3b2fb76a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/fe/modules/dashboard_cards/js/components/DashboradBoxComponents.vue?vue&type=template&id=3b2fb76a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboradBoxComponents_vue_vue_type_template_id_3b2fb76a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboradBoxComponents_vue_vue_type_template_id_3b2fb76a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/fe/modules/dashboard_cards/js/services/DashboardBoxServices.js":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/fe/modules/dashboard_cards/js/services/DashboardBoxServices.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    //ApiCalls
    cardsDashboardCall: function cardsDashboardCall(data, callBackHandler) {
      axios({
        method: 'post',
        url: '/api/dashboard/dashboard-cards',
        data: data
      }).then(function (response) {
        return callBackHandler(response);
      })["catch"](function (error) {
        return callBackHandler(error);
      });
    },
    getUserAccountCall: function getUserAccountCall(callBackHandler) {
      axios({
        method: 'get',
        url: '/api/account/user'
      }).then(function (response) {
        return callBackHandler(response);
      })["catch"](function (error) {
        return callBackHandler(error.response);
      });
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/misc/helpers.js":
/*!*********************************************!*\
  !*** ./resources/assets/js/misc/helpers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window._ENV = __webpack_require__(/*! ./../env.js */ "./resources/assets/js/env.js");
/* harmony default export */ __webpack_exports__["default"] = ({
  toJson: function toJson(json) {
    var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.isJson(json)) {
      return json;
    } else if (typeof json == 'string') {
      try {
        return JSON.parse(json);
      } catch (e) {}
    }

    return res;
  },
  isJson: function isJson(json) {
    return _typeof(json) == 'object';
  },
  getSubdomain: function getSubdomain() {
    var host = window.location.host;
    return host.replace(this.getEnv('HOST'), "").replace(/:[0-9]*/g, '').replace(/^[.]+|[.]+$/gm, '');
  },
  inArray: function inArray(needle, haystack) {
    for (var i = 0; i < haystack.length; i++) {
      if (haystack[i] == needle) {
        return true;
      }
    }

    return false;
  },
  isPath: function isPath(needle, haystack) {
    needle = (needle + '').trim().toLowerCase();

    for (var i = 0; i < haystack.length; i++) {
      var patt = new RegExp(haystack[i].trim().toLowerCase(), "g");

      if (patt.test(needle)) {
        return true;
      }
    }

    return false;
  },
  isAssoc: function isAssoc(arr) {
    for (var i = 0; i < Object.keys(arr).length; i++) {
      if (typeof arr[i] == 'undefined') {
        return 1;
      }
    }

    return 0;
  },
  capitalize: function capitalize(string) {
    return string.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  },
  getHost: function getHost(subdomain) {
    if (subdomain) {
      return location.protocol + '//' + subdomain + '.' + this.getEnv('HOST');
    }

    return location.protocol + '//' + this.getEnv('HOST');
  },
  getApiURL: function getApiURL() {
    return this.getEnv('API_URL') + '/' + this.getEnv('API_VERSION');
  },
  getEnv: function getEnv(value, _default) {
    _default = typeof _default == 'undefined' ? '' : _default;
    return typeof _ENV[value] == 'undefined' ? _default : _ENV[value];
  },
  blockCard: function blockCard($elem) {
    $($elem).block({
      message: '<div class="ft-refresh-cw icon-spin font-medium-4"></div>',
      overlayCSS: {
        backgroundColor: '#fff',
        opacity: 0.9,
        cursor: 'wait'
      },
      css: {
        border: 0,
        padding: 0,
        backgroundColor: 'transparent'
      }
    });
  },
  unblockCard: function unblockCard($elem, time) {
    time = time != 'undefined' ? time : 0;
    setTimeout(function () {
      $($elem).unblock();
    }, time);
  },
  blockPage: function blockPage() {
    $('#page-spinner').css('display', 'block');
  },
  unBlockPage: function unBlockPage(time) {
    time = time != 'undefined' ? time : 0;
    setTimeout(function () {
      $('#page-spinner').css('display', 'none');
    }, time);
  },
  guidGenerator: function guidGenerator() {
    var S4 = function S4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    };

    return S4() + S4() + S4() + S4() + S4() + Date.now();
  },
  unknownError: function unknownError(error) {
    return {
      'status': 0,
      'errors': ['Connection Error!'],
      'data': error
    };
  },
  getRandomInt: function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  getValue: function getValue(obj, key, _default) {
    _default = typeof _default == 'undefined' ? '' : _default;
    return key.split(".").reduce(function (o, x) {
      return typeof o[x] == "undefined" || o[x] === null || o[x] == null ? _default : o[x];
    }, obj);
  },
  has: function has(obj, key) {
    return key.split(".").every(function (x) {
      if (_typeof(obj) != "object" || obj === null || !x in obj) return false;
      obj = obj[x];
      return true;
    });
  },
  getAvatarByUID: function getAvatarByUID(uid, v_img) {
    var cdn = this.getEnv('CDN', '');
    uid = typeof uid == 'undefined' ? '' : uid;
    v_img = typeof v_img == 'undefined' ? Date.now() : v_img;

    if (uid != '') {
      return cdn + '/users/' + uid + '/avatar/avatar.png?v=' + v_img;
    } else {
      var user = Auth.getUser();

      if (user['avatar'] == '/fe/images/avatar_incognito.png') {
        return '//' + this.getEnv('HOST', '') + user['avatar'];
      } else {
        return cdn + user['avatar'];
      }
    }
  },
  getAvatarByURL: function getAvatarByURL(url) {
    url = typeof url == 'undefined' || url == '' ? '/fe/images/avatar_incognito.png' : url;

    if (url.indexOf('/fe/images/avatar') !== -1) {
      return '//' + this.getEnv('HOST', '') + url;
    } else {
      return this.getEnv('CDN', '') + url;
    }
  },
  getLogoByURL: function getLogoByURL(url) {
    url = typeof url == 'undefined' || url == '' ? '/fe/images/logo_blue.png' : url;

    if (url.indexOf('/fe/images') !== -1) {
      return '//' + this.getEnv('HOST', '') + url;
    } else {
      return this.getEnv('CDN', '') + url;
    }
  },
  getAvatar: function getAvatar() {
    var cdn = this.getEnv('CDN', '');
    var user = Auth.getUser();
    var url = user.avatar;

    if (user.avatar.indexOf('/fe/images/avatar') !== -1) {
      return '//' + this.getEnv('HOST', '') + url;
    } else {
      return cdn + url;
    }
  },
  validateEmail: function validateEmail(email) {
    email = email.trim().toLowerCase();
    var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    var result = emailRegExp.test(email);
    return result;
  },
  validateCVV: function validateCVV(cvv) {
    var cvvRegExp = /^[0-9]{3,4}$/g;
    var result = cvvRegExp.test(cvv);
    return result;
  },
  validateExpDate: function validateExpDate(ExpDate) {
    var ExpdateRegExp = /^(0[1-9]|1[0-2])\/?(([0-9]{4}|[0-9]{2})$)/g;
    var result = ExpdateRegExp.test(ExpDate);
    return result;
  },
  validateExpDateMMYYYY: function validateExpDateMMYYYY(ExpDate) {
    var ExpdateRegExp = /^((0[1-9])|(1[0-2]))\/(\d{4})$/g;
    var result = ExpdateRegExp.test(ExpDate);

    if (result == true) {
      var dt = new Date();
      var year = ExpDate.split('/')[1];

      if (year >= dt.getFullYear()) {
        return true;
      }
    }

    return false;
  },
  validateCCNumber: function validateCCNumber(ccn) {
    var valid = false;
    ccn.validateCreditCard(function (result) {
      valid = result.valid;
    });
    return valid;
  },
  setTitle: function setTitle(title, with_app_name) {
    with_app_name = typeof with_app_name == 'undefined' ? true : with_app_name;

    if (with_app_name) {
      title = (this.getEnv('APP_NAME', '') + ' - ' + title).replace(/^\s+[-]\s+|\s+$/gm, '');
    }

    if (window.jQuery) {
      $('#html-head-title').html(title);
    } else if (document) {
      document.getElementById("html-head-title").innerHTML = title;
    }
  },
  bytesToSize: function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
  },
  sizeToBytes: function sizeToBytes(val, unit) {
    var sizes = {
      'Bytes': 0,
      'KB': 1,
      'MB': 2,
      'GB': 3,
      'TB': 4
    };
    return Math.round(val * Math.pow(1024, sizes[unit]), 2);
  },
  isReservedDomain: function isReservedDomain(domain) {
    return this.inArray(domain, this.getEnv('RESERVED_DOMAINS', ['app', 'api', 'www', 'mail', 'cdn']));
  },
  setCookie: function setCookie(cname, cvalue, expdays, cpath, cdomain, csecure) {
    var expires = '';
    var szCookieText = escape(cname) + '=' + escape(cvalue);

    if (expdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      expires = "EXPIRES=" + d.toUTCString();
    }

    szCookieText += expires;
    szCookieText += cpath ? '; PATH=' + cpath : '';
    szCookieText += cdomain ? '; DOMAIN=' + cdomain : '';
    szCookieText += csecure ? '; SECURE' : '';
    document.cookie = szCookieText;
  },
  getCookie: function getCookie(cname) {
    var cvalue = 'undefined';

    if (document.cookie) //only if exists
      {
        var arr = document.cookie.split(escape(cname) + '=');

        if (2 <= arr.length) {
          var arr2 = arr[1].split(';');
          cvalue = unescape(arr2[0]);
        }
      }

    return cvalue;
  },
  checkCookie: function checkCookie(name) {
    return getCookie(name);
  },
  deleteCookie: function deleteCookie(cname) {
    var tmp = getCookie(cname);

    if (tmp) {
      setCookie(cname, tmp, new Date(1));
    }
  },
  gotoTop: function gotoTop() {
    return $("html, body").animate({
      scrollTop: 0
    }, "slow");
  },
  numberFormat: function numberFormat(number, decimal) {
    decimal = typeof decimal != 'undefined' ? decimal : 2;
    return (number * 1).toFixed(decimal);
  },
  displayError: function displayError(response, type) {
    switch (type) {
      case 'toastr':
      default:
        if (response.message != '') {
          if (Helpers.isAssoc(response.message)) {
            for (var key in response.message) {
              toastr.error(response.message[key][0], 'Error');
            }
          } else {
            if (Array.isArray(response.message)) {
              toastr.error(response.message[0], 'Error');
            } else {
              toastr.error(response.message, 'Error');
            }
          }
        } else if (response.statusText != '') {
          toastr.error(response.statusText, 'Error');
        }

        break;
    }
  },
  jsonToFormData: function jsonToFormData(data) {
    var formData = new FormData();
    this.buildFormData(formData, data);
    return formData;
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
  }
});

/***/ }),

/***/ "./resources/assets/js/misc/storage.js":
/*!*********************************************!*\
  !*** ./resources/assets/js/misc/storage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./resources/assets/js/misc/helpers.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: ['helpers'],
  get: function get(key, _default) {
    _default = typeof _default == 'undefined' ? '' : _default;
    return _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].toJson(localStorage.getItem(key), _default);
  },
  set: function set(key, val) {
    localStorage.setItem(key, JSON.stringify(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].toJson(val, {})));
  },
  set_plain: function set_plain(key, val) {
    localStorage.setItem(key, val);
  },
  get_plain: function get_plain(key, _default) {
    _default = typeof _default == 'undefined' ? '' : _default;
    return localStorage.getItem(key);
  },
  remove: function remove(key) {
    localStorage.removeItem(key);
  }
});

/***/ }),

/***/ 10:
/*!*********************************************************************!*\
  !*** multi ./resources/assets/js/fe/modules/accounts/js/account.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/vhost/resources/assets/js/fe/modules/accounts/js/account.js */"./resources/assets/js/fe/modules/accounts/js/account.js");


/***/ })

/******/ });