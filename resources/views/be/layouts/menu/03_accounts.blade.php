{{-- <li id="my-profile" class="nav-item"><a href="/admin/my-profile"><i class="ft-user"></i><span class="menu-title" data-i18n="">My Profile</span></a>
</li> --}}
@if(\Auth::user()->hasAnyRole(['admin','super_admin']))
<li id="accounts" class="nav-item"><a href="/admin/accounts"><i class="ft-pocket"></i><span class="menu-title" data-i18n="">Accounts</span></a>
</li>
@endif