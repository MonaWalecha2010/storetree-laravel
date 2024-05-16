<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M86FHBBCF1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-M86FHBBCF1');
        </script>

        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WG4N4XKN');</script>
        <!-- End Google Tag Manager -->

        <meta name="google-site-verification" content="r0zervLy3fHfFt9sqVn53da83tPc2HYcYMIZjj3CRPk" />
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        @yield('title')
        <link rel="icon" type="image/x-icon" href="{{ asset('images/favicon.png')}}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/frontend/owl.carousel.css') }}"/>
        <link rel="stylesheet" type="text/css" href="{{ asset('css/frontend/chosen.css') }}"/>
        <link rel="stylesheet" type="text/css" href="{{ asset('css/frontend/jquery-ui.css') }}"/>
        {{-- <link rel="stylesheet" type="text/css" href="{{ asset('css/frontend/jquery.mCustomScrollbar.css') }}"/> --}}
        <link rel="stylesheet" type="text/css" href="{{ asset('css/backend/plugins/datepicker/datepicker3.css') }}"/>
        <link rel="stylesheet" type="text/css" href="{{ asset('css/backend/plugins/timepicker/bootstrap-timepicker.min.css') }}"/>
        <link rel="stylesheet" type="text/css" href="{{ asset('css/frontend/bootstrap.min.css') }}"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" integrity="sha512-vKMx8UnXk60zUwyUnUPM3HbQo8QfmNx7+ltw8Pm5zLusl1XIfwcxo8DbWCqMGKaWeNxWA8yrx5v3SaVpMvR3CA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Pacifico:wght@100;200;300;400;500;600;700;800;900&display=swap">

        <link rel="stylesheet" type="text/css" href="{{ asset('css/frontend/style.css?') }}{{rand(99,999)}}"/>
        <link rel="stylesheet" type="text/css" href="{{ asset('css/frontend/custom.css') }}"/>
        <style>
                .ui-state-default, .ui-widget-content .ui-state-default{
                    color: #222222 !important;
                }
                .ui-state-active, .ui-widget-content .ui-state-active{
                    color: #23527c !important;
                }
                 #preloader{
                    background:#fafbfe url('{{ URL::to('/') }}/images/frontend/loader.gif') no-repeat center center;
                    height:100vh;
                    width:100%;
                    position:fixed;
                    z-index:1200;
                }

                #preloader2 {
                    background:#fff ;
                    height: 100vh;
                    width: 100%;
                    position: fixed;
                    z-index: 1200;
                    display: none;
                 }

                .loader_logo_image2 {
                    height: 550px;
                    width: 550px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1300;
                    bottom: 0;
                    right: 0;
                    margin: auto;
                    background: url('{{ URL::to('/') }}/images/frontend/video.gif') no-repeat center center;
                    background-size: 350px 350px;
                }

 
                .waviy {
                  position: relative;
                  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0,0,0,.1));
                  font-size: 50px;
                }
                .waviy span {
                   font-family: "Pacifico", sans-serif;
                  position: relative;
                  display: inline-block;
                  color: #243e8f;
                  animation: waviy 1s infinite;
                  animation-delay: calc(.1s * var(--i));
                  
                }
                @keyframes waviy {
                  0%,40%,100% {
                    transform: translateY(0)
                  }
                  20% {
                    transform: translateY(-20px)
                  }
                }


                .loader2_text {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
/*                    top:72%;*/
                    transform: translate(-50%, 0);
                }


                .loader2_text h1 {
                  color: #243e8f;
                  font-family: "Pacifico", sans-serif;
                    text-align: center;
                }

        </style>
        @yield('header')
    </head>
    <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WG4N4XKN"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        
        @if(Request::url() !== 'https://storeetree.com/family-trees' && Request::url() !== 'https://storeetree.com/family-tree' )
            <div id="preloader"></div>
        @endif


                <div id="preloader2">
                    <div class="loader_logo_image2"></div>
                    <div class="loader2_text">
                    <h1>Memories in the Making</h1>
                    <div class="waviy">
                        <span style="--i:1">P</span>
                        <span style="--i:2">l</span>
                        <span style="--i:3">e</span>
                        <span style="--i:4">a</span>
                        <span style="--i:5">s</span>
                        <span style="--i:6">e</span>
                        <span style="--i:7"></span>
                        <span style="--i:8">W</span>
                        <span style="--i:9">a</span>
                        <span style="--i:10">i</span>
                        <span style="--i:11">t</span>
                        <span style="--i:12">.</span>
                        <span style="--i:13">.</span>
                        <span style="--i:14">.</span>
                        <span style="--i:15">.</span>
                    </div>
                    </div>
                </div>

                

        <div class="modal fade modal-vcenter signIn_commonn" id="termsModal" role="dialog">
            <div class="modal-dialssog modal-lg" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>

                    <div class="modal-body">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="modal_tittle">
                                    <h2>Terms and condition</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <p>Thanks for checking us out. The idea for StoreeTree started 30 years ago when I took a VHS video camera to
