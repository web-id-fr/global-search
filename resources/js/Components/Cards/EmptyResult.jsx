import { info } from "../../assets/index";
const EmptyResult = () => {
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white rounded-[12px] mt-6">
                <div className="flex flex-col items-center justify-center py-8">
                    <img src={info} alt="no result found" className="w-6 h-6" />
                    <p className="mt-1 text-md font-semibold text-gray-900">No results found.</p>
                </div>
            </div>
        </div>
    );
}

export default EmptyResult;
