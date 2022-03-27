<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ReadNotificationRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NotificationController extends Controller
{
    public function read(ReadNotificationRequest $request)
    {
        DB::table('notifications')->whereId($request->notification_id)->update(['read_at' => Carbon::now()]);
        return response()->noContent();
    }
}
