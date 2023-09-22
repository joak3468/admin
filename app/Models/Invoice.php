<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $table = 'invoice';
    protected $fillable = ['id', 'client_id', 'status', 'price'];
    
    public function client() {
        return $this->belongsTo(Client::class);
    }
}
