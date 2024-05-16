<?php

use App\Http\Controllers\frontend\FamilyTreeController;
use App\Repositories\VideoParse;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Session;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Auth::routes();

Route::get('/cache-clear', function() {
    Artisan::call('cache:clear');
    Artisan::call('view:clear');
    Artisan::call('route:clear');
    Artisan::call('config:clear');
    dd('Cache Clear.');
});

Route::group(['namespace' => 'Auth'], function() {

    Route::get('admin/password/reset', 'AdminForgotPasswordController@showLinkRequestForm')->name('admin.password.request');
    Route::post('admin/password/email', 'AdminForgotPasswordController@sendResetLinkEmail')->name('admin.password.email');

    Route::post('admin/password/reset', 'AdminResetPasswordController@reset');

    Route::get('admin/password/reset/{token}', 'AdminResetPasswordController@showResetForm')->name('admin.password.reset');
    Route::post('login', 'LoginController@login')->name('login');
    Route::get('logout', 'LoginController@logout')->name('logout');
    Route::post('register', 'RegisterController@register')->name('register');
});

Route::group(['namespace' => 'frontend'], function() {
    Route::get('test-test', 'TestController@index');
    Route::get('/family/member/{memberId}', 'HomeController@getMemberInfo')->name('member.info');
    Route::get('/', 'HomeController@index')->name('home');
    Route::get('command', 'HomeController@command')->name('command');
    Route::get('/home', function () {
        return redirect('/');
    });
    
    Route::get('social/{provider}', 'SocialLoginController@redirectToProvider')->name('social');
    Route::get('social/{provider}/callback', 'SocialLoginController@handleProviderCallback')->name('social.callback');
    
    Route::get('about-us', 'AboutUsController@index')->name('about-us');
    Route::get('contact-us', 'ContactUsController@index')->name('contact-us');
    Route::post('contact-us', 'ContactUsController@store');
    Route::get('faqs', 'FaqController@index')->name('faqs');
    Route::get('terms-and-conditions','PaymentController@pay_terms_conditions')->name('story.pay_terms_conditions');
    Route::resource('blogs', 'BlogController')->only(['index', 'show']);
    
    Route::get('create-your-story/step-1', 'CreateStoryController@step1')->name('create-your-story.step-1');
    Route::post('create-your-story/step-1', 'CreateStoryController@step1Store');
    Route::get('create-your-story/step-2', 'CreateStoryController@step2')->name('create-your-story.step-2');
    Route::post('create-your-story/step-2', 'CreateStoryController@step2Store');
    Route::get('create-your-story/step-3', 'CreateStoryController@step3')->name('create-your-story.step-3');
    Route::post('create-your-story/step-3', 'CreateStoryController@step3Store');    
    Route::post('get_story_video', 'CreateStoryController@get_story_video')->name('get_story_video');

    Route::get('view-story', "ProfileController@previewStory")->name('view-story');
    Route::post('searchUser', 'FamilyTreeController@searchUser')->name('searchUser');
    Route::get('family-tree', 'FamilyTreeController@treeindex')->name('family-tree');
    Route::post('get_video', 'FamilyTreeController@get_video')->name('get_video');





    Route::middleware(['auth'])->group(function () {
        Route::get('profile', 'ProfileController@index')->name('profile');
        Route::get('delete-account', 'ProfileController@view_delete_account')->name('view.delete_account');  
        Route::post('delete_account', 'ProfileController@delete_account')->name('delete_account'); 
        Route::get('delete-videos', 'ProfileController@view_delete_videos')->name('view.delete_videos');  
        Route::post('delete_videos', 'ProfileController@delete_videos')->name('delete_videos'); 
        Route::get('update-password', 'ProfileController@view_update_password')->name('view.update_password');   
        Route::post('password-update', 'ProfileController@update_password')->name('update_password');
        Route::post('profile/update', 'ProfileController@updateProfile')->name('profile.update');
        Route::get('create-your-story/step-4', 'CreateStoryController@step4')->name('create-your-story.step-4');
        Route::get('create-your-story/step-5', 'CreateStoryController@step5')->name('create-your-story.step-5');
        Route::post('upload/video', 'VideoRecordingController@store')->name('video.store');

        Route::post('editupload/video', 'VideoRecordingController@store_Rerecord')->name('editvideo.store');


        Route::get('editaddonvideo/{id}', 'VideoRecordingController@editaddon')->name('editaddon');

        Route::post('upload/addonvideo', 'VideoRecordingController@storeaddon')->name('addonvideo.store');
        Route::post('upload/editaddonvideo', 'VideoRecordingController@storeeditaddon')->name('editaddonvideo.store');


        Route::get('create-your-story/step-4/{id}', 'CreateStoryController@step4Preview')->name('create-your-story.step-4.show');
        Route::get('create-your-story/step-5/{id}', 'CreateStoryController@step5Preview')->name('create-your-story.step-5.show');
        Route::get('create-your-story/step-6', 'CreateStoryController@step6')->name('create-your-story.step-6');
        



        Route::get('create-your-story/edit_step2/{id}', 'CreateStoryController@edit_step2')->name('create-your-story.edit_questions');
        Route::post('create-your-story/edit-questions_store', 'CreateStoryController@edit_step2Store')->name('create-your-story.edit_questions_store');
        Route::post('create-your-story/edit-warmups_store', 'CreateStoryController@edit_step3Store')->name('create-your-story.edit_warmups_store');
        Route::get('create-your-story/edit_warmup/{id}/{story_id}', 'CreateStoryController@edit_step4Preview')->name('create-your-story.edit_warmup.show');

                Route::get('create-your-story/editstep-5/{story_id}', 'CreateStoryController@editstep5')->name('create-your-story.editstep-5');
                 Route::get('create-your-story/edit_question/{id}/{story_id}', 'CreateStoryController@edit_step5Preview')->name('create-your-story.edit_question.show');

        Route::get('create-your-story/editstep-6/{story_id}', 'CreateStoryController@editstep6')->name('create-your-story.editstep-6');

        Route::get('create-your-story/rerecord-story', 'CreateStoryController@rerecord_story')->name('create-your-story.rerecord_story');
        Route::post('update-story', 'CreateStoryController@update_story')->name('update_story');

        Route::get('create-your-story/addon', 'CreateStoryController@record_addon')->name('record_addon');


        Route::get('story/payment','PaymentController@pay')->name('story.pay');
                Route::get('story/payment-addon','PaymentController@pay_addon')->name('story.pay_addon');

        
        Route::post('store.payment-process','PaymentController@handlePayment')->name('store.payment-process');
                Route::post('upgrade.payment-process','PaymentController@upgrade_plan')->name('upgrade.payment-process');

        Route::post('promocode-expire','PaymentController@promocode_expire')->name('promocode-expire');

        Route::post('promocode-apply','PaymentController@promocode_apply')->name('promocode-apply');
        Route::get('same_plan','PaymentController@continue_same_plan')->name('continue_same_plan');


        Route::get('family-trees', 'FamilyTreeController@index')->name('family-trees');
        // Route::get('family-tree', 'FamilyTreeController@treeindex')->name('family-tree');

                // Route::post('searchUser', 'FamilyTreeController@searchUser')->name('searchUser');
                Route::post('update_member', 'FamilyTreeController@update_member')->name('update_member');
                        // Route::post('get_video', 'FamilyTreeController@get_video')->name('get_video');



        Route::get('family-trees/get/connect/with', function(){
            return view('frontend.family-trees.connect_with');
        })->name('family-trees.get.connectWith');

        Route::post('family-trees', 'FamilyTreeController@store')->name('family-trees.store');
        Route::post('update-family-trees', 'FamilyTreeController@update_member_record')->name('family-trees.update_member_record');

        // Route::get('view-story', "ProfileController@previewStory")->name('view-story');
        Route::post('profile-photo', 'ProfileController@photo_store')->name('profile-photo.store');
    });
});

