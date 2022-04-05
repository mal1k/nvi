<?php

namespace App\Jobs;

use App\Classes\CSecurity;
use App\Classes\CSimulation;
use App\Models\Account;
use App\Models\Holding;
use App\Models\Security;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Properos\Users\Models\User;

class MaturityDateJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $data;
    public function __construct()
    {

    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $cSimulation = new CSimulation();
        $cSecurity = new CSecurity($cSimulation);
        $holdings = Holding::where('security_id','>',0)->where('status','active')->get();
        foreach($holdings as $holding){
            $security = Security::where('id',$holding->security_id)->first();
            $securities_part = Security::where('security_number',$security->security_number)->get();
            foreach($securities_part as $security_part){
                if($security_part->maturity_date != 0){
                    $security_part->maturity_date -= 1;
                }
                $security_part->save();
            }
        }
    }
}
