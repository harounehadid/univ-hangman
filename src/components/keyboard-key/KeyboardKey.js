import styles from './keyboardKey.module.css';
import { useState } from 'react';
import { Images } from "../resource-manager/ResourceManager";

const KeyboardKey = props => {
    let { letter, word, lettersToDisplay, setLettersToDisplay } = props;

    let [correctIndicator, setCorrectIndicator] = useState(false);
    let [wrongIndicator, setWrongIndicator] = useState(false);

    const handleClick = () => {
        if (word.includes(letter)) {
            if (!correctIndicator) {
                if (lettersToDisplay.includes(letter) === false) setLettersToDisplay([...lettersToDisplay, letter]);
                setCorrectIndicator(true);
            }
        }
        else {
            if (!wrongIndicator) setWrongIndicator(true);
        }
    }

    const resetIndicators = () => {
        setCorrectIndicator(false);
        setWrongIndicator(false);
    }

    return (
        <a onClick={handleClick} className={`${styles.main}`}>
            <p>{letter}</p>
            {correctIndicator && <img className={`${styles.correct}`} src={Images.correctChoice} alt='' />}
            {wrongIndicator && <img className={`${styles.wrong}`} src={Images.wrongChoice} alt='' />}
        </a>
    );
}

export default KeyboardKey;
