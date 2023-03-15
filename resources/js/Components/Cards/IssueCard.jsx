import { toDayJsDateOnFormat } from "@/helpers/date";
import StateIconIssue from "@/Components/Icons/StateIconIssue";
import { ReactComponent as ExternalLink } from '@/assets/external-link.svg'
import { url } from "@/helpers/url";

export default function IssueCard({ item }) {
    return (
        <a href={url(item.url)} target="_blank"
           className="block w-100 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
            <h4 className="font-bold tracking-tight text-gray-900 flex-shrink">
                <StateIconIssue className="inline-block pr-1"
                                state={item.state} />
                {item.title}
                <ExternalLink className="inline-block ml-2" width={16} height={16} />
            </h4>
            <div className="my-2">
                <p className="font-normal text-gray-700">Dernière mise à jour : {toDayJsDateOnFormat(item.updatedAt)}</p>
            </div>
        </a>
    )
}
