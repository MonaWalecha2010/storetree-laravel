@extends('frontend.layouts.app')

@section('title')
<title>Storee Tree: Contact Us</title>
@endsection
@section('header')
<style>
    .contact_section input[type="radio"] {
    display: inline !important;
}
.contact_section input[type="radio"]:hover{
   cursor: pointer;
}
</style>
@endsection

@section('content')
<div class="banner_subpage" style="background-image:url({{ URL::to('/') }}/images/frontend/subpage_bg_1.jpg)">
    <h1>Contact</h1>
</div><!--subpage_banner-->

<div class="content_area cn_gap_top">
    <div class="contact_section">
        <div class="container">
            <div class="col-xs-12 col-sm-8 col-md-8">
                <div class="contact_info_block_sc">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="contact_block_tittle">
                                <h3>Add a Comment</h3>
                            </div>
                        </div>
                    </div>

                    @include('backend.include.error')
                    @include('backend.include.popUpWindow')

                    {!! Form::open(['method'=>'POST', 'action'=>'frontend\ContactUsController@store']) !!}
                    <div class="row">
                    	<div class="col-xs-12">	
                    		<p><span class="text-danger">*</span> - Denotes required field.</p>
                    	</div>
                        <div class="col-xs-12 col-sm-12 col-md-6">
                    		<label for="name">Full Name <span class="text-danger">*</span></label>
                            {!! Form::text('name', null, ['class'=>'form-control', 'placeholder' => 'Full Name', 'id'=>'name']) !!}
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6">
                        	 <label for="phone">Phone Number <span class="text-danger">*</span></label>
                            {!! Form::text('phone', null, ['class'=>'form-control', 'placeholder' => 'Phone Number', 'id'=>'phone']) !!}
                        </div>
                        <div class="col-xs-12">
                        	<label for="email">Email <span class="text-danger">*</span></label>
                            {!! Form::text('email', null, ['class'=>'form-control', 'placeholder' => 'Email', 'id'=>'email']) !!}
                        </div>
                        <div class="col-xs-12">
                           <label for="">Are you signed up for storeetree?</label>  &nbsp;
                            <input type="radio" id="yes_sign_up" name="is_signed_up" value="yes">
                            <label for="yes_sign_up">Yes</label> &nbsp;
                            <input type="radio" id="no_signed_up" name="is_signed_up" value="no">
                            <label for="no_signed_up">No</label><br>
                        </div>
                        <div class="col-xs-12 ">
                            <label for="comment">Comments <span class="text-danger">*</span></label>
                            {!! Form::textarea('comments', null, ['class'=>'form-control form_text_1', 'placeholder' => 'Comments', 'id'=>'comment']) !!}
                        </div>
                        <div class="col-xs-12 btn_contact">
                            <input type="submit" class="submit_btn" value="Submit">
                        </div>
                    </div>
                    {!! Form::close() !!}
                </div>

            </div>
            <div class="col-xs-12 col-sm-4 col-md-4">
                <div class="contact_info_block_sc">
                    <div class="contact_block_tittle">
                        <h3>contact Us</h3>
                    </div>
                    <div class="contact_dt_section">
                        <div class="cn_info_single">
                            <div class="media">
                                <div class="media-left">
                                    <img src="{{ URL::to('/') }}/images/frontend/contact_mailbg.png" alt=""/>
                                </div>
                                <div class="media-body">
                                    <h3>Email</h3>
                                    <p><a href="#">info@storeetree.com</a></p>
                                </div>
                            </div>
                        </div><!--cn_info_single-->
                        <div class="cn_info_single">
                            <div class="media">
                                <div class="media-left">
                                    <img src="{{ URL::to('/') }}/images/frontend/address_bg.png" alt=""/>
                                </div>
                                <div class="media-body">
                                    <h3>Address</h3>
                                    <p>ORLANDO, FL USA</p>
                                </div>
                            </div>
                        </div><!--cn_info_single-->
                    </div>
                </div>
            </div>
        </div>
    </div><!--contact_section-->
</div><!--content-->
@endsection
                
<script src="{{ $cdn ?? asset('vendor/sweetalert/sweetalert.all.js')  }}"></script>
<link rel="stylesheet" href="{{ config('sweetalert.animatecss') }}">
<script src="{{ $cdn ?? asset('vendor/sweetalert/sweetalert.all.js')  }}"></script>

<script type="text/javascript">
	function viewPopUpWindow() {
		Swal.fire('Thank you for your note, we will get back to you shortly');
	}
</script>
                