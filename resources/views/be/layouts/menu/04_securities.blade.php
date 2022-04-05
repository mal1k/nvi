{{-- <li id="my-profile" class="nav-item"><a href="/admin/my-profile"><i class="ft-user"></i><span class="menu-title" data-i18n="">My Profile</span></a>
</li> --}}
@if(\Auth::user()->hasAnyRole(['admin','super_admin']))
<li id="securities" class="nav-item"><a href="/admin/securities"><i class="ft-activity"></i><span class="menu-title"
            data-i18n="">Securities</span></a>
</li>
@endif