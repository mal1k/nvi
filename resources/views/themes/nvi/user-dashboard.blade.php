@extends('themes.'.(isset($theme)?$theme:'default').'.layouts.main')

@section('local_styles')
<style>

</style>
@endsection

@section('content')
<div id="dashboard-module">
    <dashboard-summary :active_accounts="{{$active_accounts}}" :total_holdings="{{$total_holdings}}"
        :available_securities={{json_encode($available_securities)}} :total_mdf="{{$total_mdf}}"></dashboard-summary>
</div>
@endsection
@section('local_script')

@section('local_script')
<script>
    $(document).ready(function () {
            $(".nav-item").removeClass("active");
            $('#home').addClass('active')
        });
</script>
<script src="{{ asset('fe/js/modules/dashboard.js') }}"></script>
@endsection
