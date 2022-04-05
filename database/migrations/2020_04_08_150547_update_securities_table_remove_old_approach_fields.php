<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateSecuritiesTableRemoveOldApproachFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('securities', function (Blueprint $table) {
            if (Schema::hasColumn('securities','name'))
            {
                $table->dropColumn('name');
            }
            if (Schema::hasColumn('securities','company'))
            {
                $table->dropColumn('company');
            }
            if (Schema::hasColumn('securities','company_description'))
            {
                $table->dropColumn('company_description');
            }
            if (Schema::hasColumn('securities','type'))
            {
                $table->dropColumn('type');
            }
            if (Schema::hasColumn('securities','shares'))
            {
                $table->dropColumn('shares');
            }
            if (Schema::hasColumn('securities','sold_shares'))
            {
                $table->dropColumn('sold_shares');
            }
            if (Schema::hasColumn('securities','available_shares'))
            {
                $table->dropColumn('available_shares');
            }
            if (Schema::hasColumn('securities','share_price'))
            {
                $table->dropColumn('share_price');
            }
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
            $table->string('name');
            $table->string('type');
            $table->integer('shares');
            $table->string('company')->after('name')->nullable();
            $table->mediumText('company_description')->after('company')->nullable();
            $table->double('share_price', 8, 2)->after('shares')->nullable();
            $table->bigInteger('sold_shares')->after('share_price')->default(0);
            $table->bigInteger('available_shares')->after('sold_shares')->default(0);
        });
    }
}
