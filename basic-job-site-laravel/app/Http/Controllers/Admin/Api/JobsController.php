<?php

namespace App\Http\Controllers\Admin\Api;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\JobSite\Transformers\JobTransformer;
use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class JobsController extends ApiController
{


    public function __construct(JobTransformer $jobTransformer)
    {
        $this->transformer = $jobTransformer;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $jobsQuery = Job::query();

        if (isset($request->q)) {
            $query = $request->q;
            $jobsQuery =   $jobsQuery->where('title', "like", "%" . $query . "%")
                ->orWhere('company_name', "like", "%" . $query . "%");
        }
        $jobs = $jobsQuery->get();
        return $this->respondWithTransformer($jobs);
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
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'company_name' => 'required|string',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return $this->respondError("Insert Required Fields");
        }

        $job = Job::create($validator->validated());

        return $this->respondCreated($job);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function show(Job $job)
    {
        //
        $job->load('appliedUsers');
        return $this->respondWithTransformer($job);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function edit(Job $job)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Job $job)
    {
        //
        $validator = Validator::make($request->all(), [
            'title' => 'string',
            'company_name' => 'string',
            'description' => 'string',
        ]);

        if ($validator->fails()) {
            return $this->respondError("Insert Required Fields");
        }

        $job->update($validator->validated());

        return $this->respondSuccess($job);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function destroy(Job $job)
    {
        //
        $job->delete();
        return $this->respondSuccess(["message" => "Job Item Deleted"], $job);
    }
}
