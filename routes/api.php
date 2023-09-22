<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ClientController;
use App\Http\Controllers\AuthController;


Route::post('login', [AuthController::class, 'login'])->name('api.login');
Route::get('test', [ClientController::class, 'home'])->name('test');



Route::middleware('auth:sanctum')->group(function () {    
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('clients', [ClientController::class, 'home']);
    Route::get('client', [ClientController::class, 'getClient']);
    Route::post('create_client', [ClientController::class, 'create']);
    Route::post('update_client', [ClientController::class, 'update']);
});
