<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Invoice;

class InvoiceController extends Controller
{

    public function getAll(Request $request) {
        // agregar params para filtrar
        $invoices = Invoice::get();
        return response()->json($invoices);
    }

    public function create(Request $request) {
        Invoice::create([
            'client_id' => $request->client_id,
            'status' => 0,
            'price' => $request->price
        ]);
        return response()->json(['message' => 'Invoice create successfully', 'status' => 200], 200);

    }

    public function updateStatus(Request $request) {
        $invoice = Invoice::findOrFail($request->id);
        $invoice->status = $request->status;
        $invoice->save();

        return response()->json(['message' => 'Invoice update successfully', 'status' => 200], 200);
    }


    public function delete(Request $request) {
        Invoice::findOrFail($request->id)->delete();
        return response()->json(['message' => 'Invoice delete successfully', 'status' => 200], 200);
    }
}
