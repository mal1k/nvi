<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ModifyExpirationDatePaymentProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('payment_profiles', function (Blueprint $table) {
            \DB::statement("ALTER TABLE payment_profiles MODIFY COLUMN expiration_date varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL;");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('payment_profiles', function (Blueprint $table) {
            //
        });
    }
}
