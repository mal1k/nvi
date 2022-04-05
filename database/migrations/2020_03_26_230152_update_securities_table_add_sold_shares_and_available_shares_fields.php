<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateSecuritiesTableAddSoldSharesAndAvailableSharesFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('securities', function (Blueprint $table) {
            $table->bigInteger('sold_shares')->after('shares')->default(0);
            $table->bigInteger('available_shares')->after('sold_shares')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('securities', function (Blueprint $table) {
            $table->dropColumn('sold_shares');
            $table->dropColumn('available_shares');
        });
    }
}
