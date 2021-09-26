<?php

use App\Http\Controllers\Admin\Api\AnalyticsController;
use App\Http\Controllers\Admin\Api\JobsController as AdminJobsController;
use App\Http\Controllers\Admin\Api\UserInfoController;
use App\Http\Controllers\ApiAuthController;
use App\Http\Controllers\User\Api\JobsController as UserJobsController;
use App\Http\Controllers\User\Api\UserProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('user')->group(function () {
    Route::middleware(['assign.guard:users'])->group(function () {

        Route::middleware(['jwt'])->group(function () {
            Route::post('/logout', [ApiAuthController::class, 'logout']);
            Route::post('/refresh', [ApiAuthController::class, 'refresh']);
            Route::get('/user-profile', [ApiAuthController::class, 'userProfile']);
            Route::get('/skills', [UserProfileController::class, 'skills']);
            Route::post('joblist', [UserJobsController::class, 'index']);
            Route::resource('job', UserJobsController::class);
            Route::get('profile', [UserProfileController::class, 'show']);
            Route::put('profile', [UserProfileController::class, 'update']);
            Route::post('profile/updateSkills', [UserProfileController::class, 'updateSkills']);
            Route::post('profile/addWorkExperience', [UserProfileController::class, 'addWorkExperience']);
            Route::post('profile/addEducation', [UserProfileController::class, 'addEducation']);
            Route::delete('profile/removeEducation/{education}', [UserProfileController::class, 'destroyEducation']);
            Route::delete('profile/removeWorkExperience/{workExperience}', [UserProfileController::class, 'destroyWorkExperience']);

            Route::post('job/{job}/apply', [UserJobsController::class, 'applyJob']);
        });

        Route::post('/login', [ApiAuthController::class, 'login']);
        Route::post('/register', [ApiAuthController::class, 'register']);
    });
});

Route::prefix('admin')->group(function () {
    Route::middleware(['assign.guard:admins'])->group(function () {
        Route::middleware(['jwt'])->group(function () {
            Route::post('/logout', [ApiAuthController::class, 'logout']);
            Route::post('/refresh', [ApiAuthController::class, 'refresh']);
            Route::get('/admin-profile', [ApiAuthController::class, 'userProfile']);
            Route::post('/applicant-profile', [UserInfoController::class, 'applicantProfile']);
            Route::post('joblist', [AdminJobsController::class, 'index']);
            Route::resource('job', AdminJobsController::class);
            Route::resource('jobuser', UserInfoController::class);
            Route::post('jobuserslist', [UserInfoController::class, 'index']);
            Route::get('analytics', [AnalyticsController::class, 'registrationAnalytics']);
        });

        Route::post('/login', [ApiAuthController::class, 'login']);
    });
});
