<?php

namespace App\Classes;

use App\Models\Order;
use App\Models\OrderItem;
use Properos\Base\Classes\Base;
use Properos\Base\Classes\Helper;
use Properos\Base\Exceptions\ApiException;
use Illuminate\Support\Str;
use Properos\Accounting\Classes\CPaymentProfile;
use Properos\Accounting\Models\Transaction;

class COrder extends Base
{
    public function __construct()
    {
        parent::__construct(Order::class, 'Order');
    }

    public function init_fillable()
    {
        foreach ($this->model->getFillable() as $key) {
            switch ($key) {
                case 'paid_amount':
                case 'refund_amount':
                case 'discount_amount':
                    $this->fillable[$key] = '0';
                    break;
                default:
                    $this->fillable[$key] = null;
                    break;
            }
        }
    }

    public function create(array $data)
    {
        $rules = [
            'user_id' => 'required|integer|min:1',
            'amount' => 'required',
        ];

        $validation = \Validator::make($data, $rules);

        if($validation->passes()){
            $data['customer_name'] = Helper::getValue($data, 'customer_name', (\Auth::check() ? \Auth::user()->firstname . ' ' . \Auth::user()->lastname : null));
            $data['customer_email'] = Helper::getValue($data, 'customer_email', (\Auth::check() ? \Auth::user()->email : null));
            $data['customer_phone'] = Helper::getValue($data, 'customer_phone', (\Auth::check() ? \Auth::user()->phone : null));
            $data['total_amount'] = Helper::getValue($data, 'amount', 0);
            $data['status'] = Helper::getValue($data, 'status', 'pending');
            $data['token'] = '';
            $data['order_number'] = 'unknown';
            
            $order = $this->createModel($data, $rules);

            $order_number = Helper::base2base(1000 * $order['id'], 10, 36) . strtoupper(Str::random(4));
            $token = Helper::gen_invoice_token($order['id']);

            $order = $this->updateModel([
                'id' => $order['id'],
                'token' => $token,
                'order_number' => $order_number
            ]);

            return  $order;
        }

        throw new ApiException($validation->errors(), '003', $data);
    }

    public function update(array $data)
    {
        $rules = [
            'id' => 'required|integer|min:1',
            'user_id' => 'required|integer|min:1',
            'amount' => 'required|numeric',
        ];

        $validation = \Validator::make($data, $rules);

        if($validation->passes()){
            $order = $this->updateModel($data, $rules);
            return  $order;
        }

        throw new ApiException($validation->errors(), '003', $data);
    }

    public function delete($id)
    {
        return $this->deleteModel($id);
    }
}
