<?php

namespace App\JobSite\Transformers;

class UserProfileTransformer extends Transformer
{
    protected $resourceName = 'user_profile';

    public function transform($data)
    {
        return [

            'id' => $data['id'],
            'email'     => $data['email'],
            'name'  => $data['name'],
            'mobile_number' => $data['mobile_number'],
            'cv_file_url' => $data['cv_file_url'],
            'skills' => $data['skills'],
            'work_experiences' => $data['workExperiences'],
            'education' => $data['education']
        ];
    }
}
