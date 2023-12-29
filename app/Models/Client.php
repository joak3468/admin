<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $table = 'client';
<<<<<<< HEAD
    protected $fillable = ['id', 'name', 'cuil', 'iva', 'address', 'price', 'sale_condition', 'message', 'status', 'user_id', 'email'];
=======
    protected $fillable = ['id', 'name', 'cuil', 'iva', 'address', 'sale_condition', 'price', 'message', 'status', 'user_id', 'email'];
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b


    public function invoices() {
        return $this->hasMany(Invoice::class);
    }

    public static function active() {
        return self::where('status', 1);
    }    
    
    public static function inactive() {
        return self::where('status', 0);
    }
    
<<<<<<< HEAD
    public function priceSummary() {
        return $this->hasMany(PriceSummary::class);
    }
=======

>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
}
