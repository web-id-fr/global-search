<?php

namespace App\Console\Commands\Fixtures;

use Illuminate\Console\Command;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;
use stdClass;
use Symfony\Component\Process\Process;

class CreateDatabase extends Command
{
    public const UNKNOWN_DATABASE_STATUS_CODE = 1049;

    /** @var string */
    protected $signature = 'fixtures:create-database {--database-name=}';

    /** @var string */
    protected $description = 'Creating the database…';

    public function handle(): int
    {
        $this->line($this->description);

        if ($this->doesDatabaseExists()) {
            $this->warn('Database already exists.');

            return 0;
        }

        $this->createDatabase();

        if (! $this->doesDatabaseExists()) {
            throw new \RuntimeException('Database has not been created.');
        }

        return 0;
    }

    private function createDatabase(): void
    {
        $databaseName = $this->getDatabaseName();

        /** @var string $databaseUsername */
        $databaseUsername = env('DB_USERNAME');

        /** @var string $databasePassword */
        $databasePassword = env('DB_PASSWORD');

        // Il doit y avoir un moyen plus propre que de le faire en shell
        $process = Process::fromShellCommandline(sprintf(
            "mysql -u%s -p%s -e 'CREATE DATABASE %s'",
            $databaseUsername,
            $databasePassword,
            $databaseName,
        ));

        $process->mustRun();

        $this->info('Database created succesfuly. 🎉');
    }

    private function doesDatabaseExists(): bool
    {
        try {
            // On teste l'accès à la base de données
            $databases = DB::select('SHOW DATABASES;');

            $databaseNames = array_map(
                fn (stdClass $database): string => $database->Database,
                $databases
            );

            return in_array($this->getDatabaseName(), $databaseNames);
        } catch (QueryException $exception) {
            // Si un code 1049 est retourné, la base de données n'existe pas
            // SQLSTATE[HY000] [1049] Unknown database 'millameet_api' (SQL: SELECT 1;)
            if ($exception->getCode() === self::UNKNOWN_DATABASE_STATUS_CODE) {
                return false;
            }

            throw $exception;
        }
    }

    private function getDatabaseName(): string
    {
        /** @var string */
        return $this->option('database-name') ?? env('DB_DATABASE');
    }
}
