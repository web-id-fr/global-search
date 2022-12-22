import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UpdateApplicationSettingsForm from "@/Pages/Settings/Partials/UpdateApplicationSettingsForm";
import { Head } from '@inertiajs/inertia-react';

export default function Edit({ auth }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Settings</h2>}
        >
            <Head title="Settings" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateApplicationSettingsForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
