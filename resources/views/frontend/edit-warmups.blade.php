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
            {!! Form::open(['method'=>'POST', 'action'=>'frontend\CreateStoryController@edit_step3Store']) !!}
            <input name="story_id" value="{{ $story_id }}" id="story_{{$story_id}}" type="text" hidden >
            <div class="row choose_select">
                <div class="col-xs-12">
                    <div class="choose_select_common">
                        <ul>
                            @foreach($allwarmups as $warmup)
                            <li>
                                <div class="av_check">
                                <input name="warmups[]" value="{{ $warmup->id }}" onchange="QuestionPlanCheck('{{$warmup->id}}')" id="st_{{$warmup->id}}" type="checkbox" class="question-check" @if(in_array($warmup->id, $warmup_ids)) checked @endif >

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
                            <button  type="submit"  name="" class="step_next_btn">Next</button>
                        </div><!--step_next-->
                    </div><!--step_bottom_section-->
                </div>
            </div>
            {!! Form::close() !!}
 
        </div>

    </div><!--common_section-->

    

</div><!--content-->



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
   </script>
@endsection