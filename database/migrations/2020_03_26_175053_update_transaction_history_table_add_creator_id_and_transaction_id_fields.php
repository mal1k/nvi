<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateTransactionHistoryTableAddCreatorIdAndTransactionIdFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('transaction_histories', function (Blueprint $table) {
            $table->string('transaction_id')->after('id');
            $table->unsignedBigInteger('creator_id')->after('transaction_id');
            $table->string('status')->after('origin_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('transaction_histories', function (Blueprint $table) {
            $table->dropColumn('transaction_id');
            $table->dropColumn('creator_id');
            $table->dropColumn('status');
        });
    }
}
