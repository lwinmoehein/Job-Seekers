<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkExperience extends Model
{
    use HasFactory;

    protected $fillable = ['job_title', 'company_name', 'started_date', 'user_id', 'industry_id'];

    public function industry()
    {
        return $this->belongsTo(Industry::class);
    }
}