/*
 * All backend functionality route
 */
Route::group(['namespace' => 'backend'], function() {
    /*
     * Admin user Route
     */
    Route::prefix('admin')->group(function() {
        Route::get('login', 'AdminLoginController@showLogin')->name('admin.login');
        Route::post('login', 'AdminLoginController@login')->name('admin.login.submit');

        Route::middleware(['auth:admin'])->group(function () {
            Route::get('/', 'AdminController@dashboard')->name('admin.dashboard');
            Route::get('logout', 'AdminLoginController@logout')->name('admin.logout');

            Route::get('admins/editPassword', 'AdminController@password')->name('admin.editPassword');
            Route::post('admins/editPassword', 'AdminController@passwordUpdate');
            
            Route::get('admins/resetPassword/{id}', 'AdminController@resetPassword')->name('admin.admins.resetPassword');
            Route::patch('admins/resetPassword/{id}', 'AdminController@resetPasswordStore');
            
            Route::resource('admins', 'AdminController', [
                'as' => 'admin'
            ]);

            Route::resource('blogs', 'BlogController', [
                'as' => 'admin'
            ]);

            Route::resource('categories', 'CategoryController', [
                'as' => 'admin'
            ]);

            Route::resource('faqs', 'FaqController', [
                'as' => 'admin'
            ]);

            Route::resource('questions', 'QuestionController', [
                'as' => 'admin'
            ]);

            Route::resource('warmups', 'WarmupController', [
                'as' => 'admin'
            ]);

            Route::resource('promocodes', 'PromocodeController', [
                'as' => 'admin'
            ]);
            
            Route::resource('settings', 'SettingController', [
                'as' => 'admin'
            ]);

            Route::resource('relations', 'RelationController', [
                'as' => 'admin'
            ]);
            
            Route::patch('users/activate/{id}', 'UserController@activate');
            Route::patch('users/deactivate/{id}', 'UserController@deactivate');

            Route::get('users', 'UserController@index')->name('admin.users.index');

            Route::get('contacts', 'ContactController@index')->name('admin.contacts.index');
        });
    });
});
Route::get('delete-member/{id}', [FamilyTreeController::class,'deleteMember'])->name('member-delete');
Route::get('/linkstorage', function () {
    Artisan::call('storage:link');
});
