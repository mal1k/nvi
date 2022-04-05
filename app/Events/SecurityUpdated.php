<?php

namespace App\Events;

use App\Models\Security;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class SecurityUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $security;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return [
            new Channel('security-updates'),
            /* new PrivateChannel('account'.$this->update->order_id) */
        ];

    }

    public function broadcastAs()
    {
        return 'security_updated';
    }

    public function broadcastWith()
    {
        return [
            'security_number' => $this->security->security_number,
            'stock_price' => $this->security->stock_price,
            'interest_rate' => $this->security->interest_rate,
            'expected_value' => $this->security->expected_value,
            'total_price' => $this->security->total_price,
            'maturity_date' => $this->security->maturity_date,
            'id' => $this->security->id,
            'status' => $this->security->status,
            'straddle' => $this->security->straddle,
            'put' => $this->security->put,
            'simulations' => $this->security->simulations
        ];
    }
}
