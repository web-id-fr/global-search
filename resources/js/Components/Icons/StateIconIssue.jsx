import {ReactComponent as OpenIssue} from "../../assets/open-issue.svg";
import {ReactComponent as ClosedIssue} from "../../assets/closed-issue.svg";

const StateIconIssue = (props) => {
    const { state } = props;
    switch (state) {
        case "OPEN":
            return (
                <OpenIssue />
            )
        case "CLOSED":
            return (
                <ClosedIssue />
            )
    }
}

export default StateIconIssue
