@extends('frontend.layouts.app')

@section('title')
<title>Storee Tree: About Us</title>
@endsection
@section('header')
    <style>
        .charity_modal_open:hover{
            transition: .3s;
            cursor: pointer !important;
        }
    </style>
@endsection
@section('content')

<div class="banner_subpage" style="background-image:url({{ URL::to('/') }}/images/frontend/subpage_bg_1.jpg)">
    <h1>About Us</h1>
</div><!--subpage_banner-->

<div class="charity_section" style="background-color: #fff !important;">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6 light_bg">
                    <div class="charity_content">
                        <h2>Company story</h2>
                        <p>Thanks for checking us out. The idea for StoreeTree started 30 years ago when I took a VHS video camera to interview my 93 year old Grandmother. She lived an amazing life – born in Europe, fled with her husband and 18 month old son to the USA at the start of WWll to live the American Dream. And, with lots of hard work, they DID.</p>
<p></p>
<p>She was a unique, spunky, great lady. I remember, every time I saw her I first ask...</p>
                        <span id="dots"></span><span id="more">
                            <p>Heroes Welcome, a subgroup of the HFN, orchestrates an inspiring welcome for these heroes as they get off the plane in DC. In some cases, they can arrange for a similar welcome for their return flight too.  </p>
                            <p>The primary focus of HFN is on veterans with terminal illnesses, especially WWII veterans. As time progresses, the focus will shift to veterans of Korea, then Vietnam, and so on. In the 46 states participating, there are anywhere from one to nine airport “hubs”, where these flights are scheduled.</p>

                            <h3>Meals on Wheels America (MWA)</h3>
                            <p>With over 5,000 independently run (not government financed) local chapters across the U.S., meals can be delivered to anyone who qualifies, for a very moderate fee. At least 18% of U.S. seniors have trouble obtaining or preparing the food they need, so there is a great need for this service.</p>
                            <p>The food is catered to each senior’s dietary requirements and is delivered on the days he or she chooses.  Of course, food is essential to the recipient’s well-being, but MWA’s motto states their service is “more than just a meal.” For one thing, this service often enables seniors to continue living in their own homes instead of entering a facility. Meals on Wheels is good for both their self-esteem, their pocketbooks, and the community.</p>
                            <h3>American Association of Retired People (AARP)</h3>
                            <p>The AARP is one of the largest non-governmental organizations that help individuals 50 years or older. It offers many services for elderly people including financial assistance, caregiving, health-related services, social activities, special needs, technological training, and more.</p>
                            <h3>Give Kids the World Village</h3>
                            <p>Give Kids The World Village is an 89-acre nonprofit resort in Kissimmee, Florida that provides critically ill children and their families with week-long wish vacations at no cost. More than 30,000 children in the U.S. are diagnosed with a critical illness each year, and half of the children eligible for a wish choose to visit Central Florida and its theme parks.  The Give Kids the World Village helps these children have a place to stay while their wish is being fulfilled. </p>

                    </div>
                    <div class="common_btn gap_btn_2"><a onclick="companyStoryModal()" href="#" id="myBtn"  data-toggle="modal" data-target="#companyStoryModal" >Read More</a></div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="block_photo_single" style="margin-bottom: 10px;">
                        <img src="{{ URL::to('/') }}/images/frontend/about_company_2.jpg" alt=""/>
                    </div><!--block_photo_single-->
                    <div class="text-center"><figcaption style="font-size: 16px; font-weight: normal;">Grandma Ida with me (left), my sister Tamara and my brother Gary.</figcaption></div>
                </div>
            </div>
        </div>
    </div><!--charity_section-->


    
    <div class="common_section story_section">
        <div class="container">
            <div class="row padding_18">
                <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="single_photo_wrapper sd_height2">
                            <div class="block_photo_single" style="margin-bottom: 10px;">
                        		<img src="{{ URL::to('/') }}/images/frontend/about_passion_4.jpg" alt=""/>
                   			 </div>
                          <div class="text-center mt-2"><figcaption style="font-size: 16px; font-weight: normal;">Grandma Ida and Grandpa Frederick wedding photo (1930's).</figcaption></div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 dark">
                    <div class="story_wrapper sd_height2">
                        <div class="story_block">
                            <h2>Our Passion for storeetree</h2>
                            <ul>
                                <li>Our Heritage Grounds Us</li>
                                <li>Telling your story in your words, expressions, tone is memorable</li>
                                <li>No "Telephone Game" of your story changing from person to person to person.</li>
                                <li>Making this process simple. 20+ minutes to immortalize your story.</li>
                            </ul>
                            <div class="common_btn"><a href="https://storeetree.com/create-your-story/step-1">sTART nOW</a></div>
                        </div><!--story_block-->
                    </div><!-- end story_wrapper-->
                </div>
            </div>
        </div>
    </div><!--common_section-->

    @include('frontend.include.blogs')

    <div class="charity_section">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="charity_content">
                        <h2>Charities we support</h2>
                        <img src="{{ asset('images/frontend/bullet.png') }}" alt="" style="float:left; margin-right: 10px;"><h3 class="charity_modal_open">Giving is in our DNA</h3>
                        <p>We started StoreeTree as an opportunity to give back and help people tell their personal stories for friends, family, and generations to come. Because of passion for helping,  we will be donating a percentage of all sales to charity. As customers, you have the freedom to choose what charity your purchase will support. Please click the box when you checkout for the charity that most resonates with you. Below are the charities we currently support.</p>

                        <img src="{{ asset('images/frontend/bullet.png') }}" alt="" style="float:left; margin-right: 10px;"><h3 class="charity_modal_open">Honor Flight Network (HFN)</h3>
                        <img src="{{ asset('images/frontend/bullet.png') }}" alt="" style="float:left; margin-right: 10px;"><h3 class="charity_modal_open">Meals on Wheels America (MWA)</h3>
                        <img src="{{ asset('images/frontend/bullet.png') }}" alt="" style="float:left; margin-right: 10px;"><h3 class="charity_modal_open">American Association of Retired People (AARP)</h3>
                        <img src="{{ asset('images/frontend/bullet.png') }}" alt="" style="float:left; margin-right: 10px;"><h3 class="charity_modal_open">Give Kids the World Village</h3>
                        <span id="dots"></span><span id="more">
                            <p>Heroes Welcome, a subgroup of the HFN, orchestrates an inspiring welcome for these heroes as they get off the plane in DC. In some cases, they can arrange for a similar welcome for their return flight too.  </p>
                            <p>The primary focus of HFN is on veterans with terminal illnesses, especially WWII veterans. As time progresses, the focus will shift to veterans of Korea, then Vietnam, and so on. In the 46 states participating, there are anywhere from one to nine airport “hubs”, where these flights are scheduled.</p>

                            <h3>Meals on Wheels America (MWA)</h3>
                            <p>With over 5,000 independently run (not government financed) local chapters across the U.S., meals can be delivered to anyone who qualifies, for a very moderate fee. At least 18% of U.S. seniors have trouble obtaining or preparing the food they need, so there is a great need for this service.</p>
                            <p>The food is catered to each senior’s dietary requirements and is delivered on the days he or she chooses.  Of course, food is essential to the recipient’s well-being, but MWA’s motto states their service is “more than just a meal.” For one thing, this service often enables seniors to continue living in their own homes instead of entering a facility. Meals on Wheels is good for both their self-esteem, their pocketbooks, and the community.</p>
                            <h3>American Association of Retired People (AARP)</h3>
                            <p>The AARP is one of the largest non-governmental organizations that help individuals 50 years or older. It offers many services for elderly people including financial assistance, caregiving, health-related services, social activities, special needs, technological training, and more.</p>
                            <h3>Give Kids the World Village</h3>
                            <p>Give Kids The World Village is an 89-acre nonprofit resort in Kissimmee, Florida that provides critically ill children and their families with week-long wish vacations at no cost. More than 30,000 children in the U.S. are diagnosed with a critical illness each year, and half of the children eligible for a wish choose to visit Central Florida and its theme parks.  The Give Kids the World Village helps these children have a place to stay while their wish is being fulfilled. </p>

                    </div>
                    <div class="common_btn gap_btn_2"><a onclick="charityModal()" href="#" id="myBtn"  data-toggle="modal" data-target="#charityModal" >Read More</a></div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="block_photo_single">
                        <img src="{{ URL::to('/') }}/images/frontend/block_photo.jpg" alt=""/>
                    </div><!--block_photo_single-->
                </div>
            </div>
        </div>
    </div><!--charity_section-->
    
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
                                                <p>It's what you learn after you know it all that counts.</p>
                                                <h4>John Wooden</h4>
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












<!-- <div class="modal fade " id="charityModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div id="charityContent"></div>
      </div>
      
    </div>
  </div>
</div>


<div class="modal fade " id="companyStoryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div id="companyStory"></div>
      </div>
      
    </div>
  </div>
</div>

 -->







<div class="modal fade modal-vcenter signIn_commonn" id="companyStoryModal" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>

                    <div class="modal-body">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="modal_tittle">
                                    <h2>Company story</h2>
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


        <div class="modal fade modal-vcenter signIn_commonn" id="charityModal" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>

                    <div class="modal-body">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="modal_tittle">
                                    <h2>Charities we support</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                 <h3>Giving is in our DNA</h3>
                               <p>We started StoreeTree as an opportunity to give back and help people tell their personal stories for friends, family, and generations to come. Because of passion for helping,  we will be donating a percentage of all sales to charity. As customers, you have the freedom to choose what charity your purchase will support. Please click the box when you checkout for the charity that most resonates with you. Below are the charities we currently support.</p>

                                <h3>Honor Flight Network (HFN)</h3>
                                <p>Earl Morse and Jeff Miller, who co-founded the Honor Flight Network, were inspired by their respect for veterans. They wanted to provide vets the opportunity for closure, if possible. Since 2005, this network has flown thousands of veterans to Washington D.C., free of charge. On their trip, they can view the memorial commemorating the war they fought in. There are even volunteer guardians who escort the veterans around the city.</p>
                               
                                    <p>Heroes Welcome, a subgroup of the HFN, orchestrates an inspiring welcome for these heroes as they get off the plane in DC. In some cases, they can arrange for a similar welcome for their return flight too.  </p>
                                    <p>The primary focus of HFN is on veterans with terminal illnesses, especially WWII veterans. As time progresses, the focus will shift to veterans of Korea, then Vietnam, and so on. In the 46 states participating, there are anywhere from one to nine airport “hubs”, where these flights are scheduled.</p>

                                    <h3>Meals on Wheels America (MWA)</h3>
                                    <p>With over 5,000 independently run (not government financed) local chapters across the U.S., meals can be delivered to anyone who qualifies, for a very moderate fee. At least 18% of U.S. seniors have trouble obtaining or preparing the food they need, so there is a great need for this service.</p>
                                    <p>The food is catered to each senior’s dietary requirements and is delivered on the days he or she chooses.  Of course, food is essential to the recipient’s well-being, but MWA’s motto states their service is “more than just a meal.” For one thing, this service often enables seniors to continue living in their own homes instead of entering a facility. Meals on Wheels is good for both their self-esteem, their pocketbooks, and the community.</p>
                                    <h3>American Association of Retired People (AARP)</h3>
                                    <p>The AARP is one of the largest non-governmental organizations that help individuals 50 years or older. It offers many services for elderly people including financial assistance, caregiving, health-related services, social activities, special needs, technological training, and more.</p>
                                    <h3>Give Kids the World Village</h3>
                                    <p>Give Kids The World Village is an 89-acre nonprofit resort in Kissimmee, Florida that provides critically ill children and their families with week-long wish vacations at no cost. More than 30,000 children in the U.S. are diagnosed with a critical illness each year, and half of the children eligible for a wish choose to visit Central Florida and its theme parks.  The Give Kids the World Village helps these children have a place to stay while their wish is being fulfilled. </p>
                            </div>
                        </div>
                    
                    </div>

                </div>
            </div>
        </div>

@endsection

@section('scripts')

<script type="text/javascript">
function charityModal() {
    var content=$(".charity_content").html();
    // console.dir(content);
    $("#charityContent").html(content);
}

function companyStoryModal() {
    var content=$(".company_info_iner").html();
    // console.dir(content);
    $("#companyStory").html(content);
    $("#companyStory .common_btn").remove();

}
$('.charity_modal_open').on('click',function(){
    $('#charityModal').modal('show');
});
</script>
@endsection