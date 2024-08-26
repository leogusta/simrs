<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Spatie\Permission\PermissionRegistrar;
use Illuminate\Support\Facades\Auth;

class TeamsPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!empty($user = Auth::user()) && !empty($user->current_team_id)) {
            app(PermissionRegistrar::class)->setPermissionsTeamId($user->current_team_id);
        }

        return $next($request);
    }
}
