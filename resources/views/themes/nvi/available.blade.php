@extends('themes.'.(isset($theme)?$theme:'default').'.layouts.main')

@section('local_styles')
<style>

</style>
@endsection

@section('content')
sdsdsds
@endsection

@section('local_script')
<script>
    $(document).ready(function () {
            $(".nav-item").removeClass("active");
            $('#available').addClass('active')
        });
</script>
@endsection