<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFieldsUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->date('date_of_birth')->nullable()->after('email');
            $table->enum('account_type',['personal','business','professional'])->nullable()->after('date_of_birth');
            $table->enum('investor',['accredited','non-accredited'])->nullable()->after('account_type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasColumn('account_type', 'investor'))
        {
            Schema::table('users', function (Blueprint $table)
            {
                $table->dropColumn('account_type');
                $table->dropColumn('investor');
            });
        }
        
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('date_of_birth');
        });
        
    }
}
