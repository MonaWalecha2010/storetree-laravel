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
                            <source src="{{ asset(Helper::storagePath($settings->story_fifth_step)) }}" type="video/mp4">
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
                            <li class="active">
                                <div class="process_tick"><span></span></div>
                                <div class="process_info_bl">
                                    <h3>Step 4</h3>
                                </div>
                            </li>
                            <li class="active">
                                <div class="process_tick"><span></span></div>
                                <div class="process_info_bl">
                                    <h3>Step 5</h3>
                                </div>
                            </li>
                            <li class="current">
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
        <div class="row">
            @foreach ($warmups as $warmup)
                @php
                    $story = $storyItems->where('question_id', $warmup->id)->first();
                @endphp
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="single_video_thm">
                        <div class="video_thm_top">
                            <div class="text-overlay">
                                <p>{{ $warmup->title }}</p>
                            </div>
                            <div class="embed-responsive embed-responsive-16by9">
                                <video poster="{{ URL::to('/') }}/storage/" width="100%" height="100%" controls controlsList="nodownload">
                                    <source src="/{{ $story['video'] }}" type="video/mp4">
                                </video>
                            </div>
                        </div><!--video_thm_top-->
                        <div class="video_thm_button_group">
                            <div class="recorder_review_button">
                                <a href="{{ route('create-your-story.step-4.show', $warmup->id) }}" class="btn_re-record btn_re-record_finish">Re-Record</a>
                            </div><!--recorder_review_button-->
                        </div><!--video_thm_button_group-->
                        <div class="video_qs_thm">
                            <h3>{{ $warmup->title }}</h3>
                        </div><!--video_qs_thm-->
                    </div><!--single_video_thm-->
                </div>
            @endforeach
            @foreach ($questions as $question)
                @php
                    $story = $storyItems->where('question_id2', $question->id)->first();
                @endphp
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="single_video_thm">
                        <div class="video_thm_top">
                            <div class="text-overlay">
                                <p>{{ $question->title }}</p>
                            </div>
                            <div class="embed-responsive embed-responsive-16by9">
                                <video poster="{{ URL::to('/') }}/storage/" width="100%" height="100%" controls controlsList="nodownload">
                                    <source src="/{{ $story['video'] }}" type="video/mp4">
                                </video>
                            </div>
                        </div><!--video_thm_top-->
                        <div class="video_thm_button_group">
                            <div class="recorder_review_button">
                                <a href="{{ route('create-your-story.step-5.show', $question->id) }}" class="btn_re-record btn_re-record_finish">Re-Record</a>
                            </div><!--recorder_review_button-->
                        </div><!--video_thm_button_group-->
                        <div class="video_qs_thm">
                            <h3>{{ $question->title }}</h3>
                        </div><!--video_qs_thm-->
                    </div><!--single_video_thm-->
                </div>
            @endforeach

        </div>


        @if(isset($cart['addon_video']))
        <hr>

<div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="single_video_thm">
                        <div class="video_thm_top">
                            <div class="text-overlay">
                                <p>Addon Video</p>
                            </div>
                            <div class="embed-responsive embed-responsive-16by9">
                                <video poster="{{ URL::to('/') }}/storage/" width="100%" height="100%" controls controlsList="nodownload">
                                    <source src="{{ URL::to('/') }}/storage/{{$cart['addon_video']}}" type="video/mp4">
                                </video>
                            </div>
                        </div><!--video_thm_top-->
                        <div class="video_thm_button_group">
                            <div class="recorder_review_button">
                                <a href="" class="btn_re-record btn_re-record_finish">Re-Record</a>
                            </div><!--recorder_review_button-->
                        </div><!--video_thm_button_group-->
                        <div class="video_qs_thm">
                            <h3>Addon Video</h3>
                        </div><!--video_qs_thm-->
                    </div><!--single_video_thm-->
                </div>
        @endif
        <div class="row">
            <div class="col-xs-12 padding_cs_1">
                <div class="step_bottom_section">
                    <div class="step_next">
                        @if(Auth::user()->plan_purchased != null)
                          @if(Session('cart')['plan'] == Auth::user()->plan_purchased)
                              @if(isset($cart['addon_video']))
                              <button type="button" name="" class="step_next_btn" data-toggle="modal" data-target="#addon_popup">Accept All Videos</button>
                              @else
                              <!-- <button type="button" name="" id="same_plan" class="step_next_btn">Accept All Videos </button> -->

                                 @if(Auth::user()->addon != null)
                                         <button type="button" name="" id="same_plan" class="step_next_btn">Accept All Videos </button>
                                  @else
                                         <button type="button" name="" data-toggle="modal" data-target="#addon-modal" data-dismiss="modal" class="modalFormClose step_next_btn">Accept All Videos</button>
                                  @endif
                              @endif
                          @else
                              @if(isset($cart['addon_video']))
                              <button type="button" name="" class="step_next_btn" data-toggle="modal" data-target="#upgrade_popup">Accept All Videos</button>
                              @else
                                  @if(Auth::user()->addon != null)
                                        <button type="button" name="" class="step_next_btn" data-toggle="modal" data-target="#upgrade_popup">Accept All Videos</button>
                                  @else
                                         <button type="button" name="" data-toggle="modal" data-target="#addon-modal" data-dismiss="modal" class="modalFormClose step_next_btn">Accept All Videos</button>
                                  @endif
                              @endif                             
                          @endif
                        @else
                             @if(isset($cart['addon_video']))
                              <button type="button" name="" class="step_next_btn" data-toggle="modal" data-target="#cart_popup">Accept All Videos</button>
                            @else
                            <button type="button" name="" data-toggle="modal" data-target="#addon-modal" data-dismiss="modal" class="modalFormClose step_next_btn">Accept All Videos</button>
                            @endif                        
                        @endif
                    </div><!--step_next-->
                </div><!--step_bottom_section-->
            </div>
        </div>
    </div>
    
