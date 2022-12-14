import { useSelector } from "react-redux";
import { HGImages } from "../resource-manager/ResourceManager";

const HangmanImage = () => {
    const src = useSelector();

    return (
        <>
            <img src={''} alt='' />
        </>
    );
}

export default HangmanImage;
