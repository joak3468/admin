<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $table = 'invoice';
    protected $fillable = ['id', 'client_id','user_id', 'status', 'price', 'created_at', 'updated_at'];
    
    public function client() {
<<<<<<< HEAD
        return $this->belongsTo(Client::class, 'client_id', 'id');
=======
        return $this->belongsTo(Client::class);
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
    }
}
