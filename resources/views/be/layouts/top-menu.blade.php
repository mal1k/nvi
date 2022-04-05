<!-- fixed-top-->
<style>
	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: #fff;
		opacity: 1;
		/* Firefox */
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: #fff;
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: #fff;
	}

	.main-menu.menu-dark .navigation>li>ul,
	.main-menu.menu-dark ul.menu-popout {
		background: #404e67b3 !important;
	}

	.main-menu.menu-dark .navigation>li ul .active>a {
		color: #fff;
	}

	/* .main-menu.menu-dark .navigation>li ul li.active>a, .main-menu.menu-dark .navigation>li>a> ul li.hover>a, .main-menu.menu-dark .navigation>li ul li:hover>a {
	background-color: #11656c !important;
	} */
</style>
<nav id="top-navbar" class="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-dark">
	<top-navbar-be :user="{{Auth::user()}}"></top-navbar-be>
</nav>