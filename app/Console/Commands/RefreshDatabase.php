<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

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
     * Execute the console command.
     *
     * @return void
     */
    public function handle(): void
    {
        $this->call('migrate:refresh');
        $this->call('db:seed');
    }
}
