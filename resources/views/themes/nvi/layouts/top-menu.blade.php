<nav class="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-dark navbar-shadow">
    <div id="top-navbar-content" class="navbar-wrapper">
        <div class="navbar-header">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item mobile-menu d-md-none mr-auto">
                    <a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i
                            class="ft-menu font-large-1"></i></a>
                </li>
                <li class="nav-item">
                    <a class="navbar-brand" href="/"><img class="brand-logo" alt="Properos logo"
                            src="/fe/themes/{{config('app.theme')}}/assets/images/logo/stack-logo-light.png" />
                        <h2 class="brand-text">{{config('app.name')}}</h2>
                    </a>
                </li>
                <li class="nav-item d-md-none">
                    <a class="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i
                            class="fa fa-ellipsis-v"></i></a>
                </li>
            </ul>
        </div>
        <top-navbar-content :user="{{Auth::user()}}" :unread_notifications="{{Auth::user()->unreadNotifications}}"></top-navbar-content>
    </div>
</nav>
<div class="main-menu menu-fixed menu-dark menu-accordion menu-shadow" data-scroll-to-active="true">
    <div class="main-menu-content">

        <div class="text-center show-info-user" style="margin-top:2rem;">
          <span class="avatar" style="width:80px;">
            @if(Auth::user()->avatar)
                <img style="width: 80px;" src="{{env('APP_CDN_URL').'/'.Auth::user()->avatar}}" alt="avatar"><i></i></span>
            @else
                <img style="width: 80px;" src="/be/app-assets/images/portrait/small/avatar-s-1.png" alt="avatar"><i></i></span>
            @endif
            <p style="margin-top:10px;font-size:18px;" class="user-name">{{Auth::user()->firstname}} {{Auth::user()->lastname}}</p>
            <p style="margin-bottom:0px;">Ownership: {{round(Auth::user()->dashboard->data["holding"]["ownership"])}}%</p>
            <p>Rank: {{Auth::user()->dashboard->data["holding"]["rank"]}}</p>

        </div>

        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
            {{-- <li id="home" class="nav-item">
                <a href="/"><i class="ft-home"></i><span class="menu-title" data-i18n="">Home</span></a>
            </li> --}}

            <li id="accounts" class="nav-item">
                <a href="/investor/accounts"><i class="ft-pocket"></i><span class="menu-title"
                        data-i18n="">Accounts</span></a>
            </li>

            <li id="holdings" class=" nav-item">
                <a href="/investor/holdings"><i class="ft-layers"></i><span class="menu-title"
                        data-i18n="">Holdings</span></a>
            </li>

            <li id="available" class="nav-item">
                <a href="/investor/available"><i class="ft-activity"></i><span class="menu-title"
                        data-i18n="">Available</span></a>
            </li>

            <li id="simulation" class="nav-item">
                <a href="/investor/simulation"><i class="ft-sliders"></i><span class="menu-title"
                        data-i18n="">Simulation</span></a>
            </li>
            <li id="deposit" class="nav-item">
                <a href="/investor/deposit"><i class="fa fa-usd"></i><span class="menu-title"
                        data-i18n="">Deposit</span></a>
                        {{-- <a href="/investor/accounts" id="deposit"
                        class="btn d-block w-100 btn-social mb-1 mr-1 custom-drk-btn"><span
                        class="fa fa-usd"></span> <span class="text-right">Deposit</span>
                    </a> --}}
            </li>
            <li id="withdraw" class="nav-item">
                <a style="background: linear-gradient(90deg, rgba(77,33,110,1) 0%, rgb(216, 215, 219) 70%), rgba(1,0,6,1) 100%);" href="/investor/withdraw"><i class="fa fa-usd"></i><span class="menu-title"
                        data-i18n="">Withdraw</span></a>
                 {{-- <a href="/investor/accounts" id="withdraw"
                    class="btn d-block w-100 btn-social mb-1 mr-1 custom-drk-btn"><span
                        class="fa fa-usd font-medium-4"></span> <span class="text-right">Withdraw</span>
                </a> --}}
            </li>
        </ul>
    </div>
</div>