</div><!--video_content-->

<!-- Cart Popup -->
<div class="modal fade modal-vcenter modal_cart" id="cart_popup" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
            
            <div class="modal-body">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="cart_top">
                            <h3>Cart</h3>
                            <p>Great Job! as our proprietary software is building your special personalized video, this is a great time to go through Checkout. Please confirm the selected package below and click on to Payment Info </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="cart_table table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h3>{{ $packagePlan['title'] }}</h3>
                                        </td>
                                        <td class="price_col">
                                            <strong>${{ $packagePlan['price'] }}</strong>
                                        </td>
                                    </tr>
                                    @if($addon_charges != 0)
                                    <tr>
                                        <td>Addon Charges</td>
                                        <td >${{number_format($addon_charges,2)}}</td>
                                    </tr>
                                    @endif
                                    
                                </tbody>
                            </table>
                        </div><!--cart_table-->
                    </div>
                </div>
                
                
                <div class="row padding_gap_3">
                    <div class="col-xs-12">
                        <div class="modal_confirm_btn checkout_link"><a href="{{ route('story.pay') }}">Payment Info</a></div>
                    </div>
                    
                </div>

            </div>
            
        </div>
    </div>
</div>

<!-- Addon Popup -->
<div class="modal fade modal-vcenter modal_cart" id="addon_popup" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
            
            <div class="modal-body">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="cart_top">
                            <h3>Cart</h3>
                            <p> Great Job! as our proprietary software is building your special personalized video, this is a great time to go through Checkout. Please confirm the selected package below and click on to Payment Info </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="cart_table table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if($addon_charges != 0)
                                    <tr>
                                        <td>Addon Charges</td>
                                        <td >${{number_format($addon_charges,2)}}</td>
                                    </tr>
                                    @endif
                                    
                                </tbody>
                            </table>
                        </div><!--cart_table-->
                    </div>
                </div>
                
                
                <div class="row padding_gap_3">
                    <div class="col-xs-12">
                        <div class="modal_confirm_btn checkout_link"><a href="{{ route('story.pay_addon') }}">Payment Info</a></div>
                    </div>
                    
                </div>

            </div>
            
        </div>
    </div>
</div>


