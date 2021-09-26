<?php

namespace App\Http\Controllers\Admin\Api;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\JobSite\Transformers\RegistrationAnalyticsTransformer;
use Illuminate\Support\Facades\DB;

class AnalyticsController extends ApiController
{
    //
    public function __construct(RegistrationAnalyticsTransformer $transformer)
    {
        $this->transformer = $transformer;
    }
    public function registrationAnalytics()
    {
        $analytics =  DB::table('users as u')
            ->whereMonth('created_at', now())
            ->select(array(DB::Raw('DATE(u.created_at) day'), DB::raw('count(*) as total')))
            ->groupBy('day')
            ->orderBy('u.created_at')
            ->get();
        return $this->respondWithTransformer($analytics);
    }
}
