import { toDayJsDateOnFormat } from "@/helpers/date";
import StateIconPullRequest from "@/Components/Icons/StateIconPullRequest";
import { url } from "@/helpers/url";

export default function PullRequestCard({ item }) {
    return (
        <div className="mb-6">
            <a href={url(item.url)} target="_blank"
               className="block w-100 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
                <div className="flex flex-row items-center">
                    <StateIconPullRequest state={item.state} />
                    <h4 className="text-xl font-bold tracking-tight text-gray-900">{item.title}</h4>
                </div>
                <p className="my-2 font-normal text-gray-700">{item.body ?? 'Pas de contenu dans cette pull request.'}</p>
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
        </div>
    )
}
