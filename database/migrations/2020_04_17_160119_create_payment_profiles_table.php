<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_profiles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('owner_type',50);
            $table->unsignedInteger('owner_id');
            $table->string('profile_id');
            $table->string('payment_processor', 20)->default('authorize');
            $table->string('payment_profile_id');
            $table->string('account_type', 20)->nullable();
            $table->string('payment_method_type', 10)->nullable();
            $table->string('last_4')->nullable();
            $table->string('expiration_date',10)->nullabel();
            $table->string('brand', 20)->nullable();
            $table->string('billing_firstname')->nullable();
            $table->string('billing_lastname')->nullable();
            $table->string('billing_address')->nullable();
            $table->string('billing_unit')->nullable();
            $table->string('billing_city')->nullable();
            $table->string('billing_state')->nullable();
            $table->string('billing_zip')->nullable();
            $table->string('billing_country')->nullable();
            $table->boolean('default')->nullable()->default(false);
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
        Schema::dropIfExists('payment_profiles');
    }
}
