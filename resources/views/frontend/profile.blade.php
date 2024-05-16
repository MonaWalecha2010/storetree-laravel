<?php
$all_questions = null;
// if(!is_null($user_video)){
//     $all_questions=array_reverse(explode('---',$user_video->all_questions));
// }
?>
@extends('frontend.layouts.app')
@section('header')
<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:700');

.loading_div{
  width: 40%;
margin: 0 auto;
}
.container_div {
    width: 800px;
    margin: 0 auto;
}
.profile_video_single .container_div img {
    max-width: 100%;
}

.containers__d {
  color: white;
  font-size: 2.26rem;
  text-transform: uppercase;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.animation {
    font-family: 'Roboto';
  height: 48px;
  overflow: hidden;
  margin-left: 1rem;
}

.animation>div>div {
  padding: 0.25rem 0.75rem;
  height: 2.81rem;
  margin-bottom: 2.81rem;
  display: inline-block;
}

.animation div:first-child {
  animation: text-animation 8s infinite;
}

.first div {
  background-color: #243e8f;
}

.second div {
  background-color: #243e8f;
}

.third div {
  background-color: #243e8f;
}

@keyframes text-animation {
  0% {
    margin-top: 0;
  }

  10% {
    margin-top: 0;
  }

  20% {
    margin-top: -5.62rem;
  }

  30% {
    margin-top: -5.62rem;
  }

  40% {
    margin-top: -11.24rem;
  }

  60% {
    margin-top: -11.24rem;
  }

  70% {
    margin-top: -5.62rem;
  }

  80% {
    margin-top: -5.62rem;
  }

  90% {
    margin-top: 0;
  }

  100% {
    margin-top: 0;
  }
}

</style>
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
@if(Session::has('success'))
<div class="alert success">
    <span class="closebtn">×</span>
    <strong>Success !</strong>{{ Session::get('success') }}</div>
@endif
@php($userInfo=App\Models\User::find($authuser->id))
<div class="banner_subpage" style="background-image:url(https://storeetree.com/images/frontend/subpage_bg_1.jpg)">
    <h1>Profile</h1>
</div><!--subpage_banner-->




@if($userInfo)
<div class="modal fade modal-vcenter member_plus" id="capture_member_photo" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <button type="button" class="close modalFormClose" data-dismiss="modal" aria-label="Close" onclick="offCamera()"><span aria-hidden="true"></span></button>
            <div class="modal-body">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="modal_tittle">
                               <!--webcam start -->
                                <div class="capture_image">	
                                    <div class="row">
                                    <h2 style="text-transform: uppercase; padding: 0px 0px 25px 0px; font-size: 28px;">Set your profile picture</h2>
                                    <div class="col-lg-6" align="center">
                                        <label>Capture live photo</label>
                                        <div id="my_camera" class="pre_capture_frame" ></div>
                                        <input type="hidden" name="captured_image_data" id="captured_image_data">
                                        <br>
                                        <input id="take_photo" type="button" class="btn btn-warning btn-round btn-file" value="Take Photo" onClick="take_snapshot()">		
                                    </div>
                                    <div id="imgDiv" class="col-lg-6" align="center" hidden>
                                        <label>Set Profile Picture</label>
                                        <div id="results" >
                                            <img style="width: 350px;" class="after_capture_frame" src="image_placeholder.jpg" />
                                        </div>
                                        <br>
                                        <button type="button" class="btn btn-success" onclick="saveSnap()">Save Picture</button>
                                    </div>	
                                    </div><!--  end row -->
                                </div><!-- end container -->
                                <!--webcam end-->
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="modal-block">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="content_area cn_gap_top profile__section">
        <div class="blog_list_section">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="blog_filter_section">
                            {{-- <div class="pr_back_btn"></div> --}}
                            
                        </div><!--blog_filter_section-->
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="pr_tittle">Member Information :</div>
                        <div class="pr_row">
                            <div class="d-flex">
                                <div class="pr_photo" style="border-radius: 0; margin-left: 25px;">
                                    @if(is_null(Auth::user()->photo))
                                    <img src="{{ URL::to('/') }}/images/frontend/{{ Auth::user()->gender=='male'?'photo_male.png':'photo_female.png'}}" alt="" style="border-radius: 50%;"/>
                                    @else
                                    <img src="{{ URL::to('/') }}/storage/{{Auth::user()->photo}}" alt=""  style="width:120px; height:120px; border-radius: 50%;"/>
                                    @endif
                                </div>
                                <div>
                                     <button  class="family_btn" style="float: right; border-radius: 60px;   border: 1px solid #133c7e; box-shadow: none;outline: 0;height: 48px;line-height: 48px;padding: 0px 30px 0px 30px;color: #fff;font-size: 18px;font-weight: 600; text-transform: uppercase;background-color: #133c7e;  margin-right0px;"><a href="{{ route('family-trees') }}" style="color: #fff;">Show Your Family</a></button>
                                </div>
                            </div><!--pr_photo-->
                        </div><!--pr_photo-->
                        <a class="capture_photo" href="#" data-toggle="modal" data-target="#capture_member_photo" style="float: left; border-radius: 60px;   border: 1px solid #133c7e; box-shadow: none;outline: 0;height: 48px;line-height: 48px;padding: 0px 30px 0px 30px;color: #fff;font-size: 18px;font-weight: 600; text-transform: uppercase;background-color: #133c7e;  margin-right0px;" onclick="onCamera()">Take Photo</a>
                        <div class="profile_content_row" id="profileView">
                                <ul>
                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">Full Name</div>
                                            <div class="profile_rt_con">
                                                <p>{{ $authuser->full_name }}</p>
                                               
                                               <div class="profile_action_btns">
                                                   <button type="button" style="float: right; border-radius: 60px;   border: 1px solid #133c7e; box-shadow: none;outline: 0;height: 48px;line-height: 48px;padding: 0px 30px 0px 30px;color: #fff;font-size: 18px;font-weight: 600; text-transform: uppercase;background-color: #133c7e;  margin-right0px;" id="edit">Edit</button>

                                                     <!-- <button type="button" id="upd_pass_btn" style="float: right; border-radius: 60px;   border: 1px solid #133c7e; box-shadow: none;outline: 0;height: 48px;line-height: 48px;padding: 0px 30px 0px 30px;color: #fff;font-size: 18px;font-weight: 600; text-transform: uppercase;background-color: #133c7e;  margin-right0px;" ><a  style="color: #fff; text-decoration:none" href="{{route('view.update_password')}}">Update Password</a></button> -->
                                               </div>
                                                    
                                               
                                            </div>
                                        </div>
                                    </li>
                                    
                            @php($familyTreeInfo=App\Models\FamilyTree::where('user_id',$authuser->id)->first()) 
                                @if($familyTreeInfo)
									@if((!is_null($familyTreeInfo->fatherInfo)))
                                         <li class="pr_sub_content">
                                          <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr sb_tittle">Father:</div>
                                                <div class="profile_rt_con">
                                                    <a href="{{ url('/family/member/'.$familyTreeInfo->fatherInfo->user_id) }}">{{(!is_null($familyTreeInfo->fatherInfo))? $familyTreeInfo->fatherInfo->full_name:''}}</a>  
                                                </div>
                                            </div>
                                          </li>
                                          @endif
                                          @if((!is_null($familyTreeInfo->motherInfo)))
                                          <li class="pr_sub_content">
                                          <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr sb_tittle">Mother:</div>
                                                <div class="profile_rt_con">
                                                     <a href="{{ url('/family/member/'.$familyTreeInfo->motherInfo->user_id) }}">{{(!is_null($familyTreeInfo->motherInfo))? $familyTreeInfo->motherInfo->full_name:''}}</a>  
                                                </div>
                                            </div>
                                          </li>
                                          @endif
                                          @if((!is_null($familyTreeInfo->partnerInfo)))
                                          <li class="pr_sub_content">
                                          <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr sb_tittle">Partner:</div>
                                                <div class="profile_rt_con">
                                                         <a href="{{ url('/family/member/'.$familyTreeInfo->partnerInfo->user_id) }}">{{(!is_null($familyTreeInfo->partnerInfo))? $familyTreeInfo->partnerInfo->full_name:''}}</a>  
                                                </div>
                                            </div>
                                          </li>
                                    @endif 
                                 @endif
                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">First Name</div>
                                            <div class="profile_rt_con">
                                                {{$userInfo->first_name}}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">Last Name</div>
                                            <div class="profile_rt_con">
                                                {{$userInfo->last_name}}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">Gender</div>
                                            <div class="profile_rt_con">
                                               {{ucwords($userInfo->gender)}}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">Country</div>
                                            <div class="profile_rt_con">
                                                 {{$userInfo->country['title']}}
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr"> Postal Code</div>
                                            <div class="profile_rt_con">
                                                {{$userInfo->postal_code}}
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">Date Of Birth</div>
                                            <div class="profile_rt_con">
                                                {{date_format(date_create($userInfo->dob),'m-d-Y')}}
                                            </div>
                                        </div>
                                    </li>

                                    <!-- <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">Childhood Period</div>
                                            <div class="profile_rt_con">
                                            </div>
                                        </div>
                                    </li> -->
                                    
                                    @if(explode('@',$userInfo->email)[1]!="storeetree.com")
                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">Email</div>
                                            <div class="profile_rt_con">
                                                {{$userInfo->email}}
                                            </div>
                                        </div>
                                    </li>
                                    @endif
                                </ul>
                            </form>
                        </div>
                        <div class="profile_content_row" id="editForm">
                            <form action="{{route('profile.update')}}" method="post">
                            @csrf
                                <ul>
                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">Full Name :</div>
                                            <div class="profile_rt_con">
                                                {{ $authuser->full_name }}

                                                <a href="#" class="btn btn-sm" style="float: right; border-radius: 60px;   border: 1px solid #133c7e; box-shadow: none;outline: 0;height: 48px;line-height: 48px;padding: 0px 30px 0px 30px;color: #fff;font-size: 18px;font-weight: 600; text-transform: uppercase;background-color: #133c7e;" id="close">Close</a>
                                            </div>
                                        </div>
                                    </li>
                                    <!-- <li class="pr_sub_content">
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr sb_tittle">Spouse :</div>
                                            <div class="profile_rt_con"><a href="#">Lorem Ipsum</a></div>
                                        </div>
                                    </li>
                                    <li class="pr_sub_content">
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr sb_tittle">Parents :</div>
                                            <div class="profile_rt_con">
                                                <a href="#">Lorem Ipsum</a> 
                                                <a href="#">Lorem Ipsum</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="pr_sub_content">
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr sb_tittle">Siblings :</div>
                                            <div class="profile_rt_con">
                                                <a href="#">Lorem Ipsum</a> 
                                            </div>
                                        </div>
                                    </li>
                                    <li class="pr_sub_content">
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr sb_tittle">Children :</div>
                                            <div class="profile_rt_con">
                                                <a href="#">Lorem Ipsum</a> 
                                                <a href="#">Lorem Ipsum</a> 
                                                <a href="#">Lorem Ipsum</a> 
                                            </div>
                                        </div>
                                    </li> -->
                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">First Name</div>
                                            <div class="profile_rt_con">
                                                <input type="text" name="first_name" value="{{$userInfo->first_name}}" class="form-control" required>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">Last Name</div>
                                            <div class="profile_rt_con">
                                                <input type="text" name="last_name" value="{{$userInfo->last_name}}" class="form-control" required>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">Gender</div>
                                            <div class="profile_rt_con">
                                               <div class="form_select_common select_common">

                                                    <select class="option-select" name="gender" required>
                                                       <option value="">--Select Gender--</option>
                                                       <option value="male" {{($userInfo->gender=='male')?'selected':''}}>Male</option>
                                                       <option value="female" {{($userInfo->gender=='female')?'selected':''}}>Female</option>
                                                       <option value="other not identified" {{($userInfo->gender=='other not identified')?'selected':''}}>Other Not Identified</option>
                                                        <option value="prefer to not answer" {{($userInfo->gender=='prefer to not answer')?'selected':''}}>Prefer to Not Answer</option>
                                                   </select>
                                               </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">Country</div>
                                            <div class="profile_rt_con">
                                                 <div class="form_select_common select_common">

                                                    <select class="option-select" id="country_id" name="country_id">
                                                        <option  value="">Choose a Country</option>
                                                    @php($countryList=App\Models\Country::orderBy('id','asc')->get())
                                                        @foreach($countryList as $key=>$countryInfo)
                                                            <option  value="{{$countryInfo->id}}" {{($countryInfo->id==$userInfo->country_id)? 'selected':''}}>{{$countryInfo->title}}</option>
                                                        @endforeach
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr"> Postal Code</div>
                                            <div class="profile_rt_con">
                                                <input type="text" name="postal_code" value="{{$userInfo->postal_code}}" class="form-control" required placeholder="ZIP Code/ Postal Code">
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">Date Of Birth</div>
                                            <div class="profile_rt_con">
                                                <input type="date" name="dob" value="{{$userInfo->dob}}" class="form-control" required>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">Childhood Period</div>
                                            <div class="profile_rt_con">
                                                <div class="form_select_common select_common">
                                                    {!! Form::select('connected_period', [''=>'Which Decade?']+Config::get('constants.CONNECTED_PERIODS'), $userInfo->connected_period, ['class'=>'option-select', 'id'=>'connected_period']) !!}
                                            	</div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="profile_col_1">
                                            <div class="profile_left_tittle_pr">Email</div>
                                            <div class="profile_rt_con">
                                                <input type="email" name="email" value="{{$userInfo->email}}" class="form-control" required>
                                            </div>
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
                            </form>
                        </div><!--profile_content_row-->
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                         @if($user_video)
                        <div class="pr_tittle video__title">Video :</div>
                        @endif
                    </div>
                </div>
                <div class="row row_vodeo_sec">
                    <div class="col-xs-12 col-sm-12 col-md-8">
                        <div class="profile_video_single ">
                            @if($all_questions)
                            <div class="text-overlay">
                                <div>
                                    @if($user_video->photo)
                                        <img style="width: 100px; height: 100px; border-radius: 50%;" src="{{ URL::to('/') }}/storage/{{$user_video->photo}}" alt="">
                                    @endIf
                                    @if(!is_null(Auth::user()->photo) && is_null($user_video->photo))
                                        <img style="width: 100px; height: 100px; border-radius: 50%;" src="{{ URL::to('/') }}/storage/{{Auth::user()->photo}}" alt="">
                                    @endIf
                                </div>
                                <div>
                                    @foreach($all_questions as $qsn)
                                    <p style="text-align:right;">{{  $qsn }}</p>
                                    @endforeach
                                </div>
                            </div>
                            @endif
                            <div class="embed-responsive embed-responsive-16by9" style="text-align: center;" id="video_div">

                                 @if($user_video)
                                     @if($user_video['status'] == 1)
                                     

                                        <div class="pr_tittle video__title">My Story</div>

                                            <video id="profileVideo" poster="{{ URL::to('/') }}/images/poster2.png" width="100%" height="100%" controls controlsList="nodownload">
                                                    <source src="{{ URL::to('/') }}/storage/{{ $user_video['video'] }}" type="video/mp4">
                                            </video>

                                     @else
                                                
                                            <div class="container_div">
                                              <div class="loading_div">
                                               <img src="{{ URL::to('/') }}/images/frontend/play.gif">
                                              </div>

                                              <div>
                                                <main class="containers__d">
                                                    <section class="animation">
                                                      <div class="first">
                                                        <div>Video is Rendering</div>
                                                      </div>
                                                      <div class="second">
                                                        <div>Please Wait For a moment</div>
                                                      </div>
                                                      <div class="third">
                                                        <div>Your Story is on the Way</div>
                                                      </div>
                                                    </section>
                                               </main>
                                              </div>
                                            </div>
                                     @endif

                                @else<a href="{{route('create-your-story.step-1')}}">
                                       <img style="width:480px;" src="{{ URL::to('/') }}/images/frontend/link_to_create_story.jpg">
                                       </a>
                                @endif
                            </div>
                            @if($addon_video)
                            <hr>
                        <div class="pr_tittle video__title">Addon Video</div>
                                            <div class="embed-responsive embed-responsive-16by9" style="text-align: center;">                         
                                                    <video id="addonVideo" poster="{{ URL::to('/') }}/images/poster2.png" width="100%" height="100%" controls controlsList="nodownload">
                                                            <source src="{{ URL::to('/') }}/storage/{{ $addon_video['video'] }}" type="video/mp4">
                                                    </video>
                                                    </div>

                                                    <button  class="family_btn addon-btn" style="margin: 50px auto 0; border-radius: 60px;   border: 1px solid #133c7e; box-shadow: none;outline: 0;height: 48px;line-height: 48px;padding: 0px 30px 0px 30px;color: #fff;font-size: 18px;font-weight: 600; text-transform: uppercase;background-color: #133c7e;  margin-right0px;"><a href="{{route('editaddon',['id'=> encrypt($addon_video['id'])])}}" style="color: #fff;">Edit Addon Video</a></button>
                                 @endif
                        </div><!--profile_video_single-->
                    </div>
                </div>



            </div>
        </div><!--blog_section-->
    </div><!--content-->
@endif
@endsection


@section('scripts')
<script>
    $(document).ready(function(){
        $("#editForm").hide();
        $("#profileView").show();
    });
    $('#close').on('click',function(){
            $("#editForm").hide();
            $("#profileView").show();
    });
    $('#edit').on('click',function(){
        $("#editForm").show();
        $("#profileView").hide();
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
    $("#capture_member_photo").on("hide.bs.modal", function () {
            Webcam.reset();
    });
    $('#take_photo').on('click',function(){
        $('#take_photo').val('Retake Photo')
    });
});

var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

var x = window.matchMedia("(max-width: 480px)")
function onCamera(){
    // Configure a few settings and attach camera 250x187
    if (x.matches) { // If media query matches
        Webcam.set({
        width: 250,
        height: 187,
        image_format: 'jpeg',
        jpeg_quality: 90
        });	 
        Webcam.attach( '#my_camera' );
    } else {
        Webcam.set({
        width: 500,
        height: 380,
        image_format: 'jpeg',
        jpeg_quality: 90
        });	 
        Webcam.attach( '#my_camera' );
    }   
}
function offCamera(){
    Webcam.reset();
}
   
   function take_snapshot() {
    // play sound effect
    //shutter.play();
    // take snapshot and get image data
    Webcam.snap( function(data_uri) {
    // display results in page
    document.getElementById('results').innerHTML = 
     '<img class="after_capture_frame" src="'+data_uri+'"/>';
    $("#captured_image_data").val(data_uri);
    $("#imgDiv").show();
    });	 
   }

   function saveSnap(){
   var base64data = $("#captured_image_data").val();
    $.ajax({
           type: "POST",
           dataType: "json",
           url: "{{ route('profile-photo.store') }}",
           data: {image: base64data},
           success: function(data) { 
               if(data.success){
                toastr.success(data.message) 
                location.reload()
               }
               else{
                toastr.warning(data.message)
               }
           }
       });
   }
    var vid = document.getElementById("profileVideo");
    vid.onplay = function() {
        $('.text-ovelay').css('display','none');
    };

    
</script>

@if($user_video)
<script type="text/javascript">
// $( document ).ready(function() {



let video_data = {!! json_encode($user_video) !!};

setTimeout(() => {


    if(video_data.status == 0){ 
      var myInterval = setInterval(function(){
            let api_hit_response = get_video();
            if(api_hit_response.success != true) {
                console.log('status',api_hit_response.success );           
            }
            else{
                console.log('true',api_hit_response.success);
                 var html = '<div class="pr_tittle video__title">My Story</div><video id="profileVideo" poster="{{ URL::to("/") }}/images/poster2.png" width="100%" height="100%" controls controlsList="nodownload"><source src="{{ URL::to("/") }}/storage/'+api_hit_response.video+'" type="video/mp4"></video>';
                        $(".containers__d").html(html);
                console.log('status',api_hit_response.success );  
               clearInterval(myInterval);      
            }

        },5000);


        function get_video(){
        
        let ajax_response =   $.ajax({
               async: false,
               type: "POST",
               global: false,
               dataType: 'json',
                url: "{{ route('get_story_video') }}",
               headers: {
                   'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
               },
               data: {data:video_data},
               success: function(response)
               {
                    
               }
           }); 

            return ajax_response.responseJSON;  
       } 
    }

}, 3000);

</script>
@endif
@endsection