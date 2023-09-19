<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Client extends Model
{
    protected $fillable = ['name', 'cuil', 'iva', 'address', 'sale_condition', 'price', 'message', 'status', 'user_id', 'email'];

    use HasFactory;
}
