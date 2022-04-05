<template>
    <section>
        <div class="box">
            <div class="form">
                
                <form>
                    <div class="inputBx">
                        <input type="text" placeholder="Email" v-model="auth.email">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="inputBx">
                        <input type="password" placeholder="Password" v-model="auth.password">
                        <i class="fas fa-lock"></i>
                    </div>
                    <!-- <label class="remember">
                        <input type="checkbox"> Remember Me
                    </label> -->
                    <div class="text-right">
                        <p >Forget <a href="/password/reset">Password?</a></p>
                    </div>
                    <div class="inputBx text-center">
                        <button type="button" @click="onSubmit" :disabled="processing">
                            <div v-if="processing" class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <span v-else>Login In</span>
                        </button>
                    </div>
                </form>
                
                <p class="text-center">Don't have an account yet? 
                    <a href="/register">
                        <span>Sign Up</span>
                    </a>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    import AuthService from '../services/AuthService';
    export default {
        mixins: [AuthService],
        data() {
            return {
                auth:{
                    email:'',
                    password:''
                },
                errors:{
                    email: {
                        invalid: false,
                        message: ''
                    },
                    password: {
                        invalid: false,
                        message: ''
                    },
                },
                processing: false
            };
        },
        methods: {
            onSubmit(){
                var error = false;
                for(var i in this.auth){
                    if(this.auth[i] == ''){
                        this.errors[i].invalid = true;
                        this.errors[i].message = i.toUpperCase() + ' is required';
                        error = true;
                    }
                }
                if(!error){
                    this.processing = true;
                    this.login(this.auth, this.loginCallback);
                }
            },
            loginCallback(response){
                if(response.status > 0){
                    Auth.setSession(response.data);
                    
                }else{
                    this.processing = false;
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
                            this.$notify({
                                group: 'errorcreateaccount',
                                title: 'Error!!',
                                text: response.errors[0],
                                type: 'error',
                                duration: 3000
                            });
                        }
                    }
                }
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
        height: 480px;
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
        padding-left: 35px;;
        border-radius: 6px;
        font-size: 16px;
        font-weight: 300;
        color: #aba5b6;
        
        /* box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.2); */
    }
    .box .form .inputBx button{
        width: 100%;
        outline: none;
        border: 1px solid rgba(17, 95, 143,0.2);
        background: transparent;
        padding: 8px 10px;
        padding-left: 35px;;
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

    .box .form .inputBx button{
        background: border-color;
        color: #fff;
        max-width: 100px;
        padding: 8px 10px;
        box-shadow: none;
        font-weight: 500;
        letter-spacing: 1px;
        cursor: pointer;
        margin-top: 20px;
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