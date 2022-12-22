import {toDayJsDateOnFormat} from "@/helpers/date";

const Label = (props) => {
    const { name, color, styles = "" } = props;
    return (
        <div className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full ${styles}`}>
            {name}
        </div>
    )
}

const StateIcon = (props) => {
    const { state } = props;
    switch (state) {
        case "open":
            return (
                <svg className="mr-3" viewBox="0 0 16 16" version="1.1"
                     width="26" height="26" aria-hidden="true" fill="rgb(34 197 94)">
                    <path fillRule="evenodd"
                          d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path>
                </svg>
            )
        case "closed":
            return (
                <svg className="mr-3" viewBox="0 0 16 16"
                     version="1.1" width="26" height="26" aria-hidden="true" fill="rgb(248 81 73)">
                    <path fillRule="evenodd"
                          d="M10.72 1.227a.75.75 0 011.06 0l.97.97.97-.97a.75.75 0 111.06 1.061l-.97.97.97.97a.75.75 0 01-1.06 1.06l-.97-.97-.97.97a.75.75 0 11-1.06-1.06l.97-.97-.97-.97a.75.75 0 010-1.06zM12.75 6.5a.75.75 0 00-.75.75v3.378a2.251 2.251 0 101.5 0V7.25a.75.75 0 00-.75-.75zm0 5.5a.75.75 0 100 1.5.75.75 0 000-1.5zM2.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.25 1a2.25 2.25 0 00-.75 4.372v5.256a2.251 2.251 0 101.5 0V5.372A2.25 2.25 0 003.25 1zm0 11a.75.75 0 100 1.5.75.75 0 000-1.5z"></path>
                </svg>
            )
        case "merged":
            return (
                <svg className="mr-3" viewBox="0 0 16 16" version="1.1" width="26"
                     height="26" aria-hidden="true" fill="rgb(163 113 247)">
                    <path fillRule="evenodd"
                          d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.45 1.9a2.25 2.25 0 10-1.95.218v5.256a2.25 2.25 0 101.5 0V7.123A5.735 5.735 0 009.25 9h1.378a2.251 2.251 0 100-1.5H9.25a4.25 4.25 0 01-3.8-2.346zM12.75 9a.75.75 0 100-1.5.75.75 0 000 1.5zm-8.5 4.5a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                </svg>
            )
        case "draft":
            return (
                <svg className="mr-3" viewBox="0 0 16 16" version="1.1"
                     width="26" height="26" aria-hidden="true" fill="rgb(139 148 158)">
                    <path fillRule="evenodd"
                          d="M2.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.25 1a2.25 2.25 0 00-.75 4.372v5.256a2.251 2.251 0 101.5 0V5.372A2.25 2.25 0 003.25 1zm0 11a.75.75 0 100 1.5.75.75 0 000-1.5zm9.5 3a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"></path>
                    <path
                        d="M14 7.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm0-4.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"></path>
                </svg>
            )
    }
}
export default function PullRequestCard(props) {
    const { data } = props
    return (
            <div className='mt-10'>
                {data.results.map((item, index) => (
                    <div key={index} className="mb-6">
                        <a href={JSON.stringify(item.html_url).replaceAll('"', '')} target="_blank" className="block w-100 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
                            <div className="flex flex-row items-center">
                                <StateIcon state={item.state} />
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900">{item.title}</h5>
                            </div>
                            <p className="my-2 font-normal text-gray-700">{item.body ?? 'Pas de contenu dans cette pull request.'}</p>
                            <div className="my-2">
                                <p className="font-normal text-gray-700">Crée par : {item.user.login}</p>
                                <p className="font-normal text-gray-700">Assignée(s) :
                                    {item.assignees.length !== 0 ? item.assignees.map((assign, index) => (
                                        <span key={index} className="font-normal text-gray-700"> {assign.login}{index !== item.assignees.length - 1 ? ',' : ''} </span>
                                        )
                                    ) : ' Aucune assignation'}
                                </p>
                                <p className="font-normal text-gray-700">Dernière mise à jour : {toDayJsDateOnFormat(item.updated_at)}</p>
                            </div>
                            {item.labels.map((label, index) => (
                                <Label key={index} name={label.name} color={label.color} styles={index !== item.labels.length - 1 ? 'mr-3' : ''} />
                            ))}
                        </a>
                    </div>
                ))}
            </div>
    )
}
