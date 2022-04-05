@include('themes.'.(isset($theme)?$theme:'default').'.layouts.header')

<body class="vertical-layout vertical-menu 2-columns dark-layout  fixed-navbar" data-open="click"
    data-menu="vertical-menu" data-col="2-columns">
    <div class="app-content">
        @yield('content')
    </div>
    <script src="/fe/themes/{{config('app.theme')}}/assets/vendors/js/vendors.min.js"></script>
    <script src="/fe/themes/{{config('app.theme')}}/assets/js/core/app-menu.js"></script>
    <script src="/fe/themes/{{config('app.theme')}}/assets/js/core/app.js"></script>
    <script src="//{{ Request::getHost() }}:{{env('LARAVEL_ECHO_PORT')}}/socket.io/socket.io.js"></script>
    <script src="{!! asset('be/js/core.js') !!}" type="text/javascript"></script>
    @yield('local_script')
</body>

</html>
