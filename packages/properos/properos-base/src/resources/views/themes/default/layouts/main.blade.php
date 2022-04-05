@include('themes.'.(isset($theme)?$theme:'default').'.layouts.header')
<body>
    <div>
        @include('themes.'.(isset($theme)?$theme:'default').'.layouts.top-menu')
        <div class="content">
            @yield('content')
        </div>
    </div>
    @include('themes.'.(isset($theme)?$theme:'default').'.layouts.footer')
    @yield('specific_vendor_footer') 
    <script src="{!! asset('be/js/core.js') !!}" type="text/javascript"></script>
    @yield('local_script')
</body>
</html>
