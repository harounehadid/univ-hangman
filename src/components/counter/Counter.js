import { useSelector } from "react-redux";

const Counter = props => {
    const counter = useSelector(state => state.counter)

    return (
        <>
            <p>{counter.counter}</p>
        </>
    );
}

export default Counter;
