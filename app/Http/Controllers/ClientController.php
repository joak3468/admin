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
    
    public function getClient(Request $request) {
        $clientID = $request->query('client_id');
        $userID = $request->query('user_id');
        $client = Client::where('id', $clientID)->where('user_id', $userID)->first();
        return response()->json($client);
    }


    public function create(Request $request) {
        Client::create([
            'user_id' => $request->user_id,
            'name' => $request->name,
            'cuil' => $request->cuil,
            'iva' => $request->iva,
            'address' => $request->address,
            'sale_condition' => $request->sale_condition,
            'price' => $request->price,
            'message' => $request->message,
            'email' => $request->email,
        ]);

        return response()->json(['message' => 'Client create successfully', 'status' => 200], 200);
    }



    public function update(Request $request) {
        $client = Client::findOrFail($request->id);
        $client->name = $request->name;
        $client->cuil = $request->cuil;
        $client->iva = $request->iva;
        $client->address = $request->address;
        $client->sale_condition = $request->sale_condition;
        $client->price = $request->price;
        $client->message = $request->message;
        $client->save();

        return response()->json(['message' => 'Client updated successfully', 'status' => 200], 200);
    }



    public function updateStatus() {
        //
    }
}
