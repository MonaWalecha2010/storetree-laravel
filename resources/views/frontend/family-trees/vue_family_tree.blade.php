<?php
    $all_relations = Config::get('constants.RELATIONS');
    $relations = [];
 	$relations_patner = [];
    $relation_mother = [];
    $relation_father = [];
	
    foreach ($all_relations as $key => $value) {
        if(in_array($key,[9,11,14,19,21,23,26,27])){
            $relations[$key] = $value;
        }
    }
	
    if(isset($main_person['pids'])){
        if($main_person['pids'][0]!=''){
            $u = \App\Models\FamilyTree::where('user_id', Auth::user()->id)->first();
            $u_partner= \App\Models\FamilyTree::where('id', $u->pid)->first();
            
            if(Auth::user()->gender != $u_partner->gender){
                foreach ($all_relations as $key => $value) {
                    if(in_array($key,[10,12,19,21,16,18])){
                       $relations[$key] = $value;
                    }
                }
            }
            else{
                foreach ($all_relations as $key => $value) {
                    if(in_array($key,[10,12,19,21,16,18])){
                       $relations[$key] = $value;
                    }
                }
                // unset($relations[26],$relations[14]);                
            }   

            if ($u_partner != null) {
                // unset($relations[26],$relations[27],$relations[14]);     
            }
        }
    }

    // father 01
    if(isset($main_person['fid'])){
        if($main_person['fid']!=''){
        foreach ($all_relations as $key => $value) {
            if(in_array($key,[1,2,15,17])){
                $relations[$key] = $value;
            }
        }
    }
    }
    // mother 01
    if(isset($main_person['mid'])){
        if($main_person['mid']!=''){
        foreach ($all_relations as $key => $value) {
            if(in_array($key,[3,4])){
                $relations[$key] = $value;
            }
        }
    }
    }
    foreach ($new_datas as $data){
        // if(intval($data['relation_id'])==11){
        //     foreach ($all_relations as $key => $value) {
        //         if(in_array($key,[5,6])){
        //             $relations[$key] = $value;
        //         }
        //     }
        // }
        // if(intval($data['relation_id'])==12){
        //     foreach ($all_relations as $key => $value) {
        //         if(in_array($key,[7,8])){
        //             $relations[$key] = $value;
        //         }
        //     }
        // }
        // son's wife and daughter's husband
        if(intval($data['relation_id'])==19){
            
            if($data['gender']=='male'){
                foreach ($all_relations as $key => $value) {
                    if(in_array($key,[20,28,29])){
                        $relations[$key] = $value;
                    }
                }
            }
            if($data['gender']=='female'){
                foreach ($all_relations as $key => $value) {
                    if(in_array($key,[22])){
                        $relations[$key] = $value;
                    }
                }
            }
        }


        if(intval($data['relation_id'])==21){
           
            if($data['gender']=='male'){
                foreach ($all_relations as $key => $value) {
                    if(in_array($key,[20])){
                        $relations[$key] = $value;
                    }
                }
            }
            if($data['gender']=='female'){
                foreach ($all_relations as $key => $value) {
                    if(in_array($key,[22,30,31])){
                        $relations[$key] = $value;
                    }
                }
            }
        }
       
       
        if(intval($data['relation_id'])==19){
            if(isset($data['pids'])){
                foreach ($all_relations as $key => $value) {
                    if(in_array($key,[24,25])){
                        $relations[$key] = $value;
                    }
                }
             }
        }

        if(intval($data['relation_id'])==21){  
            if(isset($data['pids'])){
                foreach ($all_relations as $key => $value) {
                    if(in_array($key,[24,25])){
                        $relations[$key] = $value;
                    }
                }
            }
        }


        if(intval($data['relation_id'])==24){  
              foreach ($all_relations as $key => $value) {
                    if(in_array($key,[32,33,34])){
                        $relations[$key] = $value;
                    }
                }
        }

        if(intval($data['relation_id'])==25){  
            foreach ($all_relations as $key => $value) {
                  if(in_array($key,[35,36,37])){
                      $relations[$key] = $value;
                  }
              }
      }
        //grand son add relation tree
        // if(intval($data['relation_id'])==19){
        //     if($data['gender']=='male'){
        //         foreach ($all_relations as $key => $value) {
        //             if(in_array($key,[20,24,25])){
        //                 $relations[$key] = $value;
        //             }
        //         }
        //     }
        //     if($data['gender']=='female'){
        //         foreach ($all_relations as $key => $value) {
        //             if(in_array($key,[22,24,25])){
        //                 $relations[$key] = $value;
        //             }
        //         }
        //     }
        // }
    }
   

?>
@extends('frontend.layouts.app')

@section('title')
<title>Storee Tree: Family Tree</title>
@endsection

@section('header')
<style>
.chosen-container .chosen-results {
    max-height: 200px;
}

.connector {
    width: 25px;
    top: 0px !important;
}

.family_tree_wrapper ul>li {
    margin: 0 !important;
}

