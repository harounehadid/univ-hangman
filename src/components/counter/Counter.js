import { useDispatch, useSelector } from "react-redux";
import { onLost } from "../../store/gameManagementSlice";

const Counter = props => {
    const counter = useSelector(state => state.counter);
    const manageGame = useSelector(state => state.manageGame);

    const dispatch = useDispatch();

    if (counter.counter === 0) dispatch(onLost());

    return (
        <>
            <p>{counter.counter}</p>
        </>
    );
}

export default Counter;
