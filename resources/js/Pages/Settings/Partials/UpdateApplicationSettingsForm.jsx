import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm, usePage } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';

export default function UpdateApplicationSettingsForm({ className }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        token: user.token,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('settings.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Application Settings Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your application's settings information.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel for="token" value="Token" />

                    <TextInput
                        id="token"
                        className="mt-1 block w-full"
                        value={data.token}
                        handleChange={(e) => setData("token", e.target.value)}
                        required
                        autofocus
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.token} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton processing={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
