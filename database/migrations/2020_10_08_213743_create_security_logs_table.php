<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSecurityLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('security_logs', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('security_id');
            $table->unsignedBigInteger('security_number');
            $table->double('stock_price',8,2);
            $table->double('put',8,2);
            $table->double('straddle',8,2);
            $table->double('total_price',8,2);
            $table->string('type',5);
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
        Schema::dropIfExists('security_logs');
    }
}