interview my 93 year old Grandmother. She lived an amazing life – born in Europe, fled with her
husband and 18 month old son to the USA at the start of WWll to live the American Dream. And, with
lots of hard work, they DID.</p>

                            <p>She was a unique, spunky, great lady. I remember, every time I saw her I would first ask – how are you
Grandma? She always answered the same: “Of course I am fine – I have a roof over my head, I eat 3
meals a day, and the people I love, still remember me.”</p>
                            <p>There is a beautiful simplicity to this. Something I could not pass down to my kids and future grandkids
in my words – it needed to be her words, her voice and her facial expressions. So that day I recorded
answers to my questions for future generations to enjoy.</p>

                            <p>My dream to pass this opportunity of saving life memories to share with family friends and generations
to come, fueled me to create StoreeTree.</p>
                            <p>StoreeTree is an awesome step by step video platform to capture and share your amazing life memories
and stories. We’re passionate about connecting families, friends and generations to come – your stories
in your words, voice and tone. We believe heritage grounds us and at StoreeTree, MEMORIES LIVE
HERE! Join now and start sharing your story today.</p>
                             <p> That&apos;s my story!</p>
                             <p>Glenn Schischa, Founder of StoreeTree </p>
                            
                            </div>
                        </div>
                       

                    </div>

                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="header">
                <div class="header_bottom">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="nav_section">
                                    <div class="navbar navbar-default navbar-static-top">
                                        <div class="navbar-header">
                                            <button type="button" class="navbar-toggle collapsed hidden-xs" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">

                                            </button>
                                            <div class="logo">
                                                <a href="{{ route('home') }}">
                                                    <img src="{{ URL::to('/') }}/images/frontend/new_logo_1.png" alt="Logo" />
                                                </a>
                                            </div>
                                            <div class="mobile_menu hidden-lg hidden-md"><a href="#" id="menu__opener"></a></div>
                                            @if(Auth::user())
                                            <div class="view_link_mb hidden-lg hidden-md"><a href="{{ route('view-story') }}">View Story</a></div>
                                            @endif
                                        </div>

                                        <div id="navbar" class="navbar-collapse collapse hideen_nav hidden-sm">
                                            <ul class="nav navbar-nav">
                                                <li><a href="{{ route('create-your-story.step-1') }}">Create Your Story</a></li>
                                                <li><a href="{{ route('about-us') }}">About Us</a></li>
                                                <li><a href="{{ route('blogs.index') }}">Blog</a></li>
                                                <li><a href="{{ route('faqs') }}">FAQ</a></li>
                                                <li><a href="{{ route('contact-us') }}">Contact</a></li>
                                            </ul> 
                                            <ul class="nav navbar-nav navbar-right">
                                                @if($authuser??'')
                                                <li><a href="{{ route('logout') }}">Logout</a></li>
                                                <li><a href="{{ route('profile') }}">Profile</a></li>
                                                @if(Request::route()->uri() == 'profile')
                                                       <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Settings
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="{{route('view.update_password')}}">Update Password</a></li>
    <li><a class="dropdown-item" href="{{route('view.delete_account')}}">Delete Account</a></li>
    <li><a class="dropdown-item" href="{{route('view.delete_videos')}}">Delete Videos</a></li>
  </ul>
