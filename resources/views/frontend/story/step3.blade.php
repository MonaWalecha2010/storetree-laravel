@extends('frontend.layouts.app')

@section('title')
<title>Storee Tree: Create Your Story - Step 3</title>
@endsection

@section('header')
    <style>
        #webcam_no_button{
            background: #fff !important;
            color: #133c7e;
        }
        .webcam_button{
            text-align: center;
        }
        #webcam-modal .modal-dialog{
        width: 1120px !important;
        margin-top: 175px;
    }

    .capture_image{
        display: none;
    }

    .capture_image .col-lg-6{
        width: auto !important;
    }

    .modal_tittle{
        padding-bottom: 0px;
        margin: 0px 0px 0px 0px;
    }
    #webcam-modal .modal-content{
        width: 45%;
        margin: 0 auto;
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
        }
        .profile_rt_con p{
            display: inline-block;
            width: 50%;
        }
        .profile_rt_con button{
            display: block;
            font-size: 14px !important;
        }
    }
    </style>
@endsection

@section('content')
<div class="video_banner">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="video_banner_single">
                    <div class="embed-responsive embed-responsive-16by9">
                        <video width="100%" height="100%" controls controlsList="nodownload">
                            <source src="{{ asset(Helper::storagePath($settings->story_third_step)) }}" type="video/mp4">
                        </video>
                    </div>
                </div><!--video_banner_single-->
            </div>
        </div>
    </div>
</div><!--video_banner-->

<div class="step_section">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="deliver_process_section">

                    <div class="deliver_order_process_dop">
                        <ul>
                            <li class="active">
                                <div class="process_tick"><span></span></div>
                                <div class="process_info_bl">
                                    <h3>Step 1</h3>
                                </div>
                            </li>
                            <li class="active">
                                <div class="process_tick"><span></span></div>
                                <div class="process_info_bl">
                                    <h3>Step 2</h3>
                                </div>
                            </li>
                            <li class="current">
                                <div class="process_tick"><span></span></div>
                                <div class="process_info_bl">
                                    <h3>Step 3</h3>
                                </div>
                            </li>
                            <li>
                                <div class="process_tick"><span></span></div>
                                <div class="process_info_bl">
                                    <h3>Step 4</h3>
                                </div>
                            </li>
                            <li>
                                <div class="process_tick"><span></span></div>
                                <div class="process_info_bl">
                                    <h3>Step 5</h3>
                                </div>
                            </li>
                            <li>
                                <div class="process_tick"><span></span></div>
                                <div class="process_info_bl">
                                    <h3>Step 6</h3>
                                </div>
                            </li>
                        </ul>
                    </div><!--end deliver_order_process_dop-->
                </div><!--end deliver_process_section-->
            </div>
        </div>
    </div>
</div><!--step_section-->

<div class="content_area plan_section">
    <div class="common_section story_section speed_round">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="pp_top_section">
                        <h2>Warm Up Round</h2>
                        <h4>(5 seconds to answer each) </h4>
                        <p>To help warm you up to our video process, please select 3 quick questions to answer.</p>
                    </div>
                </div>
            </div>
            {!! Form::open(['method'=>'POST', 'action'=>'frontend\CreateStoryController@step3Store']) !!}
            <div class="row choose_select">
                <div class="col-xs-12">
                    <div class="choose_select_common">
                        <ul>
                            @foreach($warmups as $warmup)
                            <li>
                                <div class="av_check">


                                    @if(isset($cart['warmups']))
                                       <input name="warmups[]" value="{{ $warmup->id }}" id="st_{{$warmup->id}}" type="checkbox" class="question-check" onchange="QuestionPlanCheck('{{$warmup->id}}')" @if(in_array($warmup->id, $cart['warmups'])) checked @endif>
                                    @else
                                       <input name="warmups[]" value="{{ $warmup->id }}" id="st_{{$warmup->id}}" type="checkbox" class="question-check" onchange="QuestionPlanCheck('{{$warmup->id}}')" @if(isset($warmups_ids)) @if(in_array($warmup->id, $warmups_ids)) checked @endif @endif>
                                    @endif                                                          
                                    <label for="st_{{ $warmup->id }}">{{ $warmup->title }}</label>
                                </div>
                            </li>
                            @endforeach
                        </ul>
                    </div><!--choose_select_common-->
                </div>

            </div>
            <div class="row">
                <div class="col-xs-12 padding_cs_1">
                    <div class="step_bottom_section">
                        <div class="step_next">
                            <button  type="submit" disabled="disabled" name="" class="step_next_btn">Next</button>
                        </div><!--step_next-->
                    </div><!--step_bottom_section-->
                </div>
            </div>
            {!! Form::close() !!}
 
        </div>

    </div><!--common_section-->

    <div class="modal fade modal-vcenter member_plus" id="capture_member_photo" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <button type="button" class="close modalFormClose" data-dismiss="modal" aria-label="Close" onclick="offCamera()"><span aria-hidden="true"></span></button>
                <div class="modal-body">
                   
                </div>
            </div>
        </div>
    </div>

