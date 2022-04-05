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
<div id="accounts-module">
    <accounts-list :accounts="{{$accounts}}"></accounts-list>
</div>
@endsection

@section('local_script')
<script src="/be/app-assets/vendors/js/forms/icheck/icheck.min.js"></script>
<script src="/be/app-assets/js/scripts/forms/checkbox-radio.min.js"></script>
<script src="/be/app-assets/vendors/js/charts/chart.min.js"></script>
<script>
    $(document).ready(function () {
            $(".nav-item").removeClass("active");
            $('#accounts').addClass('active')
        });
</script>
<script src="{{asset('fe/js/modules/account.js') }}"></script>
@endsection