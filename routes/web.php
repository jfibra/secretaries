<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SecretaryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Auth::routes();

Route::get('/login', [LoginController::class, 'login'])->name('login.submit');

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get('/', [SecretaryController::class, 'index'])->name('lr-secretaries-home');
