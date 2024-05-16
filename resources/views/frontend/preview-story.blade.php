@extends('frontend.layouts.app')

@section('header')
    <link href="https://vjs.zencdn.net/7.20.2/video-js.css" rel="stylesheet" />
@endsection

@section('title')
<title>Storee Tree: Create Your Story - Step 4</title>
@endsection

@section('content')
<div class="banner_subpage" style="background-image:url({{ URL::to('/') }}/images/frontend/subpage_bg_1.jpg)">
    <h1>All Storees</h1>
</div><!--subpage_banner-->

<div class="video_content">
        
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="search-bar">
                    <form action="" method="post" id="search_user_form">
                        @csrf
                        <div class="d-flex text-center">
                        <input type="text" name="search" class="" placeholder="Enter Username or Email" id="search_user_field">
                        <input type="submit"  value="Search User" id="search_user_btn">
                        </div>
                        <p id="search_err_msg" class="text-danger"></p>

                    </form>
                    <!-- <p class="scroll_div"> scroll</p>      -->
                    <div class="search_results_1 d-flex">
                        

                         
                    </div>

                </div>
            </div>
        </div>
        <div class="row">
            
            @if(Auth::check())
            @if($story)
            <p></p>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="single_video_thm">
                    <div class="video_thm_top">
                        <div class="embed-responsive embed-responsive-16by9">
                            <video width="100%" height="100%" controls controlsList="nodownload">
                           
                                <source src="{{ URL::to('/') }}/storage/{{ $story['video'] }}">
                            
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6">
                <button  style="float: right; border-radius: 60px;   border: 1px solid #133c7e; box-shadow: none;outline: 0;height: 48px;line-height: 48px;padding: 0px 30px 0px 30px;color: #fff;font-size: 18px;font-weight: 600; text-transform: uppercase;background-color: #133c7e;  margin-right0px;">
                    <a href="{{route('create-your-story.edit_questions',['id'=> encrypt($story['id']) ])}}" style="color: #fff;">
                       Edit Story
                    </a>
                </button>
            </div>
            
            @else
            <div class="alert alert-danger text-center" role="alert">
                <strong>No story found!</strong>
            </div>
            @endif
            @endif

        </div>
    </div>
    
</div><!--video_content-->
@endsection

@section('scripts')
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="https://vjs.zencdn.net/7.20.2/video.min.js"></script>
    <script type="text/javascript">
$('#search_user_btn').on('click', function(e) {
    e.preventDefault();
    let search_value = $('#search_user_field').val();
    if (search_value != '') {
        $(".search_results_1").html(' ');
        $('#search_err_msg').html(' ');
        $.ajax({
            type: "POST",
            data: {
                "_token": "{{ csrf_token() }}",
                search_value: search_value
            },
            url: "{{ route('searchUser') }}",
            success: function(response) {
                if (response.msg == 'Success') {
                    for (const key in response.data) {
                        $(".search_results_1").html(' ');
                        let search_img;
                        if (response.data[key].gender == 'male') {
                                if (response.data[key].photo != null) {
                                         search_img = response.data[key].photo;
                                }
                                else{
                                         search_img = 'https://storeetree.com/images/frontend/photo_male.png';
                                }         
                        }
                        else{
                                if (response.data[key].photo != null) {
                                         search_img = response.data[key].photo;
                                }
                                else{
                                         search_img = 'https://storeetree.com/images/frontend/photo_female.png';
                                } 
                        }

                        var url = "family-tree?id="+response.data[key].id;
                       $(".search_results_1").append("<a href='"+url+"'><div class='search_results d-flex'><div class='searched_user_img'><img src='"+search_img+"'></div><div class='searched_user_data'><p class='text-primary'>" + response.data[key].first_name + " " + response.data[key].last_name + "</p><p class='text-primary'>" + response.data[key].email + "</p></div></div></a>");
                    
                    }
                } else {
        $(".search_results_1").html(' ');
                    
                    $(".search_results_1").append("<p class='text-danger'>" + response.data + "</p>");
                }
            },
            error: function(data) {
                console.log(data);
            }
        });
    } else {
      $(".search_results_1").html(' ');
                    $(".search_results_1").append("<p class='text-danger'>Please Enter a Value</p>");
    }
});


$('#search_user_field').on('input', function(e) {
    e.preventDefault();
    $('#search_err_msg').html(' ');
     $(".search_results_1").html(' ');
    let search_value = $('#search_user_field').val();
    if (search_value != '') {
        $(".search_results_1").html(' ');
        $.ajax({
            type: "POST",
            data: {
                "_token": "{{ csrf_token() }}",
                search_value: search_value
            },
            url: "{{ route('searchUser') }}",
            success: function(response) {
                if (response.msg == 'Success') {
                    console.log(response.data);
                    for (const key in response.data) {
                        let search_img;
                        if (response.data[key].gender == 'male') {
                                if (response.data[key].photo != null) {
                                         search_img = 'https://storeetree.com/storage/'+response.data[key].photo;
                                }
                                else{
                                         search_img = 'https://storeetree.com/images/frontend/photo_male.png';
                                }         
                        }
                        else{
                                if (response.data[key].photo != null) {
                                         search_img = 'https://storeetree.com/storage/'+response.data[key].photo;
                                }
                                else{
                                         search_img = 'https://storeetree.com/images/frontend/photo_female.png';
                                } 
                        }

                        var url = "family-tree?id="+response.data[key].id;
                       $(".search_results_1").append("<a href='"+url+"'><div class='search_results d-flex'><div class='searched_user_img'><img src='"+search_img+"'></div><div class='searched_user_data'><p class='text-primary'>" + response.data[key].first_name + " " + response.data[key].last_name + "</p><p class='text-primary'>" + response.data[key].email + "</p></div></div></a>");
                    }
                } else {
                     $(".search_results_1").html(' ');
                    $(".search_results_1").append("<p class='text-danger'>" + response.data + "</p>");
                }
            },
            error: function(data) {
                console.log(data);
            }
        });
    } else {
         $(".search_results_1").html('');
    }
});
</script>
@endsection
