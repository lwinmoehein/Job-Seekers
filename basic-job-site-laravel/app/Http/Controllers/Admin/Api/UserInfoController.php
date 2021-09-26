<?php

namespace App\Http\Controllers\Admin\Api;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\JobSite\Transformers\JobUserTransformer;
use App\JobSite\Transformers\UserProfileTransformer;
use App\Models\Job;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserInfoController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct(UserProfileTransformer $jobUserTransformer)
    {
        $this->transformer = $jobUserTransformer;
    }
    public function index(Request $request)
    {
        //
        $usersQuery = User::query();

        if (isset($request->q)) {
            $query = $request->q;
            $usersQuery =   $usersQuery->where('name', "like", "%" . $query . "%")
                ->orWhere('email', "like", "%" . $query . "%")
                ->orWhere('mobile_number', "like", "%" . $query . "%");
        }
        $users = $usersQuery->get();

        return $this->respondWithTransformer($users);
    }
    public function loadUserRelations($user)
    {
        $user->load('skills', 'workExperiences', 'education', 'workExperiences.industry');
    }

    public function applicantProfile(Request $request)
    {
        $user = User::find($request->user_id);
        $this->loadUserRelations($user);
        return $this->respondWithTransformer($user);
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
    public function show(User $user)
    {
        //
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
    public function update(Request $request, User $user)
    {
        //
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
