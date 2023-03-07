import { ReactComponent as Info } from "../../assets/info-circle.svg";

const EmptyResult = () => {
    return (
        <div className="bg-white rounded-[12px] mb-6">
            <div className="flex flex-col items-center justify-center py-8">
                <Info />
                <p className="mt-1 text-md font-semibold text-gray-900">No results found.</p>
            </div>
        </div>
    );
}

export default EmptyResult;
