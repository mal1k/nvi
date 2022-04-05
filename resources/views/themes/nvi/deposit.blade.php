@extends('themes.'.(isset($theme)?$theme:'default').'.layouts.main')

@section('local_styles')
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/forms/icheck/icheck.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/css/plugins/forms/checkboxes-radios.min.css">
<!-- END: Page CSS-->

<!-- BEGIN: Custom CSS-->
<link rel="stylesheet" type="text/css" href="/be/assets/css/style.css">
<style>

</style>
@endsection

@section('content')
<div id="deposit-module">
    @if(strtolower(env('CARD_PROCESSOR')) == 'authorize')
    <deposit-list :accounts="{{$accounts}}" 
        :card_processor="{{json_encode(env('CARD_PROCESSOR'))}}" :client_key="{{json_encode(env('AUTHORIZE_PUBLIC_KEY'))}}" 
        :api_id="{{json_encode(env('AUTHORIZE_API_ID'))}}"
        :msg="{{(\Session::has('msg')) ? json_encode(\Session::get('msg')) : json_encode('')}}">
    </deposit-list>
@elseif(strtolower(env('CARD_PROCESSOR')) == 'stripe')
    <deposit-list :accounts="{{$accounts}}" :card_processor="{{json_encode(env('CARD_PROCESSOR'))}}"
        :client_key="{{json_encode(env('STRIPE_PUBLIC_KEY'))}}" :description="{{json_encode(env('STRIPE_STATEMENT_DESCRIPTOR'))}}"
        :msg="{{(\Session::has('msg')) ? json_encode(\Session::get('msg')) : json_encode('')}}">
    </deposit-list>
@endif
</div>
@endsection

@section('local_script')
<script src="/be/app-assets/vendors/js/forms/icheck/icheck.min.js"></script>
<script src="/be/app-assets/js/scripts/forms/checkbox-radio.min.js"></script>
<script src="/be/app-assets/vendors/js/charts/chart.min.js"></script>

@if(strtolower(env('CARD_PROCESSOR')) == 'authorize')
    <script type="text/javascript"  src="https://jstest.authorize.net/v1/Accept.js" charset="utf-8"></script>
@elseif(strtolower(env('CARD_PROCESSOR')) == 'stripe')
    <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
@endif

<script>
    $(document).ready(function () {
            $(".nav-item").removeClass("active");
            $('#deposit').addClass('active')
        });
</script>
<script src="{{asset('fe/js/modules/deposit.js') }}"></script>
@endsection