<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Skill;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Skill::create([
            "name" => 'php'
        ]);
        Skill::create([
            "name" => 'swift'
        ]);
        Skill::create([
            "name" => 'web'
        ]);
        Skill::create([
            "name" =>  'ruby'
        ]);
        Skill::create([
            "name" => 'python'
        ]);
        Skill::create([
            "name" =>  'java'
        ]);
        Skill::create([
            "name" => 'C#'
        ]);
    }
}
