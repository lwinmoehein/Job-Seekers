<?php

namespace App\JobSite\Transformers;

class JobUserTransformer extends Transformer
{
    protected $resourceName = 'jobuser';

    public function transform($data)
    {
        return [
            'name' => $data['name'],
            'email'     => $data['email'],
        ];
    }
}
