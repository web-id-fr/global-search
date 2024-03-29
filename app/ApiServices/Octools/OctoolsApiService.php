<?php

namespace App\ApiServices\Octools;

use Octools\Client\OctoolsClient;
use Octools\Client\Models\Member\Member;

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
}
