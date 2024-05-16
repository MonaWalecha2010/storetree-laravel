@extends('frontend.layouts.app')

@section('title')
<title>Storee Tree: Payment</title>
@endsection

@section('content')
<div class="banner_subpage" style="background-image:url({{ URL::to('/') }}/images/frontend/subpage_bg_1.jpg)">
    <h1>Payment</h1>
</div>
<!--subpage_banner-->

<div class="content_area cn_gap_top">
    <div class="contact_section">
        <div class="container">
            <div class="col-xs-12">
                <div class="contact_info_block_sc payment_wrapper">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="contact_block_tittle">
                                <h3>Billing</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="cart_table table-responsive">
                                <table class="table">
                                    @if(Auth::user()->plan_purchased == null)
                                        <thead>                                            
                                            <tr>
                                                <th>Item</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h3>{{ $packagePlan['title'] }} </h3>
                                                </td>
                                                <td class="price_col" id="price_section">
                                                    <strong>${{ $packagePlan['price'] }}</strong>
                                                </td>
                                            </tr>
                                            @if($addon_charges != 0)
                                            <tr>
                                                <td>
                                                    <h3>Addon Charges</h3>
                                                </td>
                                                <td class="price_col" id="price_section1">
                                                    <strong>${{number_format($addon_charges,2)}}</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h3>Total</h3>
                                                </td>
                                                <td class="price_col" id="price_section2">
                                                    <strong>${{number_format($addon_charges+$packagePlan['price'],2)}}</strong>
                                                </td>
                                            </tr>
                                            @endif

                                    @else
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h3 class="text-left">{{ $packagePlan['title'] }}</h3>
                                                </td>                                            
                                            </tr>
                                            <tr>
                                                    <td>Already Paid</td>
                                                    <td >${{config('plans.' . Auth::user()->plan_purchased. '.price')}}</td>
                                            
                                            </tr>
                                            <tr>
                                                <td>To be Paid</td>
                                                <td class="price_col" id="price_section">${{number_format(config('plans.' . Session::get('cart')['plan']. '.price') - config('plans.' . Auth::user()->plan_purchased. '.price'), 2, '.', '')}}</td>
                                            </tr>
                                             @if($addon_charges != 0)
                                            <tr>
                                                <td>Addon Charges</td>
                                                <td id="price_section1">${{number_format($addon_charges,2)}}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h3>Total</h3>
                                                </td>
                                                <td id="price_section2">${{number_format($addon_charges+number_format(config('plans.' . Session::get('cart')['plan']. '.price') - config('plans.' . Auth::user()->plan_purchased. '.price'), 2, '.', ''),2)}}
                                                </td>
                                            </tr>
                                            @endif

                                    @endif
                                    </tbody>

                                </table>

                                @include('frontend.include.flashMessage')
                                @if(Auth::user()->plan_purchased == null)
                                <form id="promocode_apply_form" method="post" action="">
                                    @csrf
                                    <div class="col-xs-9" style="margin-bottom:70px;">
                                        <label>Promocode</label>
                                        @if($addon_charges != 0)
                                            <input type="text" hidden name="price" id="original_price"
                                            value="{{number_format($addon_charges+$packagePlan['price'],2)}}">
                                        @else
                                        <input type="text" hidden name="price" id="original_price"
                                            value="{{ $packagePlan['price'] }}">

                                        @endif
                                        
                                        <input type="text" required style="text-transform:uppercase;"
                                            class="form-control" name="promocode" value=""
                                            placeholder="Redeem Promocode">
                                        @error('promocode')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                        <div id="promo_msg"></div>
                                    </div>
                                    <div class="col-xs-3" style="margin-top:15px;">
                                        <input type="submit" class="submit_btn" id="promocode_apply_btn" value="Reedem">
                                    </div>
                                </form>
                                @else
                                <form id="promocode_apply_form" method="post" action="">
                                    @csrf
                                    <div class="col-xs-9" style="margin-bottom:70px;">
                                        <label>Promocode</label>
                                        @if($addon_charges != 0)
                                            <input type="text" hidden name="price" id="original_price"
                                            value="{{number_format($addon_charges+number_format(config('plans.' . Session::get('cart')['plan']. '.price') - config('plans.' . Auth::user()->plan_purchased. '.price'), 2, '.', ''),2)}}">
                                        @else
                                        <input type="text" hidden name="price" id="original_price"
                                            value="{{number_format(config('plans.' . Session::get('cart')['plan']. '.price') - config('plans.' . Auth::user()->plan_purchased. '.price'), 2, '.', '')}}">

                                        @endif
                                        
                                        <input type="text" required style="text-transform:uppercase;"
                                            class="form-control" name="promocode" value=""
                                            placeholder="Redeem Promocode">
                                        @error('promocode')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                        <div id="promo_msg"></div>
                                    </div>
                                    <div class="col-xs-3" style="margin-top:15px;">
                                        <input type="submit" class="submit_btn" id="promocode_apply_btn" value="Reedem">
                                    </div>
                                </form>
                                @endif
                            </div>
                        </div>




                    </div>

                       @if(Auth::user()->plan_purchased == null)
                           <form id="pay_form" method="post" action="{{ route('store.payment-process') }}">
                        @else
                            <form id="pay_form" method="post" action="{{ route('upgrade.payment-process') }}">
                        @endif
                        @if(session('error_msg'))
                        <div class="alert alert-danger fade in alert-dismissible show">
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true" style="font-size:20px">×</span>
                            </button>
                            {{ session('error_msg') }}
                        </div>
                        @endif
                        @csrf
                        <div class="row">
                        <div class="pay_form_body">
                        @if(Auth::user()->plan_purchased != null)

                        <input type="text" hidden  name="price" id="price_value"  value="{{number_format(config('plans.' . Session::get('cart')['plan']. '.price') - config('plans.' . Auth::user()->plan_purchased. '.price'), 2, '.', '')+$addon_charges}}">

                        <input type="text" hidden name="user_name" id="user_name"  value="{{Auth::user()->first_name}} {{Auth::user()->last_name}}">

                        <input type="text" hidden name="promo_id" id="catch_promo_id">
                        @else
                        <input  type="text" hidden name="price" id="price_value"  value="{{$packagePlan['price']+$addon_charges}}">

                        <input type="text" hidden name="user_name" id="user_name"  value="{{Auth::user()->first_name}} {{Auth::user()->last_name}}">

                        <input type="text" hidden name="promo_id" id="catch_promo_id">
                        @endif
                             <div class="col-xs-12">
                                <h4>Giving is in our DNA.</h4>
                                <label> Please select one of the charities below and we will make donation as a thank you for your support.</label>
                                <div class="form-group">
                                            <div class="form_select_common select_common">
                                <select class="option-select" name="charity" id="charity">
                                                    <option value="">-------- Select --------</option>
                                                    <option value="Honor Flight Network">Honor Flight Network</option>
                                                    <option value="Meals on Wheels America">Meals on Wheels America</option>
                                                    <option value="American Association of Retired People">American Association of Retired People</option>
                                                    <option value="Give Kids the World Village">Give Kids the World Village</option>
                                                    <option value="Equal Amounts To All Charities Above">Equal Amounts To All Charities Above</option>

                                                </select>
                                            </div>
                                        </div>
                                @error('charity')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="col-xs-12">
                                <div class="contact_block_tittle">
                                    <h4>Credit Or Debit Card</h4>
                                </div>
                            </div>
                            <div class="col-xs-12">
                                <label>Card Holder Name </label>
                                <input type="text" class="form-control" name="owner" value="{{ old('owner') }}"
                                    placeholder="Enter Card Holder Name">
                                @error('owner')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="col-xs-12">
                                <label>Card Number</label>
                                <input type="text" class="form-control" name="cardNumber"
                                    value="{{ old('cardNumber') }}" placeholder="Enter Card Number" maxlength="16"
                                    minlength="16">
                                @error('cardNumber')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="col-xs-12 col-md-6 col-sm-6">
                                <label>Card Validity</label>
                                <input type="text" class="form-control" name="expiration" id="expiration_inp"
                                    value="{{ old('expiration') }}" placeholder="MM/YYYY" maxlength="7" minlength="7">
                                @error('expiration')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="col-xs-12 col-md-6 col-sm-6">
                                <label>CVC Number</label>
                                <input type="text" class="form-control" name="cvv" value="{{ old('cvv') }}"
                                    placeholder="Enter CVC number" minlength="3" maxlength="4">
                                @error('cvv')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                         </div>



                            <div class="col-xs-12 col-md-6 col-sm-6 form-group">
                                <div class=" form-check">
                                    <input class="form-check-input" name="accept_terms" id="check2" type="checkbox"
                                        style="display: inline-block;">
                                    <label class="form-check-label" for="check2" style="float: none;width: auto;display: inline-block;margin-left: 10px;"> I Agree with <a href="#" data-toggle="modal" data-target="#terms_conditions">Terms
                                            &amp; Conditions</a></label>
                                </div>


                                <!-- ----------------------------------Model Start------------------------ -->
                                <div class="modal fade modal-vcenter signIn_common" id="terms_conditions" role="dialog"
                                    style="padding: 0 !important;">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <button type="button" class="close modalFormClose" data-dismiss="modal"
                                                aria-label="Close"><span aria-hidden="true"></span></button>
                                            <div class="modal-body">

                                                <div class="row">
                                                    <div class="col-xs-12">
                                                        <div class="modal-block">


                                                            <!-- t&c -->

                                                            <div class="row">
                                                                <div class="col-xs-12">
                                                                    <div class="faq_top_section">
                                                                        <h2>TERMS & CONDITIONS</h2>

                                                                    </div>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <h1>Agreement to Our Legal Terms</h1>
                                                                    <p>Last updated: July 12, 2023</p>
                                                                    <p>
                                                                        We are Storee Tree, LLC, doing business as
                                                                        StoreeTree ("Company," "we," "us," "our"), a
                                                                        company registered in Florida, United States at
                                                                        2721 Runyon Circle, Orlando, FL 32837.
                                                                    </p>
                                                                    <p>
                                                                        We operate the website <a
                                                                            href="http://www.Storeetree.com">http://www.Storeetree.com</a>
                                                                        (the "Site"), the mobile application StoreeTree
                                                                        (the "App"), as well as any other related
                                                                        products and services that refer or link to
                                                                        these legal terms (the "Legal Terms")
                                                                        (collectively, the "Services").
                                                                    </p>
                                                                    <p>
                                                                        You can contact us by email at <a
                                                                            href="mailto:Info@StoreeTree.com">Info@StoreeTree.com</a>,
                                                                        or by mail to 2721 Runyon Circle, Orlando, FL
                                                                        32837, United States.
                                                                    </p>
                                                                    <p>
                                                                        These Legal Terms constitute a legally binding
                                                                        agreement made between you, whether
                                                                        personally or on behalf of an entity ("you"),
                                                                        and Storee Tree, LLC, concerning your access
                                                                        to and use of the Services. You agree that by
                                                                        accessing the Services, you have read,
                                                                        understood, and agreed to be bound by all of
                                                                        these Legal Terms. IF YOU DO NOT AGREE WITH ALL
                                                                        OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY
                                                                        PROHIBITED FROM USING THE SERVICES AND YOU MUST
                                                                        DISCONTINUE USE IMMEDIATELY.
                                                                    </p>
                                                                    <p>
                                                                        Supplemental terms and conditions or documents
                                                                        that may be posted on the Services from time
                                                                        to time are hereby expressly incorporated herein
                                                                        by reference. We reserve the right, in our
                                                                        sole discretion, to make changes or
                                                                        modifications to these Legal Terms from time to
                                                                        time. We
                                                                        will alert you about any changes by updating the
                                                                        "Last updated" date of these Legal Terms,
                                                                        and you waive any right to receive specific
                                                                        notice of each such change. It is your
                                                                        responsibility to periodically review these
                                                                        Legal Terms to stay informed of updates. You
                                                                        will be subject to, and will be deemed to have
                                                                        been made aware of and have accepted, the
                                                                        changes in any revised Legal Terms by your
                                                                        continued use of the Services after the date
                                                                        such
                                                                        revised Legal Terms are posted.
                                                                    </p>
                                                                    <p>
                                                                        The Services are intended for users who are at
                                                                        least 18 years old. Persons under the age of
                                                                        18 are not permitted to use or register for the
                                                                        Services.
                                                                    </p>
                                                                    <p>
                                                                        We recommend that you print a copy of these
                                                                        Legal Terms for your records.
                                                                    </p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-xs-12">
                                                                    <div class="faq_content">
                                                                        <div class="faq_single_block">
                                                                            <div role="tablist"
                                                                                class="ui-accordion ui-widget ui-helper-reset"
                                                                                id="accordion">

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>OUR
                                                                                    SERVICES</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    The information provided when using
                                                                                    the Services is not intended for
                                                                                    distribution to
                                                                                    or use by any person or entity in
                                                                                    any jurisdiction or country where
                                                                                    such
                                                                                    distribution or use would be
                                                                                    contrary to law or regulation or
                                                                                    which would subject us
                                                                                    to any registration requirement
                                                                                    within such jurisdiction or country.
                                                                                    Accordingly,
                                                                                    those persons who choose to access
                                                                                    the Services from other locations do
                                                                                    so on their
                                                                                    own initiative and are solely
                                                                                    responsible for compliance with
                                                                                    local laws, if and to
                                                                                    the extent local laws are
                                                                                    applicable.
                                                                                    <br><br>
                                                                                    The Services are not tailored to
                                                                                    comply with
                                                                                    industry-specific regulations
                                                                                    (Health Insurance Portability and
                                                                                    Accountability Act
                                                                                    (HIPAA)), Federal Information
                                                                                    Security Management Act (FISMA),
                                                                                    etc., so if your
                                                                                    interactions would be subjected to
                                                                                    such laws, you may not use the
                                                                                    Services. You may
                                                                                    not use the Services in a way that
                                                                                    would violate the Gramm-Leach-Bliley
                                                                                    Act (GLBA).
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>INTELLECTUAL
                                                                                    PROPERTY RIGHTS</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">

                                                                                    <strong>Our intellectual
                                                                                        property</strong>
                                                                                    <p>We are the owner or the licensee
                                                                                        of all intellectual property
                                                                                        rights in our
                                                                                        Services, including all source
                                                                                        code,
                                                                                        databases, functionality,
                                                                                        software, website designs,
                                                                                        audio, video, text,
                                                                                        photographs, and graphics in the
                                                                                        Services
                                                                                        (collectively, the "Content"),
                                                                                        as well as the trademarks,
                                                                                        service marks, and
                                                                                        logos contained therein (the
                                                                                        "Marks").</p>
                                                                                    <p>Our Content and Marks are
                                                                                        protected by copyright and
                                                                                        trademark laws (and various
                                                                                        other intellectual property
                                                                                        rights
                                                                                        and unfair competition laws) and
                                                                                        treaties in the United States
                                                                                        and around the
                                                                                        world.</p>
                                                                                    <p>The Content and Marks are
                                                                                        provided in or through the
                                                                                        Services "AS IS" for your
                                                                                        personal, non-commercial use
                                                                                        only.</p>

                                                                                    <strong>Your use of our
                                                                                        Services</strong>
                                                                                    <p>Subject to your compliance with
                                                                                        these Legal Terms, including the
                                                                                        "PROHIBITED
                                                                                        ACTIVITIES" section below, we
                                                                                        grant
                                                                                        you a non-exclusive,
                                                                                        non-transferable, revocable
                                                                                        license to:</p>
                                                                                    <ul>
                                                                                        <li>access the Services; and
                                                                                        </li>
                                                                                        <li>download or print a copy of
                                                                                            any portion of the Content
                                                                                            to which you have
                                                                                            properly gained access.</li>
                                                                                    </ul>
                                                                                    <p>solely for your personal,
                                                                                        non-commercial use.</p>
                                                                                    <p>Except as set out in this section
                                                                                        or elsewhere in our Legal Terms,
                                                                                        no part of the
                                                                                        Services and no Content or Marks
                                                                                        may be copied, reproduced,
                                                                                        aggregated, republished,
                                                                                        uploaded, posted, publicly
                                                                                        displayed, encoded, translated,
                                                                                        transmitted, distributed, sold,
                                                                                        licensed, or otherwise exploited
                                                                                        for any
                                                                                        commercial purpose whatsoever,
                                                                                        without our
                                                                                        express prior written
                                                                                        permission.</p>
                                                                                    <p>If you wish to make any use of
                                                                                        the Services, Content, or Marks
                                                                                        other than as set
                                                                                        out in this section or elsewhere
                                                                                        in
                                                                                        our Legal Terms, please address
                                                                                        your request to: <a
                                                                                            href="mailto:info@storeetree.com">Info@StoreeTree.com</a>.
                                                                                        If
                                                                                        we ever grant you the permission
                                                                                        to post, reproduce, or publicly
                                                                                        display any
                                                                                        part of our Services or Content,
                                                                                        you
                                                                                        must identify us as the owners
                                                                                        or licensors of the Services,
                                                                                        Content, or Marks
                                                                                        and ensure that any copyright or
                                                                                        proprietary notice appears or is
                                                                                        visible on posting, reproducing,
                                                                                        or displaying
                                                                                        our Content.</p>
                                                                                    <p>We reserve all rights not
                                                                                        expressly granted to you in and
                                                                                        to the Services,
                                                                                        Content, and Marks.</p>
                                                                                    <p>Any breach of these Intellectual
                                                                                        Property Rights will constitute
                                                                                        a material
                                                                                        breach of our Legal Terms and
                                                                                        your right
                                                                                        to use our Services will
                                                                                        terminate immediately.</p>

                                                                                    <strong>Your submissions and
                                                                                        contributions</strong>
                                                                                    <p>Please review this section and
                                                                                        the "PROHIBITED ACTIVITIES"
                                                                                        section carefully
                                                                                        prior to using our Services to
                                                                                        understand the (a) rights you
                                                                                        give us and (b) obligations you
                                                                                        have when you post
                                                                                        or upload any content through
                                                                                        the
                                                                                        Services.</p>

                                                                                    <strong>Submissions</strong>
                                                                                    <p>By directly sending us any
                                                                                        question, comment, suggestion,
                                                                                        idea, feedback, or
                                                                                        other information about the
                                                                                        Services
                                                                                        ("Submissions"), you agree to
                                                                                        assign to us all intellectual
                                                                                        property rights in
                                                                                        such Submission. You agree that
                                                                                        we
                                                                                        shall own this Submission and be
                                                                                        entitled to its unrestricted use
                                                                                        and
                                                                                        dissemination for any lawful
                                                                                        purpose,
                                                                                        commercial or otherwise, without
                                                                                        acknowledgment or compensation
                                                                                        to you.</p>

                                                                                    <strong>Contributions</strong>
                                                                                    <p>The Services may invite you to
                                                                                        chat, contribute to, or
                                                                                        participate in blogs,
                                                                                        message boards, online forums,
                                                                                        and
                                                                                        other functionality during which
                                                                                        you may create, submit, post,
                                                                                        display,
                                                                                        transmit, publish, distribute,
                                                                                        or broadcast
                                                                                        content and materials to us or
                                                                                        through the Services, including
                                                                                        but not limited
                                                                                        to text, writings, video, audio,
                                                                                        photographs, music, graphics,
                                                                                        comments, reviews, rating
                                                                                        suggestions, personal
                                                                                        information, or other material
                                                                                        ("Contributions"). Any
                                                                                        Submission that is publicly
                                                                                        posted shall also be treated
                                                                                        as a Contribution.</p>
                                                                                    <p>You understand that Contributions
                                                                                        may be viewable by other users
                                                                                        of the Services.
                                                                                    </p>
                                                                                    <p>When you post Contributions, you
                                                                                        grant us a license (including
                                                                                        use of your name,
                                                                                        trademarks, and logos): By
                                                                                        posting
                                                                                        any Contributions, you grant us
                                                                                        an unrestricted, unlimited,
                                                                                        irrevocable,
                                                                                        perpetual, non-exclusive,
                                                                                        transferable,
                                                                                        royalty-free, fully-paid,
                                                                                        worldwide right, and license to:
                                                                                        use, copy, reproduce,
                                                                                        distribute, sell, resell,
                                                                                        publish, broadcast, retitle,
                                                                                        store, publicly perform,
                                                                                        publicly display,
                                                                                        reformat, translate, excerpt (in
                                                                                        whole or
                                                                                        in part), and exploit your
                                                                                        Contributions (including,
                                                                                        without limitation, your
                                                                                        image, name, and voice) for any
                                                                                        purpose, commercial,
                                                                                        advertising, or otherwise, to
                                                                                        prepare derivative works of,
                                                                                        or incorporate into other works,
                                                                                        your Contributions, and to
                                                                                        sublicense the licenses granted
                                                                                        in this section. Our
                                                                                        use and distribution may occur
                                                                                        in
                                                                                        any media formats and through
                                                                                        any media channels.</p>
                                                                                    <p>This license includes our use of
                                                                                        your name, company name, and
                                                                                        franchise name, as
                                                                                        applicable, and any of the
                                                                                        trademarks, service marks, trade
                                                                                        names, logos, and personal and
                                                                                        commercial
                                                                                        images you provide.</p>

                                                                                    <strong>You are responsible for what
                                                                                        you post or upload</strong>
                                                                                    <p>By sending us Submissions and/or
                                                                                        posting Contributions through
                                                                                        any part of the
                                                                                        Services or making Contributions
                                                                                        accessible through the Services
                                                                                        by linking your account through
                                                                                        the Services to
                                                                                        any of your social networking
                                                                                        accounts, you:</p>
                                                                                    <ul>
                                                                                        <li>confirm that you have read
                                                                                            and agree with our
                                                                                            "PROHIBITED ACTIVITIES" and
                                                                                            will not post, send,
                                                                                            publish, upload,
                                                                                            or transmit through the
                                                                                            Services any Submission nor
                                                                                            post any Contribution
                                                                                            that is illegal, harassing,
                                                                                            hateful,
                                                                                            harmful, defamatory,
                                                                                            obscene, bullying, abusive,
                                                                                            discriminatory, threatening
                                                                                            to any person or group,
                                                                                            sexually
                                                                                            explicit, false, inaccurate,
                                                                                            deceitful, or misleading;
                                                                                        </li>
                                                                                        <li>to the extent permissible by
                                                                                            applicable law, waive any
                                                                                            and all moral rights
                                                                                            to any such Submission
                                                                                            and/or
                                                                                            Contribution;</li>
                                                                                        <li>warrant that any such
                                                                                            Submission and/or
                                                                                            Contributions are original
                                                                                            to you or
                                                                                            that you have the necessary
                                                                                            rights and licenses to
                                                                                            submit such Submissions
                                                                                            and/or Contributions and
                                                                                            that
                                                                                            you have full authority to
                                                                                            grant
                                                                                            us the above-mentioned
                                                                                            rights in relation to your
                                                                                            Submissions and/or
                                                                                            Contributions; and</li>
                                                                                        <li>warrant and represent that
                                                                                            your Submissions and/or
                                                                                            Contributions do not
                                                                                            constitute confidential
                                                                                            information.</li>
                                                                                    </ul>
                                                                                    <p>You are solely responsible for
                                                                                        your Submissions and/or
                                                                                        Contributions and you
                                                                                        expressly agree to reimburse us
                                                                                        for any
                                                                                        and all losses that we may
                                                                                        suffer because of your breach of
                                                                                        (a) this section,
                                                                                        (b) any third party's
                                                                                        intellectual
                                                                                        property rights, or (c)
                                                                                        applicable law.</p>

                                                                                    <strong>We may remove or edit your
                                                                                        Content</strong>
                                                                                    <p>Although we have no obligation to
                                                                                        monitor any Contributions, we
                                                                                        shall have the
                                                                                        right to remove or edit any
                                                                                        Contributions at any time
                                                                                        without notice if, in our
                                                                                        reasonable opinion, we
                                                                                        consider such Contributions
                                                                                        harmful or
                                                                                        in breach of these Legal Terms.
                                                                                        If we remove or edit any such
                                                                                        Contributions, we
                                                                                        may also suspend or disable your
                                                                                        account and report you to the
                                                                                        authorities.</p>

                                                                                    <strong>Copyright
                                                                                        infringement</strong>
                                                                                    <p>We respect the intellectual
                                                                                        property rights of others. If
                                                                                        you believe that any
                                                                                        material available on or through
                                                                                        the
                                                                                        Services infringes upon any
                                                                                        copyright you own or control,
                                                                                        please immediately
                                                                                        refer to the "COPYRIGHT
                                                                                        INFRINGEMENTS" section below.
                                                                                    </p>
                                                                                </div>


                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>USER
                                                                                    REPRESENTATIONS</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">

                                                                                    <p>By using the Services, you
                                                                                        represent and warrant that:</p>
                                                                                    <ol>
                                                                                        <li>all registration information
                                                                                            you submit will be true,
                                                                                            accurate, current, and
                                                                                            complete;</li>
                                                                                        <li>you will maintain the
                                                                                            accuracy of such information
                                                                                            and promptly update such
                                                                                            registration information as
                                                                                            necessary;</li>
                                                                                        <li>you have the legal capacity
                                                                                            and you agree to comply with
                                                                                            these Legal Terms;
                                                                                        </li>
                                                                                        <li>you are not a minor in the
                                                                                            jurisdiction in which you
                                                                                            reside;</li>
                                                                                        <li>you will not access the
                                                                                            Services through automated
                                                                                            or non-human means,
                                                                                            whether through a bot,
                                                                                            script, or
                                                                                            otherwise;</li>
                                                                                        <li>you will not use the
                                                                                            Services for any illegal or
                                                                                            unauthorized purpose; and
                                                                                        </li>
                                                                                        <li>your use of the Services
                                                                                            will not violate any
                                                                                            applicable law or
                                                                                            regulation.
                                                                                        </li>
                                                                                    </ol>
                                                                                    <p>If you provide any information
                                                                                        that is untrue, inaccurate, not
                                                                                        current, or
                                                                                        incomplete, we have the right to
                                                                                        suspend or terminate your
                                                                                        account and refuse any and all
                                                                                        current or future use
                                                                                        of the Services (or any portion
                                                                                        thereof).</p>
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>USER
                                                                                    REGISTRATION
                                                                                </h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    You may be required to register to
                                                                                    use the Services. You agree to keep
                                                                                    your password
                                                                                    confidential and will be responsible
                                                                                    for all use of your account and
                                                                                    password. We
                                                                                    reserve the right to remove,
                                                                                    reclaim, or change a username you
                                                                                    select if we
                                                                                    determine, in our sole discretion,
                                                                                    that such username is inappropriate,
                                                                                    obscene, or
                                                                                    otherwise objectionable.
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>PRODUCTS
                                                                                </h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    All products are subject to
                                                                                    availability. We reserve the right
                                                                                    to discontinue any
                                                                                    products at any time for any reason.
                                                                                    Prices for all products are subject
                                                                                    to change.
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>PURCHASES
                                                                                    AND
                                                                                    PAYMENT</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    <strong>We accept the following
                                                                                        forms of payment:</strong>
                                                                                    <ul>
                                                                                        <li>Visa</li>
                                                                                        <li>Mastercard</li>
                                                                                        <li>American Express</li>
                                                                                    </ul>

                                                                                    <p>You agree to provide current,
                                                                                        complete, and accurate purchase
                                                                                        and account
                                                                                        information for all purchases
                                                                                        made via the
                                                                                        Services. You further agree to
                                                                                        promptly update account and
                                                                                        payment information,
                                                                                        including email address, payment
                                                                                        method, and payment card
                                                                                        expiration date, so that we can
                                                                                        complete your
                                                                                        transactions and contact you as
                                                                                        needed. Sales
                                                                                        tax will be added to the price
                                                                                        of purchases as deemed required
                                                                                        by us. We may
                                                                                        change prices at any time. All
                                                                                        payments
                                                                                        shall be in US dollars.</p>

                                                                                    <p>You agree to pay all charges at
                                                                                        the prices then in effect for
                                                                                        your purchases and
                                                                                        any applicable shipping fees,
                                                                                        and
                                                                                        you authorize us to charge your
                                                                                        chosen payment provider for any
                                                                                        such amounts
                                                                                        upon placing your order. If your
                                                                                        order
                                                                                        is subject to recurring charges,
                                                                                        then you consent to our charging
                                                                                        your payment
                                                                                        method on a recurring basis
                                                                                        without
                                                                                        requiring your prior approval
                                                                                        for each recurring charge until
                                                                                        such time as you
                                                                                        cancel the applicable order. We
                                                                                        reserve the right to correct any
                                                                                        errors or mistakes in pricing,
                                                                                        even if we have
                                                                                        already requested or received
                                                                                        payment.</p>

                                                                                    <p>We reserve the right to refuse
                                                                                        any order placed through the
                                                                                        Services. We may, in
                                                                                        our sole discretion, limit or
                                                                                        cancel quantities purchased per
                                                                                        person, per household, or per
                                                                                        order. These
                                                                                        restrictions may include orders
                                                                                        placed by
                                                                                        or under the same customer
                                                                                        account, the same payment
                                                                                        method, and/or orders that
                                                                                        use the same billing or shipping
                                                                                        address. We reserve the right to
                                                                                        limit or prohibit orders that,
                                                                                        in our sole
                                                                                        judgment, appear to be placed by
                                                                                        dealers, resellers, or
                                                                                        distributors.</p>

                                                                                </div>
                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>REFUNDS
                                                                                    POLICY</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">

                                                                                    All sales are final, and no refund
                                                                                    will be issued.
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>PROHIBITED
                                                                                    ACTIVITIES</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">

                                                                                    <p>You may not access or use the
                                                                                        Services for any purpose other
                                                                                        than that for which
                                                                                        we make the Services available.
                                                                                        The Services may not be used in
                                                                                        connection with any commercial
                                                                                        endeavors except
                                                                                        those that are specifically
                                                                                        endorsed
                                                                                        or approved by us.</p>
                                                                                    <p>As a user of the Services, you
                                                                                        agree not to:</p>
                                                                                    <ul>
                                                                                        <li>Systematically retrieve data
                                                                                            or other content from the
                                                                                            Services to create or
                                                                                            compile, directly or
                                                                                            indirectly, a
                                                                                            collection, compilation,
                                                                                            database, or directory
                                                                                            without written permission
                                                                                            from us.</li>
                                                                                        <li>Trick, defraud, or mislead
                                                                                            us and other users,
                                                                                            especially in any attempt to
                                                                                            learn sensitive account
                                                                                            information
                                                                                            such as user passwords.</li>
                                                                                        <li>Circumvent, disable, or
                                                                                            otherwise interfere with
                                                                                            security-related features
                                                                                            of the Services, including
                                                                                            features
                                                                                            that prevent or restrict the
                                                                                            use or copying of any
                                                                                            Content or enforce
                                                                                            limitations on the use of
                                                                                            the Services
                                                                                            and/or the Content contained
                                                                                            therein.</li>
                                                                                        <li>Disparage, tarnish, or
                                                                                            otherwise harm, in our
                                                                                            opinion, us and/or the
                                                                                            Services.</li>
                                                                                        <li>Use any information obtained
                                                                                            from the Services in order
                                                                                            to harass, abuse, or
                                                                                            harm another person.</li>
                                                                                        <li>Make improper use of our
                                                                                            support services or submit
                                                                                            false reports of abuse
                                                                                            or misconduct.</li>
                                                                                        <li>Use the Services in a manner
                                                                                            inconsistent with any
                                                                                            applicable laws or
                                                                                            regulations.</li>
                                                                                        <li>Engage in unauthorized
                                                                                            framing of or linking to the
                                                                                            Services.</li>
                                                                                        <li>Upload or transmit (or
                                                                                            attempt to upload or to
                                                                                            transmit) viruses, Trojan
                                                                                            horses, or other material,
                                                                                            including
                                                                                            excessive use of capital
                                                                                            letters and spamming
                                                                                            (continuous posting of
                                                                                            repetitive text), that
                                                                                            interferes with
                                                                                            any party's uninterrupted
                                                                                            use and enjoyment of the
                                                                                            Services or modifies,
                                                                                            impairs, disrupts, alters,
                                                                                            or
                                                                                            interferes with the use,
                                                                                            features, functions,
                                                                                            operation, or maintenance of
                                                                                            the Services.</li>
                                                                                        <li>Engage in any automated use
                                                                                            of the system, such as using
                                                                                            scripts to send
                                                                                            comments or messages, or
                                                                                            using any data
                                                                                            mining, robots, or similar
                                                                                            data gathering and
                                                                                            extraction tools.</li>
                                                                                        <li>Delete the copyright or
                                                                                            other proprietary rights
                                                                                            notice from any Content.
                                                                                        </li>
                                                                                        <li>Attempt to impersonate
                                                                                            another user or person or
                                                                                            use the username of another
                                                                                            user.</li>
                                                                                        <li>Upload or transmit (or
                                                                                            attempt to upload or to
                                                                                            transmit) any material that
                                                                                            acts as a passive or active
                                                                                            information collection or
                                                                                            transmission mechanism,
                                                                                            including without
                                                                                            limitation, clear graphics
                                                                                            interchange
                                                                                            formats ("gifs"), 1x1
                                                                                            pixels, web bugs, cookies,
                                                                                            or other similar devices
                                                                                            (sometimes referred to as
                                                                                            "spyware"
                                                                                            or "passive collection
                                                                                            mechanisms" or "pcms").</li>
                                                                                        <li>Interfere with, disrupt, or
                                                                                            create an undue burden on
                                                                                            the Services or the
                                                                                            networks or services
                                                                                            connected to the
                                                                                            Services.</li>
                                                                                        <li>Harass, annoy, intimidate,
                                                                                            or threaten any of our
                                                                                            employees or agents
                                                                                            engaged in providing any
                                                                                            portion of the
                                                                                            Services to you.</li>
                                                                                        <li>Attempt to bypass any
                                                                                            measures of the Services
                                                                                            designed to prevent or
                                                                                            restrict access to the
                                                                                            Services, or any
                                                                                            portion of the Services.
                                                                                        </li>
                                                                                        <li>Copy or adapt the Services'
                                                                                            software, including but not
                                                                                            limited to Flash,
                                                                                            PHP, HTML, JavaScript, or
                                                                                            other code.</li>
                                                                                        <li>Except as permitted by
                                                                                            applicable law, decipher,
                                                                                            decompile, disassemble, or
                                                                                            reverse engineer any of the
                                                                                            software comprising or in
                                                                                            any way making up a part of
                                                                                            the Services.</li>
                                                                                        <li>Except as may be the result
                                                                                            of standard search engine or
                                                                                            Internet browser
                                                                                            usage, use, launch, develop,
                                                                                            or
                                                                                            distribute any automated
                                                                                            system, including without
                                                                                            limitation, any spider,
                                                                                            robot, cheat utility,
                                                                                            scraper, or
                                                                                            offline reader that accesses
                                                                                            the Services, or use or
                                                                                            launch any unauthorized
                                                                                            script or other software.
                                                                                        </li>
                                                                                        <li>Use a buying agent or
                                                                                            purchasing agent to make
                                                                                            purchases on the Services.
                                                                                        </li>
                                                                                        <li>Make any unauthorized use of
                                                                                            the Services, including
                                                                                            collecting usernames
                                                                                            and/or email addresses of
                                                                                            users by
                                                                                            electronic or other means
                                                                                            for the purpose of sending
                                                                                            unsolicited email, or
                                                                                            creating user accounts by
                                                                                            automated
                                                                                            means or under false
                                                                                            pretenses.</li>
                                                                                        <li>Use the Services as part of
                                                                                            any effort to compete with
                                                                                            us or otherwise use
                                                                                            the Services and/or the
                                                                                            Content for
                                                                                            any revenue-generating
                                                                                            endeavor or commercial
                                                                                            enterprise.</li>
                                                                                        <li>Use the Services to
                                                                                            advertise or offer to sell
                                                                                            goods and services.</li>
                                                                                        <li>Sell or otherwise transfer
                                                                                            your profile.</li>
                                                                                    </ul>

                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>USER
                                                                                    GENERATED
                                                                                    CONTRIBUTIONS</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">

                                                                                    <p>The Services may invite you to
                                                                                        chat, contribute to, or
                                                                                        participate in blogs,
                                                                                        message boards, online forums,
                                                                                        and
                                                                                        other functionality, and may
                                                                                        provide you with the opportunity
                                                                                        to create, submit,
                                                                                        post, display, transmit,
                                                                                        perform, publish, distribute, or
                                                                                        broadcast content and materials
                                                                                        to us or on the
                                                                                        Services, including but not
                                                                                        limited to text, writings,
                                                                                        video, audio, photographs,
                                                                                        graphics, comments,
                                                                                        suggestions, or personal
                                                                                        information or
                                                                                        other material (collectively,
                                                                                        "Contributions"). Contributions
                                                                                        may be viewable by
                                                                                        other users of the Services and
                                                                                        through third-party websites. As
                                                                                        such, any Contributions you
                                                                                        transmit may be
                                                                                        treated as non-confidential and
                                                                                        non-proprietary.</p>
                                                                                    <p>When you create or make available
                                                                                        any Contributions, you thereby
                                                                                        represent and
                                                                                        warrant that:</p>
                                                                                    <ul>
                                                                                        <li>The creation, distribution,
                                                                                            transmission, public
                                                                                            display, or performance,
                                                                                            and the accessing,
                                                                                            downloading, or
                                                                                            copying of your
                                                                                            Contributions do not and
                                                                                            will not infringe the
                                                                                            proprietary
                                                                                            rights, including but not
                                                                                            limited
                                                                                            to the copyright, patent,
                                                                                            trademark, trade secret, or
                                                                                            moral rights of any
                                                                                            third party.</li>
                                                                                        <li>You are the creator and
                                                                                            owner of or have the
                                                                                            necessary licenses, rights,
                                                                                            consents, releases, and
                                                                                            permissions
                                                                                            to use and to authorize us,
                                                                                            the Services, and other
                                                                                            users of the Services to
                                                                                            use your Contributions in
                                                                                            any
                                                                                            manner contemplated by the
                                                                                            Services and these Legal
                                                                                            Terms.</li>
                                                                                        <li>You have the written
                                                                                            consent, release, and/or
                                                                                            permission of each and every
                                                                                            identifiable individual
                                                                                            person in
                                                                                            your Contributions to use
                                                                                            the name or likeness of each
                                                                                            and every such
                                                                                            identifiable individual
                                                                                            person to
                                                                                            enable inclusion and use of
                                                                                            your Contributions in any
                                                                                            manner contemplated by
                                                                                            the Services and these Legal
                                                                                            Terms.</li>
                                                                                        <li>Your Contributions are not
                                                                                            false, inaccurate, or
                                                                                            misleading.</li>
                                                                                        <li>Your Contributions are not
                                                                                            unsolicited or unauthorized
                                                                                            advertising,
                                                                                            promotional materials,
                                                                                            pyramid schemes,
                                                                                            chain letters, spam, mass
                                                                                            mailings, or other forms of
                                                                                            solicitation.</li>
                                                                                        <li>Your Contributions are not
                                                                                            obscene, lewd, lascivious,
                                                                                            filthy, violent,
                                                                                            harassing, libelous,
                                                                                            slanderous, or
                                                                                            otherwise objectionable (as
                                                                                            determined by us).</li>
                                                                                        <li>Your Contributions do not
                                                                                            ridicule, mock, disparage,
                                                                                            intimidate, or abuse
                                                                                            anyone.</li>
                                                                                        <li>Your Contributions are not
                                                                                            used to harass or threaten
                                                                                            (in the legal sense of
                                                                                            those terms) any other
                                                                                            person
                                                                                            and to promote violence
                                                                                            against a specific person or
                                                                                            class of people.</li>
                                                                                        <li>Your Contributions do not
                                                                                            violate any applicable law,
                                                                                            regulation, or rule.
                                                                                        </li>
                                                                                        <li>Your Contributions do not
                                                                                            violate the privacy or
                                                                                            publicity rights of any
                                                                                            third party.</li>
                                                                                        <li>Your Contributions do not
                                                                                            violate any applicable law
                                                                                            concerning child
                                                                                            pornography or otherwise
                                                                                            intended to
                                                                                            protect the health or
                                                                                            well-being of minors.</li>
                                                                                        <li>Your Contributions do not
                                                                                            include any offensive
                                                                                            comments that are connected
                                                                                            to race, national origin,
                                                                                            gender,
                                                                                            sexual preference, or
                                                                                            physical handicap.</li>
                                                                                        <li>Your Contributions do not
                                                                                            otherwise violate, or link
                                                                                            to material that
                                                                                            violates, any provision of
                                                                                            these Legal
                                                                                            Terms, or any applicable law
                                                                                            or regulation.</li>
                                                                                    </ul>
                                                                                    <p>Any use of the Services in
                                                                                        violation of the foregoing
                                                                                        violates these Legal Terms
                                                                                        and may result in, among other
                                                                                        things, termination or
                                                                                        suspension of your rights to use
                                                                                        the Services.</p>

                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>CONTRIBUTION
                                                                                    LICENSE</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">

                                                                                    <p>By posting your Contributions to
                                                                                        any part of the Services or
                                                                                        making Contributions
                                                                                        accessible to the Services by
                                                                                        linking your account from the
                                                                                        Services to any of your social
                                                                                        networking
                                                                                        accounts, you automatically
                                                                                        grant, and you
                                                                                        represent and warrant that you
                                                                                        have the right to grant, to us
                                                                                        an unrestricted,
                                                                                        unlimited, irrevocable,
                                                                                        perpetual,
                                                                                        non-exclusive, transferable,
                                                                                        royalty-free, fully-paid,
                                                                                        worldwide right, and
                                                                                        license to host, use, copy,
                                                                                        reproduce,
                                                                                        disclose, sell, resell, publish,
                                                                                        broadcast, retitle, archive,
                                                                                        store, cache,
                                                                                        publicly perform, publicly
                                                                                        display,
                                                                                        reformat, translate, transmit,
                                                                                        excerpt (in whole or in part),
                                                                                        and distribute
                                                                                        such Contributions (including,
                                                                                        without
                                                                                        limitation, your image and
                                                                                        voice) for any purpose,
                                                                                        commercial, advertising, or
                                                                                        otherwise, and to prepare
                                                                                        derivative
                                                                                        works of, or incorporate into
                                                                                        other works, such Contributions,
                                                                                        and grant and
                                                                                        authorize sublicenses of the
                                                                                        foregoing. The use and
                                                                                        distribution may occur in any
                                                                                        media formats and through
                                                                                        any media channels.</p>
                                                                                    <p>This license will apply to any
                                                                                        form, media, or technology now
                                                                                        known or hereafter
                                                                                        developed and includes our use
                                                                                        of
                                                                                        your name, company name, and
                                                                                        franchise name, as applicable,
                                                                                        and any of the
                                                                                        trademarks, service marks, trade
                                                                                        names, logos, and personal and
                                                                                        commercial images you provide.
                                                                                        You waive all
                                                                                        moral rights in your
                                                                                        Contributions,
                                                                                        and you warrant that moral
                                                                                        rights have not otherwise been
                                                                                        asserted in your
                                                                                        Contributions.</p>
                                                                                    <p>We do not assert any ownership
                                                                                        over your Contributions. You
                                                                                        retain full ownership
                                                                                        of all of your Contributions and
                                                                                        any intellectual property rights
                                                                                        or other proprietary rights
                                                                                        associated with
                                                                                        your Contributions. We are not
                                                                                        liable
                                                                                        for any statements or
                                                                                        representations in your
                                                                                        Contributions provided by you in
                                                                                        any area of the Services. You
                                                                                        are
                                                                                        solely responsible for your
                                                                                        Contributions to the Services,
                                                                                        and you expressly
                                                                                        agree to exonerate us from any
                                                                                        and
                                                                                        all responsibility and to
                                                                                        refrain from any legal action
                                                                                        against us regarding
                                                                                        your Contributions.</p>
                                                                                    <p>We have the right, in our sole
                                                                                        and absolute discretion, (1) to
                                                                                        edit, redact, or
                                                                                        otherwise change any
                                                                                        Contributions;
                                                                                        (2) to re-categorize any
                                                                                        Contributions to place them in
                                                                                        more appropriate
                                                                                        locations on the Services; and
                                                                                        (3) to
                                                                                        pre-screen or delete any
                                                                                        Contributions at any time and
                                                                                        for any reason, without
                                                                                        notice. We have no obligation to
                                                                                        monitor your Contributions.</p>

                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>GUIDELINES
                                                                                    FOR
                                                                                    REVIEWS</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    We may provide you areas on the
                                                                                    Services to leave reviews or
                                                                                    ratings. When posting a
                                                                                    review, you must comply with the
                                                                                    following criteria:
                                                                                    </p>
                                                                                    <ol>
                                                                                        <li>You should have firsthand
                                                                                            experience with the
                                                                                            person/entity being
                                                                                            reviewed;
                                                                                        </li>
                                                                                        <li>Your reviews should not
                                                                                            contain offensive profanity
                                                                                            or abusive, racist,
                                                                                            offensive, or hateful
                                                                                            language;</li>
                                                                                        <li>Your reviews should not
                                                                                            contain discriminatory
                                                                                            references based on
                                                                                            religion,
                                                                                            race, gender, national
                                                                                            origin, age, marital status,
                                                                                            sexual orientation, or
                                                                                            disability;</li>
                                                                                        <li>Your reviews should not
                                                                                            contain references to
                                                                                            illegal activity;</li>
                                                                                        <li>You should not be affiliated
                                                                                            with competitors if posting
                                                                                            negative reviews;
                                                                                        </li>
                                                                                        <li>You should not make any
                                                                                            conclusions as to the
                                                                                            legality of conduct;</li>
                                                                                        <li>You may not post any false
                                                                                            or misleading statements;
                                                                                        </li>
                                                                                        <li>You may not organize a
                                                                                            campaign encouraging others
                                                                                            to post reviews, whether
                                                                                            positive or negative.</li>
                                                                                    </ol>
                                                                                    <p>
                                                                                        We may accept, reject, or remove
                                                                                        reviews in our sole discretion.
                                                                                        We have
                                                                                        absolutely no obligation to
                                                                                        screen reviews or to delete
                                                                                        reviews, even if anyone
                                                                                        considers reviews objectionable
                                                                                        or inaccurate. Reviews are not
                                                                                        endorsed by us
                                                                                        and do not necessarily represent
                                                                                        our opinions or the views of any
                                                                                        of our
                                                                                        affiliates or partners. We do
                                                                                        not assume liability for any
                                                                                        review or for any
                                                                                        claims, liabilities, or losses
                                                                                        resulting from any review.
                                                                                    </p>
                                                                                    <p>
                                                                                        By posting a review, you hereby
                                                                                        grant to us a perpetual,
                                                                                        non-exclusive,
                                                                                        worldwide, royalty-free, fully
                                                                                        paid, assignable, and
                                                                                        sublicensable right and
                                                                                        license to reproduce, modify,
                                                                                        translate, transmit by any
                                                                                        means, display,
                                                                                        perform, and/or distribute all
                                                                                        content relating to the review.
                                                                                    </p>
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>MOBILE
                                                                                    APPLICATION
                                                                                    LICENSE</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    If you access the Services via the
                                                                                    App, then we grant you a revocable,
                                                                                    non-exclusive, non-transferable,
                                                                                    limited right to install and use the
                                                                                    App on
                                                                                    wireless electronic devices owned or
                                                                                    controlled by you, and to access and
                                                                                    use the
                                                                                    App on such devices strictly in
                                                                                    accordance with the terms and
                                                                                    conditions of this
                                                                                    mobile application license contained
                                                                                    in these Legal Terms. You shall not:
                                                                                    </p>
                                                                                    <ol>
                                                                                        <li>Except as permitted by
                                                                                            applicable law, decompile,
                                                                                            reverse engineer,
                                                                                            disassemble, attempt to
                                                                                            derive the source code of,
                                                                                            or decrypt the App;</li>
                                                                                        <li>Make any modification,
                                                                                            adaptation, improvement,
                                                                                            enhancement, translation, or
                                                                                            derivative work from the
                                                                                            App;</li>
                                                                                        <li>Violate any applicable laws,
                                                                                            rules, or regulations in
                                                                                            connection with your
                                                                                            access or use of the App;
                                                                                        </li>
                                                                                        <li>Remove, alter, or obscure
                                                                                            any proprietary notice
                                                                                            (including any notice of
                                                                                            copyright or trademark)
                                                                                            posted by us or the
                                                                                            licensors of the App;</li>
                                                                                        <li>Use the App for any
                                                                                            revenue-generating endeavor,
                                                                                            commercial enterprise, or
                                                                                            other purpose for which it
                                                                                            is not designed or intended;
                                                                                        </li>
                                                                                        <li>Make the App available over
                                                                                            a network or other
                                                                                            environment permitting
                                                                                            access
                                                                                            or use by multiple devices
                                                                                            or users at the same time;
                                                                                        </li>
                                                                                        <li>Use the App for creating a
                                                                                            product, service, or
                                                                                            software that is, directly
                                                                                            or indirectly, competitive
                                                                                            with or in any way a
                                                                                            substitute for the App;</li>
                                                                                        <li>Use the App to send
                                                                                            automated queries to any
                                                                                            website or to send any
                                                                                            unsolicited commercial
                                                                                            email; or</li>
                                                                                        <li>Use any proprietary
                                                                                            information or any of our
                                                                                            interfaces or our other
                                                                                            intellectual property in the
                                                                                            design, development,
                                                                                            manufacture, licensing, or
                                                                                            distribution of any
                                                                                            applications, accessories,
                                                                                            or devices for use with the
                                                                                            App.</li>
                                                                                    </ol>
                                                                                    <h2>Apple and Android Devices</h2>
                                                                                    <p>
                                                                                        The following terms apply when
                                                                                        you use the App obtained from
                                                                                        either the Apple
                                                                                        Store or Google Play (each an
                                                                                        "App Distributor") to access the
                                                                                        Services:
                                                                                    </p>
                                                                                    <ol>
                                                                                        <li>The license granted to you
                                                                                            for our App is limited to a
                                                                                            non-transferable
                                                                                            license to use the
                                                                                            application on a device that
                                                                                            utilizes the Apple iOS or
                                                                                            Android operating systems,
                                                                                            as applicable, and in
                                                                                            accordance with the usage
                                                                                            rules set forth in the
                                                                                            applicable App Distributor's
                                                                                            terms of service;</li>
                                                                                        <li>We are responsible for
                                                                                            providing any maintenance
                                                                                            and support services with
                                                                                            respect to the App as
                                                                                            specified in the terms and
                                                                                            conditions of this mobile
                                                                                            application license
                                                                                            contained in these Legal
                                                                                            Terms or as otherwise
                                                                                            required
                                                                                            under applicable law, and
                                                                                            you acknowledge that each
                                                                                            App Distributor has no
                                                                                            obligation whatsoever to
                                                                                            furnish any maintenance and
                                                                                            support services with
                                                                                            respect to the App;</li>
                                                                                        <li>In the event of any failure
                                                                                            of the App to conform to any
                                                                                            applicable
                                                                                            warranty, you may notify the
                                                                                            applicable App Distributor,
                                                                                            and the App
                                                                                            Distributor, in accordance
                                                                                            with its terms and policies,
                                                                                            may refund the
                                                                                            purchase price, if any, paid
                                                                                            for the App, and to the
                                                                                            maximum extent
                                                                                            permitted by applicable law,
                                                                                            the App Distributor will
                                                                                            have no other warranty
                                                                                            obligation whatsoever with
                                                                                            respect to the App;</li>
                                                                                        <li>You represent and warrant
                                                                                            that (i) you are not located
                                                                                            in a country that is
                                                                                            subject to a US government
                                                                                            embargo, or that has been
                                                                                            designated by the US
                                                                                            government as a 'terrorist
                                                                                            supporting" country and (ii)
                                                                                            you are not listed
                                                                                            on any US government list of
                                                                                            prohibited or restricted
                                                                                            parties;</li>
                                                                                        <li>You must comply with
                                                                                            applicable third-party terms
                                                                                            of agreement when using
                                                                                            the App, e.g., if you have a
                                                                                            VoIP application, then you
                                                                                            must not be in
                                                                                            violation of their wireless
                                                                                            data service agreement when
                                                                                            using the App; and
                                                                                        </li>
                                                                                        <li>You acknowledge and agree
                                                                                            that the App Distributors
                                                                                            are third-party
                                                                                            beneficiaries of the terms
                                                                                            and conditions in this
                                                                                            mobile application license
                                                                                            contained in these Legal
                                                                                            Terms, and that each App
                                                                                            Distributor will have the
                                                                                            right (and will be deemed to
                                                                                            have accepted the right) to
                                                                                            enforce the terms
                                                                                            and conditions in this
                                                                                            mobile application license
                                                                                            contained in these Legal
                                                                                            Terms against you as a
                                                                                            third-party beneficiary
                                                                                            thereof.</li>
                                                                                    </ol>
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>SOCIAL
                                                                                    MEDIA</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    <p>
                                                                                        As part of the functionality of
                                                                                        the Services, you may link your
                                                                                        account with
                                                                                        online accounts you have with
                                                                                        third-party service providers
                                                                                        (each such account,
                                                                                        a "Third-Party Account") by
                                                                                        either:
                                                                                    </p>
                                                                                    <ol>
                                                                                        <li>Providing your Third-Party
                                                                                            Account login information
                                                                                            through the Services;
                                                                                            or</li>
                                                                                        <li>Allowing us to access your
                                                                                            Third-Party Account, as is
                                                                                            permitted under the
                                                                                            applicable terms and
                                                                                            conditions that govern your
                                                                                            use of each Third-Party
                                                                                            Account.</li>
                                                                                    </ol>
                                                                                    <p>
                                                                                        You represent and warrant that
                                                                                        you are entitled to disclose
                                                                                        your Third-Party
                                                                                        Account login information to us
                                                                                        and/or grant us access to your
                                                                                        Third-Party
                                                                                        Account, without breach by you
                                                                                        of any of the terms and
                                                                                        conditions that govern
                                                                                        your use of the applicable
                                                                                        Third-Party Account, and without
                                                                                        obligating us to pay
                                                                                        any fees or making us subject to
                                                                                        any usage limitations imposed by
                                                                                        the
                                                                                        third-party service provider of
                                                                                        the Third-Party Account.
                                                                                    </p>
                                                                                    <p>
                                                                                        By granting us access to any
                                                                                        Third-Party Accounts, you
                                                                                        understand that:
                                                                                    </p>
                                                                                    <ol>
                                                                                        <li>We may access, make
                                                                                            available, and store (if
                                                                                            applicable) any content that
                                                                                            you have provided to and
                                                                                            stored in your Third-Party
                                                                                            Account (the "Social
                                                                                            Network Content") so that it
                                                                                            is available on and through
                                                                                            the Services via
                                                                                            your account, including
                                                                                            without limitation any
                                                                                            friend lists.</li>
                                                                                        <li>We may submit to and receive
                                                                                            from your Third-Party
                                                                                            Account additional
                                                                                            information to the extent
                                                                                            you are notified when you
                                                                                            link your account with
                                                                                            the Third-Party Account.
                                                                                        </li>
                                                                                    </ol>
                                                                                    <p>
                                                                                        Depending on the Third-Party
                                                                                        Accounts you choose and subject
                                                                                        to the privacy
                                                                                        settings that you have set in
                                                                                        such Third-Party Accounts,
                                                                                        personally identifiable
                                                                                        information that you post to
                                                                                        your Third-Party Accounts may be
                                                                                        available on and
                                                                                        through your account on the
                                                                                        Services. Please note that if a
                                                                                        Third-Party Account
                                                                                        or associated service becomes
                                                                                        unavailable or our access to
                                                                                        such Third-Party
                                                                                        Account is terminated by the
                                                                                        third-party service provider,
                                                                                        then Social Network
                                                                                        Content may no longer be
                                                                                        available on and through the
                                                                                        Services.
                                                                                    </p>
                                                                                    <p>
                                                                                        You will have the ability to
                                                                                        disable the connection between
                                                                                        your account on the
                                                                                        Services and your Third-Party
                                                                                        Accounts at any time.
                                                                                    </p>
                                                                                    <p>
                                                                                        <strong>PLEASE NOTE THAT YOUR
                                                                                            RELATIONSHIP WITH THE
                                                                                            THIRD-PARTY SERVICE
                                                                                            PROVIDERS ASSOCIATED WITH
                                                                                            YOUR THIRD-PARTY ACCOUNTS IS
                                                                                            GOVERNED SOLELY BY
                                                                                            YOUR AGREEMENT(S) WITH SUCH
                                                                                            THIRD-PARTY SERVICE
                                                                                            PROVIDERS.</strong>
                                                                                    </p>
                                                                                    <p>
                                                                                        We make no effort to review any
                                                                                        Social Network Content for any
                                                                                        purpose,
                                                                                        including but not limited to,
                                                                                        for accuracy, legality, or
                                                                                        non-infringement, and
                                                                                        we are not responsible for any
                                                                                        Social Network Content.
                                                                                    </p>
                                                                                    <p>
                                                                                        You acknowledge and agree that
                                                                                        we may access your email address
                                                                                        book associated
                                                                                        with a Third-Party Account and
                                                                                        your contacts list stored on
                                                                                        your mobile device
                                                                                        or tablet computer solely for
                                                                                        purposes of identifying and
                                                                                        informing you of those
                                                                                        contacts who have also
                                                                                        registered to use the Services.
                                                                                    </p>
                                                                                    <p>
                                                                                        You can deactivate the
                                                                                        connection between the Services
                                                                                        and your Third-Party
                                                                                        Account by contacting us using
                                                                                        the contact information below or
                                                                                        through your
                                                                                        account settings (if
                                                                                        applicable). We will attempt to
                                                                                        delete any information
                                                                                        stored on our servers that was
                                                                                        obtained through such
                                                                                        Third-Party Account, except
                                                                                        the username and profile picture
                                                                                        that become associated with your
                                                                                        account.
                                                                                    </p>
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>ADVERTISERS
                                                                                </h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    We allow advertisers to display
                                                                                    their advertisements and other
                                                                                    information in
                                                                                    certain areas of the Services, such
                                                                                    as sidebar advertisements or banner
                                                                                    advertisements. We simply provide
                                                                                    the space to place such
                                                                                    advertisements, and we
                                                                                    have no other relationship with
                                                                                    advertisers.
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>SERVICES
                                                                                    MANAGEMENT
                                                                                </h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    <p>
                                                                                        We reserve the right, but not
                                                                                        the obligation, to:
                                                                                    </p>
                                                                                    <ol>
                                                                                        <li>Monitor the Services for
                                                                                            violations of these Legal
                                                                                            Terms;</li>
                                                                                        <li>Take appropriate legal
                                                                                            action against anyone who,
                                                                                            in our sole discretion,
                                                                                            violates the law or these
                                                                                            Legal Terms, including
                                                                                            without limitation,
                                                                                            reporting such user to law
                                                                                            enforcement authorities;
                                                                                        </li>
                                                                                        <li>In our sole discretion and
                                                                                            without limitation, refuse,
                                                                                            restrict access to,
                                                                                            limit the availability of,
                                                                                            or disable (to the extent
                                                                                            technologically
                                                                                            feasible) any of your
                                                                                            Contributions or any portion
                                                                                            thereof;</li>
                                                                                        <li>In our sole discretion and
                                                                                            without limitation, notice,
                                                                                            or liability, to
                                                                                            remove from the Services or
                                                                                            otherwise disable all files
                                                                                            and content that are
                                                                                            excessive in size or are in
                                                                                            any way burdensome to our
                                                                                            systems;</li>
                                                                                        <li>Otherwise manage the
                                                                                            Services in a manner
                                                                                            designed to protect our
                                                                                            rights and
                                                                                            property and to facilitate
                                                                                            the proper functioning of
                                                                                            the Services.</li>
                                                                                    </ol>
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>PRIVACY
                                                                                    POLICY</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    We care about data privacy and
                                                                                    security. Please review our Privacy
                                                                                    Policy. By using
                                                                                    the Services, you agree to be bound
                                                                                    by our Privacy Policy, which is
                                                                                    incorporated
                                                                                    into these Legal Terms. Please be
                                                                                    advised the Services are hosted in
                                                                                    the United
                                                                                    States. If you access the Services
                                                                                    from any other region of the world
                                                                                    with laws or
                                                                                    other requirements governing
                                                                                    personal data collection, use, or
                                                                                    disclosure that
                                                                                    differ from applicable laws in the
                                                                                    United States, then through your
                                                                                    continued use of
                                                                                    the Services, you are transferring
                                                                                    your data to the United States. and
                                                                                    you expressly
                                                                                    consent to have your data
                                                                                    transferred to and processed in the
                                                                                    United States.
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>COPYRIGHT
                                                                                    INFRINGEMENTS</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    We respect the intellectual property
                                                                                    rights or others. If you believe
                                                                                    that any
                                                                                    material available on or through the
                                                                                    Services infringes upon any
                                                                                    copyright you own
                                                                                    or control, please immediately
                                                                                    notify us using the contact
                                                                                    information provided
                                                                                    below (a "Notification"). A copy of
                                                                                    your Notification will be sent to
                                                                                    the person Who
                                                                                    posted or stored the material
                                                                                    addressed in the Notification.
                                                                                    Please be advised that
                                                                                    pursuant to applicable law you may
                                                                                    be held liable for damages if you
                                                                                    make material
                                                                                    misrepresentations in a
                                                                                    Notification. Thus, if you are not
                                                                                    sure that material
                                                                                    located on or linked to by the
                                                                                    Services infringes your copyright,
                                                                                    you should
                                                                                    consider first contacting an
                                                                                    attorney.
                                                                                </div>


                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>TERM
                                                                                    AND
                                                                                    TERMINATION</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    These Legal Terms shall remain in
                                                                                    full force and effect while you use
                                                                                    the Services.
                                                                                    WITHOUT LIMITING ANY OTHER PROVISION
                                                                                    OF THESE LEGAL TERMS. WE RESERVE THE
                                                                                    RIGHT TO,
                                                                                    IN OUR SOLE DISCRETION AND WITHOUT
                                                                                    NOTICE OR LIABILITY, DENY ACCESS TO
                                                                                    AND USE OF
                                                                                    THE SERVICES (INCLUDING BLOCKING
                                                                                    CERTAIN IP ADDRESSES), TO ANY PERSON
                                                                                    FOR ANY REASON
                                                                                    OR FOR NO REASON, INCLUDING WITHOUT
                                                                                    LIMITATION FOR BREACH OF ANY
                                                                                    REPRESENTATION,
                                                                                    WARRANTY, OR COVENANT CONTAINED IN
                                                                                    THESE LEGAL TERMS OR OF ANY
                                                                                    APPLICABLE LAW OR
                                                                                    REGULATION. WE MAY TERMINATE YOUR
                                                                                    USE OR PARTICIPATION IN THE SERVICES
                                                                                    OR DELETE
                                                                                    YOUR ACCOUNT AND ANY CONTENT OR
                                                                                    INFORMATION THAT YOU POSTED AT ANY
                                                                                    TIME, WITHOUT
                                                                                    WARNING, IN OUR SOLE DISCRETION.
                                                                                    If we terminate or suspend your
                                                                                    account for any reason, you are
                                                                                    prohibited from
                                                                                    registering and creating a new
                                                                                    account under your name, a fake or
                                                                                    borrowed name, or
                                                                                    the name of any third party, even if
                                                                                    you may be acting on behalf of the
                                                                                    third party.
                                                                                    In addition to terminating or
                                                                                    suspending your account, we reserve
                                                                                    the right to take
                                                                                    appropriate legal action, including
                                                                                    without limitation pursuing civil,
                                                                                    criminal, and
                                                                                    injunctive redress.
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>MODIFICATIONS
                                                                                    AND
                                                                                    INTERRUPTIONS</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    We reserve the right to change,
                                                                                    modify, or remove the contents of
                                                                                    the Services at
                                                                                    any time or for any reason at our
                                                                                    sole discretion without notice.
                                                                                    However, we have
                                                                                    no obligation to update any
                                                                                    information on our Services. We also
                                                                                    reserve the right
                                                                                    to modify or discontinue all or part
                                                                                    of the Services without notice at
                                                                                    any time. We
                                                                                    will not be liable to you or any
                                                                                    third party for any modification,
                                                                                    price change,
                                                                                    suspension. or discontinuance or the
                                                                                    Services.
                                                                                    We cannot guarantee the Services
                                                                                    will be available at all times. We
                                                                                    may experience
                                                                                    hardware, software, or other
                                                                                    problems or need to perform
                                                                                    maintenance related to the
                                                                                    Services. resulting in
                                                                                    interruptions. delays, or errors. We
                                                                                    reserve the right to
                                                                                    change. revise, update, suspend,
                                                                                    discontinue. or otherwise modify the
                                                                                    Services at
                                                                                    any time or for any reason Without
                                                                                    notice to you. You agree that we
                                                                                    have no
                                                                                    liability whatsoever for any loss,
                                                                                    damage. or inconvenience caused by
                                                                                    your inability
                                                                                    to access or use the Services during
                                                                                    any downtime or discontinuance of
                                                                                    the Services.
                                                                                    Nothing in these Legal Terms will be
                                                                                    construed to obligate us to maintain
                                                                                    and
                                                                                    support the Services or to supply
                                                                                    any corrections, updates. or
                                                                                    releases in
                                                                                    connection therewith.
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>GOVERNING
                                                                                    LAW</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    These Legal Terms and your use or
                                                                                    the Services are governed by and
                                                                                    construed in
                                                                                    accordance with the laws or the
                                                                                    State or Florida applicable to
                                                                                    agreements made and
                                                                                    to be entirely performed within the
                                                                                    State of Florida, without regard to
                                                                                    its conflict
                                                                                    of law principles.
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>DISPUTE
                                                                                    RESOLUTION
                                                                                </h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    <strong>Informal
                                                                                        Negotiations</strong>
                                                                                    <p>
                                                                                        To expedite resolution and
                                                                                        control the cost of any dispute,
                                                                                        controversy, or
                                                                                        claim related to these Legal
                                                                                        Terms (each a "Dispute" and
                                                                                        collectively, the
                                                                                        "Disputes") brought by either
                                                                                        you or us (individually, a
                                                                                        "Party" and
                                                                                        collectively, the "Parties"),
                                                                                        the Parties agree to first
                                                                                        attempt to negotiate
                                                                                        any Dispute (except those
                                                                                        Disputes expressly provided
                                                                                        below) informally for at
                                                                                        least thirty (30) days before
                                                                                        initiating arbitration. Such
                                                                                        informal negotiations
                                                                                        commence upon written notice
                                                                                        from one Party to the other
                                                                                        Party.
                                                                                    </p>
                                                                                    <strong>Binding Arbitration</strong>
                                                                                    <p>
                                                                                        If the Parties are unable to
                                                                                        resolve a Dispute through
                                                                                        informal negotiations,
                                                                                        the Dispute (except those
                                                                                        Disputes expressly excluded
                                                                                        below) will be finally and
                                                                                        exclusively resolved by binding
                                                                                        arbitration. YOU UNDERSTAND THAT
                                                                                        WITHOUT THIS
                                                                                        PROVISION, YOU WOULD HAVE THE
                                                                                        RIGHT TO SUE IN COURT AND HAVE A
                                                                                        JURY TRIAL. The
                                                                                        arbitration shall be commenced
                                                                                        and conducted under the
                                                                                        Commercial Arbitration
                                                                                        Rules of the American
                                                                                        Arbitration Association ("AAA")
                                                                                        and, where appropriate,
                                                                                        the AAP's Supplementary
                                                                                        Procedures for Consumer Related
                                                                                        Disputes (AAA Consumer
                                                                                        Rules"), both of which are
                                                                                        available at the American
                                                                                        Arbitration Association
                                                                                        (AAA) website. Your arbitration
                                                                                        fees and your share of
                                                                                        arbitrator compensation
                                                                                        shall be governed by the AAA
                                                                                        Consumer Rules and, where
                                                                                        appropriate, limited by
                                                                                        the AAA Consumer Rules. If such
                                                                                        costs are determined by the
                                                                                        arbitrator to be
                                                                                        excessive, we will pay all
                                                                                        arbitration fees and expenses.
                                                                                        The arbitration may be
                                                                                        conducted in person, through the
                                                                                        submission of documents, by
                                                                                        phone, or online.
                                                                                        The arbitrator will make a
                                                                                        decision in writing but need not
                                                                                        provide a statement
                                                                                        of reasons unless requested by
                                                                                        either Party. The arbitrator
                                                                                        must follow
                                                                                        applicable law, and any award
                                                                                        may be challenged if the
                                                                                        arbitrator fails to do
                                                                                        so. Except where otherwise
                                                                                        required by the applicable AAA
                                                                                        rules or applicable
                                                                                        law, the arbitration will take
                                                                                        place in Dade, Florida. Except
                                                                                        as otherwise
                                                                                        provided herein, the Parties may
                                                                                        litigate in court to compel
                                                                                        arbitration, stay
                                                                                        proceedings pending arbitration,
                                                                                        or to confine, modify, vacate,
                                                                                        or enter
                                                                                        judgment on the award entered by
                                                                                        the arbitrator.
                                                                                    </p>
                                                                                    <p>
                                                                                        If for any reason, a Dispute
                                                                                        proceeds in court rather than
                                                                                        arbitration, the
                                                                                        Dispute shall be commenced or
                                                                                        prosecuted in the state and
                                                                                        federal courts located
                                                                                        in Dade, Florida, and the
                                                                                        Parties hereby consent to, and
                                                                                        waive all defenses of
                                                                                        lack of personal jurisdiction,
                                                                                        and forum non conveniens with
                                                                                        respect to venue
                                                                                        and jurisdiction in such state
                                                                                        and federal courts. Application
                                                                                        of the United
                                                                                        Nations Convention on Contracts
                                                                                        for the International Sale of
                                                                                        Goods and the
                                                                                        Uniform Computer Information
                                                                                        Transaction Act (UCITA) are
                                                                                        excluded from these
                                                                                        Legal Terms.
                                                                                    </p>
                                                                                    <p>
                                                                                        In no event shall any Dispute
                                                                                        brought by either Party related
                                                                                        in any way to the
                                                                                        Services be commenced more than
                                                                                        one (1) year after the cause of
                                                                                        action arose. If
                                                                                        this provision is found to be
                                                                                        illegal or unenforceable, then
                                                                                        neither Party will
                                                                                        elect to arbitrate any Dispute
                                                                                        falling within that portion of
                                                                                        this provision
                                                                                        found to be illegal or
                                                                                        unenforceable, and such Dispute
                                                                                        shall be decided by a
                                                                                        court of competent jurisdiction
                                                                                        within the courts listed for
                                                                                        jurisdiction above,
                                                                                        and the Parties agree to submit
                                                                                        to the personal jurisdiction of
                                                                                        that court.
                                                                                    </p>
                                                                                    <strong>Restrictions</strong>
                                                                                    <p>
                                                                                        The Parties agree that any
                                                                                        arbitration shall be limited to
                                                                                        the Dispute between
                                                                                        the Parties individually. To the
                                                                                        full extent permitted by law:
                                                                                    </p>
                                                                                    <ol>
                                                                                        <li>No arbitration shall be
                                                                                            joined with any other
                                                                                            proceeding;</li>
                                                                                        <li>There is no right or
                                                                                            authority for any Dispute to
                                                                                            be arbitrated on a
                                                                                            class-action basis or to
                                                                                            utilize class action
                                                                                            procedures; and</li>
                                                                                        <li>There is no right or
                                                                                            authority for any Dispute to
                                                                                            be brought in a purported
                                                                                            representative capacity on
                                                                                            behalf of the general public
                                                                                            or any other
                                                                                            persons.</li>
                                                                                    </ol>
                                                                                    <strong>Exceptions to Informal
                                                                                        Negotiations and
                                                                                        Arbitration</strong>
                                                                                    <p>
                                                                                        The Parties agree that the
                                                                                        following Disputes are not
                                                                                        subject to the above
                                                                                        provisions concerning informal
                                                                                        negotiations binding
                                                                                        arbitration:
                                                                                    </p>
                                                                                    <ol>
                                                                                        <li>Any Disputes seeking to
                                                                                            enforce or protect, or
                                                                                            concerning the validity of
                                                                                            any of the intellectual
                                                                                            property rights of a Party;
                                                                                        </li>
                                                                                        <li>Any Dispute related to, or
                                                                                            arising from, allegations of
                                                                                            theft, piracy,
                                                                                            invasion of privacy, or
                                                                                            unauthorized use; and</li>
                                                                                        <li>Any claim for injunctive
                                                                                            relief.</li>
                                                                                    </ol>
                                                                                    <p>
                                                                                        If this provision is found to be
                                                                                        illegal or unenforceable, then
                                                                                        neither Party
                                                                                        will elect to arbitrate any
                                                                                        Dispute falling within that
                                                                                        portion of this
                                                                                        provision found to be illegal or
                                                                                        unenforceable, and such Dispute
                                                                                        shall be
                                                                                        decided by a court of competent
                                                                                        jurisdiction within the courts
                                                                                        listed for
                                                                                        jurisdiction above, and the
                                                                                        Parties agree to submit to the
                                                                                        personal jurisdiction
                                                                                        of that court.
                                                                                    </p>
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>CORRECTIONS
                                                                                </h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    There may be information on the
                                                                                    Services that contains typographical
                                                                                    errors,
                                                                                    inaccuracies. or omissions,
                                                                                    including descriptions, pricing,
                                                                                    availability, and
                                                                                    various other information. We
                                                                                    reserve the right to correct any
                                                                                    errors, inaccuracies,
                                                                                    or omissions and to change or update
                                                                                    the information on the Services at
                                                                                    any time,
                                                                                    without prior notice.
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>DISCLAIMER
                                                                                </h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">

                                                                                    <p>
                                                                                        THE SERVICES ARE PROVIDED ON AN
                                                                                        "AS-IS" AND "AS-AVAILABLE"
                                                                                        BASIS. YOU AGREE THAT
                                                                                        YOUR USE OF THE SERVICES WILL BE
                                                                                        AT YOUR SOLE RISK. TO THE
                                                                                        FULLEST EXTENT
                                                                                        PERMITTED BY LAW, WE DISCLAIM
                                                                                        ALL WARRANTIES, EXPRESS OR
                                                                                        IMPLIED, IN CONNECTION
                                                                                        WITH THE SERVICES AND YOUR USE
                                                                                        THEREOF, INCLUDING, WITHOUT
                                                                                        LIMITATION, THE
                                                                                        IMPLIED WARRANTIES OF
                                                                                        MERCHANTABILITY, FITNESS FOR A
                                                                                        PARTICULAR PURPOSE, AND
                                                                                        NON-INFRINGEMENT. WE MAKE NO
                                                                                        WARRANTIES OR REPRESENTATIONS
                                                                                        ABOUT THE ACCURACY OR
                                                                                        COMPLETENESS OF THE SERVICES'
                                                                                        CONTENT OR THE CONTENT OF ANY
                                                                                        WEBSITES OR MOBILE
                                                                                        APPLICATIONS LINKED TO THE
                                                                                        SERVICES, AND WE WILL ASSUME NO
                                                                                        LIABILITY OR
                                                                                        RESPONSIBILITY FOR ANY:
                                                                                    </p>
                                                                                    <ol>
                                                                                        <li>Errors, mistakes, or
                                                                                            inaccuracies of content and
                                                                                            materials;</li>
                                                                                        <li>Personal injury or property
                                                                                            damage of any nature
                                                                                            whatsoever, resulting from
                                                                                            your access to and use of
                                                                                            the Services;</li>
                                                                                        <li>Any unauthorized access to
                                                                                            or use of our secure servers
                                                                                            and/or any and all
                                                                                            personal information and/or
                                                                                            financial information stored
                                                                                            therein;</li>
                                                                                        <li>Any interruption or
                                                                                            cessation of transmission to
                                                                                            or from the Services;</li>
                                                                                        <li>Any bugs, viruses, trojan
                                                                                            horses, or the like which
                                                                                            may be transmitted to or
                                                                                            through the Services by any
                                                                                            third party; and/or</li>
                                                                                        <li>Any errors or omissions in
                                                                                            any content and materials or
                                                                                            for any loss or
                                                                                            damage of any kind incurred
                                                                                            as a result of the use of
                                                                                            any content posted,
                                                                                            transmitted, or otherwise
                                                                                            made available via the
                                                                                            Services.</li>
                                                                                    </ol>
                                                                                    <p>
                                                                                        WE DO NOT WARRANT, ENDORSE,
                                                                                        GUARANTEE, OR ASSUME
                                                                                        RESPONSIBILITY FOR ANY PRODUCT
                                                                                        OR SERVICE ADVERTISED OR OFFERED
                                                                                        BY A THIRD PARTY THROUGH THE
                                                                                        SERVICES, ANY
                                                                                        HYPERLINKED WEBSITE, OR ANY
                                                                                        WEBSITE OR MOBILE APPLICATION
                                                                                        FEATURED IN ANY BANNER
                                                                                        OR OTHER ADVERTISING, AND WE
                                                                                        WILL NOT BE A PARTY TO OR IN ANY
                                                                                        WAY BE RESPONSIBLE
                                                                                        FOR MONITORING ANY TRANSACTION
                                                                                        BETWEEN YOU AND ANY THIRD-PARTY
                                                                                        PROVIDERS OF
                                                                                        PRODUCTS OR SERVICES. AS WITH
                                                                                        THE PURCHASE OF A PRODUCT OR
                                                                                        SERVICE THROUGH ANY
                                                                                        MEDIUM OR IN ANY ENVIRONMENT,
                                                                                        YOU SHOULD USE YOUR BEST
                                                                                        JUDGMENT AND EXERCISE
                                                                                        CAUTION WHERE APPROPRIATE.
                                                                                    </p>
                                                                                </div>


                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>LIMITATIONS
                                                                                    OF
                                                                                    LIABILITY</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    <p>
                                                                                        IN NO EVENT WILL WE OR OUR
                                                                                        DIRECTORS, EMPLOYEES, OR AGENTS
                                                                                        BE LIABLE TO YOU OR
                                                                                        ANY THIRD PARTY FOR ANY DIRECT,
                                                                                        INDIRECT, CONSEQUENTIAL,
                                                                                        EXEMPLARY, INCIDENTAL,
                                                                                        SPECIAL, OR PUNITIVE DAMAGES,
                                                                                        INCLUDING LOST PROFIT, LOST
                                                                                        REVENUE, LOSS OF DATA,
                                                                                        OR OTHER DAMAGES ARISING FROM
                                                                                        YOUR USE OF THE SERVICES, EVEN
                                                                                        IF WE HAVE BEEN
                                                                                        ADVISED OF THE POSSIBILITY OF
                                                                                        SUCH DAMAGES. NOTWITHSTANDING
                                                                                        ANYTHING TO THE
                                                                                        CONTRARY CONTAINED HEREIN, OUR
                                                                                        LIABILITY TO YOU FOR ANY CAUSE
                                                                                        WHATSOEVER AND
                                                                                        REGARDLESS OF THE FORM OF THE
                                                                                        ACTION, WILL AT ALL TIMES BE
                                                                                        LIMITED TO THE AMOUNT
                                                                                        PAID, IF ANY, BY YOU TO US
                                                                                        DURING THE SIX (6) MONTH PERIOD
                                                                                        PRIOR TO ANY CAUSE OF
                                                                                        ACTION ARISING. CERTAIN US STATE
                                                                                        LAWS AND INTERNATIONAL LAWS DO
                                                                                        NOT ALLOW
                                                                                        LIMITATIONS ON IMPLIED
                                                                                        WARRANTIES OR THE EXCLUSION OR
                                                                                        LIMITATION OF CERTAIN
                                                                                        DAMAGES. IF THESE LAWS APPLY TO
                                                                                        YOU, SOME OR ALL OF THE ABOVE
                                                                                        DISCLAIMERS OR
                                                                                        LIMITATIONS MAY NOT APPLY TO
                                                                                        YOU, AND YOU MAY HAVE ADDITIONAL
                                                                                        RIGHTS.
                                                                                    </p>
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>INDEMNIFICATION
                                                                                </h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    <p>
                                                                                        You agree to defend, indemnify,
                                                                                        and hold us harmless, including
                                                                                        our
                                                                                        subsidiaries, affiliates, and
                                                                                        all of our respective officers,
                                                                                        agents, partners,
                                                                                        and employees, from and against
                                                                                        any loss, damage, liability,
                                                                                        claim, or demand,
                                                                                        including reasonable attorneys'
                                                                                        fees and expenses, made by any
                                                                                        third party due
                                                                                        to or arising out of:
                                                                                    </p>
                                                                                    <ol>
                                                                                        <li>Your Contributions;</li>
                                                                                        <li>Your use of the Services;
                                                                                        </li>
                                                                                        <li>Breach of these Legal Terms;
                                                                                        </li>
                                                                                        <li>Any breach of your
                                                                                            representations and
                                                                                            warranties set forth in
                                                                                            these Legal
                                                                                            Terms;</li>
                                                                                        <li>Your violation of the rights
                                                                                            of a third party, including
                                                                                            but not limited to
                                                                                            intellectual property
                                                                                            rights; or</li>
                                                                                        <li>Any overt harmful act toward
                                                                                            any other user of the
                                                                                            Services with whom you
                                                                                            connected via the Services.
                                                                                        </li>
                                                                                    </ol>
                                                                                    <p>
                                                                                        Notwithstanding the foregoing,
                                                                                        we reserve the right, at your
                                                                                        expense, to assume
                                                                                        the exclusive defense and
                                                                                        control of any matter for which
                                                                                        you are required to
                                                                                        indemnify us, and you agree to
                                                                                        cooperate, at your expense, with
                                                                                        our defense of
                                                                                        such claims. We will use
                                                                                        reasonable efforts to notify you
                                                                                        of any such claim,
                                                                                        action, or proceeding which is
                                                                                        subject to this indemnification
                                                                                        upon becoming
                                                                                        aware of it.
                                                                                    </p>
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>USER
                                                                                    DATA</h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    We will maintain certain data that
                                                                                    you transmit to the Services for the
                                                                                    purpose of
                                                                                    managing the performance of the
                                                                                    Services, as well as data relating
                                                                                    to your use of
                                                                                    the Services. Although we perform
                                                                                    regular routine backups of data, you
                                                                                    are solely
                                                                                    responsible for all data that you
                                                                                    transmit or that relates to any
                                                                                    activity you have
                                                                                    undertaken using the Services. You
                                                                                    agree that we shall have no
                                                                                    liability to you for
                                                                                    any loss or corruption of any such
                                                                                    data. and you hereby waive any right
                                                                                    of action
                                                                                    against us arising from any such
                                                                                    loss or corruption of such data.
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>ELECTRONIC
                                                                                    COMMUNICATIONS, TRANSACTIONS, AND
                                                                                    SIGNATURES
                                                                                </h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    Visiting the Services, sending us
                                                                                    emails, and completing online forms
                                                                                    constitute
                                                                                    electronic communications. You
                                                                                    consent to receive electronic
                                                                                    communications, and you
                                                                                    agree that all agreements, notices,
                                                                                    disclosures, and other
                                                                                    communications we provide
                                                                                    to you electronically, via email and
                                                                                    on, the Services, satisfy any legal
                                                                                    requirement
                                                                                    that such communication be in
                                                                                    writing. YOU HEREBY AGREE TO THE USE
                                                                                    OF ELECTRONIC
                                                                                    SIGNATURES, CONTRACTS, ORDERS. AND
                                                                                    OTHER RECORDS, AND TO ELECTRONIC
                                                                                    DELIVERY OF
                                                                                    NOTICES, POLICIES, AND RECORDS OF
                                                                                    TRANSACTIONS INITIATED OR COMPLETED
                                                                                    BY US OR VIA
                                                                                    THE SERVICES. You hereby waive any
                                                                                    rights or requirements under any
                                                                                    statutes,
                                                                                    regulations, rules, ordinances, or
                                                                                    other laws in any jurisdiction which
                                                                                    require an
                                                                                    original signature or delivery or
                                                                                    retention of non-electronic records,
                                                                                    or to
                                                                                    payments or the granting of credits
                                                                                    by any means other than electronic
                                                                                    means.
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>CALIFORNIA
                                                                                    USERS
                                                                                    AND RESIDENTS
                                                                                </h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    If any complaint with us is not
                                                                                    satisfactorily resolved. you can
                                                                                    contact the
                                                                                    Complaint Assistance Unit of the
                                                                                    Division of Consumer Services of the
                                                                                    California
                                                                                    Department of Consumer Affairs in
                                                                                    writing at 1625 North Market Blvd.,
                                                                                    Suite N 112,
                                                                                    Sacramento, California 95834 or by
                                                                                    telephone at (800) 952-5210 or (916)
                                                                                    445-1254.
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>MISCELLANEOUS
                                                                                </h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    These Legal Terms and any policies
                                                                                    or operating rules posted by us on
                                                                                    the Services
                                                                                    or in respect to the Services
                                                                                    constitute the entire agreement and
                                                                                    understanding
                                                                                    between you and us. Our failure to
                                                                                    exercise or enforce any right or
                                                                                    provision of
                                                                                    these Legal Tenns shall not operate
                                                                                    as a waiver of such right or
                                                                                    provision. These
                                                                                    Legal Terms operate to the fullest
                                                                                    extent permissible by law. We may
                                                                                    assign any or
                                                                                    all of our rights and obligations to
                                                                                    others at any time. We shall not be
                                                                                    responsible
                                                                                    or liable for any loss. damage,
                                                                                    delay, or failure to act caused by
                                                                                    any cause beyond
                                                                                    our reasonable control. If any
                                                                                    provision or part of a provision of
                                                                                    these Legal Terms
                                                                                    is determined to be unlawful. void.
                                                                                    or unenforceable. that provision or
                                                                                    part of the
                                                                                    provision is deemed severable from
                                                                                    these Legal Terms and does not
                                                                                    affect the
                                                                                    validity and enforceability of any
                                                                                    remaining provisions. There is no
                                                                                    joint venture,
                                                                                    partnership, employment or agency
                                                                                    relationship created between you and
                                                                                    us as a
                                                                                    result of these Legal Terms or use
                                                                                    of the Services. You agree that
                                                                                    these Legal Terms
                                                                                    will not be construed against us by
                                                                                    virtue of having drafted them. You
                                                                                    hereby waive
                                                                                    any and all defenses you may have
                                                                                    based on the electronic form of
                                                                                    these Legal Terms
                                                                                    and the lack of signing by the
                                                                                    parties hereto to execute these
                                                                                    Legal Terms.
                                                                                </div>

                                                                                <h3 role="tab"><span
                                                                                        class="ui-accordion-header-icon ui-icon"></span>CONTACT
                                                                                    US
                                                                                </h3>
                                                                                <div aria-hidden="false"
                                                                                    aria-expanded="true" role="tabpanel"
                                                                                    style="display: block;">
                                                                                    <p>
                                                                                        In order to resolve a complaint
                                                                                        regarding the Services or to
                                                                                        receive further
                                                                                        information regarding the use of
                                                                                        the Services, please contact us
                                                                                        at:
                                                                                    </p>
                                                                                    <p>
                                                                                        Storee Tree, LLC<br>
                                                                                        2721 Runyon Circle<br>
                                                                                        Orlando, FL 32837<br>
                                                                                        United States<br>
                                                                                        Email: info@storeetree.com
                                                                                    </p>
                                                                                </div>




                                                                            </div>
                                                                        </div>
                                                                        <!--faq_single_block-->
                                                                    </div>
                                                                    <!--faq_content-->
                                                                </div>
                                                            </div>

                                                            <!-- t&c -->


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- ---Body--- -->
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <div class="mdl_footer">
                                                         <button type="button" class=" submit_btn" data-dismiss="modal"
                                                aria-label="Close">Ok </button>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
  <!-- ----------------------------------Model End------------------------ -->
                                @error('accept_terms')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror

                            </div>


                            <div class="col-xs-12">
                                <input type="submit" class="submit_btn" id="pay_btn" value="Submit">
                            </div>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    </div>
    <!--contact_section-->



</div>
<!--content-->

<script type="text/javascript">

// document.getElementById('expiration_inp').addEventListener('input',function(e){

//      if (!eventIsEnterKey(event)) {
//             let value = document.getElementById('expiration_inp').value;
      
//             value = value.replace(/\D/g, '');      
//             if (value.length >= 2) {
//                 value = value.slice(0, 2) + '/' + value.slice(2);
//             }

//             if (value.length > 7) {
//                 value = value.slice(0, 7);
//             }

//            document.getElementById('expiration_inp').value = value;
//         }
// });
       
//     function eventIsEnterKey(event) {
//       return event.key === "Backspace" || event.key === "Delete" ;
//     }

</script>
@endsection