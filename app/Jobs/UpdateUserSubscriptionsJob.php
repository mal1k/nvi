<?php

namespace App\Jobs;

use App\Models\Subscription;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class UpdateUserSubscriptionsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $plan;
    protected $send_email;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($plan, $send_email = false)
    {
        $this->plan = $plan;
        $this->send_email = $send_email;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Subscription::where('current_plan_id', $this->plan->id)->update([
                                                                        'price' => $this->plan->min_price, 
                                                                        'price_per_record' => $this->plan->unit_price,
                                                                        'free_records' => $this->plan->free_records,
                                                                        'data' => $this->plan
                                                                        ]);
                                                                        
        if($this->send_email){
            $subscriptions = Subscription::where([
                ['current_plan_id', $this->plan->id],
                ['status', 'active'],
            ])->with('owner','plan')->get();

            foreach($subscriptions as $subscription){
                \Mail::send('themes.' . \Properos\Base\Classes\Theme::get() . '.emails.plan_changed', ['name' => $subscription->owner->firstname . ' '. $subscription->owner->lastname,'plan' => $subscription->plan], function ($m) use ($subscription) {
                    $m->from(config('properos_users.mail.email'), env("APP_NAME", "Properos"));
                    $m->to($subscription->owner->email, $subscription->owner->firstname . ' '. $subscription->owner->lastname)->subject(env("APP_NAME", "Properos")." subscription update");
                });
            }
        }
    }
}
