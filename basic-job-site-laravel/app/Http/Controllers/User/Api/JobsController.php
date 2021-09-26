<?php

namespace App\Http\Controllers\User\Api;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\JobSite\Transformers\JobTransformer;
use App\JobSite\Transformers\JobUserTransformer;
use App\Models\Job;
use App\Models\JobApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    public function applyJob(Job $job)
    {
        $jobApplication = JobApplication::create([
            'job_id' => $job->id,
            'user_id' => auth()->user()->id,
            'applied_date' => now()
        ]);

        if (!$jobApplication) {
            return $this->respondError("Error appplying jobs");
        }

        return $this->respondSuccess("Apply job succeeded");
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
    }
}
