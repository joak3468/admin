<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $table = 'client';
    protected $fillable = ['id', 'name', 'cuil', 'iva', 'address', 'price', 'sale_condition', 'message', 'status', 'user_id', 'email'];


    public function invoices() {
        return $this->hasMany(Invoice::class);
    }

    public static function active() {
        return self::where('status', 1);
    }    
    
    public static function inactive() {
        return self::where('status', 0);
    }
    
    public function priceSummary() {
        return $this->hasMany(PriceSummary::class);
    }
}
