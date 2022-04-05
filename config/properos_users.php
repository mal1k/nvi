<?php

return [
    "router" => [
        "default" => [
            "options" => [
                "prefix" => "/"
            ],
            "middleware" => [
                "public" => [],
                "private" => ['auth', 'role:admin|super_admin'],
                "api/admin" => ['auth', 'role:admin|super_admin'],
                "admin" => ['auth', 'role:admin|super_admin'],
            ]
        ]
    ]
];