<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Config\Repository;
use Illuminate\Http\Client\PendingRequest;
use Illuminate\Http\Client\Pool;
use Illuminate\Http\Client\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class SearchController extends Controller
{

    public function __construct(private readonly Repository $config)
    {
    }

    public function index(Request $request): \Inertia\Response
    {
        /** @var string $query */
        $query = $request->input('query');

        $data = [
            'query' => $query,
        ];

        if (!empty($query)) {
            $responses = Http::pool(fn(Pool $pool) => [
                $this->auth($pool->as('repositories'))->get("/github/search-repositories/{$query}"),
                $this->auth($pool->as('pull_requests'))->get("/github/search-pull-requests/{$query}"),
                $this->auth($pool->as('issues'))->get("/github/search-issues/{$query}"),
            ]);
            $jsons = array_map(fn (Response $response) => $response->json(), $responses);
            $data = array_merge($data, $jsons);
        }

        return Inertia::render('Search', $data);
    }

    private function auth(PendingRequest $request = null): PendingRequest
    {
        if ($request === null) {
            $request = Http::acceptJson();
        }

        $apiToken = $this->config->get('octools-client.application_token');
        $apiUrl = $this->config->get('octools-client.octools_api_url');

        return $request
            ->baseUrl($apiUrl)
            ->withToken($apiToken)
            ->throw();
    }
}
