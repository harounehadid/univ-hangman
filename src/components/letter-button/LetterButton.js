import styles from './letterButton.module.css';
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
        <a onClick={handleClick} className={styles['main']}>
            <p>{letter}</p>
            {correctIndicator && <img className={styles['correct']} src={Images.correctChoice} alt='' />}
            {wrongIndicator && <img className={styles['wrong']} src={Images.wrongChoice} alt='' />}
        </a>
    );
}

export default LetterButton;
