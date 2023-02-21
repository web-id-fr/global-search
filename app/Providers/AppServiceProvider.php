<?php

namespace App\Providers;

use App\ApiServices\Octools\FakeOctoolsApiService;
use App\ApiServices\Octools\OctoolsApiService;
use App\ApiServices\Octools\OctoolsApiServiceInterface;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(OctoolsApiServiceInterface::class, match (config('services.octools.api_driver')) {
            'fake' => FakeOctoolsApiService::class,
            default => OctoolsApiService::class,
        });
    }
}
