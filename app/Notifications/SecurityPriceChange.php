<?php

namespace App\Notifications;

use App\Models\Security;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Messages\MailMessage;

class SecurityPriceChange extends Notification implements ShouldQueue
{
    use Queueable;

    public $security;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['broadcast', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('The introduction to the notification.')
                    ->action('Notification Action', url('/'))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'id' => $this->security->id,
            'market_price' => $this->security->share_price
        ];
    }

    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([
            'id' => $this->security->id,
            'market_price' => $this->security->share_price,
            'title' => 'Security price changed.',
            'description' => 'Price in a security related with one of your holdings has changed.'
        ]);
    }
    
}
