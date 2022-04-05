<template>
    <div>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <fieldset class="form-group">
                    <label for="basicInput">Amount (cash/check/money order)</label>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="ft-type"></i>
                        </span>
                        <input v-model="amount" type="number" placeholder="Type amount received" class="form-control" :class="{'input-error-select' : error.amount}">
                    </div>
                    <span v-if="error.amount" class="message-error">{{error_message.amount}}</span>
                </fieldset>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <fieldset class="form-group">
                    <label for="basicInput">Description (optional)</label>
                    <div class="input-group">
                        <textarea v-model="description" placeholder="Type a description..." rows="7" type="text" class="form-control"></textarea>
                    </div>
                </fieldset>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 offset-md-3 text-right">
                <button @click="back()" class="btn btn-default">
                    Back
                </button>
                <button v-if="pay && amount > 0" @click="save()" class="btn btn-primary" :disabled="(amount <= 0)">
                    Pay ${{amount}}
                </button>
                <button v-else @click="save()" class="btn btn-primary" :disabled="(amount <= 0)">
                    Save
                </button>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['pay'],
        data() {
            return {
                amount: '0.00',
                description: '',
                error: {
                    amount: false
                },
                error_message: {
                    amount: ''
                }
            }
        },
        methods: {
            save() {
                if (this.amount <= 0) {
                    this.error.amount = true;
                    this.error_message.amount = 'Amount received is required';
                }
                swal({
                    title: "Are you sure?",
                    text: "Confirm that you want to execute this payment",
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
                        let data = {
                            amount: this.amount,
                            type: 'cash',
                            description: this.description
                        }

                        $.LoadingOverlay("show");
                        this.$emit('save', data);
                    }
                });
            },
            back() {
                this.$emit('back', true);
            },
            onSuccess(){
                this.amount = '0.00';
                this.description = '';
            },
            onError(){

            }
        },
        watch: {
            amount(val) {
                if (val) {
                    this.error.amount = false;
                    this.error_message.amount = '';
                }
            }
        },
        created() {
            this.$eventHub.$on("processor-component-success", this.onSuccess);
            this.$eventHub.$on("processor-component-error", this.onError);
        },
        mounted() {
            
        },
        beforeDestroy(){
            this.$eventHub.$off("processor-component-success", true);
            this.$eventHub.$off("processor-component-error", true);
        }

    }
</script>

<style>
    .message-error {
        color: #d61212;
        padding-top: 10px;
        font-size: 12px;
    }
    .input-error-select {
        color: #d61212;
        border: 1px solid #b60707;
        border-radius: 5px
    }
</style>