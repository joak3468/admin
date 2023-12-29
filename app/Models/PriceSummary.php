<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PriceSummary extends Model
{
    use HasFactory;
    protected $table = "price_changes";
    protected $fillable = ['id', 'client_id','price', 'created_at', 'updated_at'];

    public function client() {
        return $this->belongsTo(Client::class);
    }

}
