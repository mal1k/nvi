<?php

namespace App\Events;

use App\Classes\CDashboard;
use App\Models\Account;
use App\Models\Holding;
use App\Models\Security;
use App\Models\TransactionHistory;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Properos\Users\Models\User;

class DashboardUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return [
            new Channel('dashboard-updates'),
            /* new PrivateChannel('account'.$this->update->order_id) */
        ];

    }

    public function broadcastAs()
    {
        return 'dashboard_updated';
    }

    public function broadcastWith()
    {
        $users = User::where('status', 'active')->count();
        $active_accounts = Account::where('status', 'active')->count();
        $securities = Security::where('status', 'active')->count();
        $holdings = Holding::where('status', 'active')->count();
        $transactions = TransactionHistory::count();
        return [
            'users' => $users,
            'active_accounts' => $active_accounts,
            'securities' => $securities,
            'holdings' => $holdings,
            'transactions' => $transactions
        ];
    }
}