.family_tree_wrapper h3 {
    font-size: 16px;
    margin: 0;
}

.family_tree_wrapper h4 {
    font-size: 14px;
    color: #cb9191 !important;
}

.family_tree_wrapper tree li {
    margin: 0px;
}

.family_tree_wrapper .tree li a {
    border: none;
    padding: 0px;
}

.member-view-box {
    padding: 20px 10px 10px 10px !important;
}

#div__fixBar {
    display: none;
}

.__container {
    padding: 0px !important;
}

.family_tree_wrapper {
    margin: 0;
    padding: 0;
}

.fm_tree_wrapper_inner {
    margin: 0px;
}

body {
    background: #fff !important;
}

.family_tree_wrapper h3 {
    font-size: 14px;
    margin: 0;
    width: 190px !important;
}


.family_tree_wrapper h4 {
    font-size: 12px;
    margin: 0;
    width: 90px !important;
    white-space: nowrap;
    word-break: break-all;
}
#showProfile .modal-body {
    /* background: #F57C00; */
}

#showProfile .modal-content {
    margin-top: 150px;
}

#showProfile .modal_title {
    background: #5B6EAB;
}

.user_profile p {
    font-size: 16px !important;
    color: #000 !important;
}

.user_profile span {
    font-size: 16px !important;
    color: #000 !important;
}

i {
    color: #333 !important;
}

.pr_photo {
    margin-bottom: 0;
}

.swal2-container {
    z-index: 7000 !important;
}

.member-view-box {
    width: 100px !important;
}
</style>
@endsection
@section('content')

<!-- <style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    html, body {
       /* width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;*/
       /* overflow: hidden;*/
        font-family: Helvetica;
    }

    #tree {
        width: 100%;
        height: 100%;
    }
</style> -->

<div class="banner_subpage" style="background-image:url(https://storeetree.com/images/frontend/subpage_bg_1.jpg)">
    <h1>Family Tree</h1>

</div>

<div class="content_area cn_gap_top">
    <div class="familyTree_list_section">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="blog_filter_section">
                        <div class="blog_tittle_left">Family Tree Of {{$authuser->full_name}} </div>
                        <div class="filter_select fm_ad">
                            <a href="#" data-toggle="modal" data-target="#new_member_pp">Add Member</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <div class="family_tree_wrapper">
                        <div class="fm_tree_wrapper_inner">


                            <!-- <family-tree></family-tree> -->
                            <div id="tree">

                            </div>
                            <div id="divFamily"></div>
                            
                            {{-- <family-tree1 datas='@json($datas)'></family-tree1> --}}
                            {{-- {!! @json($datas) !!} --}}

                        </div>
                    </div>
                </div>
            </div>

            @if($friends[0] != "")
            <h1 class="text-danger text-center friend_title">Friends</h1>
            <br>
            <div class="row">
                <div class="col-sm-2">

                </div>
                <div class="col-sm-8">
                    <table class="table friend_table">
                        <thead>
                            <tr style="color:black;font-weight:bold" class="friend_table_th">

                                <th scope="col">Name</th>
                                <th scope="col " class="text-right">Profile</th>
                            </tr>
                        </thead>
                        <tbody>

                            @foreach($friends as $friend)
                            @php
                            $friend_data = \App\Models\FamilyTree::where('id',$friend)->first();

                            @endphp
                            <tr>
                                <td class="text-name" style="color:blue;">{{$friend_data['first_name']}} {{$friend_data['last_name']}}
                                </td>
                                <td class="text-right">
                                    <button id="friend_{{$friend_data['user_id']}}"
                                        onclick="open_friend_popup({{$friend_data['user_id']}})"
                                        style="border: none;font-size: 22px; padding: 5px; background: transparent;">
                                        <i class="fa fa-user"></i>
                                    </button>
                                </td>
                            </tr>


                            <button id="popup_{{$friend_data['user_id']}}" href="#" data-toggle="modal"
                                data-target="#friend_Profile_{{$friend_data['user_id']}}">
                            </button>

                            <!-- Modal -->
                            <div class="modal fade modal-vcenter" id="friend_Profile_{{$friend_data['user_id']}}"
                                role="dialog">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">

                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <div class="modal_tittle">
                                                        <div class="col-md-11 col-sm-11 col-xs-10">
                                                            <h2>Friend's Profile</h2>
                                                        </div>
                                                        <div class="col-md-1 col-sm-1 col-xs-2 d-flex justify-content-end">
                                                            <button
                                                                style="border: none;font-size: 22px; padding: 0px; background: transparent;"
                                                                id="closeButton2" type="button" data-dismiss="modal"><i
                                                                    class="fa fa-times"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <div class="user_profile">
                                                        <input type="text" hidden
                                                            id="profile_id_{{$friend_data['user_id']}}"
                                                            value="{{$friend_data['user_id']}}">

                                                            <div class="friends_modal">
                                                                <div class="col-md-7 col-sm-7 col-xs-7">
                                                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                                                        <div class="col-md-3 col-sm-3 col-xs-3">
                                                                           <p>Name: </p>
                                                                        </div> 
                                                                        <div class="col-md-9 col-sm-9 col-xs-9">
                                                                          <p id="user_p_name">{{$friend_data['first_name']}}
                                                                {{$friend_data['last_name']}}</p>
                                                                        </div>
                                                                    </div>
                                                                  <div class="col-md-12 col-sm-12 col-xs-12">
                                                                      <div class="col-md-3 col-sm-3 col-xs-3">
                                                                           <p>Gender: </p>                                                                      
                                                                       </div>
                                                                      <div class="col-md-9 col-sm-9 col-xs-9">
                                                                          <p id="user_p_gender">{{ucfirst($friend_data['gender'])}}</p>
                                                                      </div>
                                                                  </div>
                                                             </div>

                                                            <div class="col-md-5 col-sm-5 col-xs-5">
                                                                 <div class="pr_photo" style="border-radius: 0;">
                                                                    <img src="http://127.0.0.1:8000/images/frontend/{{ Auth::user()->gender=='male'?'photo_male.png':'photo_female.png'}}"
                                                                        alt="" style="border-radius: 50%;" />
                                                                </div>
                                                            </div>
                                                        </div>                                               
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-5 col-sm-5 col-xs-3"></div>
                                                <div class="col-md-2 col-sm-2 col-xs-12 footer_modal_icon">
                                                    <button id="user_p_profile"
                                                        onclick="viewfriendProfile({{$friend_data['user_id']}})"
                                                        title="View User Profile"
                                                        style="border: none;font-size: 22px; padding: 5px; background: transparent;"><i
                                                            class="fa fa-user"></i></button>
                                                     <button id="user_p_delete" onclick="deleteFriend({{$friend_data['user_id']}})"
                                                        title="Delete User"
                                                        style="border: none;font-size: 22px; padding: 5px; background: transparent;"><i
                                                            class="fa fa-trash"></i></button>
                                                            <button id="user_p_update" onclick="updateFriend({{$friend_data['user_id']}})"
                                                        title="Update User"
                                                        style="border: none;font-size: 22px; padding: 5px; background: transparent;"><i
                                                            class="fa fa-pencil"></i></button>
                                                </div>
                                                <div class="col-md-5 col-sm-5 col-xs-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            @endforeach
                        </tbody>
                    </table>

                </div>
                <div class="col-sm-2">

                </div>

            </div>
            @endif


        </div>
    </div>
