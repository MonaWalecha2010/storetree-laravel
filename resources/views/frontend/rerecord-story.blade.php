@extends('frontend.layouts.app')

@section('title')
<title>Storee Tree: Create Your Story - Step 4</title>
@endsection

@section('header')
<style>
    .video_thm_top{
        position:relative;
    }
    .text-overlay{
        position: absolute;
        top: 40%;
        left: 15%;
        right: 15%;
        z-index: 99999;
    }
    .text-overlay p{
        color: #fff;
        font-size: 18px;
        text-align: center
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
                            <source src="{{ asset(Helper::storagePath($settings->story_fourth_step)) }}" type="video/mp4">
                        </video>
                    </div>
                </div><!--video_banner_single-->
            </div>
        </div>
    </div>
</div><!--video_banner-->



<div class="video_content">
    <div class="container">
		<div class="row">
			<div class="col-xs-12">
				<div class="pp_top_section">
					<h2>Congratulations!</h2>
					<p>You have finished recording. Please check over all the videos and click ACCEPT ALL VIDEOS when you are ready to proceed to the next step.</p>
				</div>
			</div>
		</div>
        <div class="row">
            <div class="col-xs-12">
                <div class="rc_tittle_section">
                    <div class="rc_tittle">All Videos</div>
                </div><!--end rc_tittle_section-->
            </div>
        </div>
        <div class="row">
            @if($status == 1)
            <video-recorder
                            warmup = true
                            upload_url="{{ route('editvideo.store') }}"
                            chunk='@json($chunk)'
                            stid='@json($stid)'
                            question='@json($currentQuestion)'
                           >                               
            </video-recorder>
            @else
             <video-recorder
                            warmup = false
                            upload_url="{{ route('editvideo.store') }}"
                            chunk='@json($chunk)'
                            stid='@json($stid)'
                            question='@json($currentQuestion)'
                           >
                               
            </video-recorder>
            @endif

        </div>
        
    </div>
    
</div><!--video_content-->



@endsection

@section('scripts')
    <script src="{{ asset('js/app.js') }}"></script>
    <script type="text/javascript">
$('#same_plan').on('click',function(e){
    
window.location.href="/same_plan"
});
    </script>
@endsection
