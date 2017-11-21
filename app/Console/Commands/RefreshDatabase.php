<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class RefreshDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cron:refresh-database';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Refresh database to remove user changes from production server';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->call('migrate:refresh');
        $this->call('db:seed');
        $this->call('passport:install');

        $personal_client_secret = DB::table('oauth_clients')->find(1)->secret;
        $password_client_secret = DB::table('oauth_clients')->find(2)->secret;

        $this->writeNewEnvironmentFileWith('PERSONAL_CLIENT_SECRET', $personal_client_secret);
        $this->writeNewEnvironmentFileWith('PASSWORD_CLIENT_SECRET', $password_client_secret);
    }

    /**
     * Write a new environment file with the given key.
     *
     * @param  string  $key
     * @return void
     */
    protected function writeNewEnvironmentFileWith($key, $value)
    {
        file_put_contents($this->laravel->environmentFilePath(), preg_replace(
            $this->keyReplacementPattern($key, $value),
            "{$key}={$value}",
            file_get_contents($this->laravel->environmentFilePath())
        ));
    }

    /**
     * Get a regex pattern that will match env APP_KEY with any random key.
     *
     * @return string
     */
    protected function keyReplacementPattern($key, $value)
    {
        $escaped = preg_quote("=".env($key), '/');

        return "/^{$key}{$escaped}/m";
    }
}
