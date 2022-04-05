@extends('themes.'.(isset($theme)?$theme:'default').'.layouts.main')

@section('specific_vendor_header')
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/forms/selects/select2.min.css">
@endsection

@section('local_styles')
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/forms/icheck/icheck.css">
<style>

</style>
@endsection

@section('content')
<div id="securities-module">
    <securities-list :accounts="{{$accounts}}"
    :securities="{{isset($securities) ? json_encode($securities) : json_encode('')}}"
:user="{{Auth::user()->id}}"></securities-list>
</div>
@endsection

@section('specific_vendor_footer')

@endsection

@section('local_script')
<script src="/be/app-assets/vendors/js/printjs/print.min.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/forms/select/select2.full.min.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/forms/icheck/icheck.min.js" type="text/javascript"></script>
<script>
    $(document).ready(function () {
            $(".nav-item").removeClass("active");
            $('#available').addClass('active')
        });
</script>
<script src="{{ asset('fe/js/modules/security.js') }}"></script>

@endsection
