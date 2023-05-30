<?php

namespace App\ApiServices\Octools;

use Octools\Client\Models\Member\Member;
use Octools\Client\OctoolsClient;

class OctoolsApiService implements OctoolsApiServiceInterface
{
    public function __construct(
        private readonly OctoolsClient $client,
    ) {
    }

    public function getMemberById(int $id): Member
    {
        return $this->client->getMemberById($id);
    }

    public function getMemberByEmail(string $email): Member
    {
        return $this->client->getMemberByEmail($email);
    }

    public function getMembers(): array
    {
        return $this->client->getMembers();
    }

    public function getCompanyRepositories(array $options = []): array
    {
        return $this->client->github->getCompanyRepositories($options);
    }

    public function getCompanyEmployees(array $options = []): array
    {
        return $this->client->github->getCompanyEmployees($options);
    }

    public function searchRepositories(string $query, array $options = []): array
    {
        return $this->client->github->searchRepositories($query, $options);
    }

    public function searchIssues(string $query, array $options = []): array
    {
        return $this->client->github->searchIssues($query, $options);
    }

    public function searchPullRequests(string $query, array $options = []): array
    {
        return $this->client->github->searchPullRequests($query, $options);
    }

    public function getRepository(string $repository): array
    {
        return $this->client->github->repository($repository)->getRepository();
    }

    public function getRepositoryIssues(string $repository, array $options = []): array
    {
        return $this->client->github->repository($repository)->getIssues($options);
    }

    public function getRepositoryPullRequests(string $repository, array $options = []): array
    {
        return $this->client->github->repository($repository)->getPullRequests($options);
    }

    public function getPullRequestByMember(string $repository, int $memberId, array $options = []): array
    {
        $member = $this->getMemberById($memberId);

        return $this->client->github->repository($repository)->getPullRequestsByMember($member, $options);
    }
}
