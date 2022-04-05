<?php

return [
    "router" => [
        "default" => [
            "prefix" => [
                'web' => env('WEB_PREFIX', '/'),
                'api' => env('API_PREFIX', '/api/v1'),
                'admin_web' => env('ADMIN_WEB_PREFIX', '/admin'),
                'admin_web_api' => env('ADMIN_WEB_API_PREFIX', '/api/admin'),
            ],
            "namespaces" => 'Properos\Accounting\Controllers',
            "middleware" => [
                "public" => [],
                "private" => ['auth', 'role:admin'],
                "api/admin" => ['auth', 'role:admin'],
                "admin" => ['auth', 'role:admin'],
            ]
        ]
    ],
    "tenancy" => false,
    "card_processor" => env("CARD_PROCESSOR" , "authorize"),
    "authorize_env" => env("AUTHORIZE_ENV" , "SANDBOX"),
    "authorize_api_id" => env("AUTHORIZE_API_ID" , ""),
    "authorize_private_key" => env("AUTHORIZE_PRIVATE_KEY" , ""),
    "authorize_public_key" => env("AUTHORIZE_PUBLIC_KEY" , ""),
    "stripe_public_key" => env("STRIPE_PUBLIC_KEY" , ""),
    "stripe_secret_key" => env("STRIPE_SECRET_KEY" , ""),
    "stripe_statement_descriptor" => env("STRIPE_STATEMENT_DESCRIPTOR" , env("APP_NAME","")),
    "stripe_api_url" => env("STRIPE_API_URL" , "https://api.stripe.com/v1"),
];