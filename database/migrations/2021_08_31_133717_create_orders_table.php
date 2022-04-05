<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('order_number', 50);
            $table->integer('user_id')->default(0)->nullable();
            $table->integer('creator_id')->default(0)->nullable();
            $table->string('customer_name')->nullable();
            $table->string('customer_email')->nullable();
            $table->string('customer_phone')->nullable();
            $table->decimal('total_amount', 8, 2)->default('0.0')->nullable();
            $table->decimal('paid_amount', 8, 2)->default('0.0')->nullable();
            $table->decimal('refund_amount', 8, 2)->default('0.0')->nullable();
            $table->decimal('discount_amount', 8, 2)->default('0.0')->nullable();
            $table->string('discount_code', 25)->nullable();
            $table->string('token')->nullable();
            $table->integer('payment_method_id')->default(0)->nullable();
            $table->string('billing_firstname')->nullable();
            $table->string('billing_lastname')->nullable();
            $table->string('billing_address')->nullable();
            $table->string('billing_unit')->nullable();
            $table->string('billing_city')->nullable();
            $table->string('billing_state')->nullable();
            $table->string('billing_zip')->nullable();
            $table->string('billing_country')->nullable();

            $table->string('status')->default('pending')->nullable();
            $table->text('notes')->nullable();
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
        Schema::dropIfExists('orders');
    }
}
