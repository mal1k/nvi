@extends('themes.'.(isset($theme)?$theme:'default').'.layouts.main')


@section('local_styles')
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/extensions/sweetalert.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/forms/selects/select2.min.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/forms/toggle/switchery.min.css">
<link rel="stylesheet" type="text/css" href="/be/app-assets/css/plugins/forms/switch.min.css">
<style>

</style>
@endsection

@section('content')
<div id="simulation-module">
    <simulation-list :securities="{{$securities}}"></simulation-list>
</div>
@endsection

@section('local_script')
<script>
    $(document).ready(function () {
            $(".nav-item").removeClass("active");
            $('#simulation').addClass('active')
        });
</script>
<script src="/be/app-assets/vendors/js/extensions/sweetalert.min.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/forms/select/select2.full.min.js" type="text/javascript"></script>
<script src="/be/app-assets/vendors/js/charts/chart.min.js"></script>
<script src="/be/app-assets/vendors/js/forms/toggle/switchery.min.js"></script>
<script src="/be/app-assets/vendors/js/forms/toggle/bootstrap-checkbox.min.js"></script>
<script src="{{ asset('fe/js/modules/simulation.js') }}"></script>
@endsection
