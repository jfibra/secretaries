<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('plugins/pace-progress/themes/blue/pace-theme-flat-top.css') }}">
    @yield('css-links')
    @yield('javascript-links')
</head>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
</style>

<body class="hold-transition sidebar-mini"> 
    @include('front.lr-header')

    @yield('content')

    @include('front.lr-footer')

    <!-- THIRD PARTY JS -->
    <script src="{{ asset('plugins/jquery/jquery.min.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="{{ asset('plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('plugins/pace-progress/pace.min.js') }}"></script>
    <script src="{{ asset('js/axios.min.js') }}"></script>

    @yield('javascript-explicit-methods')

</body>

</html>