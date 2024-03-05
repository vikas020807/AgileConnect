<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Tighten\Ziggy\Ziggy;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::get('ziggy', fn () => response()->json(new Ziggy));
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});