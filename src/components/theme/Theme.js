import { useSelector } from "react-redux";

const Theme = () => {
    let theme = useSelector(state => state.theme);

    return (
        <>
            <p>{theme}</p>
        </>
    );
}

export default Theme;
