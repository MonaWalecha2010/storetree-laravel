
@extends('frontend.layouts.app')
@section('header')
<style>
    .modal-dialog{
        width: 1120px !important;
    }

    .capture_image .col-lg-6{
        width: auto !important;
    }
    .modal_tittle{
        padding-bottom: 0px;
        margin: 0px 0px 0px 15px;
    }

    .text-overlay{
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
    }

    #capture_member_photo .modal-body{
        padding: 30px 30px 15px 30px;
    }
    @media screen and (max-width:480px){
        .pr_row button{
            font-size: 14px !important;
            padding: 0px 20px 0px 20px !important;
            margin-top: 22px; 
        }
        .capture_photo{
            font-size: 14px !important;
            padding: 0px 20px 0px 20px !important;
            margin-left: 22px; 
        }
        .pr_photo{
            margin-bottom: 0px; 
        }ake photo
        .profile_rt_con p{
            display: inline-block;
            width: 50%;
        }
        .profile_rt_con button{
            display: block;
            font-size: 14px !important;
        }
    }
    .profile_video_single{
        position:relative;
    }
    .text-overlay{
        position: absolute;
        top: 10%;
        left: 15%;
        right: 15%;
        z-index: 99999;
    }
    .text-overlay p{
        color: #fff;
        font-size: 18px;
        /* text-align: center; */
    }
</style>
@endsection
@section('title')
<title>Storee Tree: My Profile</title>
@endsection

@section('content')
@php($userInfo=App\Models\User::find($authuser->id))
<div class="banner_subpage" style="background-image:url(https://storeetree.com/images/frontend/subpage_bg_1.jpg)">
    <h1>Update Password</h1>
</div>
<div id="messageContainer"></div>


                        <div class="profile_content_row" id="editForm">                            
                                   {!! Form::open(['method'=>'POST', 'action'=>'frontend\ProfileController@update_password']) !!}
                               <ul>  
                                          @csrf
                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">Current Password</div>
                                            <div class="profile_rt_con">
                                            {!! Form::password('current_password', ['class'=>'form-control', 'placeholder' =>
                                        'Current Password', 'id'=>'current_password']) !!}
                                            </div>
                                            @error('current_password')
                                                    <p><span class="text-danger">{{ $message }}</span></p>
                                            @enderror
                                        </div>
                                    </li>

                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">New Password</div>
                                            <div class="profile_rt_con">
                                            {!! Form::password('new_password', ['class'=>'form-control', 'placeholder' =>
                                        'New Password', 'id'=>'new_password']) !!}
                                            </div>
                                            @error('new_password')
                                                    <p><span class="text-danger">{{ $message }}</span></p>
                                            @enderror
                                        </div>
                                    </li>

                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">Confirm Password</div>
                                            <div class="profile_rt_con">
                                            {!! Form::password('new_password_confirmation', ['class'=>'form-control', 'placeholder' =>
                                        'Confirm Password', 'id'=>'new_password_confirmation']) !!}
                                            </div>
                                            @error('new_password_confirmation')
                                                    <p><span class="text-danger">{{ $message }}</span></p>
                                            @enderror
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr"></div>
                                            <div class="profile_rt_con profile_rt_con_right_float d-flex  flex-row-reverse">
                                                <button class="btn btn-info btn-sm" type="submit">Update</button>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                                {!! Form::close() !!}
                            
                        </div><!--profile_content_row-->
                        

@endsection


@section('scripts')
<script>
    $(document).ready(function(){
       
    });
   
</script>
<script src="{{ $cdn ?? asset('vendor/sweetalert/sweetalert.all.js')  }}"></script>
<link rel="stylesheet" href="{{ config('sweetalert.animatecss') }}">
<script src="{{ $cdn ?? asset('vendor/sweetalert/sweetalert.all.js')  }}"></script>

<script type="text/javascript">
@if(Session::has('errMsg'))
 Swal.fire({{Session::get('errMsg')}});
@endif
</script>
<script language="JavaScript">
    $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
$(document).ready(function (e) {
   
const urlParams = new URLSearchParams(window.location.search);
// Get the value of a specific parameter
const param1Value = urlParams.get("message");
if (urlParams.has("message")) {
    document.getElementById('messageContainer').innerHTML = '<div class="alert danger"><span class="closebtn">×</span><strong>Warning ! </strong>'+ param1Value +'</div>';
} 

var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}


});


</script>
@endsection