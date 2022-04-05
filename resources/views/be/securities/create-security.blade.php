@extends('be.layouts.main')
@section('specific_vendor_header')
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/extensions/sweetalert.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/pickers/datetime/bootstrap-datetimepicker.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/printjs/print.min.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/forms/selects/select2.min.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/css/plugins/forms/checkboxes-radios.min.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/css/bootstrap-extended.min.css">
<link rel="stylesheet" type="text/css" href="/be/assets/css/style.css">
<!-- END: Page CSS-->
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
        <div class="row breadcrumbs-top">
            <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/admin/securities">Securities</a>
                    </li>
                    <li class="breadcrumb-item">New security
                    </li>
                </ol>
            </div>
        </div>
    </div>
</div>
<div id="securities-module">
    <create-security
        :editable_security="{{isset($editable_security) ? json_encode($editable_security) : json_encode('')}}">
    </create-security>
</div>
@endsection

@section('specific_vendor_footer')
<script src="/be/app-assets/vendors/js/extensions/sweetalert.min.js" type="text/javascript"></script>

<script src="/be/app-assets/vendors/js/pickers/dateTime/moment-with-locales.min.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/pickers/dateTime/bootstrap-datetimepicker.min.js" type="text/javascript">
</script>
<script src="/be/app-assets/vendors/js/forms/select/select2.full.min.js" type="text/javascript"></script>
<script src="/be/vendor/jstat.min.js" type="text/javascript"></script>
<script src="/be/vendor/math.min.js" type="text/javascript"></script>
@endsection

@section('local_script')
<script>
    $(document).ready(function () {
            $(".nav-item").removeClass("active");
            $('#securities').addClass('active')
        });

</script>
<script src="{{ asset('be/js/modules/security.js') }}"></script>
@endsection