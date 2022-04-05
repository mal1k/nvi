<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('owner_type', 50)->nullable();
            $table->unsignedInteger('owner_id')->nullable();
            $table->string('payable_type', 50);
            $table->unsignedInteger('payable_id');
            $table->string('profile_id')->nullable();
            $table->string('payment_profile_id')->nullable();
            $table->string('ip_address', 50)->nullable();
            $table->string('payment_method_type',50)->nullable();
            $table->string('account_type',50)->nullable();
            $table->string('last_4')->nullable();
            $table->string('provider', 50)->nullable();
            $table->string('transaction_id')->nullable();
            $table->string('transaction_reference_id')->nullable();
            $table->string('operation', 50);
            $table->double('amount', 10, 2);
            $table->double('fee', 10, 2)->nullable()->default(0);
            $table->string('currency',5)->default('USD');
            $table->string('description')->nullable();
            $table->string('auth_code')->nullable();
            $table->string('status', 20);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
