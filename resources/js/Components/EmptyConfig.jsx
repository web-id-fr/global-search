import {ReactComponent as Info} from "../assets/info-circle.svg";
import { Link } from '@inertiajs/inertia-react';


export default function EmptyConfig() {
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white rounded-[12px] mt-6">
                <div className="flex flex-col items-center justify-center py-8">
                    <Info />
                    <p className="mt-1 text-md text-center font-semibold text-gray-900">Your application's settings is empty.
                    <br />
                        Please update your application's settings.
                    </p>

                    <Link
                        className={`mt-6 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent
                        rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700
                        focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500
                        focus:ring-offset-2 transition ease-in-out duration-150`}
                        href={route('settings.edit')}>
                        Update Settings
                    </Link>
                </div>
            </div>
        </div>
    );
};
