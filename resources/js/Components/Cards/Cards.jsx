import {apiKey} from "@/helpers/constants";
import RepositoryCard from "@/Components/Cards/RepositoryCard";
import EmptyResult from "@/Components/Cards/EmptyResult";
import IssueCard from "@/Components/Cards/IssueCard";
import PullRequestCard from "@/Components/Cards/PullRequestCard";
import SlackMessageCard from "@/Components/Cards/SlackMessageCard";

const Cards = ({activeTab, data, isEmptyResult}) => {
    const {REPOSITORIES, ISSUES, PULL_REQUESTS, SLACK_MESSAGES} = apiKey
    return (
        <>
            {(!isEmptyResult && data?.results?.items?.length !== 0) ?
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {activeTab === REPOSITORIES ? (<RepositoryCard data={data} />) : ''}
                    {activeTab === ISSUES ? (<IssueCard data={data} />) : ''}
                    {activeTab === PULL_REQUESTS ? (<PullRequestCard data={data} />) : ''}
                    {activeTab === SLACK_MESSAGES ? (<SlackMessageCard data={data} />) : ''}
                </div>
            : <EmptyResult />}
        </>
    )
}

export default Cards