<!-- Upgrade Popup -->
<div class="modal fade modal-vcenter modal_cart" id="upgrade_popup" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
            
            <div class="modal-body">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="cart_top">
                            <h3>Cart</h3>
                            <p>Great Job! as our proprietary software is building your special personalized video, this is a great time to go through Checkout. Please confirm the selected package below and click on to Payment Info</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="cart_table table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Price</th>
                                        <th>      </th>


                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h3>{{ $packagePlan['title'] }}</h3>
                                        </td>
                                        <td class="price_col">
                                            @if(Auth::user()->plan_purchased == 1)
                                            <tr>
                                        <td>Already Paid</td>
                                        <td>${{config('plans.' . Auth::user()->plan_purchased. '.price')}}</td>
                                        <td><img src="{{asset('public/images/frontend/qs_complete.png')}}"> </td>
                                    </tr>
                                    <tr>
                                        <td>To be Paid</td>
                                        <td>${{number_format(config('plans.' . Session::get('cart')['plan']. '.price') - config('plans.' . Auth::user()->plan_purchased. '.price'), 2, '.', '')}}</td>
                                        <td><img src="{{asset('public/images/frontend/qs_grey_tick.png')}}"> </td>

                                    </tr>
                                    @if($addon_charges != 0)
                                    <tr>
                                        <td>Addon Charges</td>
                                        <td >${{number_format($addon_charges,2)}}</td>
                                        <td><img src="{{asset('public/images/frontend/qs_grey_tick.png')}}"> </td>
                                    </tr>
                                    @endif
                                            @endif

                                            @if(Auth::user()->plan_purchased == 2)
                                             <tr>
                                        <td>Already Paid</td>
                                        <td>${{config('plans.' . Auth::user()->plan_purchased. '.price')}}</td>
                                        <td><img src="{{asset('public/images/frontend/qs_complete.png')}}"> </td>
                                    </tr>
                                    <tr>
                                        <td>To be Paid</td>
                                        <td>${{number_format(config('plans.' . Session::get('cart')['plan']. '.price') - config('plans.' . Auth::user()->plan_purchased. '.price'), 2, '.', '')}}</td>
                                        <td><img src="{{asset('public/images/frontend/qs_grey_tick.png')}}"> </td>

                                    </tr>
                                    @if($addon_charges != 0)
                                    <tr>
                                        <td>Addon Charges</td>
                                        <td >${{number_format($addon_charges,2)}}</td>
                                        <td><img src="{{asset('public/images/frontend/qs_grey_tick.png')}}"> </td>

                                    </tr>
                                    @endif


                                            @endif

                                            @if(Auth::user()->plan_purchased == 3)
                                             <tr>
                                        <td>Already Paid</td>
                                        <td>${{config('plans.' . Auth::user()->plan_purchased. '.price')}}</td>
                                        <td><img src="{{asset('public/images/frontend/qs_complete.png')}}"> </td>
                                    </tr>
                                    <tr>
                                        <td>To be Paid</td>
                                        <td>${{number_format(config('plans.' . Session::get('cart')['plan']. '.price') - config('plans.' . Auth::user()->plan_purchased. '.price'), 2, '.', '')}}</td>
                                        <td><img src="{{asset('public/images/frontend/qs_grey_tick.png')}}"> </td>

                                    </tr>
                                    @if($addon_charges != 0)
                                    <tr>
                                        <td>Addon Charges</td>
                                        <td >${{number_format($addon_charges,2)}}</td>
                                        <td><img src="{{asset('public/images/frontend/qs_grey_tick.png')}}"> </td>

                                    </tr>
                                    @endif
                                            @endif
                                        </td>
                                    </tr>
                                   
                                    
                                </tbody>
                            </table>
                        </div><!--cart_table-->
                    </div>
                </div>
                
                
                <div class="row padding_gap_3">
                    <div class="col-xs-12">
                        <div class="modal_confirm_btn checkout_link"><a href="{{ route('story.pay') }}">Payment Info</a></div>
                    </div>
                    
                </div>

            </div>
            
        </div>
    </div>
</div>



<div class="modal fade modal-vcenter signIn_common" id="addon-modal" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <button type="button" class="close modalFormClose" data-dismiss="modal" aria-label="Close"><span
                    aria-hidden="true"></span></button>

            <div class="modal-body">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="modal_tittle">
                            <h3>Your Story Videos are Recorded</h3>
                            <h2>Optional: ADD ON VIDEO</h2>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="modal-block">
                            <div class="form-group text-center bg-info rounded">

                                <h4>Seize this last opportunity to enhance your profile with the Addon Video feature.</h4>
                                   <h4>Elevate your Profile by incorporating an extra 5-minute video </h4>
                                <h4>at just an additional cost of $5!</h4>
                            </div>
                            <div class="form-group add_on_popup">
                                <button class="btn btn-primary step_next_btn" id="addon_false" data-dismiss="modal" data-toggle="modal" data-target="#cart_popup">Decline</button> 
                                <a class="btn btn-primary step_next_btn" id="addon_true" href="{{route('record_addon')}}">Accept</a>
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
    <script src="{{ asset('js/app.js') }}"></script>
    <script type="text/javascript">
$('#same_plan').on('click',function(e){
    $('#preloader2').css("display", "block");
window.location.href="/same_plan"
});




    </script>
@endsection
