<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateSecuritiesTableAddNewApproachFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('securities', function (Blueprint $table) {
            $table->bigInteger('security_number')->after('creator_id');
            $table->double('stock_price', 8, 2)->after('security_number');
            $table->double('put', 8, 2)->after('stock_price');
            $table->double('straddle', 8, 2)->after('put');
            $table->double('total_price', 8, 2)->after('straddle');
            $table->double('expected_value', 8, 2)->after('total_price')->nullable();
            $table->bigInteger('simulations')->nullable()->after('expected_value');
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
            $table->dropColumn('security_number');
            $table->dropColumn('stock_price', 8, 2);
            $table->dropColumn('put', 8, 2);
            $table->dropColumn('straddle', 8, 2);
            $table->dropColumn('total_price', 8, 2);
            $table->dropColumn('expected_value', 8, 2);
            $table->dropColumn('simulations');
        });
    }
}
