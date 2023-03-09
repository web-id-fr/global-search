import { ReactComponent as OpenIssue } from "../../assets/open-issue.svg";
import { ReactComponent as ClosedIssue } from "../../assets/closed-issue.svg";

const StateIconIssue = ({ state, ...props }) => {
    switch (state) {
    case "OPEN":
        return <OpenIssue width={18} height={18} {...props} />

    case "CLOSED":
        return <ClosedIssue width={18} height={18} {...props} />
    }
}

export default StateIconIssue
