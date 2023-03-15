import RepositoryCard from "@/Components/Cards/RepositoryCard";
import IssueCard from "@/Components/Cards/IssueCard";
import PullRequestCard from "@/Components/Cards/PullRequestCard";
import EmptyResult from '@/Components/Cards/EmptyResult'

const Cards = ({ repositories, pull_requests, issues }) => {
    return (
        <>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Repositories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pb-6">
                {repositories?.items?.length
                    ? repositories?.items?.map((item) => (
                        <RepositoryCard key={item.url} item={item} />
                    ))
                    : <EmptyResult />}
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Pull requests
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pb-6">
                {pull_requests?.items?.length
                    ? pull_requests?.items?.map((item) => (
                        <PullRequestCard key={item.url} item={item} />
                    ))
                    : <EmptyResult />}
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Issues
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pb-6">
                {issues?.items?.length
                    ? issues?.items?.map((item) => (
                        <IssueCard key={item.url} item={item} />
                    ))
                    : <EmptyResult />}
            </div>
        </>
    )
}

export default Cards
