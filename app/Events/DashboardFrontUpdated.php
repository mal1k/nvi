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

class DashboardFrontUpdated implements ShouldBroadcast
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
            new Channel('dashboard-front-updates'),
            /* new PrivateChannel('account'.$this->update->order_id) */
        ];

    }

    public function broadcastAs()
    {
        return 'dashboard_front_updated';
    }

    public function broadcastWith()
    {
        $accounts = Account::where('status', 'active')->get();

        foreach ($accounts as $key => $account) {

            if ($account->account_type == 'nvic' || $account->account_type == 'mdf' || $account->account_type == 'sf') {
                $admin_accounts[$account->account_type] = $account;
                continue;
            }

            $cDashboard = new CDashboard();
            $data_dash['account_id'] = $account->id;
            $dashboard = $cDashboard->create($data_dash);
            $dashboard_sent[]=$dashboard;
        }

        return [
            'array_data' => $dashboard_sent,
        ];
    }
}



