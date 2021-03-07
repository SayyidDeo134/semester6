<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function register(Request $request)
    {
        $data = new User();
        $data->email = $request->email;
        $data->password = $request->password;
        $data->level = 'pelanggan';
        $data->api_token = '12345';
        $data->status = '1';
        $data->relasi = $request->email;
        $data->save();

        return response()->json($data);
    }

    public function login()
    {
    }

    //
}
