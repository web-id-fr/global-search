<?php

namespace App\ApiServices\Octools;

use Octools\Client\Models\Member\Member;

class FakeOctoolsApiService implements OctoolsApiServiceInterface
{
    public function getMemberById(int $id): Member
    {
        return Member::fromArray([
            'id' => $id,
            'firstname' => 'John',
            'lastname' => 'Doe',
            'email' => 'john@doe.com',
            'birthdate' => '1990-01-01',
            'workspace' => [
                'id' => 1,
                'name' => 'Web-ID',
            ],
            'services' => [],
        ]);
    }

    public function getMemberByEmail(string $email): Member
    {
        return Member::fromArray([
            'id' => 1,
            'firstname' => 'John',
            'lastname' => 'Doe',
            'email' => $email,
            'birthdate' => '1990-01-01',
            'workspace' => [
                'id' => 1,
                'name' => 'Web-ID',
            ],
            'services' => [],
        ]);
    }

    public function getMembers(): array
    {
        return ['User1', 'User2', 'User3'];
    }

    public function getCompanyRepositories(array $options = []): array
    {
        return [
            'Toad',
            'Octools',
            'OctoolsClient',
            'Mario',
        ];
    }

    public function getCompanyEmployees(array $options = []): array
    {
        return [
            'Julien',
            'Clément',
            'Cédric',
            'Jo',
        ];
    }

    public function searchRepositories(string $query, array $options = []): array
    {
        return [
            'Octools',
            'Octools-Client',
            'Octools-Front',
        ];
    }

    public function searchIssues(string $query, array $options = []): array
    {
        return [
            'Issue 1',
            'Issue 2',
            'Issue 3',
        ];
    }

    public function searchPullRequests(string $query, array $options = []): array
    {
        return [
            'PR 1',
            'PR 2',
            'PR 3',
        ];
    }
}
