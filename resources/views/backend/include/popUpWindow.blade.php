@if(Session::has('success'))
    <script>viewPopUpWindow();</script>
@endif

@if(Session::has('error'))
    <div class="box-body" style="padding-bottom: 0px;">
        <div class="callout callout-warning">
            <h4><i class="icon fa fa-warning"></i> Error!</h4>
            <p>{{session('error')}}</p>
        </div>
    </div>
@endif


@if(Session::has('forceLogoutError'))
    <div class="callout callout-warning">
        <h4><i class="icon fa fa-warning"></i> Error!</h4>
        <p>{{session('forceLogoutError')}}</p>
    </div>
@endif

<script src="{{ $cdn ?? asset('vendor/sweetalert/sweetalert.all.js')  }}"></script>
<link rel="stylesheet" href="{{ config('sweetalert.animatecss') }}">
<script src="{{ $cdn ?? asset('vendor/sweetalert/sweetalert.all.js')  }}"></script>

<script type="text/javascript">
	function viewPopUpWindow() {
		Swal.fire('Thank you for your note, we will get back to you shortly');
	}
</script>