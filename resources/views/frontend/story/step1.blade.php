@extends('frontend.layouts.app')

@section('title')
<title>Storee Tree: Create Your Story - Step 1</title>
<style>

</style>
@endsection

@section('content')



@if(Session::has('error'))
<div class="alert warning">
  <span class="closebtn">&times;</span>  
  <strong>Warning !</strong> {{Session('error')}}
</div>
@endif


<div class="video_banner">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="video_banner_single">
                    <div class="embed-responsive embed-responsive-16by9">
                        <video width="100%" height="100%" controls controlsList="nodownload">
                            <source src="{{ asset(Helper::storagePath($settings->story_first_step)) }}" type="video/mp4">
                        </video>
                    </div>
                </div><!--video_banner_single-->
            </div>
        </div>
    </div>
</div><!--video_banner-->
<!-- <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> -->
<div class="step_section">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="deliver_process_section">

                    <div class="deliver_order_process_dop">
                        <ul>
                            <li class="current">
                                <div class="process_tick"><span></span></div>
                                <div class="process_info_bl">
                                    <h3>Step 1</h3>
                                </div>
                            </li>
                            <li>
                                <div class="process_tick"><span></span></div>
                                <div class="process_info_bl">
                                    <h3>Step 2</h3>
                                </div>
                            </li>
                            <li>
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
    <div class="common_section story_section">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="pp_top_section">
                        <h2>START YOUR STORY NOW </h2>
                      

                        <p>Welcome - STEP ONE is to choose which StoreeTree Package you would like</p>
                    </div>
                </div>
            </div>

            @include('backend.include.error')

            {!! Form::open(['method'=>'POST', 'action'=>'frontend\CreateStoryController@step1Store']) !!}
            <div class="row">
                @if(Auth::check())
                @if(Auth::user()->plan_purchased == null)
                <div class="col-xs-12 col-sm-4 col-md-4">
                    <div class="plan_single_block">
                        <div class="priceblock_top">
                            <h4>Basic</h4>
                            <h2>$19.95</h2>
                            <h3>One Time</h3>
                        </div>
                        <!--priceblock_top-->
                        <div class="plan_dsp">
                            <ul>
                                <li class="active">5 Questions</li>
                                <li>Free "your decade" memories</li>
                                <li class="active">Unlimited Re-recording until you are happy with your videos</li>
                                <li class="active">Free Family Tree Building</li>
                                <li class="active">Unlimited Friend Connections</li>
                            </ul>
                        </div>
                        <!--plan_dsp-->
                        <div class="plan_select_option">
                            <div class="radio_check">
                                <input name="plan" id="plan_1" type="radio" value="1">
                                <label for="plan_1">Select this Plan</label>
                            </div>
                        </div>
                        <!--plan_select_option-->
                    </div>
                    <!--plan_single_block-->
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4">
                    <div class="plan_single_block">
                        <div class="priceblock_top">
                            <h4>Standard</h4>
                            <h2>$27.95</h2>
                            <h3>One Time</h3>
                        </div>
                        <!--priceblock_top-->
                        <div class="plan_dsp">
                            <ul>
                                <li class="active">7 Questions</li>
                                <li class="active">Free "your decade" memories</li>
                                <li class="active">Unlimited Re-recording until you are happy with your videos</li>
                                <li class="active">Free Family Tree Building</li>
                                <li class="active">Unlimited Friend Connections</li>
                            </ul>
                        </div>
                        <!--plan_dsp-->
                        <div class="plan_select_option">
                            <div class="radio_check">
                                <input name="plan" id="plan_2" value="2" type="radio">
                                <label for="plan_2">Select this Plan</label>
                            </div>
                        </div>
                        <!--plan_select_option-->
                    </div>
                    <!--plan_single_block-->
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4">
                    <div class="plan_single_block">
                        <div class="priceblock_top">
                            <h4>Premium</h4>
                            <h2>$29.95</h2>
                            <h3>One Time</h3>
                        </div>
                        <!--priceblock_top-->
                        <div class="plan_dsp">
                            <ul>
                                <li class="active">10 Questions</li>
                                <li class="active">Free "your decade" memories</li>
                                <li class="active">Unlimited Re-recording until you are happy with your videos</li>
                                <li class="active">Free Family Tree Building</li>
                                <li class="active">Unlimited Friend Connections</li>
                            </ul>
                        </div>
                        <!--plan_dsp-->
                        <div class="plan_select_option">
                            <div class="radio_check">
                                <input name="plan" id="plan_3" value="3" type="radio">
                                <label for="plan_3">Select this Plan</label>
                            </div>
                        </div>
                        <!--plan_select_option-->
                    </div>
                    <!--plan_single_block-->
                </div>
                @else
                @if(Auth::user()->plan_purchased == 1)
                <div class="col-xs-12 col-sm-4 col-md-4">
                    <div class="plan_single_block">
                        <div class="priceblock_top">
                            <h4>Basic</h4>
                            <h2>$19.95</h2>
                            <h3>One Time</h3>
                        </div>
                        <!--priceblock_top-->
                        <div class="plan_dsp">
                            <ul>
                                <li class="active">5 Questions</li>
                                <li>Free "your decade" memories</li>
                                <li class="active">Unlimited Re-recording until you are happy with your videos</li>
                                <li class="active">Free Family Tree Building</li>
                                <li class="active">Unlimited Friend Connections</li>
                            </ul>
                        </div>
                        <!--plan_dsp-->
                        <div class="plan_select_option">
                            <div class="radio_check">
                                <input name="plan" id="plan_1" type="radio" value="1">
                                <label for="plan_1">Continue With Basic Plan</label>
                            </div>
                        </div>
                        <!--plan_select_option-->
                    </div>
                    <!--plan_single_block-->
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4">
                    <div class="plan_single_block">
                        <div class="priceblock_top">
                            <h4>Standard</h4>
                            <h2>$27.95</h2>
                            <h3>One Time</h3>
                        </div>
                        <!--priceblock_top-->
                        <div class="plan_dsp">
                            <ul>
                                <li class="active">7 Questions</li>
                                <li class="active">Free "your decade" memories</li>
                                <li class="active">Unlimited Re-recording until you are happy with your videos</li>
                                <li class="active">Free Family Tree Building</li>
                                <li class="active">Unlimited Friend Connections</li>
                            </ul>
                        </div>
                        <!--plan_dsp-->
                        <div class="plan_select_option">
                            <div class="radio_check">
                                <input name="plan" id="plan_2" value="2" type="radio">
                                <label for="plan_2">Upgrade to Standard Plan</label>
                            </div>
                        </div>
                        <!--plan_select_option-->
                    </div>
                    <!--plan_single_block-->
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4">
                    <div class="plan_single_block">
                        <div class="priceblock_top">
                            <h4>Premium</h4>
                            <h2>$29.95</h2>
                            <h3>One Time</h3>
                        </div>
                        <!--priceblock_top-->
                        <div class="plan_dsp">
                            <ul>
                                <li class="active">10 Questions</li>
                                <li class="active">Free "your decade" memories</li>
                                <li class="active">Unlimited Re-recording until you are happy with your videos</li>
                                <li class="active">Free Family Tree Building</li>
                                <li class="active">Unlimited Friend Connections</li>
                            </ul>
                        </div>
                        <!--plan_dsp-->
                        <div class="plan_select_option">
                            <div class="radio_check">
                                <input name="plan" id="plan_3" value="3" type="radio">
                                <label for="plan_3">Upgrade to Premium Plan</label>
                            </div>
                        </div>
                        <!--plan_select_option-->
                    </div>
                    <!--plan_single_block-->
                </div>
                @endif

                @if(Auth::user()->plan_purchased == 2)

                <div class="col-xs-12 col-sm-4 col-md-4">
                    <div class="plan_single_block">
                        <div class="priceblock_top">
                            <h4>Standard</h4>
                            <h2>$27.95</h2>
                            <h3>One Time</h3>
                        </div>
                        <!--priceblock_top-->
                        <div class="plan_dsp">
                            <ul>
                                <li class="active">7 Questions</li>
                                <li class="active">Free "your decade" memories</li>
                                <li class="active">Unlimited Re-recording until you are happy with your videos</li>
                                <li class="active">Free Family Tree Building</li>
                                <li class="active">Unlimited Friend Connections</li>
                            </ul>
                        </div>
                        <!--plan_dsp-->
                        <div class="plan_select_option">
                            <div class="radio_check">
                                <input name="plan" id="plan_2" value="2" type="radio">
                                <label for="plan_2">Continue With Standard Plan</label>
                            </div>
                        </div>
                        <!--plan_select_option-->
                    </div>
                    <!--plan_single_block-->
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4">
                    <div class="plan_single_block">
                        <div class="priceblock_top">
                            <h4>Premium</h4>
                            <h2>$29.95</h2>
                            <h3>One Time</h3>
                        </div>
                        <!--priceblock_top-->
                        <div class="plan_dsp">
                            <ul>
                                <li class="active">10 Questions</li>
                                <li class="active">Free "your decade" memories</li>
                                <li class="active">Unlimited Re-recording until you are happy with your videos</li>
                                <li class="active">Free Family Tree Building</li>
                                <li class="active">Unlimited Friend Connections</li>
                            </ul>
                        </div>
                        <!--plan_dsp-->
                        <div class="plan_select_option">
                            <div class="radio_check">
                                <input name="plan" id="plan_3" value="3" type="radio">
                                <label for="plan_3">Upgrade to Premium Plan</label>
                            </div>
                        </div>
                        <!--plan_select_option-->
                    </div>
                    <!--plan_single_block-->
                </div>
                @endif

                @if(Auth::user()->plan_purchased == 3)

                <div class="col-xs-12 col-sm-4 col-md-4">
                    <div class="plan_single_block">
                        <div class="priceblock_top">
                            <h4>Premium</h4>
                            <h2>$29.95</h2>
                            <h3>One Time</h3>
                        </div>
                        <!--priceblock_top-->
                        <div class="plan_dsp">
                            <ul>
                                <li class="active">10 Questions</li>
                                <li class="active">Free "your decade" memories</li>
                                <li class="active">Unlimited Re-recording until you are happy with your videos</li>
                                <li class="active">Free Family Tree Building</li>
                                <li class="active">Unlimited Friend Connections</li>
                            </ul>
                        </div>
                        <!--plan_dsp-->
                        <div class="plan_select_option">
                            <div class="radio_check">
                                <input name="plan" id="plan_3" value="3" type="radio">
                                <label for="plan_3">Continue with Premium Plan</label>
                            </div>
                        </div>
                        <!--plan_select_option-->
                    </div>
                    <!--plan_single_block-->
                </div>
                @endif
                @endif
                @else
                <div class="col-xs-12 col-sm-4 col-md-4">
                    <div class="plan_single_block">
                        <div class="priceblock_top">
                            <h4>Basic</h4>
                            <h2>$19.95</h2>
                            <h3>One Time</h3>
                        </div>
                        <!--priceblock_top-->
                        <div class="plan_dsp">
                            <ul>
                                <li class="active">5 Questions</li>
                                <li>Free "your decade" memories</li>
                                <li class="active">Unlimited Re-recording until you are happy with your videos</li>
                                <li class="active">Free Family Tree Building</li>
                                <li class="active">Unlimited Friend Connections</li>
                            </ul>
                        </div>
                        <!--plan_dsp-->
                        <div class="plan_select_option">
                            <div class="radio_check">
                                <input name="plan" id="plan_1" type="radio" value="1">
                                <label for="plan_1">Select this Plan</label>
                            </div>
                        </div>
                        <!--plan_select_option-->
                    </div>
                    <!--plan_single_block-->
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4">
                    <div class="plan_single_block">
                        <div class="priceblock_top">
                            <h4>Standard</h4>
                            <h2>$27.95</h2>
                            <h3>One Time</h3>
                        </div>
                        <!--priceblock_top-->
                        <div class="plan_dsp">
                            <ul>
                                <li class="active">7 Questions</li>
                                <li class="active">Free "your decade" memories</li>
                                <li class="active">Unlimited Re-recording until you are happy with your videos</li>
                                <li class="active">Free Family Tree Building</li>
                                <li class="active">Unlimited Friend Connections</li>
                            </ul>
                        </div>
                        <!--plan_dsp-->
                        <div class="plan_select_option">
                            <div class="radio_check">
                                <input name="plan" id="plan_2" value="2" type="radio">
                                <label for="plan_2">Select this Plan</label>
                            </div>
                        </div>
                        <!--plan_select_option-->
                    </div>
                    <!--plan_single_block-->
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4">
                    <div class="plan_single_block">
                        <div class="priceblock_top">
                            <h4>Premium</h4>
                            <h2>$29.95</h2>
                            <h3>One Time</h3>
                        </div>
                        <!--priceblock_top-->
                        <div class="plan_dsp">
                            <ul>
                                <li class="active">10 Questions</li>
                                <li class="active">Free "your decade" memories</li>
                                <li class="active">Unlimited Re-recording until you are happy with your videos</li>
                                <li class="active">Free Family Tree Building</li>
                                <li class="active">Unlimited Friend Connections</li>
                            </ul>
                        </div>
                        <!--plan_dsp-->
                        <div class="plan_select_option">
                            <div class="radio_check">
                                <input name="plan" id="plan_3" value="3" type="radio">
                                <label for="plan_3">Select this Plan</label>
                            </div>
                        </div>
                        <!--plan_select_option-->
                    </div>
                    <!--plan_single_block-->
                </div>
                @endif
            </div>
            <div class="row">
                <div class="col-xs-12 padding_cs_1">
                    <div class="step_bottom_section">
                        <div class="step_next"><button type="submit" style="display: none" >Next</button></div><!--step_next-->
                    </div><!--step_bottom_section-->
                </div>
            </div>
        <input hidden type="text" name="addon" id="newAddon" value="">

            {!! Form::close() !!}
        </div>
    </div><!--common_section-->
