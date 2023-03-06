<?php

namespace App\Http\Controllers\Services\Octools;

use App\Http\Controllers\Controller;
use App\Http\Requests\Github\GithubOptionsFormRequest;
use App\Http\Requests\Github\GithubSearchFormRequest;
use Octools\Client\Models\Github\Repository;
use Octools\Client\OctoolsClient;

class OctoolsController extends Controller
{
    public function __construct(
        private readonly OctoolsClient $octoolsClient,
    ) {
    }

    public function getMemberById(int $id): array
    {
        return (array) $this->octoolsClient->getMemberById($id);
    }

    public function getMemberByEmail(string $email): array
    {
        return (array) $this->octoolsClient->getMemberByEmail($email);
    }

    public function getMembers(): array
    {
        return $this->octoolsClient->getMembers();
    }

    public function getCompanyRepositories(GithubOptionsFormRequest $request): array
    {
        /** @var array $options */
        $options = $request->validated();

        return $this->octoolsClient->github->getCompanyRepositories($options);
    }

    public function getCompanyEmployees(GithubOptionsFormRequest $request): array
    {
        /** @var array $options */
        $options = $request->validated();

        return $this->octoolsClient->github->getCompanyEmployees($options);
    }

    public function searchRepositories(GithubSearchFormRequest $request): array
    {
        /** @var string $query */
        $query = $request->input('query');
        /** @var array $options */
        $options = $request->validated();

        return $this->octoolsClient->github->searchRepositories($query, $options);
    }

    public function searchIssues(GithubSearchFormRequest $request): array
    {
        /** @var string $query */
        $query = $request->input('query');
        /** @var array $options */
        $options = $request->validated();

        return $this->octoolsClient->github->searchIssues($query, $options);
    }

    public function searchPullRequests(GithubSearchFormRequest $request): array
    {
        /** @var string $query */
        $query = $request->input('query');
        /** @var array $options */
        $options = $request->validated();

        return $this->octoolsClient->github->searchPullRequests($query, $options);
    }
}