</div><!--content-->

 <!--webcam-->
 <div class="modal fade modal-vcenter signIn_common" id="webcam-modal" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <button  id="webModal" type="button" class="close modalFormClose" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>

            <div class="modal-body">
                <div class="row" id="webQsn">
                    <div class="col-xs-12">
                        <div class="modal_tittle">
                            <h2>DO YOU WANT TO SET YOUR PROFILE PICTURE?</h2>
                        </div>
                        <div class="webcam_button" style="margin-top: 70px;">
                            <button onclick="onCamera()" class="step_next_btn yes_button">Yes</button>
                            <button id="webcam_no_button" class="step_next_btn no_button">No</button>
                        </div>
                    </div>
                </div>
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
<!--end webcam-->

@endsection

@section('scripts')
<script src="{{ $cdn ?? asset('vendor/sweetalert/sweetalert.all.js')  }}"></script>
<link rel="stylesheet" href="{{ config('sweetalert.animatecss') }}">
<script src="{{ $cdn ?? asset('vendor/sweetalert/sweetalert.all.js')  }}"></script>

<script type="text/javascript">
    function QuestionPlanCheck(id) {
        var length = $(".question-check:checked").length;
        if (length == 3) {
            $('.step_next_btn').attr('disabled', false);
        } else {
            if(length>3){
                Swal.fire("You Can't Choose More Than 3 Items.");
                if($('#st_'+id).is(':checked'))
                    $('#st_'+id).attr('checked',false);
                $('.step_next_btn').attr('disabled', false);
            }
            else{
                $('.step_next_btn').attr('disabled', true);
            }  
        }
    }
    $(window).on("load",function(){
        var length = $(".question-check:checked").length;
        if (length ==3) {
            $('.step_next_btn').attr('disabled', false);
        } else {
            $('.step_next_btn').attr('disabled', true);
        }
    });
    @if(!$authuser)
    @if(request()->login)
        $(window).on("load",function(){
            $('#signin-modal').modal();
        });
    @endif
    @endif
    @if($authuser)
    var length = $(".question-check:checked").length;
        if (length == 3) {
            $('.step_next_btn').attr('disabled', false);
            $(window).on("load",function(){
            // $('#webcam-modal').modal();
            });
        }
    
    @endif
    $(document).on('click','#webcam_no_button',function(){
        offCamera()
        window.location.replace('/create-your-story/step-4')
    });
    $(document).on('click','#webModal',function(){
        offCamera()
        window.location.replace('/create-your-story/step-4')
    });



    //webcam
    
  
</script>

<script language="JavaScript">
    $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});


  // $('#close_signup').on('click',function(){
  //               // alert('lll');
  //               setTimeout(function(){
  //                   $('body').addClass('modal-open');
  //       },500);
  //   });

  //   $('#close_signin').on('click',function(){
  //       // alert('lll');                
  //       setTimeout(function(){
  //           $('body').addClass('modal-open');
  //       },500);
  //   });



$(document).ready(function (e) {
    $("#capture_member_photo").on("hide.bs.modal", function () {
            Webcam.reset();
    });
    $('#take_photo').on('click',function(){
        $('#take_photo').val('Retake Photo')
    });
});

$('#webQsn').css('display','block')

var x = window.matchMedia("(max-width: 480px)")
function onCamera(){
    $('#webQsn').css('display','none')
    $('.capture_image').css('display','block');
    $('.modal-content').css('width','100%');
    $('.modal-dialog').css('margin-top','25px')
    $('.modal_tittle').css('margin','0 0 0 15px')
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
           data: {image: base64data,step:true},
           success: function(data) { 
               if(data.success){
                toastr.success(data.message) 
                window.location.replace('/create-your-story/step-4')
               }
               else{
                toastr.warning(data.message)
               }
           }
       });
   }
</script>
@endsection