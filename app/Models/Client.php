<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $table = 'client';
    protected $fillable = ['id', 'name', 'cuil', 'iva', 'address', 'sale_condition', 'price', 'message', 'status', 'user_id', 'email'];


    public function invoices() {
        return $this->hasMany(Invoice::class);
    }

}
