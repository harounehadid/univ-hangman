import './letterButton.css';
import { useState } from 'react';
import { Images } from "../resource-manager/ResourceManager";

const LetterButton = props => {
    let { letter, word } = props;

    let [correctIndicator, setCorrectIndicator] = useState(false);
    let [wrongIndicator, setWrongIndicator] = useState(false);

    const handleClick = () => word.includes(letter) ? setCorrectIndicator(true) : setWrongIndicator(true);

    const resetIndicators = () => {
        setCorrectIndicator(false);
        setWrongIndicator(false);
    }

    return (
        <a onClick={handleClick} className='ltrBtn'>
            <p>{letter}</p>
            {correctIndicator && <img className='correct' src={Images.correctChoice} alt='' />}
            {wrongIndicator && <img className='wrong' src={Images.wrongChoice} alt='' />}
        </a>
    );
}

export default LetterButton;
