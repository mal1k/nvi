<?php

namespace App\Listeners;

use App\Events\SecurityUpdated;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SecurityUpdatedListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  MarketPriceChange  $event
     * @return void
     */
    public function handle(SecurityUpdated $event)
    {
        \Log::info($event->security);

    }
}
