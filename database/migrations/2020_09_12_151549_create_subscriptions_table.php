<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubscriptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('owner_id')->nullable()->index();
            $table->string('owner_type')->nullable()->index();
            $table->string('type')->nullable();
            $table->enum('status', ['expired', 'trial', 'active', 'locked','pending'])->nullable()->default('trial');
            $table->dateTime('started_trial_at')->nullable();
		    $table->unsignedInteger('last_plan_id')->nullable()->index();
		    $table->unsignedInteger('current_plan_id')->nullable()->index();
		    $table->unsignedInteger('next_plan_id')->nullable()->index();
            $table->unsignedDecimal('last_payment')->nullable()->default(0);
            $table->dateTime('last_payment_date')->nullable();
            $table->dateTime('next_payment_date')->nullable();
            $table->dateTime('next_billing_date')->nullable();
            $table->integer('days_to_pay')->nullable()->default(0);
            $table->unsignedInteger('grace_days')->nullable()->default(0);
            $table->dateTime('expires_at')->nullable();
            $table->unsignedInteger('interval_count')->nullable();
            $table->string('interval', 50)->nullable();
            $table->decimal('price')->nullable();
            $table->unsignedInteger('payment_profile_id')->nullable()->default(0);
            $table->integer('total_payments')->default(0)->nullable();
            $table->integer('payments_made')->default(0)->nullable();
            $table->json('data')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();

            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subscriptions');
    }
}
