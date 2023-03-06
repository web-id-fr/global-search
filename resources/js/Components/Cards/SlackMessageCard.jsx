export default function SlackMessageCard(props)
{
    const { data } = props
    return (
        <div className='mt-10'>
            {data?.results?.items?.map((item, index) => (
                <div key={index} className="mb-6">
                    <div className="block w-100 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
                        <div className="flex flex-row items-center">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900">Message envoyé par : {item.username}</h5>
                        </div>
                        <div className="my-2">
                            <p className="font-normal text-gray-700">Channel ID : {item.channel_id}</p>
                            <p className="font-normal text-gray-700"><a href={`https://webid.slack.com/archives/${item.channel_name}`} target="_blank"> Channel name</a> : {item.channel_name}</p>
                        </div>
                        <div className="my-2">
                            <p>
                                <span className="font-normal text-gray-700">Message : </span>
                                {item.blocks.map((block) => (
                                    block.elements.map((element) => (
                                        element.elements.map((element, index) => (
                                            <span key={index} className="font-normal text-gray-700">{element.text} <a href={element.url} target="_blank">{element.url}</a></span>
                                        ))
                                    ))
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
