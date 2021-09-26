<?php

namespace App\Http\Controllers\User\Api;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\JobSite\Transformers\UserProfileTransformer;
use App\Models\Education;
use App\Models\Skill;
use App\Models\User;
use App\Models\WorkExperience;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserProfileController extends ApiController
{

    public function __construct(UserProfileTransformer $transformer)
    {
        $this->transformer = $transformer;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        //
        $user = User::find(auth()->user()->id);
        $this->loadUserRelations($user);
        return $this->respondWithTransformer($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
        $validator = Validator::make($request->all(), [
            'name' => 'string|required',
            'mobile_number' => 'string|required',
            'base64_cv_file' => 'string',

        ]);


        if ($validator->fails()) {
            return $this->respondError("Error Updating Profile");
        }

        $user = User::find(auth()->user()->id);
        if (isset($request->base64_cv_file)) {
            $cv_file_url = $this->storeBase64($request->base64_cv_file);
            $user->cv_file_url = $cv_file_url;
        }
        $user->update($validator->validated());
        $user->load('skills');

        return $this->respondWithTransformer($user);
    }

    public function updateSkills(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'skills' => 'array|required',
        ]);

        if ($validator->fails()) {
            return $this->respondError("Error Updating Profile");
        }
        $user = User::find(auth()->user()->id);
        $user->skills()->sync($request->skills);

        $this->loadUserRelations($user);

        return $this->respondWithTransformer($user);
    }
    public function loadUserRelations($user)
    {
        $user->load('skills', 'workExperiences', 'education', 'workExperiences.industry');
    }

    public function addWorkExperience(Request $request)
    {

        $user = User::find(auth()->user()->id);

        $validator = Validator::make($request->all(), [
            'job_title' => 'string|required',
            'company_name' => 'string|required',
            'started_date' => 'string|required',
            'industry_id' => 'string|required'
        ]);

        if ($validator->fails()) {
            return $this->respondError("Error Updating Profile");
        }
        $workExperience = WorkExperience::create(
            array_merge($validator->validated(), ["user_id" => $user->id])
        );

        $this->loadUserRelations($user);

        return $this->respondWithTransformer($user);
    }

    public function skills()
    {
        $user = auth()->user();
        $skills = Skill::with('users')->get();
        $skills = $skills->map(function ($skill) use ($user) {
            $hasSkill = $skill->users->keyBy('id')->contains($user->id);
            $skill->hasSkill =  $hasSkill;
            return $skill;
        });
        return $this->respond($skills);
    }

    public function addEducation(Request $request)
    {

        $user = User::find(auth()->user()->id);

        $validator = Validator::make($request->all(), [
            'highest_level' => 'string|required',
            'school_name' => 'string|required',
            'completed_date' => 'string|required',
        ]);

        if ($validator->fails()) {
            return $this->respondError("Error Updating Profile");
        }
        $education = Education::create(
            array_merge($validator->validated(), ["user_id" => $user->id])
        );

        $this->loadUserRelations($user);

        return $this->respondWithTransformer($user);
    }

    public function destroyEducation(Education $education)
    {
        $education->delete();
        return $this->respondNoContent();
    }
    public function destroyWorkExperience(WorkExperience $workExperience)
    {
        $workExperience->delete();
        return $this->respondNoContent();
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
