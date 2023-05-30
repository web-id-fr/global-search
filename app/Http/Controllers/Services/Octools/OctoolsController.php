<?php

namespace App\Http\Controllers\Services\Octools;

use App\ApiServices\Octools\OctoolsApiServiceInterface;
use App\Http\Controllers\Controller;
use App\Http\Requests\Github\GithubOptionsFormRequest;
use App\Http\Requests\Github\GithubSearchFormRequest;
use Octools\Client\Models\Github\Repository;

class OctoolsController extends Controller
{
    public function __construct(
        private readonly OctoolsApiServiceInterface $octoolsClient,
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

        return $this->octoolsClient->getCompanyRepositories($options);
    }

    public function getCompanyEmployees(GithubOptionsFormRequest $request): array
    {
        /** @var array $options */
        $options = $request->validated();

        return $this->octoolsClient->getCompanyEmployees($options);
    }

    public function searchRepositories(GithubSearchFormRequest $request): array
    {
        /** @var string $query */
        $query = $request->input('query');
        /** @var array $options */
        $options = $request->validated();

        return $this->octoolsClient->searchRepositories($query, $options);
    }

    public function searchIssues(GithubSearchFormRequest $request): array
    {
        /** @var string $query */
        $query = $request->input('query');
        /** @var array $options */
        $options = $request->validated();

        return $this->octoolsClient->searchIssues($query, $options);
    }

    public function searchPullRequests(GithubSearchFormRequest $request): array
    {
        /** @var string $query */
        $query = $request->input('query');
        /** @var array $options */
        $options = $request->validated();

        return $this->octoolsClient->searchPullRequests($query, $options);
    }

    public function getRepository(string $repository): Repository
    {
        return $this->octoolsClient->getRepository($repository);
    }

    public function getIssues(string $repository): array
    {
        return $this->octoolsClient->getRepositoryIssues($repository);
    }

    public function getPullRequests(string $repository): array
    {
        return $this->octoolsClient->getRepositoryPullRequests($repository);
    }

    public function getPullRequestsByMember(string $repository, int $memberId, GithubOptionsFormRequest $request): array
    {
        /** @var array $options */
        $options = $request->validated();

        return $this->octoolsClient->getPullRequestByMember($repository, $memberId, $options);
    }
}
