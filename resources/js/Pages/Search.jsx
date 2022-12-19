import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Dif from '@/Components/Search';
import { Head } from '@inertiajs/inertia-react';

export default function Search(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Search</h2>}
        >
            <Head title="Search" />

            <Dif />
        </AuthenticatedLayout>
    );
}
