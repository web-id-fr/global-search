<?php

namespace App\Http\Controllers;

use App\Http\Requests\SettingsUpdateRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class SettingsController extends Controller
{
    public function edit(): Response
    {
        return Inertia::render('Settings/Edit');
    }

    public function update(SettingsUpdateRequest $request): RedirectResponse
    {
        /** @var User $user */
        $user = $request->user();

        /** @var array $validated */
        $validated = $request->validated();

        $user->fill($validated);

        $user->save();

        return Redirect::route('settings.edit');
    }
}
