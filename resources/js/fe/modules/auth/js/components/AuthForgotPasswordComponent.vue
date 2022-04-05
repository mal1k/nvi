<template>
    <section>
        <div class="box">
            <div class="form">
                <div class="text-center" style="margin-bottom: 30px;">
                    <h4>Forgotten Password?</h4>
                </div>
                <form  v-on:submit.prevent="onSubmit">
                    <div class="inputBx">
                        <input type="text" placeholder="Email" v-model="email">
                    </div>
                    <span v-if="errors.email.invalid" class="message-error">{{errors.email.message}}</span>
                    <div class="inputBx text-center">
                        <input type="submit" value="Request">
                        <input @click="goToLogin()" type="button" value="Cancel">
                    </div>
                </form>
                
                <p class="text-center">Don't have an account yet? <a href="/auth/register">Sign Up</a></p>
            </div>
        </div>
    </section>
</template>

<script>
    import AuthService from "../services/AuthService";
    export default {
        mixins:[AuthService],
        data() {
            return {
                email:'',
                errors:{
                    email:{
                        invalid: false,
                        message: ''
                    }
                },  
                processing: false
            };
        },
        watch:{
            'email'(val){
                if(val != ''){
                    this.errors.email.invalid = false;
                }
            }
        },
        methods: {
            goToLogin(){
                this.$router.push({name:'auth_login'});
            },
            onSubmit(){
                var error = false;
                if(this.email != ''){
                    this.processing = true;
                    this.resetPasswordLinkCall({
                        email: this.email
                    }, this.resetPasswordLinkCallback);
                }else{
                    this.errors.email = true;
                    this.errors.message = 'Email is required';
                }
            },
            resetPasswordLinkCallback(response){
                if(response.status > 0){
                    toastr.success("Success!", "Email has been sent successfully to reset password");
                }else{
                    if(response.code == 500){
                        swal({
                            title: 'Connection Error!',
                            text: 'Please, try later',
                            icon: 'error'
                        });
                    }else{
                        if(Helpers.isAssoc(response.errors) > 0){
                            for(let field in response.errors){
                                this.errors[field].message = response.errors[field][0];
                                this.errors[field].invalid = true;                        
                            }
                        }else{
                            toastr.error(response.errors[0], 'Error!')
                            this.$notify({
                                group: 'message',
                                title: 'Error!!',
                                text: response.errors[0],
                                type: 'error',
                                duration: 3000
                            });
                        }
                    }
                }
                this.processing = false;
            }
		},
        mounted() {

        }
    };
</script>

<style scoped>
    section{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    .box{
        position: relative;
        padding: 30px 50px;
        width: 400px;
        min-height: 480px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 6px;
        box-shadow: 0 5px 25px rgba(0,0,0,0.2);
    }
    .box::after{
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 5px;
        pointer-events: none;
        background: transparent;
    }
    .box .form{
        position: relative;
        width: 100%;
    }
    .box .form .inputBx{
        position: relative;
        width: 100%;
        margin-bottom: 20px;
    }
    .box .form .inputBx input{
        width: 100%;
        outline: none;
        border: 1px solid rgba(17, 95, 143,0.2);
        background: transparent;
        padding: 8px 10px;
        border-radius: 6px;
        font-size: 16px;
        font-weight: 300;
        color: #aba5b6;
        
        /* box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.2); */
    }
    .box .form .inputBx i{
        position: absolute;
        top: 15px;
        left: 10px;
        /* filter: invert(1); */
        font-size: 16px;
        color: #aba5b6;
    }
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #aba5b6;
        opacity: 1; /* Firefox */
    }

    .remember{
        position: relative;
        display: inline-block;
        font-weight: 300;
        margin-bottom: 10px;
        cursor: pointer;
    }

    .box .form .inputBx input[type="submit"]{
        background: border-color;
        color: #fff;
        max-width: 100px;
        padding: 8px 10px;
        box-shadow: none;
        font-weight: 500;
        letter-spacing: 1px;
        cursor: pointer;
        margin-top: 20px;
        margin-right: 5px;
    }
    .box .form .inputBx input[type="submit"]:hover{
        background-color: #487a9a;
        border-color: #487a9a;
    }
    .box .form .inputBx input[type="button"]{
        background: #fff;
        color: border-color;
        max-width: 100px;
        padding: 8px 10px;
        box-shadow: none;
        font-weight: 500;
        letter-spacing: 1px;
        cursor: pointer;
        margin-top: 20px;
        margin-left: 5px;
    }

    .box .form .inputBx input[type="button"]:hover{
        background-color: #487a9a;
        border-color: #487a9a;
        color: #fff;
    }

    .login-logo{
        width: 200px;
        margin-bottom: 40px;
    }

    @media (max-width: 425px){
        .box[data-v-5b7d63fc] {
            position: relative;
            padding: 30px 50px;
            width: 100%;
            height: 480px;
            display: flex;
            justify-content: center;
            align-items: center;
            background:transparent;
            border-radius: 6px;
            box-shadow: unset;
        }
    }


</style>