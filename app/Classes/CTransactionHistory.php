<?php

namespace App\Classes;

use App\Models\TransactionHistory;
use Properos\Base\Classes\Base;
use Properos\Base\Classes\Helper;
use Properos\Base\Exceptions\ApiException;
use Illuminate\Support\Str;
use Properos\Accounting\Classes\CPaymentProfile;
use Properos\Accounting\Models\Transaction;

class CTransactionHistory extends Base
{
    public function __construct()
    {
        parent::__construct(TransactionHistory::class, 'TransactionHistory');
    }

}
