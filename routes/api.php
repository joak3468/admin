<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ClientController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\AuthController;


Route::post('login', [AuthController::class, 'login']);
Route::post('cuser', [AuthController::class, 'createUser']);


Route::middleware('auth:sanctum')->group(function () {    
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('clients', [ClientController::class, 'getAll']);
    Route::get('clients_active', [ClientController::class, 'getActive']);
    Route::get('clients_inactive', [ClientController::class, 'getInactive']);
    Route::get('client', [ClientController::class, 'getById']);
    Route::get('client/name', [ClientController::class, 'getName']);
    Route::post('create_client', [ClientController::class, 'create']);
    Route::post('update_client', [ClientController::class, 'update']);
    Route::post('update_client_status', [ClientController::class, 'updateStatus']);
    
    Route::get('invoices', [InvoiceController::class, 'getAll']);
    Route::get('invoices_with_name', [InvoiceController::class, 'getAllWithName']);
    Route::post('create_invoice', [InvoiceController::class, 'create']);
    Route::post('update_invoice', [InvoiceController::class, 'updateStatus']);
    Route::post('delete_invoice', [InvoiceController::class, 'delete']);
});
