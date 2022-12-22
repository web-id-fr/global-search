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
                <svg className="mr-3" viewBox="0 0 16 16" version="1.1" width="26" height="26" aria-hidden="true"
                     fill="rgb(34 197 94)">
                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    <path fillRule="evenodd"
                          d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
                </svg>
            )
        case "closed":
            return (
                <svg className="mr-3" viewBox="0 0 16 16" version="1.1" width="26" height="26" aria-hidden="true"
                     fill="rgb(168 85 247)">
                    <path
                        d="M11.28 6.78a.75.75 0 00-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3.5-3.5z"></path>
                    <path fillRule="evenodd"
                          d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"></path>
                </svg>
            )
    }
}

export default function IssueCard(props) {
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
                            <p className="my-2 font-normal text-gray-700">{item.body ?? 'Pas de contenu dans ce ticket.'}</p>
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
