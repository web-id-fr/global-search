import {ReactComponent as OpenRepository} from "../../assets/lock.svg";
import {ReactComponent as ClosedRepository} from "../../assets/unlock.svg";

const StateIconRepository = (props) => {
    const { state } = props;
    return (
        <>
            {state ? <OpenRepository />
                : <ClosedRepository />}
        </>
    )
}

export default StateIconRepository
