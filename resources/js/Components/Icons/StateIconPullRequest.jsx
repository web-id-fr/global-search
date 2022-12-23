import {ReactComponent as OpenPullRequest} from "../../assets/open-pr.svg";
import {ReactComponent as ClosedPullRequest} from "../../assets/closed-pr.svg";
import {ReactComponent as MergedPullRequest} from "../../assets/merged-pr.svg";
import {ReactComponent as DraftPullRequest} from "../../assets/draft-pr.svg";

const StateIconPullRequest = (props) => {
    const { state } = props;
    switch (state) {
        case "open":
            return (
                <OpenPullRequest />
            )
        case "closed":
            return (
                <ClosedPullRequest />
            )
        case "merged":
            return (
                <MergedPullRequest />
            )
        case "draft":
            return (
                <DraftPullRequest />
            )
    }
}

export default StateIconPullRequest;
