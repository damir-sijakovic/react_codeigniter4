<?php

namespace App\Controllers;

class Example extends BaseController
{
	public function index()
	{
        header('Content-type:application/json;charset=utf-8');
        
        echo json_encode(['success'=> 'Hello from PHP `/api.php/example` route. This controller is at `/app/Controllers/Example.php`.']);  
        die();

	}
}