</div>
                                                @endif
                                                @else
                                                <li><a href="#" data-toggle="modal" data-target="#signin-modal">Login</a></li>
                                                <li><a href="#" data-toggle="modal" data-target="#sign-up">Sign Up</a></li>
                                                @endif
                                                <li class="storee_link"><a href="{{ route('view-story') }}">View Story</a></li>
                                               

                                            </ul> 
                                        </div>   
                                    </div>
                                </div><!--nav_section-->
                            </div>
                        </div>
                    </div>
                </div><!-- end header_bottom-->
            </div>

            <div id="app">
                @yield('content')
            </div>

            <div class="footer">
                <div class="footer_top">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-3 col-md-4">
                                <div class="ftr_logo"><a href="{{ route('home') }}"><img src="{{ URL::to('/') }}/images/frontend/new_logo_1.png" alt="Logo" /></a></div>
                            </div>
                            <div class="col-xs-12 col-sm-3 col-md-3">
                                <div class="ftr_common">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li><a href="{{ route('home') }}">Home</a></li>
                                        <li><a href="{{ route('about-us') }}">About Us</a></li>
                                        <li><a href="{{ route('create-your-story.step-1') }}">Create Your Story</a></li>
                                        <li><a href="{{ route('blogs.index') }}">Blog</a></li>
                                    </ul>
                                </div><!--ftr_common-->
                            </div>
                            <div class="col-xs-12 col-sm-3 col-md-3">
                                <div class="ftr_common">
                                    <h3>Support</h3>
                                    <ul>
                                        <li><a href="{{ route('faqs') }}">FAQ</a></li>
                                        <li><a href="{{ route('contact-us') }}">Contact</a></li>
                                        <li><a href="{{ route('story.pay_terms_conditions') }}">Terms & Conditions</a></li>
                                    </ul>
                                </div><!--ftr_common-->
                            </div>
                            <div class="col-xs-12 col-sm-3 col-md-2">
                                <div class="ftr_common">
                                    <h3>Follow  Us</h3>
                                    <ul class="social_link">
                                        <li><a href="#"><img src="{{ URL::to('/') }}/images/frontend/social_link_1.png" alt="" /></a></li>
                                        <li><a href="#"><img src="{{ URL::to('/') }}/images/frontend/social_link_2.png" alt="" /></a></li>
                                        <li><a href="#"><img src="{{ URL::to('/') }}/images/frontend/social_link_3.png" alt="" /></a></li>
                                        <li><a href="#"><img src="{{ URL::to('/') }}/images/frontend/social_link_4.png" alt="" /></a></li>
                                    </ul>
                                </div><!--ftr_common-->
                            </div>
                        </div>
                    </div>
                </div><!--footer_top-->
                <div class="footer_bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <p>Copyright © {{ \Carbon\Carbon::now()->year }} StoreeTree.com. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div><!--footer_bottom-->
            </div><!--footer-->
        </div>

        <div class="sidebar_content hidden" id="sidebar_content">
            <div class="menu-overlay"></div>
            <div class="sidebar_content">
                <a href="#" id="sidebar_hide"></a>
                <div class="sidebar_content_inner">
                    <div class="panner_top normalLogin">
                        <div class="logo">
                            <a href="{{ route('home') }}"><img src="{{ URL::to('/') }}/images/frontend/new_logo_1.png" alt="Logo" /></a>
                        </div>

                    </div><!--normalLogin-->
                    <div class="mobile_menu_section">
                        <div id="navbar" class="navbar-collapse">
                            <ul class="nav navbar-nav">
                                <li><a href="{{ route('create-your-story.step-1') }}">Create your story</a></li>
                                <li><a href="{{ route('about-us') }}">About Us</a></li>
                                <li><a href="{{ route('blogs.index') }}">Blog</a></li>
                                <li><a href="{{ route('faqs') }}">FAQ</a></li>
                                <li><a href="{{ route('contact-us') }}">Contact</a></li>
                                @if($authuser??'')
                                <li><a href="{{ route('logout') }}">Logout</a></li>
                                <li><a href="{{ route('profile') }}">Profile</a></li>
                                @else
                                <li><a href="#" data-toggle="modal" data-target="#signin-modal">Login</a></li>
                                <li><a href="#" data-toggle="modal" data-target="#sign-up">Sign Up</a></li>
                                @endif
                                 <li class="storee_link"><a href="{{ route('view-story') }}">View Story</a></li>
                            </ul> 
                        </div>  
                    </div>
                </div><!--sidebar_content_inner-->
            </div><!--sidebar_content-->
        </div><!--sidebar_content-->

        <div class="modal fade modal-vcenter signIn_common" id="sign-up" role="dialog" style="padding: 0 !important;">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <button type="button" class="close modalFormClose" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="modal_tittle">
                                    <h2>SIGN UP</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="modal-block">
                                    <div class="modal-form">
                                        {!! Form::open(['id'=>'registrationForm']) !!}
                                        <div class="form-group">
                                            {!! Form::text('first_name', null, ['class'=>'form-control', 'placeholder' => 'First Name', 'id'=>'first_name']) !!}
                                        </div><!--form-group-->

                                        <div class="form-group">
                                            {!! Form::text('last_name', null, ['class'=>'form-control', 'placeholder' => 'Last Name', 'id'=>'last_name']) !!}
                                        </div><!--form-group-->

                                        <div class="form-group">
                                            <div class="form_select_common select_common">
                                                <select class="option-select" name="gender" id="gender">
                                                    <option value="">--Select Gender--</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other not identified here">Other Not Identified</option>
                                                    <option value="Prefer not to answer">Prefer to Not Answer</option>
                                                </select>
                                            </div>
                                        </div><!--form-group-->

                                        <div class="form-group">
                                            <div class="form_select_common select_common">
                                            {{--   
                                                {!! Form::select('country_id', [''=>'Choose a Country']+$countries->pluck('title', 'id')->all(), null, ['class'=>'option-select', 'id'=>'country_id']) !!}
                                            --}}
                                                <select class="option-select" id="country_id" name="country_id">
                                                    <option  value="">Choose a Country</option>
                                                    @php $desiredUser = App\Models\Country::where('title', 'United States')->first(); @endphp

                                                    <option  value="{{$desiredUser->id}}">{{$desiredUser->title}}</option>
                                            @php($countryList=App\Models\Country::where('title', '!=', 'United States')->orderBy('title')->get())
                                                @foreach($countryList as $key=>$countryInfo)
                                                    <option  value="{{$countryInfo->id}}">{{$countryInfo->title}}</option>
                                                @endforeach
                                                </select>
                                            </div>
                                        </div><!--form-group-->
                                        <div class="form-group">
                                            {!! Form::text('postal_code', null, ['class'=>'form-control', 'placeholder' => 'Zip code / Postal Code', 'id'=>'postal_code']) !!}
                                        </div><!--form-group-->
                                        <!-- <div class="form-group bootstrap-timepicker">
                                            {!! Form::text('dob', null, ['class'=>'datepicker form-control dob_input', 'id' => 'dob', 'placeholder' => 'Date Of Birth (MM/DD/YYYY)', 'autocomplete' => 'off']) !!}
                                        </div> -->


                                        <div class="form-group">
                                            <div class="cn_group dob_block">
                                                <div class="cn_label">Date Of Birth</div>
                                                <div class="form_select_common select_common dob_flex">
                                                {!! Form::selectRange('day', 01, 31, null, ['class' => 'form-control', 'placeholder' => 'Day']) !!}
                                                {!! Form::selectMonth('month', null, ['class' => 'form-control', 'placeholder' => 'Month']) !!}
                                                {!! Form::selectRange('year', date('Y') - 100, date('Y'), null, ['class' => 'form-control', 'placeholder' => 'Year', 'max' => date('Y')]) !!}
                                            </div>
                                            </div>
                                        </div>



                                        <!--form-group-->
                                        <div class="form-group">
                                            <div class="cn_group">
                                                <div class="cn_label">Most connected period to your Childhood :</div>
                                                <div class="form_select_common select_common">
                                                    {!! Form::select('connected_period', [''=>'Which Decade?']+Config::get('constants.CONNECTED_PERIODS'), null, ['class'=>'option-select', 'id'=>'connected_period']) !!}
                                                </div>
                                            </div>
                                        </div><!--form-group-->
                                        <div class="form-group">
                                            {!! Form::text('email', null, ['class'=>'form-control', 'placeholder' => 'Email', 'id'=>'email']) !!}
                                        </div><!--form-group-->

                                        <div class="form-group">
                                            {!! Form::password('password', ['class'=>'form-control', 'placeholder' => 'Password', 'id'=>'password']) !!}
                                        </div><!--form-group-->
                                        <div class="form-group">
                                            {!! Form::password('password_confirmation', ['class'=>'form-control', 'placeholder' => 'Confirm Password', 'id'=>'password_confirmation']) !!}
                                        </div><!--form-group-->

                                        <div class="form-group">
                                            <div class="av_check">
                                                <input name="terms" id="ct1_3" type="checkbox">
                                                <label for="ct1_3">I Agree with <a href="#" data-toggle="modal" data-target="#termsModal" data-dismiss="modal">Terms & Conditions</a>.</label>
                                                {{-- <a onclick="companyStoryModal()" href="#"    >Read More</a> --}}
                                            </div>
                                        </div><!--form-group-->
                                        <div class="form-group">
                                            <input type="button" onclick="checkRegistrationValid()" class="btn btn-primary btn_signup" value="SIGN UP">
                                        </div><!--form-group-->
                                        {!! Form::close() !!}
                                    </div><!--end modal-left-->
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="mdl_footer">
                                    <h3>Already have an account? <a href="#" id="close_signup" data-toggle="modal" data-target="#signin-modal" data-dismiss="modal" class="modalFormClose">Sign In</a></h3>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <!--sign up modal end -->


        <!--sign in modal start-->

        <div class="modal fade modal-vcenter signIn_common" id="signin-modal" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <button type="button" class="close modalFormClose" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>

                    <div class="modal-body">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="modal_tittle">
                                    <h2>Login</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="modal-block">
                                    <div class="modal-form">
                                        {!! Form::open(['method'=>'POST', 'action'=>'Auth\LoginController@login', 'onsubmit'=>'return checkLoginValid()', 'id' => 'loginForm']) !!}

                                        <div class="form-group">
                                            {!! Form::text('email', null, ['class'=>'form-control', 'placeholder' => 'Email', 'id'=>'email']) !!}
                                        </div><!--form-group-->

                                        <div class="form-group">
                                            {!! Form::password('password', ['class'=>'form-control', 'placeholder' => 'Password', 'id'=>'password']) !!}
                                        </div><!--form-group-->

                                        <div class="form-group">
                                            <div class="av_check">
                                                {{-- <h4><a href="/password/reset" data-toggle="modal" data-target="#forgot-password" data-dismiss="modal" class="modalFormClose">Forgot Password ?</a></h4> --}}
                                                <h4><a href="/password/reset" class="modalFormClose">Forgot Password ?</a></h4>
                                            </div>
                                        </div><!--form-group-->
                                        <div class="form-group">
                                            <input type="submit" class="btn btn-primary btn_signup" value="LOGIN">
                                        </div><!--form-group-->

                                        {!! Form::close() !!}
                                    </div><!--end modal-left-->
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="mdl_footer">
                                    <h3>Dont have an account? <a href="#" id="close_signin" data-toggle="modal" data-target="#sign-up" data-dismiss="modal" class="modalFormClose">Sign Up</a></h3>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
        <!--sign in modal end -->


        <div class="modal fade modal-vcenter signIn_common" id="forgot-password" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>

                    <div class="modal-body">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="modal_tittle">
                                    <h2>FORGOT PASSWORD?</h2>
                                    <h3>Enter your email address and we will send you a link to reset your password.</h3>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">

                                <div class="modal-block">
                                    <div class="modal-form">
                                        {{-- <form action="" method="post">    --}}
                                            <form action="password/email" method="post">  
                                                @csrf 
                                            <div class="form-group">
                                                {!! Form::text('email', null, ['class'=>'form-control', 'placeholder' => 'Email', 'id'=>'eemail']) !!}
                                            </div><!--form-group-->                                           

                                            <div class="form-group">
                                                <button type="submit">submit</button>
                                                {{-- <input type="button" class="btn btn-primary btn_forgetPass" value="EMAIL RESET LINK"> --}}
                                            </div><!--form-group-->

                                            {!! Form::close() !!}
                                            {{-- <div class="or">OR Login With</div> --}}
                                    </div><!--end modal-left-->

                                    {{-- <div class="modal-social_login">
                                        <ul>
                                            <li><a href="#"><img src="{{ URL::to('/') }}/images/frontend/sn_fb.png" alt="" /></a></li>
                                            <li><a href="#"><img src="{{ URL::to('/') }}/images/frontend/cn_google.png" alt="" /></a></li>
                                        </ul>
                                    </div><!--end social_login--> --}}
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12">
                                <div class="mdl_footer">
                                    <h3>Not Registered <a href="#" data-toggle="modal" data-target="#sign-up" data-dismiss="modal" class="modalFormClose">Create a new account</a></h3>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <!--forgot password modal end -->

        @include('sweetalert::alert')
        <script type="text/javascript" src="{{ asset('js/frontend/jquery.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('js/frontend/jquery-ui.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('js/frontend/owl.carousel.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('js/frontend/chosen.jquery.js') }}"></script>
        <script type="text/javascript" src="{{ asset('js/backend/plugins/datepicker/bootstrap-datepicker.js') }}"></script>
        <script type="text/javascript" src="{{ asset('js/frontend/bootstrap.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('js/backend/plugins/timepicker/bootstrap-timepicker.min.js') }}"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" integrity="sha512-VEd+nq25CkR676O+pLBnDW09R7VQX9Mdiij052gVCp5yVH3jGtH70Ho/UUv4mJDsEdTvqRCFZg0NKGiojGnUCw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script type="text/javascript" src="{{ asset('js/frontend/grids.js') }}"></script>
        <script type="text/javascript" src="{{ asset('js/frontend/masonry.pkgd.js') }}"></script>
        {{-- <script type="text/javascript" src="{{ asset('js/frontend/jquery.mCustomScrollbar.concat.min.js') }}"></script> --}}
        <script type="text/javascript" src="{{ asset('js/frontend/slick.js') }}"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.24/webcam.js?hsj2"></script>
        <script type="text/javascript" src="{{ asset('js/frontend/custom.js') }}"></script>
        <script type="text/javascript">
         // prevent form submit hitting enter
            $(document).ready(function() {

                $('#preloader').hide();
 
    
            $('#expiration_inp').on('input',function(e){
              e.preventDefault();
              allowedkeyCode = [8,37,39,46];
              date_val = $("#expiration_inp").val();

              $("#expiration_inp").keydown(function(event) {
                    if (!allowedkeyCode.includes(event.keyCode)) {
                        if (event.key.match(/[a-zA-Z]/) || event.which < 48 || event.which > 57) {
                                    event.preventDefault();
                        }
                        if(date_val.length == 2 ){
                            $("#expiration_inp").val(date_val+'/');
                        }
                    }
               });
                        final_val = $("#expiration_inp").val();

               if(date_val.length > 2 ){
                    final_val = $("#expiration_inp").val();
                   if(!final_val.includes('/')){
                        newString = final_val.slice(0, 2)
                        + '/' + final_val.slice(2);
                        $("#expiration_inp").val(newString);
                   }
                }
            });
       




                $(window).keydown(function(event){
                    if(event.keyCode == 13) {
                    event.preventDefault();
                    return false;
                    }
                });
            });

            $('#promocode_apply_btn').on('click',function(e){
                e.preventDefault();
                                $('.pay_form_body').show(); 

                $('#price_value').val();
                var original_price = $('#original_price').val();
                var form_data = new FormData($("#promocode_apply_form")[0]);
                $.ajax({
                    type: "POST",
                    data: form_data,
                    processData: false,
                    contentType: false,
                    url: "{{ route('promocode-apply') }}",
                    success: function (response) {
                        console.log(response);
                        if(response.success == true){
                            $('#promo_msg').html('<small class="text-success">'+response.message+'</small><br><p class="text-primary"> Congratulations, You Got <strong>'+response.discount_percent+'%</strong> Discount</p>')

                                    <?php if (isset($addon_charges)): ?>
                                        
                                             <?php if ($addon_charges != 0): ?>
                                                   $('#price_section2').html('<strong><del>$'+original_price+'</del></strong><br><strong><span class="text-success">$'+response.discount+'</strong>')
                                           
                                            <?php else: ?>
                                                                $('#price_section').html('<strong><del>$'+original_price+'</del></strong><br><strong><span class="text-success">$'+response.discount+'</strong>')
                                        
                                            <?php endif ?>                                    
                                    <?php endif ?>

                            $('#price_value').attr("value",response.discount);
                             if(response.discount == 0){
                                $('.pay_form_body').hide();
                            $("#charity").val("Equal Amounts To All Charities Above");
                            $("input[name='owner']").val($("#user_name").val());
                            $("input[name='cardNumber']").val('5555555555554444');

                                const currentDate = new Date();
                                const futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 6, 1);
                                const formattedFutureDate = `${(futureDate.getMonth() + 1).toString().padStart(2, '0')}/${futureDate.getFullYear()}`;

                            $("input[name='expiration']").val(formattedFutureDate);
                            $("input[name='cvv']").val('876');
                            $("input[name='accept_terms']").prop("checked", true)

                             }
                             else{
                                $('.pay_form_body').show(); 
                                $("input[name='owner']").val('');
                                $("input[name='cardNumber']").val('');
                                $("input[name='expiration']").val('');
                                $("input[name='cvv']").val('');

                             }

                            $('#catch_promo_id').val(response.promocode_id);
                        }
                        else{
                            $('#price_section').html('<strong>$'+original_price+'<strong>')
                             $('#promo_msg').html('<small class="text-danger">'+response.message+'</small>');
                             $('#catch_promo_id').val('');

                             $('#price_value').val(original_price);
                                $('.pay_form_body').show(); 

                             $("input[name='owner']").val('');
                            $("input[name='cardNumber']").val('');
                            $("input[name='expiration']").val('');
                            $("input[name='cvv']").val('');

                        }
                       
                    },
                    error: function (data) {
                        $('.form-group span.error').remove();
                        if (data.status == 422) {
                            var errors = data.responseJSON;
                            console.log(errors.errors)
                            // $.each(errors.errors, function (i, error) {
                            //     var el = $(document).find('[name="' + i + '"]');
                            //     el.after($('<span class="error" style="color: red;">' + error[0] + '</span>'));
                            // });
                        }
                    }
                });


    });

            promocode_expire();
                function promocode_expire() {
                $.ajax({
                    type: "POST",
                    processData: false,
                    contentType: false,
                    url: "{{ route('promocode-expire') }}",
                    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    success: function (response) {
                        console.log('promocodes checked');
                    },
                    error: function (data) {                        
                            console.log(errors.errors);                        
                    }
                });
            }
            // var datepicker = $.fn.datepicker.noConflict(); 
            $('#dob').datepicker({
                autoclose: true,
                format: 'mm/dd/yyyy'
            });

            function checkRegistrationValid() {
                var form_data = new FormData($("#registrationForm")[0]);
                $.ajax({
                    type: "POST",
                    data: form_data,
                    processData: false,
                    contentType: false,
                    url: "{{ route('register') }}",
                    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    success: function (response) {
                        $('.form-group span.error').remove();
                        $("#registrationForm")[0].reset();
                        location.reload();
                    },
                    error: function (data) {
                        $('.form-group span.error').remove();
                        if (data.status == 422) {
                            var errors = data.responseJSON;
                            console.log(errors.errors)
                            $.each(errors.errors, function (i, error) {
                                var el = $(document).find('[name="' + i + '"]');
                                el.after($('<span class="error" style="color: red;">' + error[0] + '</span>'));
                            });
                        }
                    }
                });
                return false;
            }

            function checkLoginValid() {
                $('.form-group span.error').remove();
                var form_data = new FormData($("#loginForm")[0]);
                $.ajax({
                    type: "POST",
                    data: form_data,
                    processData: false,
                    contentType: false,
                    url: "{{ route('login') }}",
                    success: function (response) {
                        $('.form-group span.error').remove();
                        if (response.status == 'invalid') {
                            var el = $(document).find('[name="email"]');
                            el.after($('<span class="error" style="color: red;">' + response.errors + '</span>'));
                        } else {
                                if(response.status == 'success'){
                                     if (response.message) {
                                        const customMessage = response.message;
                                        const url = response.redirect+'?message='+encodeURIComponent(customMessage);
                                        window.location.href = url;
                                        }
                                    else{
                                    window.location.replace(response.redirect);
                                    }
                                }
                            // location.reload();
                        }
                    },
                    error: function (data) {
                        $('.form-group span.error').remove();
                        if (data.status == 422) {
                            var errors = data.responseJSON;
                            console.log(errors.errors)
                            $.each(errors.errors, function (i, error) {
                                var el = $(document).find('[name="' + i + '"]');
                                el.after($('<span class="error" style="color: red;">' + error[0] + '</span>'));
                            });
                        }
                    }
                });
                return false;
            }
            jQuery('.modal').on('shown.bs.modal', function (e) {
                // jQuery("html").addClass("modal-open");
            });
            jQuery('.modal').on('hide.bs.modal', function (e) {
                // jQuery("html").removeClass("modal-open");
            });

            $('#close_signup').on('click',function(){
                setTimeout(function(){
                    $('body').addClass('modal-open');
                },500);
            });

            $('#close_signin').on('click',function(){                
                setTimeout(function(){
                    $('body').addClass('modal-open');
                },500);
            });

            $('.modalFormClose').on('click',function(){

                $('.error').remove();
                $('body').attr('style','padding-right: 0 !important;');

                $('#email').val('')
                $('#eemail').val('')
                $('#password').val('')
                $("#registrationForm")[0].reset();
                $('#country_id_chosen .chosen-single span').text('Choose a Country')
                $('#connected_period_chosen .chosen-single span').text('Which Decade?')
                $('#gender_chosen .chosen-single span').text('--Select Gender--')
            });
            // $("#dob").datetimepicker({
                
            // });

            $('#pay_btn').on('click',function(e){
                e.preventDefault();
                $('#preloader2').css("display", "block");

                $('#pay_form').submit();
            });
        </script>