</div><!--content-->





@if(Auth::check())
   @if(Auth::user()->addon)
      <input hidden  type="text" name="" id="addon" value="{{Auth::user()->addon}}">
   @else
      <input hidden  type="text" name="" id="addon" value="0">
   @endif
@else
   <input hidden  type="text" name="" id="addon" value="0">
@endif
<!--content-->
<a style="display:none;" id="addon_btn" href="#" data-toggle="modal" data-target="#addon-modal" data-dismiss="modal" class="modalFormClose">d</a>



<div class="modal fade modal-vcenter signIn_common" id="addon-modal" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <button type="button" class="close modalFormClose" data-dismiss="modal" aria-label="Close"><span
                    aria-hidden="true"></span></button>

            <div class="modal-body">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="modal_tittle">
                            <h3>Congratulations! <br>You selected the <span id="plan_name"></span> Package</h3>
                            <h2>Optional: ADD ON VIDEO</h2>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="modal-block">
                            <div class="form-group text-center bg-info rounded">
                                 <h4>Want to tell more of your story?</h4>
                                   <h4>Add an additional 5-minute video to your profile.</h4>
                                <h4>Its only $5 more for 5 minutes!</h4>
                            </div>
                            <div class="form-group add_on_popup">
                                <button class="btn btn-primary btn_signup" id="addon_false">Decline</button> 
                                <button class="btn btn-primary btn_signup" id="addon_true">Accept</button>
                                                           </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="mdl_footer">
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
</div>




@endsection

@section('scripts')
    <script>
		$(window).on("load", function(){
        	// $('input[name="plan"]').change(function(input){
            // 	$('button[type="submit"]')[0].click();
            // });
            $('input[name="plan"]').click(function(input) {
                 var plan_check = $("input[name='plan']:checked").val();

                 if (plan_check == 1) {
                    var plan_name = "Basic";
                 }
                 if (plan_check == 2) {
                    var plan_name = "Standard";
                 }
                 if (plan_check == 3) {
                    var plan_name = "Premium";
                 }

                 $("#plan_name").html('');

                 $("#plan_name").html(plan_name);


                let isAddon = $('#addon').val();

                if (isAddon == 1) {
                    $('#newAddon').val(0);
                    $('button[type="submit"]')[0].click();
                
                } else {
                    $('#addon_btn').click();
                }
            });

             $('#addon_true').click(function(input) {
                $('#newAddon').val(1);
                $('button[type="submit"]')[0].click();

              });
             
            $('#addon_false').click(function(input) {
                $('#newAddon').val(0);
                $('button[type="submit"]')[0].click();

            });
    	});
    </script>

    <script>
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}
</script>

@endsection