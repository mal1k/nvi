<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLedgersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ledgers', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->string('payable_type', 50);
            $table->unsignedInteger('payable_id');
            $table->unsignedInteger('transaction_id');
            $table->enum('operation',['debit','credit']);
            $table->string('type',50);
            $table->double('amount', 10, 2);
            $table->decimal('sbalance',10,2)->nullable()->default(0);
            $table->decimal('ebalance',10,2)->nullable()->default(0);
            $table->string('description',255)->nullable();
            $table->enum('status',['pending','processed'])->nullable()->default('pending');
            $table->string('currency',5)->default('USD');
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
        Schema::dropIfExists('ledgers');
    }
}
