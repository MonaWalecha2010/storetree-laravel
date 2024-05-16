@php
$authuser = Auth::user();
@endphp
@extends('frontend.layouts.app')

@section('title')
<title>Storee Tree: Create Your Story - Step 4</title>
@endsection

@section('content')



<!-- <div class="step_section">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> -->

<!--step_section-->
<div class="pr_tittle video__title">Edit Addon Video</div>
<div class="video_content">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="rc_tittle_section">
                
                    <div class="rc_tittle"> Record Answer</div>
                    {{-- <div class="rec_time">00 : 00 : 00</div> --}}
                </div><!--end rc_tittle_section-->
            </div>
        </div>
        <div class="row" id="scrollHere">
            <div class="col-xs-12">
                        <video-recorder
                            warmup = true1
                            video_id = '{{$video_id}}'
                            upload_url="{{ route('editaddonvideo.store') }}"
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
                        <div class="step_next"><a href="{{route('profile')}}" class="btn step_next_btn" >Next</a></div>
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
