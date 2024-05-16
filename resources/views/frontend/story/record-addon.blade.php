@extends('frontend.layouts.app')

@section('title')
<title>Storee Tree: Create Your Story - Step 4</title>
@endsection

@section('content')

<div class="video_banner">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="video_banner_single">
                    <div class="embed-responsive embed-responsive-16by9">
                        <video width="100%" height="100%" controls controlsList="nodownload">
                            <source src="{{ asset(Helper::storagePath($settings->home_video)) }}" type="video/mp4">
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
                            <li class="active">
                                <div class="process_tick"><span></span></div>
                                <div class="process_info_bl">
                                    <h3>Step 3</h3>
                                </div>
                            </li>
                            <li class="current">
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

<div class="video_content">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="rc_tittle_section">
                    <div class="rc_tittle"> Record Answers </div>
                    {{-- <div class="rec_time">00 : 00 : 00</div> --}}
                </div><!--end rc_tittle_section-->
            </div>
        </div>
        <div class="row" id="scrollHere">
            <div class="col-xs-12">
                        <video-recorder
                            warmup = true1
                            upload_url="{{ route('addonvideo.store') }}"
                            question='@json($currentQuestion)'
                        ></video-recorder>   
            </div>
        </div>
		<div class="row" style="margin-top: 10px;">
            <div class="col-sm-12 col-md-12">
                <div class="pp_top_section" style="padding-bottom: 10px;">
                  <p>When ready, click the play button to record your answer. Hit stop and review to check your video. When you are satisfied, hit ACCEPT to go on to the next question.</p>
              </div>
             </div>
      </div>
            <div class="row">
                <div class="col-xs-12 padding_cs_1">
                    <div class="step_bottom_section">
                        <!-- <div class="step_next"><a href="" class="btn step_next_btn" >Next</a></div>step_next -->
                    </div><!--step_bottom_section-->
                </div>
            </div>
       
    </div>
    
</div><!--video_content-->


@endsection

@section('scripts')
    <script src="{{ asset('js/app.js?108') }}"></script>
    <script>
        window.onbeforeunload = function () {
            window.scrollTo(0,0);
        };
        $(document).ready(function(){
            $('html, body').animate({
                scrollTop: $("#scrollHere").offset().top
            }, 1000);
        })
    </script>
@endsection
