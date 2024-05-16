@extends('frontend.layouts.app')

@section('title')
<title>Storee Tree: Home Page</title>
@endsection

@section('content')
<div class="content_area">
    <div class="common_section story_section">
        <div class="container-fluid">
            <div class="row padding_18_top video_show">
                <div class="col-xs-12 col-sm-12 col-md-6 pull-right">
                    <div class="video_single sd_height" style="height: 478px;">
                        <div class="single_photo_block bg_common_1" style="background-image:url({{ URL::to('/') }}/images/frontend/about_passion_4.jpg)"></div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 dark">
                    <div class="story_wrapper sd_height">
                        <div class="story_block">
                            <h1>CREATE YOUR STORY FOR FAMILY, FRIENDS & GENERATIONS TO COME</h1>
                            <ul>
                                <li>Your life in your words - first hand</li>
                                <li>Easy video questions bring your Storee to life</li>
                                <li>Tell us your memories, we make a lasting video for all to enjoy.</li>
                            </ul>
                            <div class="common_btn">
                                <a href="{{ route('create-your-story.step-1') }}">Start Now</a>
                            </div>
                        </div><!--story_block-->
                    </div>
                </div>
            </div>
              <div class="row padding_18_top video_show">
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <div class="single_photo_wrapper sd_height2">
                        <div class="single_photo_block bg_common_1" style="background-image:url({{ URL::to('/') }}/images/frontend/cm_bg_1.jpg)"></div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <div class="story_wrapper sd_height2">
                        <div class="story_block">
                            <h2>View a Story</h2>
                            <ul>
                                <li>See a family & friend's tree</li>
                                <li>Watch their stories</li>
                                <li>Create your own story</li>
                            </ul>
                            <div class="common_btn"><a href="{{ route('view-story') }}">View Story</a></div>
                        </div><!--story_block-->
                    </div><!-- end story_wrapper-->
                </div>
            </div>
            <div class="row padding_18_top video_show">
                <div class="col-xs-12 col-sm-12 col-md-6 pull-right">
                    <div class="single_photo_wrapper sd_height2">
                        <div class="single_photo_block bg_common_1" style="background-image:url({{ URL::to('/') }}/images/frontend/aboutbg.jpg)"></div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 dark">
                    <div class="story_wrapper sd_height2">
                        <div class="story_block">
                            <h2>About Us</h2>
                            <p>StoreeTree is an awesome step by step video platform to capture and share your amazing life memories
and stories. We’re passionate about connecting families, friends and generations to come – your stories
in your words, voice and tone. We believe heritage grounds us and at StoreeTree, MEMORIES LIVE
HERE! <a href="https://storeetree.com/create-your-story/step-1"><u> Join now and start sharing your story today.</u></a></p>

                            <div class="common_btn"><a href="{{ route('about-us') }}">Read More</a></div>
                        </div><!--story_block-->
                    </div>
                </div>
            </div>
        </div>

    </div><!--common_section-->


    @include('frontend.include.blogs')

    <div class="faq_section">
        <div class="container">
             <h2 class="faqs_title">Frequently Asked Questions</h2>
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="photo_faq">
                        <img src="{{ URL::to('/') }}/images/frontend/faq_bg.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="story_block">
                       <p>Here are answers to most common questions. Can't find an answer?</p>
                        <ul>
                            @foreach($faqs as $faq)
                            <li>{{ $faq->title }}</li>
                            @endforeach
                        </ul>
                        <div class="common_btn"><a href="{{ route('faqs') }}">View All</a></div>
                    </div><!--story_block-->
                </div>
            </div>
        </div>
    </div><!--faq_section-->

    <div class="testimonial_section" style="background-image:url({{ URL::to('/') }}/images/frontend/slider_photo.jpg)">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="testimonial_tittle"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <div class="testimonial_slider">
                        <div id="banner-carousel" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner" role="listbox">
                                <div class="item active" > 
                                    <div class="testimonial_wrapper">
                                        <div class="testimonial_single">
                                            <div class="testimonial_content">
                                                <p>Embrace the journey! Everyone wants to live at the top of the mountain, but all the fun and happiness is on the climb!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--testimonial_slider-->
                </div>
            </div>
        </div>
    </div><!--testimonial_section-->

</div><!--content-->

@endsection