<!doctype html>
<html class="loading" lang="{{ app()->getLocale() }}" data-textdirection="ltr">

<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', '') }}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui" />
    <meta name="description"
        content="Stack admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities." />
    <meta name="keywords"
        content="admin template, stack admin template, dashboard template, flat admin template, responsive admin template, web app" />
    <meta name="author" content="PIXINVENT" />
    <link rel="apple-touch-icon" href="/fe/themes/{{config('app.theme')}}/assets/images/ico/apple-icon-120.png" />
    <link rel="shortcut icon" type="image/x-icon"
        href="/fe/themes/{{config('app.theme')}}/assets/images/ico/favicon.ico" />
    <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i%7COpen+Sans:300,300i,400,400i,600,600i,700,700i"
        rel="stylesheet" />

    <!-- BEGIN: Vendor CSS-->
    <link rel="stylesheet" type="text/css"
        href="/fe/themes/{{config('app.theme')}}/assets/vendors/css/vendors.min.css" />
    <link rel="stylesheet" type="text/css"
        href="/fe/themes/{{config('app.theme')}}/assets/vendors/css/extensions/unslider.css" />
    <link rel="stylesheet" type="text/css"
        href="/fe/themes/{{config('app.theme')}}/assets/vendors/css/weather-icons/climacons.min.css" />
    <link rel="stylesheet" type="text/css" href="/fe/themes/{{config('app.theme')}}/assets/fonts/meteocons/style.css" />
    <link rel="stylesheet" type="text/css"
        href="/fe/themes/{{config('app.theme')}}/assets/vendors/css/charts/morris.css" />
    <!-- END: Vendor CSS-->

    <!-- BEGIN: Theme CSS-->
    <link rel="stylesheet" type="text/css" href="/fe/themes/{{config('app.theme')}}/assets/css/bootstrap.css" />
    <link rel="stylesheet" type="text/css"
        href="/fe/themes/{{config('app.theme')}}/assets/css/bootstrap-extended.css" />
    <link rel="stylesheet" type="text/css" href="/fe/themes/{{config('app.theme')}}/assets/css/colors.css" />
    <link rel="stylesheet" type="text/css" href="/fe/themes/{{config('app.theme')}}/assets/css/components.css" />
    <!-- END: Theme CSS-->

    <!-- BEGIN: Page CSS-->
    <link rel="stylesheet" type="text/css"
        href="/fe/themes/{{config('app.theme')}}/assets/css/core/menu/menu-types/vertical-menu.css" />
    <link rel="stylesheet" type="text/css"
        href="/fe/themes/{{config('app.theme')}}/assets/css/core/colors/palette-gradient.css" />
    <link rel="stylesheet" type="text/css"
        href="/fe/themes/{{config('app.theme')}}/assets/fonts/simple-line-icons/style.css" />
    <link rel="stylesheet" type="text/css"
        href="/fe/themes/{{config('app.theme')}}/assets/css/core/colors/palette-gradient.css" />
    <link rel="stylesheet" type="text/css" href="/fe/themes/{{config('app.theme')}}/assets/css/pages/timeline.css" />
    <link rel="stylesheet" type="text/css" href="/fe/themes/{{config('app.theme')}}/assets/css/style.css" />
    <link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/forms/selects/select2.min.css">
    <link rel="stylesheet" type="text/css" href="/be/app-assets/vendors/css/extensions/toastr.css">
    {{-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> --}}

    @yield('local_styles')
</head>