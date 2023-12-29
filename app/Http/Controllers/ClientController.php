<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\User;
use App\Models\PriceSummary;
use Illuminate\Http\Request;
use App\Http\Request\CreateClientRequest;



class ClientController extends Controller
{
    public function getAll(){
        $clients = Client::orderBy('status','desc')->get();
        return response()->json($clients);
    }    

    public function getById(Request $request) {
        return response()->json($this->_getClientInformacion($request));
    }

    public function getName(Request $request){
        $client = $this->_getClientInformacion($request);
        return response()->json($client->name);
    }    
    
    
    public function getActive(Request $request){
        $clients = Client::active()->get();
        return response()->json($clients);
    }   
    
    public function getInactive(Request $request){
        $clients = Client::inactive()->get();
        return response()->json($clients);
    }

    private function _getClientInformacion($request){
        $clientID = $request->query('client_id');
        $userID = $request->query('user_id');
        return Client::where('id', $clientID)->where('user_id', $userID)->first();
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

        if($client->price != $request->price)
            PriceSummary::create([ 'client_id' => $client->id, 'price' => $client->price ]);

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



    public function updateStatus(Request $request) {
        $client = Client::findOrFail($request->client_id);
        $client->status = $request->status;
        $client->save();
        return response()->json(['message' => 'Client status updated successfully', 'status' => 200], 200);
    }
 
    
    //deleteClient(){}
}
