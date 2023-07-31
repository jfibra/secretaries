<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subfolder extends Model
{
    use HasFactory;
    protected $table = "subfolder";
    protected $fillable = [
        'folderid',
        'secretaryid',
        'foldername',
        'status',
    ];
}
