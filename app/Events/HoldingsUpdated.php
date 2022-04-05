<?php

namespace App\Events;

use App\Models\Holding;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class HoldingsUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $holding;


    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Holding $holding)
    {
        $this->holding = $holding;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return [
            new Channel('holding-updates'),
            /* new PrivateChannel('account'.$this->update->order_id) */
        ];

    }

    public function broadcastAs()
    {
        return 'holding_updated';
    }

    public function broadcastWith()
    {
        return [
            'holding' => $this->holding,
        ];
    }
}
