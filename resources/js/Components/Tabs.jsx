export default function tabs(props)
{
    const { initialData, data, setData, activeTab, setActiveTab, tabsConfig } = props
    const handleTabClick = (event, key) => {
        setData((currentData) => {
            return { ...initialData, slug: currentData.slug }
        })
        setActiveTab(() => {
            return key
        })
    }
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 bg-white">
                <ul className="flex flex-wrap -mb-px">
                    {
                        tabsConfig.map((tab) => (
                            <li key={tab.key} className="mr-2" onClick={(event) => { handleTabClick(event, tab.key) }}>
                                <button
                                    className={`${(activeTab === tab.key)? 'border-b-2 border-blue-600 active':'hover:border-gray-300'} inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600`}>{tab.value}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
