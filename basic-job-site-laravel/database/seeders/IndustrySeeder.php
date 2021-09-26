<?php

namespace Database\Seeders;

use App\Models\Industry;
use Illuminate\Database\Seeder;

class IndustrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Industry::create([
            'name' => 'Hospitality'
        ]);
        Industry::create([
            'name' => 'engineering'
        ]);
        Industry::create([
            'name' => 'Other'
        ]);
    }
}
