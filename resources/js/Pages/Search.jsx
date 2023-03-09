import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import Cards from "@/Components/Cards/Cards";
import Loader from "@/Components/Loader";
import OmniSearch from '@/Components/OmniSearch'
import { useEffect, useRef, useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { useIsMounted, useDebounce } from 'usehooks-ts'
import EmptyResult from '@/Components/Cards/EmptyResult'
import { sum } from 'lodash'

export default function Search({
                                   auth,
                                   errors,
                                   repositories,
                                   pull_requests,
                                   issues
                               }) {
    const cancelTokenRef = useRef()
    const isMounted = useIsMounted()
    const [isLoading, setLoading] = useState(false)

    const params = new URLSearchParams(window.location.search)
    const [query, setQuery] = useState(params.get("query"))
    const queryDebounced = useDebounce(query, 500)

    const totaux = sum([repositories?.total, pull_requests?.total, issues?.total].filter(Boolean))
    const isEmptyResult = totaux < 1

    useEffect(() => {
        // cancel prev request if pending
        if (cancelTokenRef.current) {
            cancelTokenRef.current.cancel()
        }

        if (queryDebounced === params.get("query")) {
            return
        }

        Inertia.get(route().current(), { query: queryDebounced }, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
            onCancelToken: (cancelToken) => (cancelTokenRef.current = cancelToken),
            onBefore: () => setLoading(true),
            onFinish: () => {
                if (isMounted()) {
                    cancelTokenRef.current = undefined
                    setLoading(false)
                }
            },
        })
    }, [queryDebounced])

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={(
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Search
                </h2>)}
        >
            <Head title="Search" />
            <OmniSearch query={query} setQuery={setQuery} />
            {isLoading && <Loader />}
            {!isLoading && (
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {isEmptyResult
                        ? <EmptyResult />
                        : <Cards repositories={repositories}
                                 pull_requests={pull_requests}
                                 issues={issues} />}
                </div>
            )}
        </AuthenticatedLayout>
    );
}


