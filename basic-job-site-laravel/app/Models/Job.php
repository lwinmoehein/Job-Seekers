<?php

namespace App\Models;

use App\JobSite\JobApplication\HasJobApplication;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory, HasJobApplication;

    protected $fillable = ['title', 'company_name', 'description'];

    public function appliedUsers()
    {
        return $this->belongsToMany(User::class, 'job_applications', 'job_id', 'user_id');
    }
}
