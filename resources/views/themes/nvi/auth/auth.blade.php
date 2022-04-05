@extends('themes.nvi.layouts.main-plain')

@section('local_styles')
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/forms/icheck/icheck.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/forms/toggle/switchery.min.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/css/plugins/forms/switch.min.css">
@endsection

@section('content')
<div id="auth-module">
    @if(strtolower(env('CARD_PROCESSOR')) == 'authorize')
        <router-view :domain="{{ json_encode(config('app.domain'))}}"
            :card_processor="{{json_encode(env('CARD_PROCESSOR'))}}" :client_key="{{json_encode(env('AUTHORIZE_PUBLIC_KEY'))}}" 
            :api_id="{{json_encode(env('AUTHORIZE_API_ID'))}}">
        </router-view>
    @elseif(strtolower(env('CARD_PROCESSOR')) == 'stripe')
        <router-view :card_processor="{{json_encode(env('CARD_PROCESSOR'))}}"
            :client_key="{{json_encode(env('STRIPE_PUBLIC_KEY'))}}" :description="{{json_encode(env('STRIPE_STATEMENT_DESCRIPTOR'))}}">
        </router-view>
    @endif
</div>
@endsection
 
 
@section('local_script')

<script src="/be/app-assets/vendors/js/forms/select/select2.full.min.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/forms/icheck/icheck.min.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/forms/toggle/bootstrap-checkbox.min.js"></script>
<script src="/be/app-assets/vendors/js/forms/toggle/switchery.min.js"></script>

<script src="/be/vendor/loadingoverlay.min.js"></script>

@if(strtolower(env('CARD_PROCESSOR')) == 'authorize')
    <script type="text/javascript"  src="https://jstest.authorize.net/v1/Accept.js" charset="utf-8"></script>
@elseif(strtolower(env('CARD_PROCESSOR')) == 'stripe')
    <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
@endif

<script src="/fe/js/modules/auth.js"></script>


@endsection
