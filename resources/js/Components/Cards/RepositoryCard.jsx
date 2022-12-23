import { toDayJsDateOnFormat } from "@/helpers/date";
import StateIconRepository from "@/Components/Icons/StateIconRepository";
import {url} from "@/helpers/url";

const Tag = (props) => {
    const { title, styles } = props;
    return (
        <div className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full ${styles}`}>
            {title}
        </div>
    )
}

const RenderResult = ({ data }) => {
    return (
        <>
            {data.results.map((item, index) => (
                <div key={index} className="mb-6">
                    <a href={url(item.html_url)} target="_blank" className="block w-100 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
                        <div className="flex flex-row items-center">
                            <StateIconRepository state={item.private} />
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900">{item.full_name}</h5>
                        </div>
                        <p className="my-2 font-normal text-gray-700">{item.description ?? 'Pas de description.'}</p>
                        <div className="my-2">
                            <p className="font-normal text-gray-700">Tickets ouvert : {item.open_issues_count}</p>
                            <p className="font-normal text-gray-700">Dernière mise à jour : {toDayJsDateOnFormat(item.updated_at)}</p>
                        </div>
                        <Tag title={item.language} />
                        <img src={item.owner.avatar_url} alt="owner avatar" className="h-8 w-8 float-right" />
                    </a>
                </div>
            ))}
        </>
    )
}

export default function RepositoryCard(props)
{
    const { data } = props
    return (
        <div className='mt-10'>
            <RenderResult data={data} />
        </div>
    )
}
