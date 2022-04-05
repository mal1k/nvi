@extends('themes.'.(isset($theme)?$theme:'default').'.layouts.main-plain')


@section('local_styles')
<style>
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
        min-height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 6px;
        box-shadow: 0 5px 25px rgba(0,0,0,0.2);
        background: #fff;
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
        /* width: 90%; */
        outline: none;
        border: 1px solid rgba(17, 95, 143,0.2);
        background: transparent;
        padding: 8px 10px;
        padding-left: 35px;;
        border-radius: 6px;
        font-size: 16px;
        font-weight: 300;
        color: #aba5b6;
        outline: unset;
        height: 48px;
        
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
        background:#115f8f;
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
            background:#fff;
        }
    }
    .message-error {
        display: block;
        width: 100%;
        margin-top: .25rem;
        font-size: 80%;
        color: #f4516c;
        padding: 0;
        font-weight: bold;
    }
</style>
@endsection

@section('content')
    <section>
        <div class="box">
            <div class="form">
                <form method="POST" action="/login" aria-label="{{ __('Login') }}">
                    @csrf
                    <div class="inputBx">
                        <input id="email" type="email" placeholder="Email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>
                        <i class="fas fa-user"></i>
                    
                        @if ($errors->has('email'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('email') }}</strong>
                            </span>
                        @endif
                    </div>
                    <div class="inputBx">
                        <input id="password" type="password" placeholder="Password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>
                        <i class="fas fa-lock"></i>
                        
                        @if ($errors->has('password'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                        @endif
                    </div>
                    
                    <div class="text-right" style="padding-right: 0;margin-top:10px;">
                        <a class="btn btn-link" href="/password/reset">
                            {{ __('Forgot Your Password?') }}
                        </a>
                    </div>
                    <div class="inputBx text-center">
                        <button id="signin" name="signin" type="submit" class="btn btn-primary signin" style="height: 48px;">
                            {{ __('Login') }}
                        </button>
                    </div>
                </form>
                
                <p class="text-center">Don't have an account yet? 
                    <a href="/auth/register"><span>Sign Up</span></a>
                </p>
            </div>
        </div>
    </section>
@endsection
