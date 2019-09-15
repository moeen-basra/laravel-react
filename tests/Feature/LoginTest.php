<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class LoginTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_user_can_login()
    {
        $user = factory(User::class)->create();

        $response = $this->post('/api/v1/auth/login', [
            'email' => $user->email,
            'password' => 'secret',
        ]);
        
        $response->assertStatus(200);
    }
}
