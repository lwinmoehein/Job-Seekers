<?php

namespace App\JobSite\Transformers;

class JobTransformer extends Transformer
{
    protected $resourceName = 'job';

    public function transform($data)
    {
        return [
            'id' => $data['id'],
            'title' => $data['title'],
            'company_name'     => $data['company_name'],
            'description'  => $data['description'],
            'applicants' => $data['appliedUsers'] ? $data['appliedUsers'] : []
        ];
    }
}
