<?php

namespace App\ApiServices\Octools;

use Octools\Client\Models\Member\Member;

interface OctoolsApiServiceInterface
{
    public function getMemberById(int $id): Member;

    public function getMemberByEmail(string $email): Member;

    public function getMembers(): array;

    public function getCompanyRepositories(array $options = []): array;

    public function getCompanyEmployees(array $options = []): array;

    public function searchRepositories(string $query, array $options = []): array;

    public function searchIssues(string $query, array $options = []): array;

    public function searchPullRequests(string $query, array $options = []): array;
}
