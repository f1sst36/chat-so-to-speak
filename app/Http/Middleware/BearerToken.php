<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class BearerToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->headers->get('Authorization')){
            return $next($request);
        } else {
            return response()->json([
                'message' => 'Not sent the token',
                'error' => 'Unauthorised',
            ], 401);
        }
    }
}