</div>



<button id="testButton" href="#" data-toggle="modal" data-target="#showProfile">
</button>
<div class="modal fade modal-vcenter member_plus" id="new_member_pp" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <button type="button" class="close modalFormClose" data-dismiss="modal" aria-label="Close"><span
                    aria-hidden="true"></span></button>
            <div class="modal-body">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="modal_tittle">
                            <h2>Add peoples to your family tree and friend connections</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="modal-block">
                            <div class="modal-form">
                                {!! Form::open(['method'=>'POST', 'action'=>'frontend\FamilyTreeController@store',
                                'onsubmit'=>'return checkRelationValid()', 'id' => 'relationForm']) !!}
                                <div class="form-group">
                                    <div class="form_select_common select_common">
                                        <select class="option-select form-control" name="aa"
                                            onchange="setMemberInfo(this.value)" id="selectedUser">
                                            <option value="">Choose Member From Existing User</option>
                                            @php($userList=App\Models\User::orderBy('id','asc')->get())
                                            @foreach($userList as $key=>$userInfo)
                                            <option value="{{$userInfo}}">
                                                {{$userInfo->first_name.' '.$userInfo->last_name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <!--form-group-->
                                <div class="form-group">
                                    <input type="text" name="first_name" placeholder="First Name" id="first_name"
                                        class="form-control">
                                </div>

                                <div class="form-group">
                                    <input type="text" name="last_name" placeholder="Last Name" id="last_name"
                                        class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="email" name="relation_email" placeholder="Email Address"
                                        id="email_address" class="form-control">
                                </div>


                                <!-- <div class="form-group">
                                    <div class="form_select_common select_common">
                                        <select class="option-select" id="relation_id" name="relation_id">
                                            <option value="">Choose a Relation</option>
                                            <option value="2">Father</option>
                                            <option value="3">Mother</option>
                                            <option value="4">Partner</option>
                                            <option value="5">Son</option>
                                            <option value="6">Daughter</option>
                                            <option value="6">Grand Father</option>
                                            <option value="6">Grand MOther</option>
                                        </select>
                                    </div>
                                </div> -->

                                <div class="form-group">
                                    <div class="form_select_common select_common">

                                        <select class="option-select form-control" id="relation_id" name="relation_id"
                                            onchange="getConnectWith(this.value)">
                                            <option value="">Choose a Relation</option>
                                            @foreach($relations as $key=>$relationInfo)
                                            <option value="{{$key}}">{{$relationInfo}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>

                                <div id="connectWith" class="form-group "></div>

                                <div class="form-group">
                                    <div class="form_select_common select_common">
                                        <select class="option-select form-control" name="gender" id="gender2">
                                            <option value="">--Select Gender--</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="Other not identified here">Other Not Identified</option>
                                            <option value="Prefer not to answer">Prefer to Not Answer</option>
                                        </select>
                                    </div>
                                </div>
                                <!--form-group-->

                                <!-- <div class="form-group">
                                    <input type="text" name="relation_dob" class="datepicker form-control dob_input"
                                        id="relation_dob" placeholder="Date Of Birth (MM/DD/YYYY)" autocomplete="off"
                                        data-provide="datepicker">
                                </div>
 -->


                                <div class="form-group">
                                    <div class="cn_group dob_block">
                                        <div class="cn_label">Date Of Birth</div>
                                        <div class="form_select_common select_common dob_flex">
                                            {!! Form::selectRange('day', 01, 31, null, ['class' => 'form-control',
                                            'placeholder' => 'Day']) !!}
                                            {!! Form::selectMonth('month', null, ['class' => 'form-control',
                                            'placeholder' => 'Month']) !!}
                                            {!! Form::selectRange('year', date('Y') - 100, date('Y'), null, ['class' =>
                                            'form-control', 'placeholder' => 'Year', 'max' => date('Y')]) !!}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="form_select_common select_common">
                                        <select class="option-select form-control" name="living" id="living">
                                            <option value="">Living or Deceased?</option>
                                            <option value="1">Living</option>                                            
                                            <option value="0">Deceased</option>
                                        </select>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <div class="row padding_gap_3">
                                        <div class="col-xs-6 col-sm-6 col-md-6">
                                            <div class="modal_confirm_btn"><button type="submit" class="btn_member">Add
                                                    Member</button></div>
                                        </div>
                                        <div class="col-xs-6 col-sm-6 col-md-6">
                                            <div class="modal_cancel_btn modalFormClose"><a href="#"
                                                    data-dismiss="modal" aria-label="Close">Cancel</a></div>
                                        </div>
                                    </div>
                                </div>
                                {!! Form::close() !!}
                            </div>
                            <!--end modal-left-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>








<!-- -------------------Update Member------------------------- -->

<a href="#" data-toggle="modal" id="update_member_btn" data-target="#update_member_modal"></a>


<div class="modal fade modal-vcenter member_plus" id="update_member_modal" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <button type="button" class="close modalFormClose" data-dismiss="modal" aria-label="Close"><span
                    aria-hidden="true"></span></button>
            <div class="modal-body">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="modal_tittle">
                            <h2>Update Family Member/Friend</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="modal-block">
                            <div class="modal-form">
                                {!! Form::open(['method'=>'POST',
                                'action'=>'frontend\FamilyTreeController@update_member_record', 'id' =>
                                'updaterelationForm', 'onsubmit' => 'return checkRelationValid2()' ]) !!}
                                <div class="form-group">
                                    <div class="form_select_common select_common">
                                        <select class="option-select form-control" name="aa"
                                            onchange="setMemberInfo(this.value)" id="selectedUser">
                                            <option value="">Choose Member From Existing User</option>
                                            @php($userList=App\Models\User::orderBy('id','asc')->get())
                                            @foreach($userList as $key=>$userInfo)
                                            <option value="{{$userInfo}}">
                                                {{$userInfo->first_name.' '.$userInfo->last_name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <!--form-group-->
                                <div class="form-group">
                                    <input type="hidden" name="upd_user_id" id="upd_user_id" class="form-control">
                                </div>

                                <div class="form-group">
                                    <input type="text" name="upd_first_name" placeholder="First Name"
                                        id="upd_first_name" class="form-control">
                                </div>

                                <div class="form-group">
                                    <input type="text" name="upd_last_name" placeholder="Last Name" id="upd_last_name"
                                        class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="email" name="upd_relation_email" placeholder="Email Address"
                                        id="upd_email_address" class="form-control">
                                </div>

                                <div class="form-group">
                                    <div class="form_select_common select_common">
                                        <select disabled class="option-select form-control" disabled
                                            id="upd_relation_id" name="upd_relation_id"
                                            onchange="getConnectWith(this.value)">
                                            <option value="">Choose a Relation</option>
                                            @foreach($relations as $key=>$relationInfo)
                                            <option value="{{$key}}">{{$relationInfo}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>

                                <div id="connectWith" class="form-group "></div>

                                <div class="form-group">
                                    <div class="form_select_common select_common">
                                        <select disabled class="option-select form-control" name="upd_gender"
                                            id="upd_gender2">
                                            <option value="">--Select Gender--</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="Other not identified here">Other Not Identified</option>
                                            <option value="Prefer not to answer">Prefer to Not Answer</option>
                                        </select>
                                    </div>
                                </div>
                                <!--form-group-->

                                <div class="form-group">
                                    <input type="text" name="upd_relation_dob" class="datepicker form-control dob_input"
                                        id="upd_relation_dob" placeholder="Date Of Birth (MM/DD/YYYY)"
                                        autocomplete="off" data-provide="datepicker">
                                </div>


                                <div class="form-group">
                                    <div class="form_select_common select_common">
                                        <select class="option-select form-control" name="upd_living" id="upd_living">
                                            <option value="">Is deceased?</option>
                                            <option value="0">Deceased</option>
                                            <option value="1">Living</option>
                                        </select>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <div class="row padding_gap_3">
                                        <div class="col-xs-6 col-sm-6 col-md-6">
                                            <div class="modal_confirm_btn"><button type="submit"
                                                    class="btn_member">Update
                                                    Member</button></div>
                                        </div>
                                        <div class="col-xs-6 col-sm-6 col-md-6">
                                            <div class="modal_cancel_btn modalFormClose"><a href="#"
                                                    data-dismiss="modal" aria-label="Close">Cancel</a></div>
                                        </div>
                                    </div>
                                </div>
                                {!! Form::close() !!}
                            </div>
                            <!--end modal-left-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- ---------------------Update Member------------------------ -->







<div class="modal fade modal-vcenter" id="showProfile" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">

            <div class="modal-body">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="modal_tittle">
                            <div class="col-md-11 col-sm-11 col-xs-10">
                                <h2>User Profile</h2>
                            </div>
                            <div class="col-md-1 col-sm-1 col-xs-2 d-flex justify-content-end">
                                <button style="border: none;font-size: 22px; padding: 0px; background: transparent;"
                                    id="closeButton" type="button" data-dismiss="modal"><i
                                        class="fa fa-times"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="user_profile">
                            <div class="friends_modal">
                                <div class="col-md-7 col-sm-7 col-xs-7">
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <div class="col-md-3 col-sm-3 col-xs-3">
                                            <p>Name: </p>
                                        </div> 
                                        <div class="col-md-9 col-sm-9 col-xs-9">
                                            <p id="user_ps_name">Name</p>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <div class="col-md-3 col-sm-3 col-xs-3">
                                            <p>Gender: </p>                                                                      
                                        </div>
                                        <div class="col-md-9 col-sm-9 col-xs-9">
                                            <p id="user_ps_gender">Gender</p>
                                        </div>
                                    </div>
                                </div>
                                 <div class="col-md-5 col-sm-5 col-xs-5 d-flex justify-content-center" style="border-radius: 0;">
                                    <div class="pr_photo" style="border-radius: 0;">
                                        <img id="pop_img" src="" alt="" style="border-radius: 50%;" />
                                    </div>
                                </div>
                            </div>                                               
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5"></div>
                    <div class="col-md-2 col-sm-2 col-xs-12 footer_modal_icon">
                        <button id="user_p_profile" onclick="viewProfile()" title="View User Profile"
                            style="border: none;font-size: 22px; padding: 5px; background: transparent;"><i
                                class="fa fa-user"></i></button>
                        <button id="user_p_delete" onclick="deleteMember()" title="Delete User"
                            style="border: none;font-size: 22px; padding: 5px; background: transparent;"><i
                                class="fa fa-trash"></i></button>
                                 <button id="user_p_update" onclick="updateMember()" title="Update User"
                            style="border: none;font-size: 22px; padding: 5px; background: transparent;"><i
                                class="fa fa-pencil"></i></button>
                    </div>
                    <div class="col-md-5"></div>
                </div>


                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8 text-center p-3 modal_story">
                    
                    </div>
                    <div class="col-md-2"></div>
                </div>

                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8 text-center p-3 addon_video">
                    
                    </div>
                    <div class="col-md-2"></div>

            </div>
        </div>
    </div>
</div>
<!--sign up modal end -->

@endsection

@section('scripts')

<script src="{{ asset('js/app.js') }}"></script>
<script type="text/javascript">
$('#testButton').hide();
// prevent form submit hitting enter
$(document).ready(function() {
    $(window).keydown(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
});





function open_friend_popup(id) {
    $('#popup_' + id).click();
}

function viewfriendProfile(id) {
    // alert(id);
    let id1 = $('#profile_id_' + id).val();
    if (!id1) {
        return;
    }
    window.open("/family/member/" + id1);
}

function updateFriend(id){
    $('#closeButton').click();
    let upp_btn = document.getElementById('update_member_btn');
    let closeButton = document.getElementById('closeButton');
    let closeButton2 = document.getElementById('closeButton2');

    let user_id = id;
    $('#upd_user_id').val(user_id);



    $.ajax({
        type: "POST",
        data: {
            "_token": "{{ csrf_token() }}",
            user_id: user_id
        },
        url: "{{ route('update_member') }}",
        success: function(response) {
            if (response.status == 'success') {
                closeButton2.click();

                $('#upd_first_name').val(response.first_name);
                $('#upd_last_name').val(response.last_name);
                $('#upd_email_address').val(response.email);
                $('#upd_relation_id').val(response.relation);

                var parts = response.dob.split("-");
                var formattedDate = parts[1] + "/" + parts[2] + "/" + parts[0];
                $('#upd_relation_dob').val(formattedDate);
                $('#upd_living').val(response.living);
                $('#upd_gender2').val(response.gender);
                upp_btn.click();


            } else {
                closeButton2.click();
                Swal.fire('Oops! Something Went Wrong');
            };
        },
        error: function(data) {

        }
    });
}


$('#relation_dob').datepicker({
    autoclose: true,
    format: 'mm/dd/yyyy'
});




function setMemberInfo(dataInfo) {
    dataInfo = JSON.parse(dataInfo);
    var dob = new Date(dataInfo.dob);
    dob = (dob.getMonth() + 1) + "/" + dob.getDate() + "/" + dob.getFullYear();

    $("#first_name").val(dataInfo.first_name);
    $("#last_name").val(dataInfo.last_name);
    $("#relation_dob").val(dob);
    $("#email_address").val(dataInfo.email);

    if (dataInfo.gender == "male") {
        $("#gender2").val("male");
        $('#gender2_chosen .chosen-single span').text('Male')
    } else if (dataInfo.gender == "female") {
        $("#gender2").val("female");
        $('#gender2_chosen .chosen-single span').text('Female')
    } else {
        $("#gender2").val("");
        $('#gender2_chosen .chosen-single span').text('Select')
    }
}


function updateMember() {
   $('#closeButton').click();
    let upp_btn = document.getElementById('update_member_btn');
    let closeButton = document.getElementById('closeButton');
    let user_id = document.getElementById('user_p_profile').value;
    $('#upd_user_id').val(user_id);

    $.ajax({
        type: "POST",
        data: {
            "_token": "{{ csrf_token() }}",
            user_id: user_id
        },
        url: "{{ route('update_member') }}",
        success: function(response) {
            if (response.status == 'success') {
                closeButton.click();
                $('#upd_first_name').val(response.first_name);
                $('#upd_last_name').val(response.last_name);
                $('#upd_email_address').val(response.email);
                $('#upd_relation_id').val(response.relation);

                var parts = response.dob.split("-");
                var formattedDate = parts[1] + "/" + parts[2] + "/" + parts[0];
                $('#upd_relation_dob').val(formattedDate);
                $('#upd_living').val(response.living);
                $('#upd_gender2').val(response.gender);

            } else {
                closeButton.click();
                Swal.fire('Oops! Something Went Wrong');
            };
        },
        error: function(data) {

        }
    });
    upp_btn.click();

}

$('#closeButton').on('click',function(){
    console.log('dd');
 let vid = document.getElementById("user_video");
     vid.pause();
});

function checkRelationValid2() {
    $('.form-group span.error').remove();
    var form_data = new FormData($("#updaterelationForm")[0]);
    // $('.form-group span').remove();
    $.ajax({
        type: "POST",
        data: form_data,
        processData: false,
        contentType: false,
        url: "{{ route('family-trees.update_member_record') }}",
        success: function(response) {
            console.log(response)
            if (response.errMsgFlag) {
                toastr.warning(response.msg)
            }
            if (response.msgFlag) {
                toastr.success(response.msg)
                location.reload();
            }

        },
        error: function(data) {
            if (data.status == 422) {
                var errors = data.responseJSON;
                $.each(errors.errors, function(i, error) {
                    var el = $(document).find('[name="' + i + '"]');
                    el.after($('<span class="error" style="color: red;">' + error[0] + '</span>'));
                });
            }
        }
    });
    return false;
}



function checkRelationValid() {
    $('.form-group span.error').remove();
    var form_data = new FormData($("#relationForm")[0]);
    // $('.form-group span').remove();
    $.ajax({
        type: "POST",
        data: form_data,
        processData: false,
        contentType: false,
        url: "{{ route('family-trees.store') }}",
        success: function(response) {
            console.log(response)
            if (response.errMsgFlag) {
                toastr.warning(response.msg)
            }
            // alert('wait');
            if (response.msgFlag) {
                toastr.success(response.msg)
                location.reload();
            }

        },
        error: function(data) {
            if (data.status == 422) {
                var errors = data.responseJSON;
                $.each(errors.errors, function(i, error) {
                    var el = $(document).find('[name="' + i + '"]');
                    el.after($('<span class="error" style="color: red;">' + error[0] + '</span>'));
                });
            }
        }
    });
    return false;
}

function getConnectWith(relation_id) {

    $.ajax({
        type: "GET",
        data: {
            relation_id: relation_id
        },
        url: "{{ route('family-trees.get.connectWith') }}",
        success: function(response) {
            $("#connectWith").html(response);
        },
        error: function(data) {

        }
    });
}
// $('#relation_id').chosen().change(function() {
//     var relation_id = $('#relation_id').val();
//     if(relation_id == 20) {
//         $('.son_id').removeClass('hidden');
//         $('.daughter_id').addClass('hidden');
//         $('.parent_id').addClass('hidden');
//     } else if(relation_id == 22) {
//         $('.son_id').addClass('hidden');
//         $('.daughter_id').removeClass('hidden');
//         $('.parent_id').addClass('hidden');
//     } else if(relation_id == 24) {
//         $('.son_id').addClass('hidden');
//         $('.daughter_id').addClass('hidden');
//         $('.parent_id').removeClass('hidden');
//     } else if(relation_id == 25) {
//         $('.son_id').addClass('hidden');
//         $('.daughter_id').addClass('hidden');
//         $('.parent_id').removeClass('hidden');
//     } else {
//         $('.son_id').addClass('hidden');
//         $('.daughter_id').addClass('hidden');
//         $('.parent_id').addClass('hidden');
//     }
// });
$('.modalFormClose').on('click', function() {
    $('.error').remove();
    $("#relationForm")[0].reset();
    $('#selectedUser_chosen .chosen-single span').text('Choose Member From Existing User')
    $('#relation_id_chosen .chosen-single span').text('Choose a Relation')
});
var tempArray = <?php echo json_encode($new_datas); ?>;
console.log("Temp Array : ",tempArray)
</script>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script type="text/javascript" src="{{ asset('js/frontend/lineage.js?hgfh') }}"></script>
<!-- <script src="https://shrihari-lib.netlify.app/lineage.min.js"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
    integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
 
// dummy data
// var jsonData = [{"id":3,"pid":[4],"fid":1,"gender":"male","title":"Father","name":"Asad Ullah Khan","photo":"","addr":"","cn":""},{"id":4,"pid":[3],"gender":"female","title":"Mother","name":"Nasima Begum","photo":"","addr":"","cn":""},{"id":5,"pid":[6],"mid":4,"fid":3,"gender":"female","title":"Sister","name":"Suchi","photo":"","addr":"","cn":""},{"id":6,"pid":[5],"gender":"male","title":"Brother-in-Law","name":"Rasel","photo":"","addr":"","cn":""},{"id":1,"pid":[2],"gender":"male","title":"Grand Father","name":"Nurul Hossen Khan","photo":"","addr":"","cn":""},{"id":2,"pid":[1],"gender":"female","title":"Grand Mother","name":"Tahera Khatun","photo":"","addr":"","cn":""},{"id":7,"mid":4,"fid":3,"pid":[8],"gender":"male","title":"My Self","name":"Maknul Hasan Khan Nasim","photo":"","addr":"","cn":""},{"id":8,"pid":[7],"fid":12,"gender":"female","title":"Wife","name":"Jakia Sultana","photo":"","addr":"","cn":""},{"id":9,"fid":7,"gender":"male","title":"Son","name":"Labeed Hasan","photo":"","addr":"","cn":""},{"id":10,"fid":7,"gender":"female","title":"Daughter","name":"Laybah","photo":"","addr":"","cn":""},{"id":11,"pid":[12],"gender":"male","title":"Father In Law","name":"Abdur Rouf","photo":"","addr":"","cn":""},{"id":12,"pid":[11],"gender":"female","title":"Mother In Law","name":"Hena","photo":"","addr":"","cn":""}];
var jsonData = tempArray;
jsonData = [...new Map(jsonData.map((m) => [m.id, m])).values()];
jsonData.map(element => {
    delete element.img;
    // element.title="RRR";
    // console.log(element.pids);
    element.pid = element.pids ? element.pids[0] : '';
    delete element.pids;
    // element.photo="";
    element.addr = element.addr ? '' : '<span class="label label-danger">Deceased</span>';
    element.cn = "";
    element.midflag = false;
    element.fidflag = false;
    element.pidflag = false;
    // console.log(element)
});
mainArray = jsonData;
console.log('MainArray:', mainArray);
const relationIdsArray = mainArray.map(item => parseFloat(item.relation_id)).sort((a, b) => a - b);
console.log('Relation_id array:', relationIdsArray)
const sortedArrayMain = [];
relationIdsArray.forEach((item, i) => {
    const gotItem = mainArray.find(elem => item === elem.relation_id);
    if (gotItem) sortedArrayMain.push(gotItem);
});
console.log('s:', sortedArrayMain)
sortedArrayMain.forEach((item, i) => {
    item.t_id = item.id;
    item.id = i + 1;
});
console.log('SortedMainArrayBefore:', mainArray);
sortedArrayMain.forEach((item, i) => {
    sortedArrayMain.forEach((elem, i) => {
        if (elem.pid === item.t_id && !elem.pidflag) {
            elem.pid = item.id;
            elem.pidflag = true;
        } else if (elem.fid === item.t_id && !elem.midflag) {
            elem.fid = item.id;
            elem.midflag = true;
        } else if (elem.mid === item.t_id && !elem.fidflag) {
            elem.mid = item.id;
            elem.fidflag = true;
        }
    });
});

console.log('SortedMainArrayAfter:', sortedArrayMain);

// sortedArrayMain.map(ele=>{
//     ele.pid = ele.mpid
//     ele.fid = ele.mfid
//     ele.mid = ele.mmid
// })

// end relation id here
// console.log(JSON.stringify(sortedLodahArr,null,'\t'))
var jsonData = [{
        "id": 1,
        "name": "Father",
        "gender": "male",
        "pid": "",
        "fid": "",
        "mid": "",
        "photo": "",
        "addr": "",
        "cn": "",
        "t_id": 1
    },
    {
        "id": 2,
        "name": "Md Makinul Hasan Khan",
        "gender": "male",
        "fid": 1,
        "mid": "",
        "pid": "",
        "photo": "",
        "addr": "",
        "cn": ""
    },
];
var params = {
    data: sortedArrayMain,
    /*Local variable or file path*/
    search: true, //false
    container: "divFamily",
    template: "circle" // "rounded" // "raised" // "tilted"
};
console.log(params)
var tree = new Lineage(params);
tree.load()
//  $(document).ready(function(){
// $("#showProfile").modal('show');
$(document).on('click', '.tree li a', function() {

    $('.modal_story').html("");

    spilt_var = $(this).attr('href').split("(")[1]
    result = spilt_var.split(")")[0]
    const gotItem = sortedArrayMain.find(elem => elem.id == result);
    console.log(gotItem)
    document.getElementById('user_ps_name').innerText = gotItem.name;
    document.getElementById('user_ps_gender').innerText = gotItem.gender.charAt().toUpperCase() + gotItem.gender
        .slice(1);
        $('#pop_img').attr('src', gotItem.photo);
    document.getElementById('user_p_profile').value = gotItem.user_id;
    document.getElementById('user_p_delete').value = gotItem.t_id;
    if (gotItem.t_id < 0) {
        toastr.warning('Not available, please Add memeber')
        // alert('Not available, please Add memeber')
        // setTimeout(location.reload(), 5000);
        return 0;
    }
    $('#testButton').trigger('click');


    let user_id = gotItem.user_id;
    $.ajax({
        type: "POST",
        data: {
            "_token": "{{ csrf_token() }}",
            user_id: user_id
        },
        url: "{{ route('get_video') }}",
        success: function(response) {
            if (response.msg == 'Success') {
                console.log(response.data.video);
            $('.modal_story').html("<video id='user_video' width='380' height='340' controls  controlsList='nodownload'><source src='https://storeetree.com/storage/"+response.data.video+"' type='video/mp4'></video>");

                    if (response.addon) {
                        console.log(response.addon);
                    $('.addon_video').html("<h3 style='color: #243e8f;'>Addon Video</h3><video id='user_addon_video' width='380' height='340' controls  controlsList='nodownload'><source src='https://storeetree.com/storage/"+response.addon+"' type='video/mp4'></video>");
                    } else {
                        $('.addon_video').html(" ");
                    };

            } else {
                $('.modal_story').html(" ");
                $('.addon_video').html(" ");
            };
        },
        error: function(data) {

        }
    });

})

function viewProfile() {
    let id1 = document.getElementById('user_p_profile').value
    if (!id1) {
        return;
    }
    window.open("/family/member/" + id1);
}

function deleteMember(id) {
 $('#closeButton').click();
    let id2 = document.getElementById('user_p_delete').value
    if (!id2) {
        return;
    }
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            axios({
                    method: "get",
                    url: "delete-member/" + id2,
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                    },
                })
                .then((res) => {
                    if (res.status === 200) {
                        if (res.data.success) {
                            Swal.fire("Deleted!", res.data.msg, "success",);
                        } else {
                            Swal.fire(res.data.msg);
                        }

                        setTimeout(function(){
                        window.location.reload();                            
                        }, 2500);
                    } else {
                        Swal.fire(
                            res
                            
                        );

                        setTimeout(function(){
                        window.location.reload();                            
                        }, 2500);
                    }
                })
                .catch((error) => {
                    // alert(
                    //     error
                    //     // "Failed to delete data you can delete you patner, father and mother now."
                    // );
                });
        }
    });
}
// });


function deleteFriend(id) {

   $('#closeButton2').click();
    
    let id2 = id;
    if (!id2) {
        return;
    }
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            axios({
                    method: "get",
                    url: "delete-member/" + id2,
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                    },
                })
                .then((res) => {
                    if (res.status === 200) {
                        if (res.data.success) {
                            Swal.fire("Deleted!", res.data.msg, "success",);
                        } else {
                            Swal.fire(res.data.msg);
                        }

                        setTimeout(function(){
                        window.location.reload();                            
                        }, 2500);
                    } else {
                        Swal.fire(
                            res
                           
                        );

                        setTimeout(function(){
                        window.location.reload();                            
                        }, 2500);
                    }
                })
                .catch((error) => {
                    // alert(
                    //     error
                    //     // "Failed to delete data you can delete you patner, father and mother now."
                    // );
                });
        }
    });
}


</script>
@endsection