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
                    <div class="rc_tittle">All Video</div>
                </div><!--end rc_tittle_section-->
            </div>
        </div>

       @php
          $story_video = $story['video'];
          $story_id = $story['id'];
          
          $videos_data = [];


       @endphp


        <div class="row">
            @foreach ($warmups as $warmup)
               
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="single_video_thm">
                        <div class="video_thm_top">
                            <div class="text-overlay">
                               @php
                                  $warmup_data = App\Models\Warmup::find($warmup['warmup_id']);
                                  
                                  $video_data = ['question_id' => $warmup['warmup_id'],
                                                 'video' => $warmup['video'],
                                                ];
                                  array_push($videos_data,$video_data );
                               
                               @endphp
                                <p>{{ $warmup_data['title']}}</p>
                            </div>
                            <div class="embed-responsive embed-responsive-16by9">
                                <video poster="{{ URL::to('/') }}/storage/" width="100%" height="100%" controls controlsList="nodownload">
                                    <source src="{{ URL::to('/') }}/storage/{{ $warmup['video'] }}" type="video/mp4">
                                </video>
                            </div>
                        </div><!--video_thm_top-->
                        <div class="video_thm_button_group">
                            <div class="recorder_review_button">
                                                               <a href="{{route('create-your-story.edit_warmup.show',['id'=>$warmup['warmup_id'],'story_id'=> encrypt($warmup['story_id'])])}}" class="btn_re-record btn_re-record_finish">Re-Record </a>

                            </div><!--recorder_review_button-->
                        </div><!--video_thm_button_group-->
                        <div class="video_qs_thm">
                            <h3>{{ $warmup_data['title']}}</h3>
                        </div><!--video_qs_thm-->
                    </div><!--single_video_thm-->
                </div>
            @endforeach
            @foreach ($questions as $question)
               
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="single_video_thm">
                        <div class="video_thm_top">
                            <div class="text-overlay">
                               @php
                                  $question_data = App\Models\Question::find($question['question_id']);

                                  $video_data = ['question_id2' => $question['question_id'],
                                                 'video' => $question['video'],
                                                ];
                                  array_push($videos_data,$video_data );

                               @endphp
                                <p>{{ $question_data['title'] }}</p>
                            </div>
                            <div class="embed-responsive embed-responsive-16by9">
                                <video poster="{{ URL::to('/') }}/storage/" width="100%" height="100%" controls controlsList="nodownload">
                                    <source src="{{ URL::to('/') }}/storage/{{ $question['video'] }}" type="video/mp4">
                                </video>
                            </div>
                        </div><!--video_thm_top-->
                        <div class="video_thm_button_group">
                            <div class="recorder_review_button">
                                                                <a href="{{route('create-your-story.edit_question.show',['id'=> $question['question_id'],'story_id'=> encrypt($question['story_id'])])}}" class="btn_re-record btn_re-record_finish">Re-Record </a>

                            </div><!--recorder_review_button-->
                        </div><!--video_thm_button_group-->
                        <div class="video_qs_thm">
                            <h3>{{ $question_data['title'] }}</h3>
                        </div><!--video_qs_thm-->
                    </div><!--single_video_thm-->
                </div>
            @endforeach

        </div>

        <div class="row">
            <div class="col-xs-12 padding_cs_1">
                <div class="step_bottom_section">
                    <div class="step_next">      

                      <button type="button" name="" id="update_story" class="step_next_btn">Update Story</button>   
                    </div><!--step_next-->
                </div><!--step_bottom_section-->
            </div>
        </div>
        
    </div>
    
</div><!--video_content-->



@endsection

@section('scripts')
    <script src="{{ asset('js/app.js') }}"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script type="text/javascript">
$('#same_plan').on('click',function(e){
    
window.location.href="/same_plan"
});

let data = <?php echo json_encode($videos_data); ?>;
let story = <?php echo json_encode($story_video); ?>;
let story_id = <?php echo json_encode($story_id); ?>;


$('#update_story').on('click',function(e){
    e.preventDefault();
    // console.log(data);
  $('#preloader2').css("display", "block");

        $.ajax({
            type: 'POST',
             url: "{{ route('update_story') }}",
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: {data:data,
                   story:story,
                   story_id:story_id},
            success: function(response)
            {
         $('#preloader2').css("display", "none");

                if (response.success == true)
                {
                   Swal.fire(response.msg);

                   setTimeout( function(){
                        location.href = "{{ route('profile') }}";
                    }, 3000);                  
                }
                else{
                    alert('Oops Something Went Wrong');
                }
           }
       });
});
    </script>
@endsection
