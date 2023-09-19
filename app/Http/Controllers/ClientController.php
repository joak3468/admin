<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Request\CreateClientRequest;


class ClientController extends Controller
{
    public function home(){
        $clients = Client::get();
        return response()->json($clients);
    }



    public function create(Request $request) {
        try {
            Client::create([
                'user_id' => $request->user_id,
                'name' => $request->name,
                'cuil' => $request->cuil,
                'iva' => $request->iva,
                'address' => $request->address,
                'sale_condition' => $request->sale_condition,
                'price' => $request->price,
                'message' => $request->message,
            ]);
            return true;
        } catch ( Exception $e ) {
            return false;
        }
    }
}