@if(Auth::check())
      

<script type="text/javascript">
        
</script>

@endif

        <script>
// let placeholder = document.getElementById("text43");
// //Stock all of the sentences pieces in an array.
// let words = ["Your Story is Rendering Please wait for a moment", "Your Story is Rendering Please wait for a moment", "Your Story is Rendering Please wait for a moment", "Your Story is Rendering Please wait for a moment"];
// //Initialize the index at the first element of the previously created array.
// let index = 0;
// function type(word){
//     let i = 0;
//     //Set the interval that makes the writing animation.
//     let writing = setInterval(()=>{
//         //Add the letter at the i index of the current word in the placeholder.
//         placeholder.innerHTML += word.charAt(i);
//         i ++;
//         //If the i index reaches the end of the current word, the writing animation interval stops and the deleting animation beggins after a defined time.
//         if(i>=word.length){
//             clearInterval(writing);
//             setTimeout(erase, 1000);
//         }
//     }, 75)

// }

// function erase(){
//   //Set the interval that makes the deleting animation.
//     let deleting = setInterval(() => {
//         //Pop off the last character of the previously written sentence.
//         placeholder.innerHTML = placeholder.innerHTML.slice(0,-1);
//         //If no one single letter remains, the deleting animation interval stops.
//         if(placeholder.innerHTML.length <= 0){
//             clearInterval(deleting);
//             //The index var increases by 1, the writing animation is about to start with the next sentence.
//             index++;
//             //If the index var reaches the end of the sentences array, set his value at 0 to looping from the first sentence of the array.
//             if(index>=words.length){
//                 index = 0;
//             }
//             type(words[index])
//         }
    
        
//     }, 25);

// }

//Start the whole animation.
type(words[index]);
  </script>
        @yield('scripts')
    </body>
</html>
