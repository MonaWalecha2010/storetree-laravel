@php
$connectList=[];
$authuser=Auth::user();
/* if(request()->relation_id==16){
	//for brother in law
	$myFamilyTree=App\Models\FamilyTree::where('user_id',$authuser->id)->first();

	if(!empty($myFamilyTree) && !is_null($myFamilyTree->pid)){

		$partnerInfo=App\Models\FamilyTree:find($myFamilyTree->pid);

		if(!empty($partnerInfo) && (!is_null($partnerInfo->fid) || !is_null($partnerInfo->mid)){
			$brotherInLaws=App\Models\FamilyTree::where('gender','male')->where
		}
	}
}
if(request()->relation_id==18){
	//for brother in law

} */


if(request()->relation_id==20 || request()->relation_id==28 || request()->relation_id==29){
	//for son's wife/Husband/Partner
	$myFamilyTree=App\Models\FamilyTree::where('user_id',$authuser->id)->first();

	if(!empty($myFamilyTree)){

		$query=App\Models\FamilyTree::where('gender','male')->whereNull('pid');
		$query->where(function ($q )use($myFamilyTree)  {
			$q->where('fid',$myFamilyTree->id);
			$q->orWhere('mid',$myFamilyTree->id);
		});
		// if($myFamilyTree->gender=='male')
		// 	$query->where('fid',$myFamilyTree->id);
		// if($myFamilyTree->gender=='female')
		// 	$query->where('mid',$myFamilyTree->id);

		$connectList=$query->get();
	}
}




if(request()->relation_id==22 || request()->relation_id==30 || request()->relation_id==31){
	//for daughter Husband/Wife/Partner

	$myFamilyTree=App\Models\FamilyTree::where('user_id',$authuser->id)->first();

	if(!empty($myFamilyTree)){

		$query=App\Models\FamilyTree::where('gender','female')->whereNull('pid');
		$query->where(function ($q )use($myFamilyTree)  {
			$q->where('fid',$myFamilyTree->id);
			$q->orWhere('mid',$myFamilyTree->id);
		});

		//if($myFamilyTree->gender=='male')
		//	$query->where('fid',$myFamilyTree->id);
		//if($myFamilyTree->gender=='female')
		//	$query->where('mid',$myFamilyTree->id);

		$connectList=$query->get();
	}
}





if(request()->relation_id==24 || request()->relation_id==25){
	//grand son and daughter

	$myFamilyTree=App\Models\FamilyTree::where('user_id',$authuser->id)->first();

	if(!empty($myFamilyTree)){

		$query=App\Models\FamilyTree::whereNotNull('pid');
		$query->where(function ($q )use($myFamilyTree)  {
			$q->where('fid',$myFamilyTree->id);
			$q->orWhere('mid',$myFamilyTree->id);
		});

		// if($myFamilyTree->gender=='male')
		// 	$query->where('fid',$myFamilyTree->id);
		// if($myFamilyTree->gender=='female')
		// 	$query->where('mid',$myFamilyTree->id);

		$connectList=$query->get();
	}
}



if(request()->relation_id==32 || request()->relation_id==33 || request()->relation_id==34){
	//for Grandson's Wife/Husband/Partner
	$myFamilyTree=App\Models\FamilyTree::where('user_id',$authuser->id)->first();

	if(!empty($myFamilyTree)){
        
		$query=App\Models\FamilyTree::whereNotNull('pid');

		if($myFamilyTree->gender=='male'){
			$children = $query->where('fid',$myFamilyTree->id)->get();
            foreach ($children as $key => $child) {
                //if ($child->gender == 'male') {
                    $grandchildren = $child->where('fid',$child->id)->orWhere('mid',$child->id)->get();
                    foreach ($grandchildren as $gchildkey => $grandchild) {
						if($grandchild->pid == null){
						if ($grandchild->gender == 'male') {
                        array_push($connectList,$grandchild);
						}
					    }
                    }
                //}

                // if ($child->gender == 'female') {
                //     $grandchildren = $child->where('mid',$child->id)->get();
                //     foreach ($grandchildren as $gchildkey => $grandchild) { 
				// 		if($grandchild->pid == null){
				// 		if ($grandchild->gender == 'male') {              
                //         array_push($connectList,$grandchild);
				// 		}
				// 	    }
                //     }
                // }
            }  
        }

        if($myFamilyTree->gender=='female'){
			$children = $query->where('mid',$myFamilyTree->id)->get();
            foreach ($children as $key => $child) {
                //if ($child->gender == 'male') {
                    $grandchildren = $child->where('fid',$child->id)->orWhere('mid',$child->id)->get();
                    foreach ($grandchildren as $gchildkey => $grandchild) {
                        if($grandchild->pid == null){
						if ($grandchild->gender == 'male') {              
                             array_push($connectList,$grandchild);
						}
					    }
                    }
                //}

                // if ($child->gender == 'female') {
                //     $grandchildren = $child->where('mid',$child->id)->get();
                //     foreach ($grandchildren as $gchildkey => $grandchild) {               
				// 		if($grandchild->pid == null){
				// 		if ($grandchild->gender == 'male') {              
                //              array_push($connectList,$grandchild);
				// 		}
				// 	    }
                //     }

                // }
            }  
        }       
	}

	
}



