<?php

namespace App\Http\Middleware;


use App\Http\Controllers\BrokenController;
use Closure;
use Illuminate\Http\Request;
use App\Models\AppVersion;
class AppVersionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $version = AppVersion::where('app_type','web_dashboard')->first()->versioning;
        if($version !== env('APP_VERSION'))
        {
            abort(500);
        }
        return $next($request);
    }
}
