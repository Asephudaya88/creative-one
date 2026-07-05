<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            "email" => "required|email",
            "password" => "required",
        ]);

        $user = User::where("email", $request->email)->first();

        if (!$user) {
            return response()->json([
                "message" => "Email tidak ditemukan."
            ], 404);
        }

        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                "message" => "Password salah."
            ], 401);
        }

        return response()->json([
            "message" => "Login berhasil",
            "user" => $user,
        ]);
    }
}