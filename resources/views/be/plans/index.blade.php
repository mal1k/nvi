@extends('be.layouts.main')

@section('specific_vendor_header')
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/extensions/sweetalert.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/printjs/print.min.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/forms/selects/select2.min.css">
<link rel="stylesheet" type="text/css" href="/be/vendor/jquery/spectrum.css">
<link rel="stylesheet" type="text/css" href="/be/vendor/jquery/jquery-ui.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/forms/icheck/icheck.css">
@endsection
 
@section('local_styles')
<style>
    .breadcrumb {
        float: right;
    }
</style>

@endsection
 
@section('content')
<div id="plans-module">
    <router-view></router-view>
</div>
@endsection
 
@section('specific_vendor_footer')
<script src="/be/app-assets/vendors/js/extensions/sweetalert.min.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/printjs/print.min.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/forms/select/select2.full.min.js" type="text/javascript"></script>
<script src="/be/vendor/jquery/spectrum.js" type="text/javascript"></script>
<script src="/be/vendor/jquery/jquery-ui.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/forms/icheck/icheck.min.js" type="text/javascript"></script>
@endsection
 
@section('local_script')
<script src="{{ asset('be/js/modules/plan.js') }}"></script>
@endsection