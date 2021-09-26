<?php

namespace App\JobSite\JobApplication;

use App\Models\JobApplication;

trait HasJobApplication
{
    public function jobApplications()
    {
        return $this->hasMany(JobApplication::class);
    }
}