if(request()->relation_id==35 || request()->relation_id==36 || request()->relation_id==37){
	//for GrandDaughter's Husband
	$myFamilyTree=App\Models\FamilyTree::where('user_id',$authuser->id)->first();

	if(!empty($myFamilyTree)){
        
		$query=App\Models\FamilyTree::whereNotNull('pid');

		if($myFamilyTree->gender=='male'){
			$children = $query->where('fid',$myFamilyTree->id)->get();
            foreach ($children as $key => $child) {
                //if ($child->gender == 'male') {
                    $grandchildren = $child->where('fid',$child->id)->orWhere('mid',$child->id)->get();
                    foreach ($grandchildren as $gchildkey => $grandchild) {
						if($grandchild->pid == null){
						if ($grandchild->gender == 'female') {
                        array_push($connectList,$grandchild);
						}
					    }
                    }
                //}

                // if ($child->gender == 'female') {
                //     $grandchildren = $child->where('mid',$child->id)->get();
                //     foreach ($grandchildren as $gchildkey => $grandchild) { 
				// 		if($grandchild->pid == null){
				// 		if ($grandchild->gender == 'female') {              
                //         array_push($connectList,$grandchild);
				// 		}
				// 	    }
                //     }
                // }
            }  
        }

        if($myFamilyTree->gender=='female'){
			$children = $query->where('mid',$myFamilyTree->id)->get();
            foreach ($children as $key => $child) {
                //if ($child->gender == 'male') {
                    $grandchildren = $child->where('fid',$child->id)->orWhere('mid',$child->id)->get();
                    foreach ($grandchildren as $gchildkey => $grandchild) {
                        if($grandchild->pid == null){
						if ($grandchild->gender == 'female') {              
                             array_push($connectList,$grandchild);
						}
					    }
                    }
                // }

                // if ($child->gender == 'female') {
                //     $grandchildren = $child->where('mid',$child->id)->get();
                //     foreach ($grandchildren as $gchildkey => $grandchild) {               
				// 		if($grandchild->pid == null){
				// 		if ($grandchild->gender == 'female') {              
                //              array_push($connectList,$grandchild);
				// 		}
				// 	    }
                //     }

                // }
            }  
        }       
	}	
}





/*if(request()->relation_id==25){
	//for grand daughter
}
*/
@endphp
@if(request()->relation_id==20 || request()->relation_id==28 || request()->relation_id==29 || request()->relation_id==22 || request()->relation_id==24 ||request()->relation_id==25 || request()->relation_id==30 || request()->relation_id==31 || request()->relation_id==32 || request()->relation_id==33 || request()->relation_id==34 || request()->relation_id==35 || request()->relation_id==36 || request()->relation_id==37)

<div class="form_select_common select_common">
	<select class="option-select form-control" name="connect_with" required id="connect_with">
		<option value="">Choose a Connect With</option>
	@foreach($connectList as $key=>$connectInfo)
		<option value="{{$connectInfo->id}}">{{$connectInfo->first_name.' '.$connectInfo->last_name}}</option>
	@endforeach
	</select>
</div>

@endif
