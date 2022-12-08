import { useSelector } from "react-redux";

const Counter = props => {
    const { setLost } = props;

    const counter = useSelector(state => state.counter);

    // if (counter.counter === 0) setLost(true);

    return (
        <>
            <p>{counter.counter}</p>
        </>
    );
}

export default Counter;
