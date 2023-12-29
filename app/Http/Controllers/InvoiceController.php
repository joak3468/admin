<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Invoice;

class InvoiceController extends Controller
{
    public function getAllUnfinished(Request $request) {

        return response()->json(Invoice::get());
    }

    public function getAllWithName(Request $request) {
        $validator = Validator::make($request->all(), [
            'dateTo' => ['regex:/^20[2-9]\d-[0-1]\d-[0-3]\d$/'],
            'dateFrom' => ['regex:/^20[2-9]\d-[0-1]\d-[0-3]\d$/'],
        ]);
        
        $invoices = Invoice::when($request->filled('status') && $request->input('status') != 'all', function ($query) use ($request) {
            $query->whereIn('status', explode(",", $request->input('status')) );
        })
        ->when($request->filled('dateFrom') && $request->filled('dateTo'), function ($query) use ($request) {
            $query->whereDate('created_at', '>=', $request->input('dateFrom'))
                  ->whereDate('created_at', '<=', $request->input('dateTo'));
        })
        ->when($request->filled('client'), function ($query) use ($request) {
            $query->where('client', $request->input('client'));
        })
        ->with(['client' => function ($query) {
            $query->select('id', 'name');
        }])
        ->get();
        
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
