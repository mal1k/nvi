<?php

namespace App\Events;

use App\Models\Account;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class AccountUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $account;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Account $account)
    {
        $this->account = $account;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return [
            new Channel('account-updates'),
            /* new PrivateChannel('account'.$this->update->order_id) */
        ];

    }

    public function broadcastAs()
    {
        return 'account_updated';
    }

    public function broadcastWith()
    {
        return [
            'user_id' => $this->account->user_id,
            'creator_id' => $this->account->creator_id,
            'account_type' => $this->account->account_number,
            'balance' => $this->account->balance,
            'withdrawable' => $this->account->withdrawable,
            'status' => $this->account->status,
            'id' => $this->account->id
        ];
    }
}
