<?php

namespace App\JobSite\Transformers;

class RegistrationAnalyticsTransformer extends Transformer
{
    protected $resourceName = 'analytic';

    public function transform($data)
    {
        return [
            'name' => $data->day,
            'value' => $data->total
        ];
    }
}
