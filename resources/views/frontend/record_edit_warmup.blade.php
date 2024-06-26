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
                            <source src="{{ asset(Helper::storagePath($settings->story_fourth_step)) }}" type="video/mp4">
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
                <div class="video_cnp_wrapper">
                    <div class="video_rc_container">
                        <video-recorder
                            warmup = true
                            upload_url="{{ route('editvideo.store') }}"
                            stid ="{{$story_id}}"
                            question='@json($currentQuestion)'>
                        </video-recorder>
                        <div class="vd_sidebar">
                            <div class="vd_sidebar_inner">
                                <div class="vd_tittle">Questions </div>
                                <div class="vb_qs_wrapper">
                                    <div class="vb_qs_scroll">
                                        <ul class="scroll_block">
                                            @php $next = true; @endphp
                                            @foreach($questions as $question)
                                                @if ($question->class === "qs_complete" || $question->class === "qs_complete qs_qurrent")
                                                    <li class="qs_complete">
                                                        <a href="{{ route('create-your-story.edit_warmup.show',['id' => $question->id,'story_id' => encrypt($story_id)]) }}" class="bookmark-fill">{{ $question->title }}</a>
                                                    </li>
                                                    @continue
                                                @elseif($next)
                                                    @php $next = false; @endphp
                                                    <li class="{{ $question->class }}">
                                                        {{-- <span><img style="width: 30px; height: 30px;" src="{{ asset('images/frontend/spinner.gif') }}" alt=""></span> --}}
                                                        <a href="" class="bookmark-fill">{{ $question->title }} </a>
                                                    </li>
                                                @else
                                                    <li class="{{ $question->class }}">
                                                        <a href="javascript:void(0)" class="bookmark-fill" style="cursor: default">{{ $question->title }}</a>
                                                    </li>
                                                @endif
                                            @endforeach
                                        </ul>
                                    </div><!--vb_qs_scroll-->
                                </div><!--vb_qs_wrapper-->
                            </div><!--vd_sidebar_inner-->
                        </div><!--vd_sidebar-->
                        
                    </div><!--video_rc_container-->
                </div><!--video_wrapper-->
            </div>
        </div>
		<div class="row" style="margin-top: 10px;">
            <div class="col-sm-12 col-md-12">
                <div class="pp_top_section" style="padding-bottom: 10px;">
                  <p>When ready, click the play button to record your answer. Hit stop and review to check your video. When you are satisfied, hit ACCEPT to go on to the next Question.</p>
              </div>
             </div>
      </div>
        @if ($questions->count() === $questions->whereIn('class', ['qs_complete', 'qs_complete qs_qurrent'])->count())
            <div class="row">
                <div class="col-xs-12 padding_cs_1">
                    <div class="step_bottom_section">
                        <div class="step_next"><a href="{{ route('create-your-story.editstep-5', ['story_id' => $story_id]) }}" class="btn step_next_btn" >Next</a></div><!--step_next-->
                    </div><!--step_bottom_section-->
                </div>
            </div>
        @endif
    </div>
    
</div><!--video_content-->


@endsection

@section('scripts')
    <script src="{{ asset('js/app.js?09l98') }}"></script>
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
