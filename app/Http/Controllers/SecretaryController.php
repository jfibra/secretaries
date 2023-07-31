<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SecretaryController extends Controller
{
    public function __construct()
    {
        date_default_timezone_set("Asia/Manila");
    }

    public function index()
    {
        return view('front.lr-secretaries-home');
    }
}
