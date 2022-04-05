<?php

namespace App\Jobs;

use App\Classes\CSecurity;
use App\Classes\CSimulation;
use App\Models\Security;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class SimMultipleSecurity implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $data;
    public function __construct($data)
    {
        $this->data = $data;
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
        $security = Security::where('security_number',$this->data['security']['security_number'])->where('type','A')->first();
        $security->sim_status = 'blocked';
        $security->save();

        for ($i = 0; $i < $this->data['sim']; $i++) {
            $sim_security = $cSecurity->simulate($this->data['security'],true);
        }

        $security->sim_status = 'unblocked';
        $security->save();



    }
}
