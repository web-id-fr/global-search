import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SearchComponent from '@/Components/Search';
import { Head } from '@inertiajs/inertia-react';
import Tabs from "@/Components/Tabs";
import {fetchEndpoint} from "@/api";
import {useEffect, useState} from "react";
import {apiKey} from "@/helpers/constants";
import Cards from "@/Components/Cards/Cards";
import Loader from "@/Components/Loader";

export default function Search(props) {
    const {REPOSITORIES, ISSUES, PULL_REQUESTS, SLACK_MESSAGES} = apiKey

    const [isLoading, setIsLoading] = useState(false)

    const initialData = {
        slug: "",
        results: [],
    }
    const [data, setData] = useState(initialData);

    const [activeTab, setActiveTab] = useState(REPOSITORIES)

    const [isEmptyResult, setIsEmptyResult] = useState(false)

    const TabsConfig =
        [
            {key :REPOSITORIES, value: 'Repositories'},
            {key :ISSUES, value: 'Issues'},
            {key :PULL_REQUESTS, value: 'Pull Requests'},
            {key :SLACK_MESSAGES, value: 'Slack Messages'},
        ]

    useEffect(() => {
        if (data.slug !== "") {
            const timeoutId = setTimeout(() => {
                const fetch = async () => {
                    try {
                        setIsLoading(true)
                        const res = await fetchEndpoint(activeTab, data.slug)
                        await setData({ ...data, results: res.data });
                        await setIsEmptyResult(() => { return false })
                    } catch (e) {
                        setIsEmptyResult(true)
                    }
                    await setIsLoading(() => { return false })
                };
                return fetch();
            }, 500);
            return () => clearTimeout(timeoutId);
        }
    }, [data.slug, activeTab]);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Search</h2>}
        >
            <Head title="Search" />

            <SearchComponent data={data} setData={setData} />
            <Tabs initialData={initialData}
                  data={data} setData={setData}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  tabsConfig={TabsConfig} />

            {isLoading ? <Loader /> : ''}
            {!isLoading && data.slug !== "" ? <><Cards isEmptyResult={isEmptyResult} data={data} activeTab={activeTab} /></> : ''}

        </AuthenticatedLayout>
    );
}


