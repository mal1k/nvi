@extends('themes.'.(isset($theme)?$theme:'default').'.layouts.main')

@section('local_styles')
<style>

</style>
@endsection

@section('content')
<div id="holdings-module">
    <holdings-list :accounts="{{$accounts}}"></holdings-list>
</div>
@endsection

@section('local_script')
<script>
    $(document).ready(function () {
            $(".nav-item").removeClass("active");
            $('#holdings').addClass('active')
        });
</script>
<script src="{{ asset('fe/js/modules/holding.js') }}"></script>
@endsection