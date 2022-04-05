@extends('be.layouts.main') 

@section('specific_vendor_header')
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/extensions/sweetalert.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/printjs/print.min.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/forms/selects/select2.min.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/forms/icheck/icheck.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/pickers/daterange/daterangepicker.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/pickers/datetime/bootstrap-datetimepicker.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/pickers/pickadate/pickadate.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/css/plugins/pickers/daterange/daterange.min.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/forms/toggle/switchery.min.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/css/plugins/forms/switch.min.css">
@endsection
 
@section('local_styles')
<style>
    .breadcrumb {
        float: right;
    }
</style>
@endsection
 
@section('content')
<div id="accounting-module">
    @if(strtolower(env('CARD_PROCESSOR')) == 'authorize')
        <router-view  :card_processor="{{json_encode(env('CARD_PROCESSOR'))}}" :client_key="{{json_encode(env('AUTHORIZE_PUBLIC_KEY'))}}" 
            :api_id="{{json_encode(env('AUTHORIZE_API_ID'))}}">
        </router-view>
    @elseif(strtolower(env('CARD_PROCESSOR')) == 'stripe')
        <router-view :card_processor="{{json_encode(env('CARD_PROCESSOR'))}}"
            :client_key="{{json_encode(env('STRIPE_PUBLIC_KEY'))}}" :description="{{json_encode(env('STRIPE_STATEMENT_DESCRIPTOR'))}}">
        </router-view>
    @endif
</div>
@endsection
 
@section('specific_vendor_footer')
<script src="/be/app-assets/vendors/js/pickers/dateTime/moment-with-locales.min.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/pickers/dateTime/bootstrap-datetimepicker.min.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/pickers/pickadate/picker.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/pickers/pickadate/picker.date.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/pickers/pickadate/picker.time.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/pickers/pickadate/legacy.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/pickers/daterange/daterangepicker.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/forms/toggle/bootstrap-checkbox.min.js"></script>
<script src="/be/app-assets/vendors/js/forms/toggle/switchery.min.js"></script>


<script src="/be/app-assets/vendors/js/extensions/sweetalert.min.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/printjs/print.min.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/forms/select/select2.full.min.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/forms/icheck/icheck.min.js" type="text/javascript"></script>
@endsection
 
@section('local_script')
@if(strtolower(env('CARD_PROCESSOR')) == 'authorize')
    <script type="text/javascript"  src="https://jstest.authorize.net/v1/Accept.js" charset="utf-8"></script>
@elseif(strtolower(env('CARD_PROCESSOR')) == 'stripe')
    <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
@endif
<script src="{{ asset('be/js/modules/accounting.js') }}"></script>
@endsection