@extends('be.layouts.main')

@section('specific_vendor_header')
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/extensions/sweetalert.css">
{{-- <link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/pickers/datetime/bootstrap-datetimepicker.css"> --}}
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/printjs/print.min.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/forms/selects/select2.min.css">
@endsection

@section('local_styles')
<style>
    .breadcrumb {
        float: right;
    }
</style>
@endsection

@section('content')
<div class="content-header row">
    <div class="content-header col-md-12 col-12 mb-2">

    </div>
</div>
<div id="holdings-module">
    <holdings-list ></holdings-list>
</div>
@endsection

@section('specific_vendor_footer')
<script src="/be/app-assets/vendors/js/extensions/sweetalert.min.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/printjs/print.min.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/forms/select/select2.full.min.js" type="text/javascript"></script>
@endsection

@section('local_script')
<script>
    $(document).ready(function () {
            $(".nav-item").removeClass("active");
            $('#holdings').addClass('active')
        });
</script>
<script src="{{ asset('be/js/modules/holding.js') }}"></script>
@endsection
