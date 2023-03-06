<?php

use App\Http\Controllers\Services\Octools\OctoolsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('octools')->group(function () {
    Route::prefix('members')->group(function () {
        Route::get('/{id}', [OctoolsController::class, 'getMemberById'])->where('id', '[0-9]+');
        Route::get('/{email}', [OctoolsController::class, 'getMemberByEmail'])->where('email', '.*');
        Route::get('/', [OctoolsController::class, 'getMembers']);
    });

    Route::prefix('github')->group(function () {
        Route::get('/company-repositories', [OctoolsController::class, 'getCompanyRepositories']);
        Route::get('/company-employees', [OctoolsController::class, 'getCompanyEmployees']);
        Route::get('/search-repositories', [OctoolsController::class, 'searchRepositories']);
        Route::get('/search-issues', [OctoolsController::class, 'searchIssues']);
        Route::get('/search-pull-requests', [OctoolsController::class, 'searchPullRequests']);
    });
});
