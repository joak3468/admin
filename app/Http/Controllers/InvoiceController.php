<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\model\Invoice;

class InvoiceController extends Controller
{
    public function create(Request $request) {
        Invoice::create([
            'client_id' => $request->client_id,
            'status' => 0,
            'price' => $request->price
        ]);

        return response()->json(['message' => 'Invoice create successfully', 'status' => 200], 200);

    }

    public function getInvoices(Request $request) {
        // agregar params
        $invoices = Invoice::get();
        return response()->json($invoices);
    }

    public function updateStatus(Request $request) {
        $invoice = Invoice::findOrFail($request->id);
        $invoice->status = $request->status;
        $invoice->save();
    }

}
