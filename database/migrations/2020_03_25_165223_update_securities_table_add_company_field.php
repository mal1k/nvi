<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateSecuritiesTableAddCompanyField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('securities', function (Blueprint $table) {
            $table->string('company')->after('name')->nullable();
            $table->mediumText('company_description')->after('company')->nullable();
            $table->double('share_price', 8, 2)->after('shares')->nullable();
            $table->unsignedBigInteger('creator_id')->after('id')->nullable();
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
        Schema::table('securities', function (Blueprint $table) {
            $table->dropColumn('company');
            $table->dropColumn('company_description');
            $table->dropColumn('share_price');
            $table->dropColumn('creator_id');
        });
    }
}
