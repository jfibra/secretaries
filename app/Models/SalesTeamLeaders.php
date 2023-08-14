<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesTeamLeaders extends Model
{
    use HasFactory;
    protected $table = "sales_team_leaders";
    protected $fillable = [
        'teamname',
        'teamleader',
    ];
}
