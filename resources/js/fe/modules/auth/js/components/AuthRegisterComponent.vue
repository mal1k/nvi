<template>
    <section style="background:#3d4554;">
        <div class="box">
            <div class="form">
                <!-- <div class="text-center">
                    <img class="login-logo" src="/themes/listiva/images/logo-name.png">
                </div> -->
                <form action="">
                    <div class="inputBx">
                        <input type="text" placeholder="First Name" v-model="user.name"  :class="{'is-invalid' : error.name}" dusk="firstname">
                        <span v-if="error.name" class="message-error">{{error_message.name}}</span>
                    </div>
                    <div class="inputBx">
                        <input type="text" placeholder="Last Name" v-model="user.lastname"  :class="{'is-invalid' : error.lastname}" dusk="lastname">
                        <span v-if="error.lastname" class="message-error">{{error_message.lastname}}</span>
                    </div>
                    <div class="inputBx">
                        <input type="text" placeholder="Phone" v-model="user.phone" dusk="phone">
                    </div>
                    <div class="inputBx">
                        <input type="text" placeholder="Email" v-model="user.email" :class="{'is-invalid' : error.email}" dusk="email">
                        <span v-if="error.email" class="message-error">{{error_message.email}}</span>
                    </div>
                    <div class="inputBx">
                        <input type="password" placeholder="Password" v-model="user.password" :class="{'is-invalid' : error.password}" dusk="password">
                        <span v-if="error.password" class="message-error">{{error_message.password}}</span>
                    </div>
                    <div class="inputBx">
                        <input type="password" placeholder="Confirm Password" v-model="user.password_confirmation"  :class="{'is-invalid' : error.password_confirmation}" dusk="confirm_password">
                        <span v-if="error.password_confirmation" class="message-error">{{error_message.password_confirmation}}</span>
                    </div>
                    <div class="inputBx text-center" style="margin-bottom:0px;">
                        <input class="sign-up" type="button" value="Sign Up" @click="onSubmit" dusk="signup">
                        <input @click="goToLogin()" type="button" value="Cancel">
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    import AuthServices from '../services/AuthService';
    export default {
        mixins: [AuthServices],
        data() {
            return {
                transitionName: 'slide-left',
                 user:{
                    name: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    password: '',
                    password_confirmation: '',
                },
                error:{
                    name: false,
                    lastname: false,
                    email: false,
                    password: false,
                    password_confirmation: false,
                },
                error_message:{
                    name: '',
                    lastname: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                }
            };
        },
        watch:{
            'user.name'(val){
                if(val != ''){
                    this.error.name = false;
                }
            },
            'user.lastname'(val){
                if(val != ''){
                    this.error.lastname = false;
                }
            },
            'user.email'(val){
                if(val != ''){
                    this.error.email = false;
                }
            },
            'user.password'(val){
                if(val != ''){
                    this.error.password = false;
                }
            },
            'user.password_confirmation'(val){
                if(val != ''){
                    this.error.password_confirmation = false;
                }
            }
        },
        methods: {
            goToLogin(){
                window.location = '/login';
            },
            onSubmit(){
                var _error = false;

                for(var i in this.user){
                    if(this.user[i] == '' && i != 'phone'){
                        this.error[i] = true;
                        this.error_message[i] = Helpers.capitalize(i) + ' is required';
                        _error = true;
                    }
                }
                if(!_error){
                    $.LoadingOverlay("show");
                    this.registerCall(this.user, this.registerCallback);
                }
            },
            registerCallback(response){
                if(response.status > 0){
                    Storage.set('session', response.data);
                    this.$router.push({name: 'auth_plans'});
                }else{
                    if(Helpers.isAssoc(response.errors) > 0){
                        for(let field in response.errors){
                            this.error_message[field] = response.errors[field][0];
                            this.error[field]= true;
                        }
                    }else{
                        this.$notify({
                            group: 'errorcreateaccount',
                            title: 'Error!!',
                            text: response.errors[0],
                            type: 'error',
                            duration: 3000
                        });
                    }
                    $.LoadingOverlay("hide");
                }
            }
        },
        mounted() {
            var _this = this;
            this.$nextTick(function(){

            })
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
        background: #fff;
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
        border: 1px solid #009c9f;
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
        background-color:#00ced2!important;
        border-color:#009c9f!important;
        color: #fff;
    }

     .sign-up{
        background:#009c9f!important;
        color: #fff!important;
        max-width: 100px;
        padding: 8px 10px;
        box-shadow: none;
        font-weight: 500;
        letter-spacing: 1px;
        cursor: pointer;
        margin-top: 20px;
        margin-right: 5px;
    }
    .sign-up:hover{
        background-color:#00ced2!important;
        border-color:#009c9f!important;
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
    .message-error {
        display: block;
        text-align:right;
        width: 100%;
        margin-top: .25rem;
        font-size: 80%;
        color: #dc3545;
        padding: 0;
    }

</style>
