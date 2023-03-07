import RepositoryCard from "@/Components/Cards/RepositoryCard";
import IssueCard from "@/Components/Cards/IssueCard";
import PullRequestCard from "@/Components/Cards/PullRequestCard";
import EmptyResult from '@/Components/Cards/EmptyResult'

const Cards = ({ repositories, pull_requests, issues }) => {
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Repositories
            </h3>
            {repositories?.items?.length
                ? repositories?.items?.map((item) => (
                    <RepositoryCard key={item.url} item={item} />
                ))
                : <EmptyResult />}

            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Pull requests
            </h3>
            {pull_requests?.items?.length
                ? pull_requests?.items?.map((item) => (
                    <PullRequestCard key={item.url} item={item} />
                ))
                : <EmptyResult />}

            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Issues
            </h3>
            {issues?.items?.length
                ? issues?.items?.map((item) => (
                    <IssueCard key={item.url} item={item} />
                ))
                : <EmptyResult />}
        </div>
    )
}

export default Cards
