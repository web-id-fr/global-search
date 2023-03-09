import { toDayJsDateOnFormat } from "@/helpers/date";
import StateIconPullRequest from "@/Components/Icons/StateIconPullRequest";
import { ReactComponent as ExternalLink } from '@/assets/external-link.svg'
import { url } from "@/helpers/url";

export default function PullRequestCard({ item }) {
    return (
        <a href={url(item.url)} target="_blank"
           className="block w-100 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
            <div className="flex flex-row items-center">
                <StateIconPullRequest state={item.state} />
                <h4 className="font-bold tracking-tight text-gray-900">
                    {item.title}
                    <ExternalLink className="inline-block ml-2" width={16} height={16} />
                </h4>
            </div>
            <div className="my-2">
                <p className="font-normal text-gray-700">Crée par : {item.author ? (item.author.name ?? item.author.login) : ''}</p>
                <p className="font-normal text-gray-700">Assignée(s) :
                    {item.assignees.length !== 0 ? item.assignees.map((assign, index) => (
                            <span key={index}
                                  className="font-normal text-gray-700"> {assign.login}{index !== item.assignees.length - 1 ? ',' : ''} </span>
                        )
                    ) : ' Aucune assignation'}
                </p>
                <p className="font-normal text-gray-700">Dernière mise à jour : {toDayJsDateOnFormat(item.updatedAt)}</p>
            </div>
        </a>
    )
}
