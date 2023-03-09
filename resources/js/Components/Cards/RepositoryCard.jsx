import { toDayJsDateOnFormat } from "@/helpers/date";
import { ReactComponent as ExternalLink } from '@/assets/external-link.svg'

export default function RepositoryCard({ item }) {
    return (
        <a href={item.url} target="_blank"
           className="block w-100 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
            <div className="flex flex-row items-center">
                <h4 className="font-bold tracking-tight text-gray-900">
                    {item.name}
                    <ExternalLink className="inline-block ml-2" width={16} height={16} />
                </h4>
            </div>
            <p className="my-2 font-normal text-gray-700">{item.description ?? 'Pas de description.'}</p>
            <div className="my-2">
                <p className="font-normal text-gray-700">Tickets ouvert : </p>
                <p className="font-normal text-gray-700">Dernière mise à jour : {toDayJsDateOnFormat(item.updatedAt)}</p>
            </div>
        </a>
    )
}
