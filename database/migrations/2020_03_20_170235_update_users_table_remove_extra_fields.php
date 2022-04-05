<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateUsersTableRemoveExtraFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('account_type');
            $table->dropColumn('investor');
            $table->dropColumn('affiliate_id');
            $table->dropColumn('percent');
            $table->dropColumn('pending_balance');
            $table->dropColumn('available_balance');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->enum('account_type',['personal','business','professional'])->nullable()->after('date_of_birth');
            $table->enum('investor',['accredited','non-accredited'])->nullable()->after('account_type');
            $table->unsignedInteger('affiliate_id')->after('status')->nullable()->default(0);
            $table->decimal('percent',10,2)->after('affiliate_id')->nullable()->default(0);
            $table->decimal('pending_balance')->after('percent')->nullable()->default(0);
            $table->decimal('available_balance')->after('pending_balance')->nullable()->default(0);
        });
    }
}
