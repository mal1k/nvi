<template>
    <div class="card card-dark" style="margin-bottom: 10px;">
        <div class="card-content">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-12 text-center">
                        <strong>
                            <p style="font-size: 14px; color: #fff; margin-top: 15px; margin-bottom: 0px;">Important:
                                All activities are relative to the selected account below. Be sure to select the
                                appropriate account before make any transaction in order to avoid cross account
                                activities.</p>
                        </strong>
                    </div>
                </div>
                <div class="row mt-1">
                    <div class="col-sm-6 offset-sm-3">
                        <div class="form-group">
                            <!--  <div class="text-bold-600 font-medium-2 mb-1">
                                        Select Account
                                    </div> -->
                            <select id="select2-accounts" class="select2-size-lg form-control select2-hidden-accessible"
                                data-select2-id="large-select" tabindex="-1" aria-hidden="true">
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import storage from '../../../../../misc/storage';
    import UIServices from '../services/UIServices.js';
    export default {
        mixins: [UIServices],
        props: ['accounts'],
        data() {
            return {
                selected_account: ''
            }
        },
        watch: {
            selected_account(val) {

            }
        },
        methods: {
            loadAccount() {
                var selected_account = storage.get_plain('selected_account');
                if (selected_account != null) {
                    $("#select2-accounts").val(selected_account).trigger("change");
                } else {
                    $("#select2-accounts").val("").trigger("change");
                }
            },
            capitalizeFirstLetter(string) {
                if (string) {
                    return string.charAt(0).toUpperCase() + string.slice(1);
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

        },
        mounted() {
            var self = this;
            this.$nextTick(function () {
                $("#select2-accounts").select2({
                    placeholder: "Select Account",
                    allowClear: true,
                    width: "100%",
                    background: "red",
                    background: "#000",
                    data: $.map(self.accounts, function (item) {
                        return {
                            id: item.id,
                            text: item.account_number,
                            type: item.account_type,
                            name: item.name
                        };
                    }),
                    cache: !0,
                    escapeMarkup: function (t) {
                        return t
                    },
                    templateResult: function (t) {
                        if (t.loading) return t.text;
                        var e = "<div class='select2-result-repository clearfix'><div class='select2-result-repository__meta'><div class='select2-result-repository__title'><div style='font-size: 12px'>Account number</div>" + t.text + "</div>";
                        t.text && (e += "<div class='select2-result-repository__description'>" + t.type.charAt(0).toUpperCase() + t.type.slice(1) + " account</div>");
                        return e;
                    },
                    templateSelection: function (t) {
                        return "<div><b>" + t.text + "</b></div>"
                    }
                });
                $("#select2-accounts").on('change', function (e) {
                    self.selected_account = $("#select2-accounts").val();
                    storage.set_plain('selected_account', $(e.currentTarget).val());
                    self.$emit('account-selected', $(e.currentTarget).val());
                });

                $('#select2-accounts').on('select2:clear', function (e) {
                    storage.remove('selected_account');
                    self.$emit('account-selected', '');
                });

                self.loadAccount();

                window.addEventListener('storage', function (e) {
                    if (self.selected_account != e.newValue) {
                        storage.set_plain('selected_account', e.oldValue);
                    }
                    if (!e.newValue) {
                        self.selected_account = '';
                        $("#select2-accounts").val("").trigger("change");
                    }
                });
            });
        }
    }
</script>
<style>
    .message-error {
        color: #d61212;
        float: right;
        padding-top: 10px;
        font-size: 12px;
    }

    .select2-container--classic .select2-results__options .select2-results__option[aria-selected=true],
    .select2-container--default .select2-results__options .select2-results__option[aria-selected=true] {
        background-color: #411c5e !important;
        color: #FFFFFF !important;
    }

    .select2-result-repository__meta {
        float: none !important;
        margin-left: 5%;
    }

    .select2-results__message {
        text-align: center;
        font-weight: 900;
    }

    .select2-container--default .select2-selection--single {
        background-color: #404e67;
        color: #fff
    }

    .select2-container--default .select2-selection--single .select2-selection__rendered {
        color: #fff;
    }
</style>

<style scoped>
</style>