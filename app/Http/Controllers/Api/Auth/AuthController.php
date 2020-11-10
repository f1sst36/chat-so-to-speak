<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Api\Auth\RegisterFormRequest;
use App\Http\Requests\Api\Auth\LoginFormRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Carbon;
use App\Models\User;

class AuthController extends Controller
{
    public function Registration(RegisterFormRequest $request)
    {
        $data = $request->all();
        if (User::where('name', '=', $data['name'])->exists()){
            return response()->json([
                'message' => 'User with this name already exists',
            ], 400);
        }
        $user = User::create(array_merge(
            $request->only('name'),
            // ['password' => bcrypt($request->password)],
            ['password' => Hash::make($request->password)],
        ));

        return response()->json([
            'message' => 'You were successfully registered'
        ], 200);
    }

    public function Login(Request $request)
    {
        $credentials = $request->only('name', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Неверный логин или пароль',
                'errors' => 'Unauthorised'
            ], 401);
        }

        $token = Auth::user()->createToken(config('app.name'));
        $token->token->expires_at = Carbon::now()->addDay();
        // $request->remember_me ?
        //     Carbon::now()->addMonth() :
        //     Carbon::now()->addDay();

        $token->token->save();

        return response()->json([
            //'token_type' => 'Bearer',
            'token' => $token->accessToken,
            //'expires_at' => Carbon::parse($token->token->expires_at)->toDateTimeString()
        ], 200);

    }


    public function Logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response()->json([
            'message' => 'You are successfully logged out',
        ]);
    }
}
