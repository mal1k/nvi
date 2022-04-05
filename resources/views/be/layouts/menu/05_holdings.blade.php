{{-- <li id="my-profile" class="nav-item"><a href="/admin/my-profile"><i class="ft-user"></i><span class="menu-title" data-i18n="">My Profile</span></a>
</li> --}}
@if(\Auth::user()->hasAnyRole(['admin','super_admin']))
<li id="holdings" class="nav-item"><a href="/admin/holdings"><i class="ft-layers"></i><span class="menu-title" data-i18n="">Holdings</span></a>
</li>
<li id="withdraw" class="nav-item"><a href="/admin/withdraws"><i class="fa fa-money"></i><span class="menu-title" data-i18n="">Withdraw Requests</span></a>
</li>
<li id="membership" class="nav-item"><a href="#"><i class="fa fa-id-card"></i><span class="menu-title" data-i18n="">Membership</span></a>
    <ul class="menu-content">
        <li id="plans"><a class="menu-item" href="/plans/list">Plans</a>
        </li>
        <li id="subscriptions"><a class="menu-item" href="/subscriptions/list">Subscriptions</a>
        </li>
    </ul>
</li>
@endif
