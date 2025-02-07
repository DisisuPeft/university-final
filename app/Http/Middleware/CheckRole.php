<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $roles): Response
    {
        if (!$request->user()){
            abort(403, "Debes iniciar sesión para acceder");
        }

        $array = explode('|', $roles);

        if (empty($array)){
            return $next($request);
        }

        if($request->user()->role()->whereIn('name', $array)->exists()){
            return $next($request);
        }

        abort(403, "No tienes permisos para acceder a este recurso");
    }
}
