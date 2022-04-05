@include('themes.'.(isset($theme)?$theme:'default').'.layouts.header')

<body class="vertical-layout vertical-menu 2-columns dark-layout  fixed-navbar" data-open="click"
    data-menu="vertical-menu" data-col="2-columns">
    @include('themes.'.(isset($theme)?$theme:'default').'.layouts.top-menu')
    <div class="app-content content">
        <div class="content-wrapper">
            <div class="content-body">
                @yield('content')
            </div>
        </div>
    </div>
    @include('themes.'.(isset($theme)?$theme:'default').'.layouts.footer')
    <script src="/fe/themes/{{config('app.theme')}}/assets/vendors/js/vendors.min.js"></script>
    <script src="/fe/themes/{{config('app.theme')}}/assets/js/core/app-menu.js"></script>
    <script src="/fe/themes/{{config('app.theme')}}/assets/js/core/app.js"></script>
    <script src="/fe/themes/{{config('app.theme')}}/assets/js/scripts/customizer.js"></script>
    <script src="/be/vendor/loadingoverlay.min.js"></script>
    <script src="/be/app-assets/vendors/js/forms/select/select2.full.min.js" type="text/javascript"></script>
    <script src="/be/app-assets/vendors/js/extensions/toastr.min.js" type="text/javascript"></script>
    <script src="//{{ Request::getHost() }}:{{env('LARAVEL_ECHO_PORT')}}/socket.io/socket.io.js"></script>
    <script src="{!! asset('be/js/core.js') !!}" type="text/javascript"></script>
    <script src="{{ asset('fe/js/modules/ui.js') }}"></script>
    @yield('local_script')
    <script>
        $(document).ready(function(){
            var expand = true;
            if($('body').is('.horizontal-layout') && !$('body').hasClass('.horizontal-menu-demo')){
                $('.show-info-user').hide();
                expand = false;
            }
            $('.menu-toggle').on('click',function(){
                if(expand == true){
                    expand = false;
                    $('.show-info-user').hide();
                }else{
                    expand = true;
                    $('.show-info-user').show();
                }
            });
        })

    </script>
</body>


</html>


