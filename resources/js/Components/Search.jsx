import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function search()
{
    const ax = axios.create({
        baseURL: 'http://toad.test/api/github/search-repositories/',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization' : 'Bearer LqyPhCh7Q6RuSmdqc2Ajlqb3z0mSlpyECWw6ssAhmk0zcQ4mRJwivtGDhjcuZHCVwlNXcbS2Y5Re41oJNVEhRrdaGLkhzGBj8yDfyzi0e44S8f64QGmWTw98DuGwb9u9'
        }
    });

    const useFetch = () => {
        const [data, setData] = useState({
            slug: "",
            results: [],
        });

        useEffect(() => {
            if (data.slug !== "") {
                const timeoutId = setTimeout(() => {
                    const fetch = async () => {
                        try {
                            const res = await ax.get(`/${data.slug}`);
                            setData({ ...data, results: res.data });
                        } catch (err) {
                            console.error(err);
                        }
                    };
                    fetch();
                }, 500);
                return () => clearTimeout(timeoutId);
            }
        }, [data.slug]);

        return { data, setData };
    };

    const { data, setData } = useFetch();


    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <form className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>

                        <input type="text" value={data.slug}
                               onChange={(e) => setData({ ...data, slug: e.target.value })} className="py-2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search" required />
                    </div>

                </form>

                <div className='mt-10'>
                    {data.results.items ? data.results.items.map((result, index) => (
                        <div key={index}>
                            <a href={JSON.stringify(result.html_url)} className="block w-100 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{JSON.stringify(result.full_name)}</h5>
                                <p className="font-normal text-gray-700">{JSON.stringify(result)}</p>
                            </a>
                            <br />
                            <br />
                        </div>
                    )) : ""}
                </div>
            </div>
        </div>
    )
}
