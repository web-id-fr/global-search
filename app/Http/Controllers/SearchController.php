<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Octools\Client\OctoolsClient;

class SearchController extends Controller
{
    public function __construct(
        private readonly OctoolsClient $octoolsClient,
    )
    {
    }

    public function index(Request $request): Response
    {
        /** @var string $query */
        $query = $request->input('query');

        $data = [
            'query' => $query,
        ];

        if (!empty($query)) {
            $data['repositories'] = $this->octoolsClient->github->searchRepositories($query);
            $data['pull_requests'] = $this->octoolsClient->github->searchPullRequests($query);
            $data['issues'] = $this->octoolsClient->github->searchIssues($query);
        }

        return Inertia::render('Search', $data);
    }
}
